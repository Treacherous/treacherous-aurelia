import {inject, customAttribute} from "aurelia-framework";
import {ValidationStrategy} from "../strategy/validation-strategy";

@customAttribute('validate-property')
@inject(Element, ValidationStrategy)
export class ValidateProperty {

    constructor(element, validationStrategy) {
        this.element = element;
        this.validationStrategy = validationStrategy;
    }

    _isWithinChildBinding(overrideContext) {
        return overrideContext["$index"] || overrideContext["$even"] || overrideContext["$odd"];
    }

    bind(binding, overrideContext) {
        if (this._isWithinChildBinding(overrideContext)) {
            overrideContext = overrideContext.parentOverrideContext;
        }

        this.validationGroup = overrideContext.validationGroup;
        this.validationOptions = overrideContext.validationOptions || {};

        if(this.validationGroup) {
            this.setupValidation();
            this.validationGroup.getPropertyError(this.value)
                .then((error) => {
                    if(error) {
                        this.validationStrategy.actionInvalidProperty(this.element, this.value, error);
                    }
                });
        }
    }

    detached() {
        if(this._activeSubscription) {
            this._activeSubscription();
        }
    }

    _validationStateHandler = (args) => {
        if(args.isValid)
        { this.validationStrategy.actionValidProperty(this.element, this.value); }
        else
        { this.validationStrategy.actionInvalidProperty(this.element, this.value, args.error); }
    };

    _validationPredicate = (x) => { return x.property == this.value; };

    setupValidation = () => {
        this._activeSubscription = this.validationGroup.propertyStateChangedEvent.subscribe(this._validationStateHandler, this._validationPredicate);
    }
}
