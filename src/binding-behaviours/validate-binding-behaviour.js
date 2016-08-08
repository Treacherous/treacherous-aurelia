import {inject, noView} from "aurelia-framework";
import {ValidationStrategy} from "../strategy/validation-strategy";

@inject(ValidationStrategy)
@noView()
export class ValidateBindingBehavior
{
    constructor(validationStrategy) {
        this.validationStrategy = validationStrategy;
    }

    bind(binding, overrideContext) {
        this.element = binding.target;
        this.propertyName = this.getTargetProperty(binding);
        this.bindingContext = overrideContext;
    }

    attached() {

        let _validationStateHandler = (args) => {
            if(args.isValid)
            { this.validationStrategy.actionValidProperty(this.element, this.propertyName); }
            else
            { this.validationStrategy.actionInvalidProperty(this.element, this.propertyName, args.error); }
        };

        let _validationPredicate = (x) => { return x.property == this.propertyName; };

        let _setupValidation = () => {
            return this.validationGroup.propertyStateChangedEvent.subscribe(_validationStateHandler, _validationPredicate);
        };

        if (this._isWithinChildBinding(this.bindingContext)) {
            this.bindingContext = this.bindingContext.parentOverrideContext;
        }

        this.validationGroup = this.bindingContext.validationGroup;
        this.validationOptions = this.bindingContext.validationOptions || {};

        if(this.validationGroup) {
            this.bindingContext.activeSubscription = _setupValidation();
            this.validationGroup.getPropertyError(this.propertyName)
                .then((error) => {
                    if(error) {
                        this.validationStrategy.actionInvalidProperty(this.element, this.propertyName, error);
                    }
                });
        }
    }

    unbind(binding, overrideContext) {
        if(overrideContext.activeSubscription) {
            overrideContext.activeSubscription();
            overrideContext.activeSubscription = null;
        }
    }

    getTargetProperty(binding) {
        var targetProperty;
        if (binding.sourceExpression && binding.sourceExpression.expression) {

            if(binding.sourceExpression.expression.name)
            { targetProperty = binding.sourceExpression.expression.name; }
        }

        return targetProperty;
    }

    _isWithinChildBinding(overrideContext) {
        return overrideContext["$index"] || overrideContext["$even"] || overrideContext["$odd"];
    }
}