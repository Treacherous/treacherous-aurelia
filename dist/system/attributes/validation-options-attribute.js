System.register(['aurelia-framework'], function (_export) {
    'use strict';

    var inject, customAttribute, ValidationOptionsAttribute;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    return {
        setters: [function (_aureliaFramework) {
            inject = _aureliaFramework.inject;
            customAttribute = _aureliaFramework.customAttribute;
        }],
        execute: function () {
            ValidationOptionsAttribute = (function () {
                function ValidationOptionsAttribute(element) {
                    _classCallCheck(this, _ValidationOptionsAttribute);

                    this.element = element;
                }

                _createClass(ValidationOptionsAttribute, [{
                    key: 'bind',
                    value: function bind(binding, overrideContext) {
                        overrideContext.validationOptions = this.value;
                    }
                }]);

                var _ValidationOptionsAttribute = ValidationOptionsAttribute;
                ValidationOptionsAttribute = inject(Element)(ValidationOptionsAttribute) || ValidationOptionsAttribute;
                ValidationOptionsAttribute = customAttribute('validation-options')(ValidationOptionsAttribute) || ValidationOptionsAttribute;
                return ValidationOptionsAttribute;
            })();

            _export('ValidationOptionsAttribute', ValidationOptionsAttribute);
        }
    };
});