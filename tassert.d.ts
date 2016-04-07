export interface Asserter {
    (value: any): boolean;
}
export interface tassert {
    (value: any, type: Asserter): void;
    boolean(value?: any): value is boolean;
    number(value?: any): value is number;
    string(value?: any): value is string;
}
declare const tassert: tassert;
export default tassert;
