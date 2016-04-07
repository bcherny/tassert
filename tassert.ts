import {
  isArray, isArrayBuffer, isBoolean, isBuffer, isDate, isNumber, isString
} from 'lodash'

export interface Asserter {
  (value: any): boolean
}

export interface tassert {
  (value: any, type: Asserter): void
       array(value: any): value is Array<any>
  arrayBuffer(value: any): value is ArrayBuffer
      boolean(value: any): value is boolean
       buffer(value: any): value is Buffer
         date(value: any): value is Date
       number(value: any): value is number
       string(value: any): value is string
}

const tassert: tassert = Object.assign(
  (assert: Asserter, value: any): void => {
    if (!assert(value)) {
      throw new TypeError()
    }
  }, {
          array: (value: any): value is Array<any> => isArray(value),
    arrayBuffer: (value: any): value is ArrayBuffer => isArrayBuffer(value),
        boolean: (value: any): value is boolean => isBoolean(value),
         buffer: (value: any): value is Buffer => isBuffer(value),
           date: (value: any): value is Date => isDate(value),
         number: (value: any): value is number => isNumber(value),
         string: (value: any): value is string => isString(value)
  }
)

export default tassert