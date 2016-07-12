"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _validationStrategy = require("./strategy/validation-strategy");

Object.keys(_validationStrategy).forEach(function (key) {
    if (key === "default") return;
    Object.defineProperty(exports, key, {
        enumerable: true,
        get: function get() {
            return _validationStrategy[key];
        }
    });
});

var _inlineStrategy = require("./strategy/inline-strategy");

Object.keys(_inlineStrategy).forEach(function (key) {
    if (key === "default") return;
    Object.defineProperty(exports, key, {
        enumerable: true,
        get: function get() {
            return _inlineStrategy[key];
        }
    });
});

var _validateBindingBehaviour = require("./binding-behaviours/validate-binding-behaviour");

Object.keys(_validateBindingBehaviour).forEach(function (key) {
    if (key === "default") return;
    Object.defineProperty(exports, key, {
        enumerable: true,
        get: function get() {
            return _validateBindingBehaviour[key];
        }
    });
});

var _validatePropertyAttribute = require("./attributes/validate-property-attribute");

Object.keys(_validatePropertyAttribute).forEach(function (key) {
    if (key === "default") return;
    Object.defineProperty(exports, key, {
        enumerable: true,
        get: function get() {
            return _validatePropertyAttribute[key];
        }
    });
});

var _validationGroupAttribute = require("./attributes/validation-group-attribute");

Object.keys(_validationGroupAttribute).forEach(function (key) {
    if (key === "default") return;
    Object.defineProperty(exports, key, {
        enumerable: true,
        get: function get() {
            return _validationGroupAttribute[key];
        }
    });
});

var _validationOptionsAttribute = require("./attributes/validation-options-attribute");

Object.keys(_validationOptionsAttribute).forEach(function (key) {
    if (key === "default") return;
    Object.defineProperty(exports, key, {
        enumerable: true,
        get: function get() {
            return _validationOptionsAttribute[key];
        }
    });
});
Object.keys(_validateBindingBehaviour).forEach(function (key) {
    if (key === "default") return;
    Object.defineProperty(exports, key, {
        enumerable: true,
        get: function get() {
            return _validateBindingBehaviour[key];
        }
    });
});

var _validationSummaryElement = require("./elements/validation-summary-element");

Object.keys(_validationSummaryElement).forEach(function (key) {
    if (key === "default") return;
    Object.defineProperty(exports, key, {
        enumerable: true,
        get: function get() {
            return _validationSummaryElement[key];
        }
    });
});
Object.keys(_validationSummaryElement).forEach(function (key) {
    if (key === "default") return;
    Object.defineProperty(exports, key, {
        enumerable: true,
        get: function get() {
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