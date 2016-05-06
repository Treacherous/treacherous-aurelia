System.register(["./validation-strategy", "../helper/class-helper"], function (_export) {
    "use strict";

    var ValidationStrategy, ClassHelper, InlineStrategy;

    var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

    return {
        setters: [function (_validationStrategy) {
            ValidationStrategy = _validationStrategy.ValidationStrategy;
        }, function (_helperClassHelper) {
            ClassHelper = _helperClassHelper.ClassHelper;
        }],
        execute: function () {
            InlineStrategy = (function (_ValidationStrategy) {
                _inherits(InlineStrategy, _ValidationStrategy);

                function InlineStrategy() {
                    var _this = this;

                    _classCallCheck(this, InlineStrategy);

                    _get(Object.getPrototypeOf(InlineStrategy.prototype), "constructor", this).apply(this, arguments);

                    this._currentCount = 1;

                    this._getElementValidatorId = function (element) {
                        if (!element.getAttribute("id")) {
                            element.setAttribute("id", "unique-" + _this._currentCount++);
                        }

                        return element.getAttribute('id') + "-error-container";
                    };

                    this._createErrorElement = function (message, element) {
                        var errorContainerName = _this._getElementValidatorId(element);
                        var errorContainer = document.createElement("div");
                        errorContainer.id = errorContainerName;
                        errorContainer.className = "validation-error-container";
                        errorContainer.textContent = message;
                        element.parentElement.appendChild(errorContainer);
                    };

                    this._removeErrorElement = function (element) {
                        var errorContainerName = this._getElementValidatorId(element);
                        var errorElement = document.getElementById(errorContainerName);

                        if (errorElement) {
                            errorElement.remove();
                        }
                    };

                    this._addElementError = function (message, element) {
                        var errorContainerName = this._getElementValidatorId(element);
                        var errorContainer = document.getElementById(errorContainerName);
                        if (!errorContainer) {
                            this._createErrorElement(message, element);
                        } else {
                            this._removeErrorElement(element);
                            this._createErrorElement(message, element);
                        }
                    };

                    this.actionValidProperty = function (element, property) {
                        ClassHelper.removeClass(element, "invalid");
                        ClassHelper.addClass(element, "valid");
                        _this._removeErrorElement(element);
                    };

                    this.actionInvalidProperty = function (element, property, error) {
                        ClassHelper.removeClass(element, "valid");
                        ClassHelper.addClass(element, "invalid");
                        _this._addElementError(error, element);
                    };
                }

                return InlineStrategy;
            })(ValidationStrategy);

            _export("InlineStrategy", InlineStrategy);
        }
    };
});