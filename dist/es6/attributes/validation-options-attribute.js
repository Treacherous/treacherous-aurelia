import {inject, customAttribute} from 'aurelia-framework';

@customAttribute('validation-options')
@inject(Element)
export class ValidationOptionsAttribute
{
    constructor(element) {
        this.element = element;
    }

    bind(binding, overrideContext) {
        overrideContext.validationOptions = this.value;
    }
}
