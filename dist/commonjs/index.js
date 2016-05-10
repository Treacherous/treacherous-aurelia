"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.configure = configure;

var _strategyValidationStrategy = require("./strategy/validation-strategy");

var _strategyInlineStrategy = require("./strategy/inline-strategy");

Object.defineProperty(exports, "ValidationStrategy", {
    enumerable: true,
    get: function get() {
        return _strategyValidationStrategy.ValidationStrategy;
    }
});

var _bindingBehavioursValidateBindingBehaviour = require("./binding-behaviours/validate-binding-behaviour");

Object.defineProperty(exports, "ValidateBindingBehavior", {
    enumerable: true,
    get: function get() {
        return _bindingBehavioursValidateBindingBehaviour.ValidateBindingBehavior;
    }
});

function configure(aurelia) {
    aurelia.globalResources("./binding-behaviours/validate-binding-behaviour");
    aurelia.globalResources("./attributes/validation-group-attribute");
    aurelia.globalResources("./attributes/validation-options-attribute");
    aurelia.globalResources("./attributes/validate-property-attribute");
    aurelia.globalResources("./elements/validation-summary-element");

    aurelia.container.registerInstance(_strategyValidationStrategy.ValidationStrategy, new _strategyInlineStrategy.InlineStrategy());
}