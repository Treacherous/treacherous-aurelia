"use strict";

System.register(["./strategy/validation-strategy", "./binding-behaviours/validate-binding-behaviour"], function (_export, _context) {
    "use strict";

    var ValidationStrategy;
    return {
        setters: [function (_strategyValidationStrategy) {
            ValidationStrategy = _strategyValidationStrategy.ValidationStrategy;
            var _exportObj = {};

            for (var _key in _strategyValidationStrategy) {
                if (_key !== "default") _exportObj[_key] = _strategyValidationStrategy[_key];
            }

            _export(_exportObj);
        }, function (_bindingBehavioursValidateBindingBehaviour) {
            var _exportObj2 = {};

            for (var _key2 in _bindingBehavioursValidateBindingBehaviour) {
                if (_key2 !== "default") _exportObj2[_key2] = _bindingBehavioursValidateBindingBehaviour[_key2];
            }

            _export(_exportObj2);
        }],
        execute: function () {
            function configure(aurelia) {
                aurelia.globalResources("./binding-behaviours/validate-binding-behaviour");
                aurelia.globalResources("./attributes/validation-group-attribute");
                aurelia.globalResources("./attributes/validation-options-attribute");
                aurelia.globalResources("./attributes/validate-property-attribute");
                aurelia.globalResources("./elements/validation-summary-element");

                aurelia.container.registerInstance(ValidationStrategy, new InlineStrategy());
            }

            _export("configure", configure);
        }
    };
});