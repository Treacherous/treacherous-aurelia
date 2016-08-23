'use strict';

System.register(['aurelia-framework'], function (_export, _context) {
    "use strict";

    var inject, customAttribute, _dec, _class, ViewStrategyAttribute;

    

    return {
        setters: [function (_aureliaFramework) {
            inject = _aureliaFramework.inject;
            customAttribute = _aureliaFramework.customAttribute;
        }],
        execute: function () {
            _export('ViewStrategyAttribute', ViewStrategyAttribute = (_dec = customAttribute('view-strategy'), _dec(_class = function () {
                function ViewStrategyAttribute() {
                    
                }

                ViewStrategyAttribute.prototype.bind = function bind(binding, overrideContext) {
                    overrideContext.viewStrategy = this.value;
                };

                return ViewStrategyAttribute;
            }()) || _class));

            _export('ViewStrategyAttribute', ViewStrategyAttribute);
        }
    };
});