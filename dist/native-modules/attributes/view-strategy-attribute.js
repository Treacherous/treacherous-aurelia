var _dec, _class;



import { inject, customAttribute } from 'aurelia-framework';

export var ViewStrategyAttribute = (_dec = customAttribute('view-strategy'), _dec(_class = function () {
    function ViewStrategyAttribute() {
        
    }

    ViewStrategyAttribute.prototype.bind = function bind(binding, overrideContext) {
        overrideContext.viewStrategy = this.value;
    };

    return ViewStrategyAttribute;
}()) || _class);