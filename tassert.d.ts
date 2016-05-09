export interface Asserter {
    (value: any): boolean;
}
export interface tassert {
    (assert: Asserter, value: any): void;
    array(value: any): value is Array<any>;
    arrayBuffer(value: any): value is ArrayBuffer;
    boolean(value: any): value is boolean;
    buffer(value: any): value is Buffer;
    date(value: any): value is Date;
    error(value: any): value is Error;
    function(value: any): value is Function;
    nan(value: any): value is void;
    null(value: any): value is void;
    number(value: any): value is number;
    object(value: any): value is Object;
    regexp(value: any): value is RegExp;
    string(value: any): value is string;
    symbol(value: any): value is symbol;
    typedArray(value: any): value is TypedArray;
    undefined(value: any): value is void;
    literal(gold: any): (value: any) => boolean;
    instanceOf(gold: any): (value: any) => boolean;
    or(...types: Asserter[]): Asserter;
    and(...types: Asserter[]): Asserter;
    not(...types: Asserter[]): Asserter;
    xor(...types: Asserter[]): Asserter;
}
export declare type TypedArray = Int8Array | Int16Array | Int32Array | Uint8Array | Uint16Array | Uint32Array | Uint8ClampedArray | Float32Array | Float64Array;
declare const tassert: tassert;
export default tassert;
