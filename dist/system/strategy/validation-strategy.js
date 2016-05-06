System.register([], function (_export) {
    "use strict";

    var ValidationStrategy;

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    return {
        setters: [],
        execute: function () {
            ValidationStrategy = function ValidationStrategy() {
                _classCallCheck(this, ValidationStrategy);

                this.actionValidProperty = function (element, property) {
                    throw new Error("Must override method");
                };

                this.actionInvalidProperty = function (element, property, error) {
                    throw new Error("Must override method");
                };
            };

            _export("ValidationStrategy", ValidationStrategy);
        }
    };
});