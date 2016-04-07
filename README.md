# tassert

[![Circle CI](https://circleci.com/gh/bcherny/tassert/tree/master.svg?style=svg)](https://circleci.com/gh/bcherny/tassert/tree/master)

> High quality runtime assertions for Typescript

**Pre-alpha - Not yet ready for use**

## Usage

```ts
import {default as t} from 'tassert'

t(42, t.number)
t('foo', t.string)
t(99, t.or(t.number, t.string))
```

## Tests

`npm test`

## Building

`npm run build`

## Hacking

`npm run watch & npm run tdd`