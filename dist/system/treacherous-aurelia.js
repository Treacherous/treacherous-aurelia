"use strict";

System.register(["./strategy/validation-strategy", "./strategy/inline-strategy", "./binding-behaviours/validate-binding-behaviour", "./attributes/validate-property-attribute", "./attributes/validation-group-attribute", "./attributes/validation-options-attribute", "./elements/validation-summary-element"], function (_export, _context) {
    "use strict";

    var ValidationStrategy, InlineStrategy;
    return {
        setters: [function (_strategyValidationStrategy) {
            ValidationStrategy = _strategyValidationStrategy.ValidationStrategy;
            var _exportObj = {};

            for (var _key in _strategyValidationStrategy) {
                if (_key !== "default") _exportObj[_key] = _strategyValidationStrategy[_key];
            }

            _export(_exportObj);
        }, function (_strategyInlineStrategy) {
            InlineStrategy = _strategyInlineStrategy.InlineStrategy;
            var _exportObj2 = {};

            for (var _key2 in _strategyInlineStrategy) {
                if (_key2 !== "default") _exportObj2[_key2] = _strategyInlineStrategy[_key2];
            }

            _export(_exportObj2);
        }, function (_bindingBehavioursValidateBindingBehaviour) {
            var _exportObj3 = {};

            for (var _key3 in _bindingBehavioursValidateBindingBehaviour) {
                if (_key3 !== "default") _exportObj3[_key3] = _bindingBehavioursValidateBindingBehaviour[_key3];
            }

            for (var _key4 in _bindingBehavioursValidateBindingBehaviour) {
                if (_key4 !== "default") _exportObj3[_key4] = _bindingBehavioursValidateBindingBehaviour[_key4];
            }

            _export(_exportObj3);
        }, function (_attributesValidatePropertyAttribute) {
            var _exportObj4 = {};

            for (var _key5 in _attributesValidatePropertyAttribute) {
                if (_key5 !== "default") _exportObj4[_key5] = _attributesValidatePropertyAttribute[_key5];
            }

            _export(_exportObj4);
        }, function (_attributesValidationGroupAttribute) {
            var _exportObj5 = {};

            for (var _key6 in _attributesValidationGroupAttribute) {
                if (_key6 !== "default") _exportObj5[_key6] = _attributesValidationGroupAttribute[_key6];
            }

            _export(_exportObj5);
        }, function (_attributesValidationOptionsAttribute) {
            var _exportObj6 = {};

            for (var _key7 in _attributesValidationOptionsAttribute) {
                if (_key7 !== "default") _exportObj6[_key7] = _attributesValidationOptionsAttribute[_key7];
            }

            _export(_exportObj6);
        }, function (_elementsValidationSummaryElement) {
            var _exportObj7 = {};

            for (var _key8 in _elementsValidationSummaryElement) {
                if (_key8 !== "default") _exportObj7[_key8] = _elementsValidationSummaryElement[_key8];
            }

            for (var _key9 in _elementsValidationSummaryElement) {
                if (_key9 !== "default") _exportObj7[_key9] = _elementsValidationSummaryElement[_key9];
            }

            _export(_exportObj7);
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