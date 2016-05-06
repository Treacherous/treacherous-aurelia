define(["exports", "aurelia-framework", "../strategy/validation-strategy"], function (exports, _aureliaFramework, _strategyValidationStrategy) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    var ValidateProperty = (function () {
        function ValidateProperty(element, validationStrategy) {
            var _this = this;

            _classCallCheck(this, _ValidateProperty);

            this._validationStateHandler = function (args) {
                if (args.isValid) {
                    _this.validationStrategy.actionValidProperty(_this.element, _this.value);
                } else {
                    _this.validationStrategy.actionInvalidProperty(_this.element, _this.value, args.error);
                }
            };

            this._validationPredicate = function (x) {
                return x.property == _this.value;
            };

            this.setupValidation = function () {
                _this._activeSubscription = _this.validationGroup.propertyStateChangedEvent.subscribe(_this._validationStateHandler, _this._validationPredicate);
            };

            this.element = element;
            this.validationStrategy = validationStrategy;
        }

        _createClass(ValidateProperty, [{
            key: "_isWithinChildBinding",
            value: function _isWithinChildBinding(overrideContext) {
                return overrideContext["$index"] || overrideContext["$even"] || overrideContext["$odd"];
            }
        }, {
            key: "bind",
            value: function bind(binding, overrideContext) {
                var _this2 = this;

                if (this._isWithinChildBinding(overrideContext)) {
                    overrideContext = overrideContext.parentOverrideContext;
                }

                this.validationGroup = overrideContext.validationGroup;
                this.validationOptions = overrideContext.validationOptions || {};

                if (this.validationGroup) {
                    this.setupValidation();
                    this.validationGroup.getPropertyError(this.value).then(function (error) {
                        if (error) {
                            _this2.validationStrategy.actionInvalidProperty(_this2.element, _this2.value, error);
                        }
                    });
                }
            }
        }, {
            key: "detached",
            value: function detached() {
                if (this._activeSubscription) {
                    this._activeSubscription();
                }
            }
        }]);

        var _ValidateProperty = ValidateProperty;
        ValidateProperty = (0, _aureliaFramework.inject)(Element, _strategyValidationStrategy.ValidationStrategy)(ValidateProperty) || ValidateProperty;
        ValidateProperty = (0, _aureliaFramework.customAttribute)('validate-property')(ValidateProperty) || ValidateProperty;
        return ValidateProperty;
    })();

    exports.ValidateProperty = ValidateProperty;
});