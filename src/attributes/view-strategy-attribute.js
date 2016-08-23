import {inject, customAttribute} from 'aurelia-framework';

@customAttribute('view-strategy')
export class ViewStrategyAttribute
{
    bind(binding, overrideContext) {
        overrideContext.viewStrategy = this.value;
    }
}