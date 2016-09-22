/// <reference types="node" />
export interface Asserter {
    (value: any): boolean;
}
export declare type TypedArray = Int8Array | Int16Array | Int32Array | Uint8Array | Uint16Array | Uint32Array | Uint8ClampedArray | Float32Array | Float64Array;
export declare const array: (value: any) => value is any[];
export declare const arrayBuffer: (value: any) => value is ArrayBuffer;
export declare const boolean: (value: any) => value is boolean;
export declare const buffer: (value: any) => value is Buffer;
export declare const date: (value: any) => value is Date;
export declare const error: (value: any) => value is Error;
export declare const Function: (value: any) => value is Function;
export declare const nan: (value: any) => value is void;
export declare const Null: (value: any) => value is void;
export declare const number: (value: any) => value is number;
export declare const object: (value: any) => value is number;
export declare const regexp: (value: any) => value is number;
export declare const string: (value: any) => value is string;
export declare const symbol: (value: any) => value is symbol;
export declare const typedArray: (value: any) => value is TypedArray;
export declare const Undefined: (value: any) => value is void;
export declare const instanceOf: (gold: any) => (value: any) => boolean;
export declare const literal: (gold: any, isDeep?: boolean) => (value: any) => boolean;
export declare const or: (...types: Asserter[]) => Asserter;
export declare const and: (...types: Asserter[]) => Asserter;
export declare const not: (type: Asserter) => Asserter;
export declare const xor: (...types: Asserter[]) => Asserter;
declare var _default: (assert: Asserter, value: any) => void;
export default _default;
