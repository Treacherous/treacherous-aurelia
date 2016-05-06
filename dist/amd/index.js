define(["exports", "./strategy/validation-strategy", "./strategy/inline-strategy"], function (exports, _strategyValidationStrategy, _strategyInlineStrategy) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.configure = configure;
    Object.defineProperty(exports, "ValidationStrategy", {
        enumerable: true,
        get: function get() {
            return _strategyValidationStrategy.ValidationStrategy;
        }
    });

    function configure(aurelia) {
        aurelia.globalResources("./attributes/validation-group-attribute");
        aurelia.globalResources("./attributes/validation-options-attribute");
        aurelia.globalResources("./attributes/validate-property-attribute");
        aurelia.globalResources("./elements/validation-summary-element");

        aurelia.container.registerInstance(_strategyValidationStrategy.ValidationStrategy, new _strategyInlineStrategy.InlineStrategy());
    }
});