define(["exports", "./strategy/validation-strategy", "./strategy/inline-strategy", "./binding-behaviours/validate-binding-behaviour", "./attributes/validate-property-attribute", "./attributes/validation-group-attribute", "./attributes/validation-options-attribute", "./elements/validation-summary-element"], function (exports, _validationStrategy, _inlineStrategy, _validateBindingBehaviour, _validatePropertyAttribute, _validationGroupAttribute, _validationOptionsAttribute, _validationSummaryElement) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    Object.keys(_validationStrategy).forEach(function (key) {
        if (key === "default") return;
        Object.defineProperty(exports, key, {
            enumerable: true,
            get: function () {
                return _validationStrategy[key];
            }
        });
    });
    Object.keys(_inlineStrategy).forEach(function (key) {
        if (key === "default") return;
        Object.defineProperty(exports, key, {
            enumerable: true,
            get: function () {
                return _inlineStrategy[key];
            }
        });
    });
    Object.keys(_validateBindingBehaviour).forEach(function (key) {
        if (key === "default") return;
        Object.defineProperty(exports, key, {
            enumerable: true,
            get: function () {
                return _validateBindingBehaviour[key];
            }
        });
    });
    Object.keys(_validatePropertyAttribute).forEach(function (key) {
        if (key === "default") return;
        Object.defineProperty(exports, key, {
            enumerable: true,
            get: function () {
                return _validatePropertyAttribute[key];
            }
        });
    });
    Object.keys(_validationGroupAttribute).forEach(function (key) {
        if (key === "default") return;
        Object.defineProperty(exports, key, {
            enumerable: true,
            get: function () {
                return _validationGroupAttribute[key];
            }
        });
    });
    Object.keys(_validationOptionsAttribute).forEach(function (key) {
        if (key === "default") return;
        Object.defineProperty(exports, key, {
            enumerable: true,
            get: function () {
                return _validationOptionsAttribute[key];
            }
        });
    });
    Object.keys(_validateBindingBehaviour).forEach(function (key) {
        if (key === "default") return;
        Object.defineProperty(exports, key, {
            enumerable: true,
            get: function () {
                return _validateBindingBehaviour[key];
            }
        });
    });
    Object.keys(_validationSummaryElement).forEach(function (key) {
        if (key === "default") return;
        Object.defineProperty(exports, key, {
            enumerable: true,
            get: function () {
                return _validationSummaryElement[key];
            }
        });
    });
    Object.keys(_validationSummaryElement).forEach(function (key) {
        if (key === "default") return;
        Object.defineProperty(exports, key, {
            enumerable: true,
            get: function () {
                return _validationSummaryElement[key];
            }
        });
    });
    exports.configure = configure;
    function configure(aurelia) {
        aurelia.globalResources("./binding-behaviours/validate-binding-behaviour");
        aurelia.globalResources("./attributes/validation-group-attribute");
        aurelia.globalResources("./attributes/validation-options-attribute");
        aurelia.globalResources("./attributes/validate-property-attribute");
        aurelia.globalResources("./elements/validation-summary-element");

        aurelia.container.registerInstance(_validationStrategy.ValidationStrategy, new _inlineStrategy.InlineStrategy());
    }
});