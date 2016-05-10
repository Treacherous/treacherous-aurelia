System.register(["./strategy/validation-strategy", "./strategy/inline-strategy", "./binding-behaviours/validate-binding-behaviour"], function (_export) {
    "use strict";

    var ValidationStrategy, InlineStrategy;

    _export("configure", configure);

    function configure(aurelia) {
        aurelia.globalResources("./binding-behaviours/validate-binding-behaviour");
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
        }, function (_bindingBehavioursValidateBindingBehaviour) {
            _export("ValidateBindingBehavior", _bindingBehavioursValidateBindingBehaviour.ValidateBindingBehavior);
        }],
        execute: function () {}
    };
});