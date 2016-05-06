"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ValidationStrategy = function ValidationStrategy() {
    _classCallCheck(this, ValidationStrategy);

    this.actionValidProperty = function (element, property) {
        throw new Error("Must override method");
    };

    this.actionInvalidProperty = function (element, property, error) {
        throw new Error("Must override method");
    };
};

exports.ValidationStrategy = ValidationStrategy;