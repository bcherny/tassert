"use strict";
const lodash_1 = require('lodash');
const tassert = Object.assign((assert, value) => {
    if (!assert(value)) {
        throw new TypeError();
    }
}, {
    array: (value) => lodash_1.isArray(value),
    arrayBuffer: (value) => lodash_1.isArrayBuffer(value),
    boolean: (value) => lodash_1.isBoolean(value),
    buffer: (value) => lodash_1.isBuffer(value),
    number: (value) => lodash_1.isNumber(value),
    string: (value) => lodash_1.isString(value)
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = tassert;
//# sourceMappingURL=tassert.js.map