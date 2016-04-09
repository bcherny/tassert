import {
  isArray, isArrayBuffer, isBoolean, isBuffer, isDate, isEqual, isError,
  isFunction, isNaN, isNull, isNumber, isPlainObject, isRegExp,
  isString, isSymbol, isTypedArray, isUndefined, includes, values
} from 'lodash'

export interface Asserter {
  (value: any): boolean
}

export interface tassert {

  // main
  (value: any, type: Asserter): void

  // types
        array(value: any): value is Array<any>
  arrayBuffer(value: any): value is ArrayBuffer
      boolean(value: any): value is boolean
       buffer(value: any): value is Buffer
         date(value: any): value is Date
        error(value: any): value is Error
     function(value: any): value is Function
          nan(value: any): value is void
         null(value: any): value is void
       number(value: any): value is number
       object(value: any): value is Object
       regexp(value: any): value is RegExp
       string(value: any): value is string
       symbol(value: any): value is symbol
   typedArray(value: any): value is TypedArray
    undefined(value: any): value is void
       literal(gold: any): (value: any) => boolean
    instanceOf(gold: any): (value: any) => boolean

       // logic
       or(...types: Asserter[]): Asserter
       and(...types: Asserter[]): Asserter
       not(...types: Asserter[]): Asserter
       xor(...types: Asserter[]): Asserter
}

type TypedArray = Int8Array | Int16Array | Int32Array | Uint8Array
                | Uint16Array | Uint32Array | Uint8ClampedArray
                | Float32Array | Float64Array

const types = {
        array: (value: any): value is Array<any> => isArray(value),
  arrayBuffer: (value: any): value is ArrayBuffer => isArrayBuffer(value),
      boolean: (value: any): value is boolean => isBoolean(value),
       buffer: (value: any): value is Buffer => isBuffer(value),
         date: (value: any): value is Date => isDate(value),
        error: (value: any): value is Error => isError(value),
     function: (value: any): value is Function => isFunction(value),
          nan: (value: any): value is void => isNaN(value),
         null: (value: any): value is void => isNull(value),
       number: (value: any): value is number => isNumber(value),
       object: (value: any): value is number => isPlainObject(value),
       regexp: (value: any): value is number => isRegExp(value),
       string: (value: any): value is string => isString(value),
       symbol: (value: any): value is symbol => isSymbol(value),
   typedArray: (value: any): value is TypedArray => isTypedArray(value),
    undefined: (value: any): value is void => isUndefined(value)
}

const customTypes = {
  instanceOf: (gold: any) => (value: any): boolean => value instanceof gold,
  literal: (gold: any, isDeep: boolean = true) => (value: any): boolean =>
    isDeep
    ? isEqual(gold, value)
    : types.nan(gold)
      ? types.nan(value)
      : gold === value
}

const combinators = {
   or: (...types: Asserter[]): Asserter => (value: any) => types.some(t => t(value)),
  and: (...types: Asserter[]): Asserter => (value: any) => types.every(t => t(value)),
  not: (type: Asserter): Asserter => (value: any) => !type(value),
  xor: (...types: Asserter[]): Asserter => (value: any) => types.filter(t => t(value)).length === 1
}

const asserters = Object.assign({}, types, customTypes, combinators)

const tassert: tassert = Object.assign(
  (assert: Asserter, value: any): void => {
    if (!assert(value)) {
      throw new TypeError()
    }
  }, asserters)

export default tassert