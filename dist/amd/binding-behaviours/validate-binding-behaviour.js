define(["exports", "aurelia-framework", "../strategy/validation-strategy"], function (exports, _aureliaFramework, _strategyValidationStrategy) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    var ValidateBindingBehavior = (function () {
        function ValidateBindingBehavior(validationStrategy) {
            _classCallCheck(this, _ValidateBindingBehavior);

            this.validationStrategy = validationStrategy;
        }

        _createClass(ValidateBindingBehavior, [{
            key: "bind",
            value: function bind(binding, overrideContext) {
                var _this = this;

                var element = binding.target;
                var propertyName = this.getTargetProperty(binding);

                var _validationStateHandler = function _validationStateHandler(args) {
                    if (args.isValid) {
                        _this.validationStrategy.actionValidProperty(element, propertyName);
                    } else {
                        _this.validationStrategy.actionInvalidProperty(element, propertyName, args.error);
                    }
                };

                var _validationPredicate = function _validationPredicate(x) {
                    console.log("pred", x.property, propertyName);return x.property == propertyName;
                };

                var _setupValidation = function _setupValidation() {
                    return _this.validationGroup.propertyStateChangedEvent.subscribe(_validationStateHandler, _validationPredicate);
                };

                if (this._isWithinChildBinding(overrideContext)) {
                    overrideContext = overrideContext.parentOverrideContext;
                }

                this.validationGroup = overrideContext.bindingContext.validationGroup;
                this.validationOptions = overrideContext.bindingContext.validationOptions || {};

                if (this.validationGroup) {
                    binding.activeSubscription = _setupValidation();
                    this.validationGroup.getPropertyError(propertyName).then(function (error) {
                        if (error) {
                            _this.validationStrategy.actionInvalidProperty(element, propertyName, error);
                        }
                    });
                }
            }
        }, {
            key: "unbind",
            value: function unbind(binding, overrideContext) {
                if (binding.activeSubscription) {
                    binding.activeSubscription();
                    binding.activeSubscription = null;
                }
            }
        }, {
            key: "getTargetProperty",
            value: function getTargetProperty(binding) {
                var targetProperty;
                if (binding.sourceExpression && binding.sourceExpression.expression) {

                    if (binding.sourceExpression.expression.name) {
                        targetProperty = binding.sourceExpression.expression.name;
                    }
                }

                return targetProperty;
            }
        }, {
            key: "_isWithinChildBinding",
            value: function _isWithinChildBinding(overrideContext) {
                return overrideContext["$index"] || overrideContext["$even"] || overrideContext["$odd"];
            }
        }]);

        var _ValidateBindingBehavior = ValidateBindingBehavior;
        ValidateBindingBehavior = (0, _aureliaFramework.noView)()(ValidateBindingBehavior) || ValidateBindingBehavior;
        ValidateBindingBehavior = (0, _aureliaFramework.inject)(_strategyValidationStrategy.ValidationStrategy)(ValidateBindingBehavior) || ValidateBindingBehavior;
        return ValidateBindingBehavior;
    })();

    exports.ValidateBindingBehavior = ValidateBindingBehavior;
});