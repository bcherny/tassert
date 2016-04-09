"use strict";
var lodash_1 = require('lodash');
var tassert = Object.assign(function (assert, value) {
    if (!assert(value)) {
        throw new TypeError();
    }
}, 
// types
{
    array: function (value) { return lodash_1.isArray(value); },
    arrayBuffer: function (value) { return lodash_1.isArrayBuffer(value); },
    boolean: function (value) { return lodash_1.isBoolean(value); },
    buffer: function (value) { return lodash_1.isBuffer(value); },
    date: function (value) { return lodash_1.isDate(value); },
    error: function (value) { return lodash_1.isError(value); },
    function: function (value) { return lodash_1.isFunction(value); },
    nan: function (value) { return lodash_1.isNaN(value); },
    null: function (value) { return lodash_1.isNull(value); },
    number: function (value) { return lodash_1.isNumber(value); },
    string: function (value) { return lodash_1.isString(value); }
}, 
// logic
{
    or: function () {
        var types = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            types[_i - 0] = arguments[_i];
        }
        return function (value) { return types.some(function (t) { return t(value); }); };
    },
    and: function () {
        var types = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            types[_i - 0] = arguments[_i];
        }
        return function (value) { return types.every(function (t) { return t(value); }); };
    },
    not: function (type) { return function (value) { return !type(value); }; },
    xor: function () {
        var types = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            types[_i - 0] = arguments[_i];
        }
        return function (value) { return types.filter(function (t) { return t(value); }).length === 1; };
    }
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = tassert;
//# sourceMappingURL=tassert.js.map