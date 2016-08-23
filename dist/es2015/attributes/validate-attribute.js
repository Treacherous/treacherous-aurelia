var _dec, _dec2, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3;

function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
        enumerable: descriptor.enumerable,
        configurable: descriptor.configurable,
        writable: descriptor.writable,
        value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
}

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
        desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
        return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
        Object['define' + 'Property'](target, property, desc);
        desc = null;
    }

    return desc;
}

function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

import { IViewStrategy, ViewTriggerRegistry, ViewStrategyRegistry, ElementHelper, ValidationState } from "treacherous-view";
import { IValidationGroup } from "treacherous";
import { inject, bindable, customAttribute } from "aurelia-framework";

export let ValidateAttribute = (_dec = customAttribute('validate'), _dec2 = inject(Element, ViewTriggerRegistry, ViewStrategyRegistry), _dec(_class = _dec2(_class = (_class2 = class ValidateAttribute {

    constructor(element, viewTriggerRegistry, viewStrategyRegistry) {
        _initDefineProp(this, "validationGroup", _descriptor, this);

        _initDefineProp(this, "viewStrategy", _descriptor2, this);

        _initDefineProp(this, "property", _descriptor3, this);

        this.confirmDependents = () => {
            this.validationGroup = this.validationGroup || this.bindingContext.validationGroup;
            this.viewStrategy = this.viewStrategy || this.bindingContext.viewStrategy;

            if (!this.validationGroup) {
                throw new Error("Cannot find validation group within scope for element", this.element);
            }
            if (!this.viewStrategy) {
                throw new Error("Cannot find validation strategy within scope for element", this.element);
            }

            this.actualStrategy = this.strategyRegistry.getStrategyNamed(this.viewStrategy);
            if (!this.actualStrategy) {
                throw new Error("Cannot find validation strategy named: " + this.viewStrategy, this.element);
            }
        };

        this.startTriggers = () => {
            var triggerNames = ElementHelper.getTriggersFrom(this.element);
            if (triggerNames.length == 0) {
                triggerNames.push("change");
            }

            triggerNames.forEach(triggerName => {
                var triggerArgs = ElementHelper.getTriggerArgsFrom(this.element, triggerName);
                var trigger = this.triggerRegistry.getTriggerNamed(triggerName);
                var activeTrigger = trigger.applyTrigger(this.element, this.triggerValidation, triggerArgs);
                this.activeTriggers.push(activeTrigger);
            });
        };

        this.stopTriggers = () => {
            this.activeTriggers.forEach(x => x());
        };

        this.triggerValidation = () => {
            this.validationGroup.getPropertyError(this.property, true).then(error => {
                if (!error) {
                    this.actualStrategy.elementBecomeValid(this.element, this.property, this.previousState);
                    this.previousState = ValidationState.valid;
                } else {
                    this.actualStrategy.elementBecomeInvalid(this.element, error, this.property, this.previousState);
                    this.previousState = ValidationState.invalid;
                }
            });
        };

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

    isWithinChildBinding(overrideContext) {
        return overrideContext["$index"] || overrideContext["$even"] || overrideContext["$odd"];
    }

}, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "validationGroup", [bindable], {
    enumerable: true,
    initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "viewStrategy", [bindable], {
    enumerable: true,
    initializer: null
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "property", [bindable], {
    enumerable: true,
    initializer: null
})), _class2)) || _class) || _class);