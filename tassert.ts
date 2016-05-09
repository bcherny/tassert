import {
  isArray, isArrayBuffer, isBoolean, isBuffer, isDate, isEqual, isError,
  isFunction, isNaN, isNull, isNumber, isPlainObject, isRegExp,
  isString, isSymbol, isTypedArray, isUndefined, includes, values
} from 'lodash'

export interface Asserter {
  (value: any): boolean
}

export type TypedArray = Int8Array | Int16Array | Int32Array | Uint8Array
                | Uint16Array | Uint32Array | Uint8ClampedArray
                | Float32Array | Float64Array

// basic types
export const array = (value: any): value is Array<any> => isArray(value)
export const arrayBuffer = (value: any): value is ArrayBuffer => isArrayBuffer(value)
export const boolean = (value: any): value is boolean => isBoolean(value)
export const buffer = (value: any): value is Buffer => isBuffer(value)
export const date = (value: any): value is Date => isDate(value)
export const error = (value: any): value is Error => isError(value)
export const Function = (value: any): value is Function => isFunction(value)
export const nan = (value: any): value is void => isNaN(value)
export const Null = (value: any): value is void => isNull(value)
export const number = (value: any): value is number => isNumber(value)
export const object = (value: any): value is number => isPlainObject(value)
export const regexp = (value: any): value is number => isRegExp(value)
export const string = (value: any): value is string => isString(value)
export const symbol = (value: any): value is symbol => isSymbol(value)
export const typedArray = (value: any): value is TypedArray => isTypedArray(value)
export const Undefined = (value: any): value is void => isUndefined(value)

// custom
export const instanceOf = (gold: any) => (value: any): boolean => value instanceof gold
export const literal = (gold: any, isDeep: boolean = true) => (value: any): boolean =>
  isDeep
  ? isEqual(gold, value)
  : nan(gold)
    ? nan(value)
    : gold === value

// combinators
export const or = (...types: Asserter[]): Asserter => (value: any) => types.some(t => t(value))
export const and = (...types: Asserter[]): Asserter => (value: any) => types.every(t => t(value))
export const not = (type: Asserter): Asserter => (value: any) => !type(value)
export const xor = (...types: Asserter[]): Asserter => (value: any) => types.filter(t => t(value)).length === 1

// tassert
export default (assert: Asserter, value: any): void => {
  if (!assert(value)) {
    throw new TypeError()
  }
}
