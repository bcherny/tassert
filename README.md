# tassert [![Circle CI](https://circleci.com/gh/bcherny/tassert/tree/master.svg?style=svg)](https://circleci.com/gh/bcherny/tassert/tree/master)

> High quality runtime assertions for Typescript

**Pre-alpha - Not yet ready for use**

## Usage

```ts
import {default as t} from 'tassert'

t(42, t.number)
t('foo', t.string)
t(99, t.or(t.number, t.string))
```

## Features

- [ ] Native types
  - [x] `Array`
  - [x] `ArrayBuffer`
  - [x] `Boolean`
  - [x] `Buffer`
  - [x] `Date`
  - [x] `Error`
  - [x] `Function`
  - [ ] `Map`
  - [x] `NaN`
  - [x] `Null`
  - [x] `Number`
  - [x] `Object`
  - [x] `RegExp`
  - [ ] `Set`
  - [x] `String`
  - [x] `Symbol`
  - [x] `TypedArray`
  - [x] `Undefined`
  - [ ] `WeakMap`
  - [ ] `WeakSet`
- [ ] Constructors
- [ ] Lazy constructors
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
