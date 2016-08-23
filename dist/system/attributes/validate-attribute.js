"use strict";

System.register(["treacherous-view", "treacherous", "aurelia-framework"], function (_export, _context) {
    "use strict";

    var IViewStrategy, ViewTriggerRegistry, ViewStrategyRegistry, ElementHelper, ValidationState, IValidationGroup, inject, bindable, customAttribute, _dec, _dec2, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, ValidateAttribute;

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

    return {
        setters: [function (_treacherousView) {
            IViewStrategy = _treacherousView.IViewStrategy;
            ViewTriggerRegistry = _treacherousView.ViewTriggerRegistry;
            ViewStrategyRegistry = _treacherousView.ViewStrategyRegistry;
            ElementHelper = _treacherousView.ElementHelper;
            ValidationState = _treacherousView.ValidationState;
        }, function (_treacherous) {
            IValidationGroup = _treacherous.IValidationGroup;
        }, function (_aureliaFramework) {
            inject = _aureliaFramework.inject;
            bindable = _aureliaFramework.bindable;
            customAttribute = _aureliaFramework.customAttribute;
        }],
        execute: function () {
            _export("ValidateAttribute", ValidateAttribute = (_dec = customAttribute('validate'), _dec2 = inject(Element, ViewTriggerRegistry, ViewStrategyRegistry), _dec(_class = _dec2(_class = (_class2 = function () {
                function ValidateAttribute(element, viewTriggerRegistry, viewStrategyRegistry) {
                    var _this = this;

                    

                    _initDefineProp(this, "validationGroup", _descriptor, this);

                    _initDefineProp(this, "viewStrategy", _descriptor2, this);

                    _initDefineProp(this, "property", _descriptor3, this);

                    this.confirmDependents = function () {
                        _this.validationGroup = _this.validationGroup || _this.bindingContext.validationGroup;
                        _this.viewStrategy = _this.viewStrategy || _this.bindingContext.viewStrategy;

                        if (!_this.validationGroup) {
                            throw new Error("Cannot find validation group within scope for element", _this.element);
                        }
                        if (!_this.viewStrategy) {
                            throw new Error("Cannot find validation strategy within scope for element", _this.element);
                        }

                        _this.actualStrategy = _this.strategyRegistry.getStrategyNamed(_this.viewStrategy);
                        if (!_this.actualStrategy) {
                            throw new Error("Cannot find validation strategy named: " + _this.viewStrategy, _this.element);
                        }
                    };

                    this.startTriggers = function () {
                        var triggerNames = ElementHelper.getTriggersFrom(_this.element);
                        if (triggerNames.length == 0) {
                            triggerNames.push("change");
                        }

                        triggerNames.forEach(function (triggerName) {
                            var triggerArgs = ElementHelper.getTriggerArgsFrom(_this.element, triggerName);
                            var trigger = _this.triggerRegistry.getTriggerNamed(triggerName);
                            var activeTrigger = trigger.applyTrigger(_this.element, _this.triggerValidation, triggerArgs);
                            _this.activeTriggers.push(activeTrigger);
                        });
                    };

                    this.stopTriggers = function () {
                        _this.activeTriggers.forEach(function (x) {
                            return x();
                        });
                    };

                    this.triggerValidation = function () {
                        _this.validationGroup.getPropertyError(_this.property, true).then(function (error) {
                            if (!error) {
                                _this.actualStrategy.elementBecomeValid(_this.element, _this.property, _this.previousState);
                                _this.previousState = ValidationState.valid;
                            } else {
                                _this.actualStrategy.elementBecomeInvalid(_this.element, error, _this.property, _this.previousState);
                                _this.previousState = ValidationState.invalid;
                            }
                        });
                    };

                    this.activeTriggers = [];
                    this.previousState = ValidationState.unknown;
                    this.element = element;
                    this.triggerRegistry = viewTriggerRegistry;
                    this.strategyRegistry = viewStrategyRegistry;
                }

                ValidateAttribute.prototype.bind = function bind(binding, overrideContext) {
                    this.bindingContext = overrideContext;
                };

                ValidateAttribute.prototype.attached = function attached() {
                    if (this.isWithinChildBinding(this.bindingContext)) {
                        this.bindingContext = this.bindingContext.parentOverrideContext;
                    }

                    this.confirmDependents();
                    this.startTriggers();
                };

                ValidateAttribute.prototype.detached = function detached() {
                    this.stopTriggers();
                };

                ValidateAttribute.prototype.isWithinChildBinding = function isWithinChildBinding(overrideContext) {
                    return overrideContext["$index"] || overrideContext["$even"] || overrideContext["$odd"];
                };

                return ValidateAttribute;
            }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "validationGroup", [bindable], {
                enumerable: true,
                initializer: null
            }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "viewStrategy", [bindable], {
                enumerable: true,
                initializer: null
            }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "property", [bindable], {
                enumerable: true,
                initializer: null
            })), _class2)) || _class) || _class));

            _export("ValidateAttribute", ValidateAttribute);
        }
    };
});