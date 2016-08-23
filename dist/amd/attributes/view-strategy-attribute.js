define(['exports', 'aurelia-framework'], function (exports, _aureliaFramework) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.ViewStrategyAttribute = undefined;

    

    var _dec, _class;

    var ViewStrategyAttribute = exports.ViewStrategyAttribute = (_dec = (0, _aureliaFramework.customAttribute)('view-strategy'), _dec(_class = function () {
        function ViewStrategyAttribute() {
            
        }

        ViewStrategyAttribute.prototype.bind = function bind(binding, overrideContext) {
            overrideContext.viewStrategy = this.value;
        };

        return ViewStrategyAttribute;
    }()) || _class);
});