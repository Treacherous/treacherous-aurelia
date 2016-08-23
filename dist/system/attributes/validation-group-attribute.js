'use strict';

System.register(['aurelia-framework'], function (_export, _context) {
    "use strict";

    var inject, customAttribute, _dec, _class, ValidationGroupAttribute;

    

    return {
        setters: [function (_aureliaFramework) {
            inject = _aureliaFramework.inject;
            customAttribute = _aureliaFramework.customAttribute;
        }],
        execute: function () {
            _export('ValidationGroupAttribute', ValidationGroupAttribute = (_dec = customAttribute('validation-group'), _dec(_class = function () {
                function ValidationGroupAttribute() {
                    
                }

                ValidationGroupAttribute.prototype.bind = function bind(binding, overrideContext) {
                    overrideContext.validationGroup = this.value;
                };

                return ValidationGroupAttribute;
            }()) || _class));

            _export('ValidationGroupAttribute', ValidationGroupAttribute);
        }
    };
});