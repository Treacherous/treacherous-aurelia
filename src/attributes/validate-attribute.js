import {IViewStrategy, ViewTriggerRegistry, ViewStrategyRegistry, ElementHelper, ValidationState} from "treacherous-view";
import {IValidationGroup} from "treacherous";
import {inject, bindable, customAttribute} from "aurelia-framework";

@customAttribute('validate')
@inject(Element, ViewTriggerRegistry, ViewStrategyRegistry)
export class ValidateAttribute
{
    @bindable validationGroup;
    @bindable viewStrategy;
    @bindable property;

    constructor(element, viewTriggerRegistry, viewStrategyRegistry) {
        this.activeTriggers = [];
        this.previousState = ValidationState.unknown;
        this.element = element;
        this.triggerRegistry = viewTriggerRegistry;
        this.strategyRegistry = viewStrategyRegistry;
    }

    bind(binding, overrideContext) {
        this.bindingContext = overrideContext;
    }

    attached() {
        if (this.isWithinChildBinding(this.bindingContext)) {
            this.bindingContext = this.bindingContext.parentOverrideContext;
        }

        this.confirmDependents();
        this.startTriggers();
    }

    detached() {
        this.stopTriggers();
    }

    confirmDependents = () => {
        this.validationGroup = this.validationGroup || this.bindingContext.validationGroup;
        this.viewStrategy = this.viewStrategy || this.bindingContext.viewStrategy;

        if(!this.validationGroup) { throw new Error("Cannot find validation group within scope for element", this.element); }
        if(!this.viewStrategy) { throw new Error("Cannot find validation strategy within scope for element", this.element); }

        this.actualStrategy = this.strategyRegistry.getStrategyNamed(this.viewStrategy);
        if(!this.actualStrategy) { throw new Error("Cannot find validation strategy named: " + this.viewStrategy, this.element); }
    }

    isWithinChildBinding(overrideContext) {
        return overrideContext["$index"] || overrideContext["$even"] || overrideContext["$odd"];
    }

    startTriggers = () => {
        var triggerNames = ElementHelper.getTriggersFrom(this.element);
        if(triggerNames.length == 0) { triggerNames.push("change"); }

        triggerNames.forEach((triggerName) => {
            var triggerArgs = ElementHelper.getTriggerArgsFrom(this.element, triggerName);
            var trigger = this.triggerRegistry.getTriggerNamed(triggerName);
            var activeTrigger = trigger.applyTrigger(this.element, this.triggerValidation, triggerArgs);
            this.activeTriggers.push(activeTrigger);
        });
    }

    stopTriggers = () => {
        this.activeTriggers.forEach(x => x());
    }

    triggerValidation = () => {
        this.validationGroup.getPropertyError(this.property, true)
        .then((error) => {
            if(!error) {
                this.actualStrategy.elementBecomeValid(this.element, this.property, this.previousState);
                this.previousState = ValidationState.valid;
            }
            else {
                this.actualStrategy.elementBecomeInvalid(this.element, error, this.property, this.previousState);
                this.previousState = ValidationState.invalid;
            }
        });
    }
}