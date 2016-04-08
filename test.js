import test from 'ava'
import tassert from './'

//
// types
//

test('array', t => {
  const array = tassert.bind(null, tassert.array)
  t.is(array([]), undefined)
  t.is(array([1,2,3]), undefined)
  t.is(array(new Array(6)), undefined)
  t.throws(() => array({}), TypeError)
  t.throws(() => array(new ArrayBuffer), TypeError)
  t.throws(() => array({length: 12}), TypeError)
})

test('arrayBuffer', t => {
  const array = tassert.bind(null, tassert.arrayBuffer)
  t.is(array(new ArrayBuffer), undefined)
  t.throws(() => array({}), TypeError)
  t.throws(() => array([]), TypeError)
  t.throws(() => array({length: 12}), TypeError)
})

test('boolean', t => {
  const boolean = tassert.bind(null, tassert.boolean)
  t.is(boolean(true), undefined)
  t.is(boolean(false), undefined)
  t.is(boolean(new Boolean(true)), undefined)
  t.throws(() => boolean(undefined), TypeError)
  t.throws(() => boolean(null), TypeError)
  t.throws(() => boolean(42), TypeError)
})

test('buffer', t => {
  const buffer = tassert.bind(null, tassert.buffer)
  t.is(buffer(new Buffer(10)), undefined)
  t.throws(() => buffer({}), TypeError)
  t.throws(() => buffer([]), TypeError)
})

test('date', t => {
  const date = tassert.bind(null, tassert.date)
  t.is(date(new Date), undefined)
  t.throws(() => date(new Date().toISOString()), TypeError)
  t.throws(() => date([]), TypeError)
})

test('element', t => {
  // TODO
})

test('error', t => {
  const error = tassert.bind(null, tassert.error)
  class CustomError extends TypeError {}
  t.is(error(new Error), undefined)
  t.is(error(new TypeError('foo')), undefined)
  t.is(error(new CustomError('ok')), undefined)
  t.throws(() => error(new Date()), TypeError)
  t.throws(() => error({}), TypeError)
})

test('function', t => {
  const fn = tassert.bind(null, tassert.function)
  t.is(fn(function(){}), undefined)
  t.is(fn(() => {}), undefined)
  t.is(fn(new Function), undefined)
  t.is(fn(Date), undefined)
  t.throws(() => fn({}), TypeError)
})

test('number', t => {
  const number = tassert.bind(null, tassert.number)
  t.is(number(42), undefined)
  t.is(number(0), undefined)
  t.is(number(-0), undefined)
  t.is(number(NaN), undefined)
  t.is(number(-Infinity), undefined)
  t.is(number(+Infinity), undefined)
  t.is(number(3242.43423423423), undefined)
  t.is(number(new Number(-99.0)), undefined)
  t.throws(() => number('foo'), TypeError)
})

test('string', t => {
  const string = tassert.bind(null, tassert.string)
  t.is(string(''), undefined)
  t.is(string('foo'), undefined)
  t.is(string(new String('foo')), undefined)
  t.throws(() => string(42), TypeError)
})

//
// logic
//

test('or', t => {
  const numberOrString = tassert.or(tassert.number, tassert.string)
  t.is(tassert(numberOrString, 'foo'), undefined)
  t.is(tassert(numberOrString, 42), undefined)
  t.throws(() => tassert(numberOrString, {}), TypeError)
})