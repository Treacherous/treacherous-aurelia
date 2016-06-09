import {inject, customAttribute} from 'aurelia-framework';

@customAttribute('validation-group')
@inject(Element)
export class ValidationGroupAttribute
{
    constructor(element) {
        this.element = element;
    }

    bind(binding, overrideContext) {
        overrideContext.validationGroup = this.value;
    }

    
}
