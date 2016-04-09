# tassert [![Build Status][build]](https://circleci.com/gh/bcherny/tassert) [![npm]](https://www.npmjs.com/package/tassert) [![mit]](https://opensource.org/licenses/MIT)

[build]: https://img.shields.io/circleci/project/bcherny/tassert.svg?branch=master&style=flat-square
[npm]: https://img.shields.io/npm/v/tassert.svg?style=flat-square
[mit]: https://img.shields.io/npm/l/tassert.svg?style=flat-square

> High quality runtime assertions for Typescript

**Alpha - ready for feedback**

## Usage

```ts
import t, {boolean, literal, number, or, string} from 'tassert'

t(number, 42)
t(string, 'foo')
t(or(boolean, number, string), 999)
t(literal([1,2,3]), [1,2]) // Error!
```

## Features

- [ ] Native types
  - [ ] `Array`
    - [x] `Array<any>`
    - [ ] `Array<A>`
  - [x] `ArrayBuffer`
  - [x] `Boolean`
  - [x] `Buffer`
  - [x] `Date`
  - [x] `Error`
  - [x] `Function`
  - [ ] `Map`
    - [ ] `Map<any, any>`
    - [ ] `Map<A, B>`
  - [x] `NaN`
  - [x] `Null`
  - [x] `Number`
  - [ ] `Object`
    - [x] `Object<any, any>`
    - [ ] `Object<A, B>`
  - [x] `RegExp`
  - [ ] `Set`
    - [ ] `Set<any>`
    - [ ] `Set<A>`
  - [x] `String`
  - [x] `Symbol`
  - [x] `TypedArray`
  - [x] `Undefined`
  - [ ] `WeakMap`
    - [ ] `WeakMap<any, any>`
    - [ ] `WeakMap<A, B>`
  - [ ] `WeakSet`
    - [ ] `WeakSet<any>`
    - [ ] `WeakSet<A>`
- [x] Constructors (`tassert.instanceOf(Foo)`)
- [x] Literals
  - [x] Shallow (`tassert.literal(42, false)`)
  - [x] Deep (`tassert.literal(42)`)
- [x] Logic
  - [x] `and` (`tassert.and(tassert.literal(42), tassert.number)`)
  - [x] `or` (`tassert.or(tassert.string, tassert.number, tassert.array)`)
  - [x] `not` (`tassert.or(tassert.string, not(tassert.string('foo')))`)
  - [x] `xor` (`tassert.xor(tassert.literal(42), tassert.number)`)
- [ ] Comparators
  - [x] ==
  - [ ] >
  - [ ] <
  - [ ] >=
  - [ ] <=
  - [ ] :> (Superset of)
  - [ ] <: (Subset of)
  - [ ] ~= (Structurally equal)

## Tests

`npm test`

## Building

`npm run build`

## Hacking

`npm run watch & npm run tdd`
