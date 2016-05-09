import { isArray, isArrayBuffer, isBoolean, isBuffer, isDate, isEqual, isError, isFunction, isNaN, isNull, isNumber, isPlainObject, isRegExp, isString, isSymbol, isTypedArray, isUndefined } from 'lodash';
// basic types
export const array = (value) => isArray(value);
export const arrayBuffer = (value) => isArrayBuffer(value);
export const boolean = (value) => isBoolean(value);
export const buffer = (value) => isBuffer(value);
export const date = (value) => isDate(value);
export const error = (value) => isError(value);
export const Function = (value) => isFunction(value);
export const nan = (value) => isNaN(value);
export const Null = (value) => isNull(value);
export const number = (value) => isNumber(value);
export const object = (value) => isPlainObject(value);
export const regexp = (value) => isRegExp(value);
export const string = (value) => isString(value);
export const symbol = (value) => isSymbol(value);
export const typedArray = (value) => isTypedArray(value);
export const Undefined = (value) => isUndefined(value);
// custom
export const instanceOf = (gold) => (value) => value instanceof gold;
export const literal = (gold, isDeep = true) => (value) => isDeep
    ? isEqual(gold, value)
    : nan(gold)
        ? nan(value)
        : gold === value;
// combinators
export const or = (...types) => (value) => types.some(t => t(value));
export const and = (...types) => (value) => types.every(t => t(value));
export const not = (type) => (value) => !type(value);
export const xor = (...types) => (value) => types.filter(t => t(value)).length === 1;
export default (assert, value) => {
    if (!assert(value)) {
        throw new TypeError();
    }
};
