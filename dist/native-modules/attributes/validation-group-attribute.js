var _dec, _class;



import { inject, customAttribute } from 'aurelia-framework';

export var ValidationGroupAttribute = (_dec = customAttribute('validation-group'), _dec(_class = function () {
    function ValidationGroupAttribute() {
        
    }

    ValidationGroupAttribute.prototype.bind = function bind(binding, overrideContext) {
        overrideContext.validationGroup = this.value;
    };

    return ValidationGroupAttribute;
}()) || _class);