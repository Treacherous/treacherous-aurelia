System.register(["./strategy/validation-strategy", "./strategy/inline-strategy"], function (_export) {
    "use strict";

    var ValidationStrategy, InlineStrategy;

    _export("configure", configure);

    function configure(aurelia) {
        aurelia.globalResources("./attributes/validation-group-attribute");
        aurelia.globalResources("./attributes/validation-options-attribute");
        aurelia.globalResources("./attributes/validate-property-attribute");
        aurelia.globalResources("./elements/validation-summary-element");

        aurelia.container.registerInstance(ValidationStrategy, new InlineStrategy());
    }

    return {
        setters: [function (_strategyValidationStrategy) {
            ValidationStrategy = _strategyValidationStrategy.ValidationStrategy;

            _export("ValidationStrategy", _strategyValidationStrategy.ValidationStrategy);
        }, function (_strategyInlineStrategy) {
            InlineStrategy = _strategyInlineStrategy.InlineStrategy;
        }],
        execute: function () {}
    };
});