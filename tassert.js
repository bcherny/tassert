"use strict";
const lodash_1 = require('lodash');
const tassert = Object.assign((assert, value) => {
    if (!assert(value)) {
        throw new TypeError();
    }
}, {
    boolean: function (value) {
        return lodash_1.isBoolean(value);
    },
    number: function (value) {
        return lodash_1.isNumber(value);
    },
    string: function (value) {
        return lodash_1.isString(value);
    }
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = tassert;
//# sourceMappingURL=tassert.js.map