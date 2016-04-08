import {
  isArray, isArrayBuffer, isBoolean, isBuffer, isDate, isError,
  isFunction, isNumber, isString
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
       number(value: any): value is number
       string(value: any): value is string

       // logic
       or(...types: Asserter[]): Asserter
       and(...types: Asserter[]): Asserter
       not(...types: Asserter[]): Asserter
       xor(...types: Asserter[]): Asserter
}

const tassert: tassert = Object.assign(
  (assert: Asserter, value: any): void => {
    if (!assert(value)) {
      throw new TypeError()
    }
  },

  // types
  {
          array: (value: any): value is Array<any> => isArray(value),
    arrayBuffer: (value: any): value is ArrayBuffer => isArrayBuffer(value),
        boolean: (value: any): value is boolean => isBoolean(value),
         buffer: (value: any): value is Buffer => isBuffer(value),
           date: (value: any): value is Date => isDate(value),
          error: (value: any): value is Error => isError(value),
       function: (value: any): value is Function => isFunction(value),
         number: (value: any): value is number => isNumber(value),
         string: (value: any): value is string => isString(value)
  },

  // logic
  {
     or: (...types: Asserter[]): Asserter => (value: any) => types.some(t => t(value)),
    and: (...types: Asserter[]): Asserter => (value: any) => types.every(t => t(value)),
    not: (type: Asserter): Asserter => (value: any) => !type(value),
    xor: (...types: Asserter[]): Asserter => (value: any) => types.filter(t => t(value)).length === 1
  }
)

export default tassert