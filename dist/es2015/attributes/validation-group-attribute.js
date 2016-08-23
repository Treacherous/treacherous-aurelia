var _dec, _class;

import { inject, customAttribute } from 'aurelia-framework';

export let ValidationGroupAttribute = (_dec = customAttribute('validation-group'), _dec(_class = class ValidationGroupAttribute {
    bind(binding, overrideContext) {
        overrideContext.validationGroup = this.value;
    }
}) || _class);