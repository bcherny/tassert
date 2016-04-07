import {
  isBoolean, isNumber, isString
} from 'lodash'

export interface Asserter {
  (value: any): boolean
}

export interface tassert {
  (value: any, type: Asserter): void
  boolean(value?: any): value is boolean
  number(value?: any): value is number
  string(value?: any): value is string
}

const tassert: tassert = Object.assign(
  (assert: Asserter, value: any): void => {
    if (!assert(value)) {
      throw new TypeError()
    }
  }, {
    boolean: function(value: any): value is boolean {
      return isBoolean(value)
    },
    number: function(value: any): value is number {
      return isNumber(value)
    },
    string: function(value: any): value is string {
      return isString(value)
    }
  }
)

export default tassert