System.register(["aurelia-framework"], function (_export) {
    "use strict";

    var inject, customElement, useView, bindable, GenerateElement;

    var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === "function") { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError("The decorator for method " + descriptor.key + " is of the invalid type " + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

    return {
        setters: [function (_aureliaFramework) {
            inject = _aureliaFramework.inject;
            customElement = _aureliaFramework.customElement;
            useView = _aureliaFramework.useView;
            bindable = _aureliaFramework.bindable;
        }],
        execute: function () {
            GenerateElement = (function () {
                var _instanceInitializers = {};
                var _instanceInitializers = {};

                _createDecoratedClass(GenerateElement, [{
                    key: "validationGroup",
                    decorators: [bindable],
                    initializer: null,
                    enumerable: true
                }], null, _instanceInitializers);

                function GenerateElement(element) {
                    _classCallCheck(this, _GenerateElement);

                    _defineDecoratedPropertyDescriptor(this, "validationGroup", _instanceInitializers);

                    this.element = element;
                    this.propertyErrors = [];
                }

                _createDecoratedClass(GenerateElement, [{
                    key: "bind",
                    value: function bind(binding, scope) {
                        var _this = this;

                        var validationGroup = this.validationGroup || scope.validationGroup;

                        if (!validationGroup) {
                            throw new Error("No validation group in scope or explicitly provided");
                        }

                        var refreshErrorSummary = function refreshErrorSummary() {
                            validationGroup.getModelErrors().then(function (errors) {
                                _this.propertyErrors = [];
                                for (var propertyName in errors) {
                                    _this.propertyErrors.push({ property: propertyName, error: errors[propertyName] });
                                }
                            });
                        };

                        this._activeSubscription = validationGroup.propertyStateChangedEvent.subscribe(refreshErrorSummary);
                        refreshErrorSummary();
                    }
                }, {
                    key: "detached",
                    value: function detached() {
                        if (this._activeSubscription) {
                            this._activeSubscription();
                        }
                    }
                }], null, _instanceInitializers);

                var _GenerateElement = GenerateElement;
                GenerateElement = inject(Element)(GenerateElement) || GenerateElement;
                GenerateElement = useView("./validation-summary.html")(GenerateElement) || GenerateElement;
                GenerateElement = customElement("validation-summary")(GenerateElement) || GenerateElement;
                return GenerateElement;
            })();

            _export("GenerateElement", GenerateElement);
        }
    };
});