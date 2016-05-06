'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var ClassHelper = (function () {
    function ClassHelper() {
        _classCallCheck(this, ClassHelper);
    }

    _createClass(ClassHelper, null, [{
        key: 'hasClass',
        value: function value(element, className) {
            if (element.classList) {
                return element.classList.contains(className);
            }

            return !!element.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
        },
        enumerable: true
    }, {
        key: 'addClass',
        value: function value(element, className) {
            if (element.classList) {
                element.classList.add(className);
            } else if (!ClassHelper.hasClass(element, className)) {
                element.className += " " + className;
            }
        },
        enumerable: true
    }, {
        key: 'removeClass',
        value: function value(element, className) {
            if (element.classList) {
                element.classList.remove(className);
            } else if (ClassHelper.hasClass(element, className)) {
                var reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
                element.className = element.className.replace(reg, ' ');
            }
        },
        enumerable: true
    }]);

    return ClassHelper;
})();

exports.ClassHelper = ClassHelper;