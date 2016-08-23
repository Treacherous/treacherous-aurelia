var _dec, _class;

import { inject, customAttribute } from 'aurelia-framework';

export let ViewStrategyAttribute = (_dec = customAttribute('view-strategy'), _dec(_class = class ViewStrategyAttribute {
    bind(binding, overrideContext) {
        overrideContext.viewStrategy = this.value;
    }
}) || _class);