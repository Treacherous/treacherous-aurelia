"use strict";

System.register(["aurelia-framework", "../strategy/validation-strategy"], function (_export, _context) {
    "use strict";

    var inject, noView, ValidationStrategy, _dec, _dec2, _class, ValidateBindingBehavior;

    

    return {
        setters: [function (_aureliaFramework) {
            inject = _aureliaFramework.inject;
            noView = _aureliaFramework.noView;
        }, function (_strategyValidationStrategy) {
            ValidationStrategy = _strategyValidationStrategy.ValidationStrategy;
        }],
        execute: function () {
            _export("ValidateBindingBehavior", ValidateBindingBehavior = (_dec = inject(ValidationStrategy), _dec2 = noView(), _dec(_class = _dec2(_class = function () {
                function ValidateBindingBehavior(validationStrategy) {
                    

                    this.validationStrategy = validationStrategy;
                }

                ValidateBindingBehavior.prototype.bind = function bind(binding, overrideContext) {
                    this.element = binding.target;
                    this.propertyName = this.getTargetProperty(binding);
                    this.bindingContext = overrideContext;
                };

                ValidateBindingBehavior.prototype.attached = function attached() {
                    var _this = this;

                    var _validationStateHandler = function _validationStateHandler(args) {
                        if (args.isValid) {
                            _this.validationStrategy.actionValidProperty(_this.element, _this.propertyName);
                        } else {
                            _this.validationStrategy.actionInvalidProperty(_this.element, _this.propertyName, args.error);
                        }
                    };

                    var _validationPredicate = function _validationPredicate(x) {
                        return x.property == _this.propertyName;
                    };

                    var _setupValidation = function _setupValidation() {
                        return _this.validationGroup.propertyStateChangedEvent.subscribe(_validationStateHandler, _validationPredicate);
                    };

                    if (this._isWithinChildBinding(this.bindingContext)) {
                        this.bindingContext = this.bindingContext.parentOverrideContext;
                    }

                    this.validationGroup = this.bindingContext.validationGroup;
                    this.validationOptions = this.bindingContext.validationOptions || {};

                    if (this.validationGroup) {
                        this.bindingContext.activeSubscription = _setupValidation();
                        this.validationGroup.getPropertyError(this.propertyName).then(function (error) {
                            if (error) {
                                _this.validationStrategy.actionInvalidProperty(_this.element, _this.propertyName, error);
                            }
                        });
                    }
                };

                ValidateBindingBehavior.prototype.unbind = function unbind(binding, overrideContext) {
                    if (overrideContext.activeSubscription) {
                        overrideContext.activeSubscription();
                        overrideContext.activeSubscription = null;
                    }
                };

                ValidateBindingBehavior.prototype.getTargetProperty = function getTargetProperty(binding) {
                    var targetProperty;
                    if (binding.sourceExpression && binding.sourceExpression.expression) {

                        if (binding.sourceExpression.expression.name) {
                            targetProperty = binding.sourceExpression.expression.name;
                        }
                    }

                    return targetProperty;
                };

                ValidateBindingBehavior.prototype._isWithinChildBinding = function _isWithinChildBinding(overrideContext) {
                    return overrideContext["$index"] || overrideContext["$even"] || overrideContext["$odd"];
                };

                return ValidateBindingBehavior;
            }()) || _class) || _class));

            _export("ValidateBindingBehavior", ValidateBindingBehavior);
        }
    };
});