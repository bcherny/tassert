import { isArray, isArrayBuffer, isBoolean, isBuffer, isDate, isEqual, isError, isFunction, isNaN, isNull, isNumber, isPlainObject, isRegExp, isString, isSymbol, isTypedArray, isUndefined } from 'lodash';
const types = {
    array: (value) => isArray(value),
    arrayBuffer: (value) => isArrayBuffer(value),
    boolean: (value) => isBoolean(value),
    buffer: (value) => isBuffer(value),
    date: (value) => isDate(value),
    error: (value) => isError(value),
    function: (value) => isFunction(value),
    nan: (value) => isNaN(value),
    null: (value) => isNull(value),
    number: (value) => isNumber(value),
    object: (value) => isPlainObject(value),
    regexp: (value) => isRegExp(value),
    string: (value) => isString(value),
    symbol: (value) => isSymbol(value),
    typedArray: (value) => isTypedArray(value),
    undefined: (value) => isUndefined(value)
};
const customTypes = {
    instanceOf: (gold) => (value) => value instanceof gold,
    literal: (gold, isDeep = true) => (value) => isDeep
        ? isEqual(gold, value)
        : types.nan(gold)
            ? types.nan(value)
            : gold === value
};
const combinators = {
    or: (...types) => (value) => types.some(t => t(value)),
    and: (...types) => (value) => types.every(t => t(value)),
    not: (type) => (value) => !type(value),
    xor: (...types) => (value) => types.filter(t => t(value)).length === 1
};
const asserters = Object.assign({}, types, customTypes, combinators);
const tassert = Object.assign((assert, value) => {
    if (!assert(value)) {
        throw new TypeError();
    }
}, asserters);
export default tassert;
