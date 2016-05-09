"use strict";
var lodash_1 = require('lodash');
// basic types
exports.array = function (value) { return lodash_1.isArray(value); };
exports.arrayBuffer = function (value) { return lodash_1.isArrayBuffer(value); };
exports.boolean = function (value) { return lodash_1.isBoolean(value); };
exports.buffer = function (value) { return lodash_1.isBuffer(value); };
exports.date = function (value) { return lodash_1.isDate(value); };
exports.error = function (value) { return lodash_1.isError(value); };
exports.Function = function (value) { return lodash_1.isFunction(value); };
exports.nan = function (value) { return lodash_1.isNaN(value); };
exports.Null = function (value) { return lodash_1.isNull(value); };
exports.number = function (value) { return lodash_1.isNumber(value); };
exports.object = function (value) { return lodash_1.isPlainObject(value); };
exports.regexp = function (value) { return lodash_1.isRegExp(value); };
exports.string = function (value) { return lodash_1.isString(value); };
exports.symbol = function (value) { return lodash_1.isSymbol(value); };
exports.typedArray = function (value) { return lodash_1.isTypedArray(value); };
exports.Undefined = function (value) { return lodash_1.isUndefined(value); };
// custom
exports.instanceOf = function (gold) { return function (value) { return value instanceof gold; }; };
exports.literal = function (gold, isDeep) {
    if (isDeep === void 0) { isDeep = true; }
    return function (value) {
        return isDeep
            ? lodash_1.isEqual(gold, value)
            : exports.nan(gold)
                ? exports.nan(value)
                : gold === value;
    };
};
// combinators
exports.or = function () {
    var types = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        types[_i - 0] = arguments[_i];
    }
    return function (value) { return types.some(function (t) { return t(value); }); };
};
exports.and = function () {
    var types = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        types[_i - 0] = arguments[_i];
    }
    return function (value) { return types.every(function (t) { return t(value); }); };
};
exports.not = function (type) { return function (value) { return !type(value); }; };
exports.xor = function () {
    var types = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        types[_i - 0] = arguments[_i];
    }
    return function (value) { return types.filter(function (t) { return t(value); }).length === 1; };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = function (assert, value) {
    if (!assert(value)) {
        throw new TypeError();
    }
};
