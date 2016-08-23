import {inject, customAttribute} from 'aurelia-framework';

@customAttribute('validation-group')
export class ValidationGroupAttribute
{
    bind(binding, overrideContext) {
        overrideContext.validationGroup = this.value;
    }
}
