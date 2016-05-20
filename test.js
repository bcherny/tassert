import test from 'ava'
import tassert, {
  array, arrayBuffer, boolean, buffer, date, error,
  Function as fn, nan, Null, number, object, regexp,
  string, Undefined, symbol, typedArray, literal,
  instanceOf, and, or, not, xor
} from './tassert'

//
// types
//

test('array', t => {
  const a = tassert.bind(null, array)
  t.is(a([]), undefined)
  t.is(a([1,2,3]), undefined)
  t.is(a(new Array(6)), undefined)
  t.throws(() => a({}), TypeError)
  t.throws(() => a(new ArrayBuffer), TypeError)
  t.throws(() => a({length: 12}), TypeError)
})

test('arrayBuffer', t => {
  const a = tassert.bind(null, arrayBuffer)
  t.is(a(new ArrayBuffer), undefined)
  t.throws(() => a({}), TypeError)
  t.throws(() => a([]), TypeError)
  t.throws(() => a({length: 12}), TypeError)
})

test('boolean', t => {
  const a = tassert.bind(null, boolean)
  t.is(a(true), undefined)
  t.is(a(false), undefined)
  t.is(a(new Boolean(true)), undefined)
  t.throws(() => a(undefined), TypeError)
  t.throws(() => a(null), TypeError)
  t.throws(() => a(42), TypeError)
})

test('buffer', t => {
  const a = tassert.bind(null, buffer)
  t.is(a(new Buffer(10)), undefined)
  t.throws(() => a({}), TypeError)
  t.throws(() => a([]), TypeError)
})

test('date', t => {
  const a = tassert.bind(null, date)
  t.is(a(new Date), undefined)
  t.throws(() => a(new Date().toISOString()), TypeError)
  t.throws(() => a([]), TypeError)
})

test('element', t => {
  // TODO
})

test('error', t => {
  const a = tassert.bind(null, error)
  class CustomError extends TypeError {}
  t.is(a(new Error), undefined)
  t.is(a(new TypeError('foo')), undefined)
  t.is(a(new CustomError('ok')), undefined)
  t.throws(() => a(new Date()), TypeError)
  t.throws(() => a({}), TypeError)
})

test('function', t => {
  const a = tassert.bind(null, fn)
  t.is(a(function(){}), undefined)
  t.is(a(() => {}), undefined)
  t.is(a(new Function), undefined)
  t.is(a(Date), undefined)
  t.throws(() => a({}), TypeError)
})

test('nan', t => {
  const a = tassert.bind(null, nan)
  t.is(a(NaN), undefined)
  t.throws(() => a(undefined), TypeError)
  t.throws(() => a(null), TypeError)
  t.throws(() => a(0), TypeError)
  t.throws(() => a(''), TypeError)
})

test('null', t => {
  const n = tassert.bind(null, Null)
  t.is(n(null), undefined)
  t.throws(() => n(undefined), TypeError)
  t.throws(() => n(NaN), TypeError)
  t.throws(() => n(0), TypeError)
  t.throws(() => n(''), TypeError)
})

test('number', t => {
  const a = tassert.bind(null, number)
  t.is(a(42), undefined)
  t.is(a(0), undefined)
  t.is(a(-0), undefined)
  t.is(a(NaN), undefined)
  t.is(a(-Infinity), undefined)
  t.is(a(+Infinity), undefined)
  t.is(a(3242.43423423423), undefined)
  t.is(a(new Number(-99.0)), undefined)
  t.throws(() => a('foo'), TypeError)
})

test('object', t => {
  const a = tassert.bind(null, object)
  t.is(a({}), undefined)
  t.is(a({foo: 1}), undefined)
  t.is(a({1: 2, 3: 4}), undefined)
  t.is(a(new Object), undefined)
  t.throws(() => a(new Date), TypeError)
  t.throws(() => a(Date), TypeError)
  t.throws(() => a([]), TypeError)
})

test('regexp', t => {
  const a = tassert.bind(null, regexp)
  t.is(a(/\w/), undefined)
  t.is(a(new RegExp('\w', 'i')), undefined)
  t.throws(() => a('\w'), TypeError)
})

test('string', t => {
  const a = tassert.bind(null, string)
  t.is(a(''), undefined)
  t.is(a('foo'), undefined)
  t.is(a(new String('foo')), undefined)
  t.throws(() => a(42), TypeError)
})

test('symbol', t => {
  const a = tassert.bind(null, symbol)
  t.is(a(Symbol()), undefined)
  t.is(a(Symbol('ok')), undefined)
  t.is(a(Symbol.iterator), undefined)
  t.throws(() => a('foo'), TypeError)
})

test('typedArray', t => {
  const ta = tassert.bind(null, typedArray)
  t.is(ta(new Uint8Array), undefined)
  t.is(ta(new Uint16Array), undefined)
  t.is(ta(new Uint32Array), undefined)
  t.is(ta(new Uint8ClampedArray), undefined)
  t.is(ta(new Int8Array), undefined)
  t.is(ta(new Int16Array), undefined)
  t.is(ta(new Int32Array), undefined)
  t.is(ta(new Float32Array), undefined)
  t.is(ta(new Float64Array), undefined)
  t.throws(() => ta([]), TypeError)
})

test('undefined', t => {
  const u = tassert.bind(null, Undefined)
  t.is(u(undefined), undefined)
  t.is(u(void 0), undefined)
  t.throws(() => u(null), TypeError)
  t.throws(() => u(NaN), TypeError)
  t.throws(() => u(0), TypeError)
  t.throws(() => u(''), TypeError)
})

//
// literals
//

test('literal (deep)', t => {
  t.is(tassert(literal(42), 42), undefined)
  t.throws(() => tassert(literal(42), 40), TypeError)
  t.is(tassert(literal('foo'), 'foo'), undefined)
  t.throws(() => tassert(literal('foo'), 'Foo'), TypeError)
  t.is(tassert(literal([1,2,3]), [1,2,3]), undefined)
  t.throws(() => tassert(literal([1]), [1,2]), TypeError)
  t.is(tassert(literal([1,2,[3]]), [1,2,[3]]), undefined)
  t.throws(() => tassert(literal([1,2]), [1,[2]]), TypeError)
  t.is(tassert(literal({a: 1, b:{c:2}}), {a: 1, b:{c:2}}), undefined)
  t.throws(() => tassert(literal({a: 1, b:{c:2}}), {a: 1, b:{c:2, d:3}}), TypeError)
  t.throws(() => tassert(literal(()=>{}), ()=>{}), TypeError)
  t.is(tassert(literal(NaN), NaN), undefined)
  t.throws(() => tassert(literal(NaN), undefined), TypeError)
  t.throws(() => tassert(literal(null), undefined), TypeError)
})

test('literal (shallow)', t => {
  t.is(tassert(literal(42, false), 42), undefined)
  t.throws(() => tassert(literal(42, false), 40), TypeError)
  t.is(tassert(literal('foo', false), 'foo'), undefined)
  t.throws(() => tassert(literal('foo', false), 'Foo'), TypeError)
  const a = [1,2,3]
  t.is(tassert(literal(a, false), a), undefined)
  t.throws(() => tassert(literal([1,2], false), [1,2]), TypeError)
  const b = [1,2,[3]]
  t.is(tassert(literal(b, false), b), undefined)
  t.throws(() => tassert(literal([1,[2]], false), [1,[2]]), TypeError)
  const c = {a: 1, b:{c:2}}
  t.is(tassert(literal(c, false), c), undefined)
  t.throws(() => tassert(literal({a: 1}, false), {a: 1}), TypeError)
  t.throws(() => tassert(literal(()=>{}, false), ()=>{}), TypeError)
  t.is(tassert(literal(NaN, false), NaN), undefined)
  t.throws(() => tassert(literal(NaN, false), undefined), TypeError)
  t.throws(() => tassert(literal(null, false), undefined), TypeError)
})

//
// instanceOf
//

test('instanceOf', t => {
  class Foo {}
  class Bar extends Foo {}
  class Baz {}
  const inst = instanceOf(Foo)
  t.is(tassert(inst, new Foo), undefined)
  t.is(tassert(inst, new Bar), undefined)
  t.throws(() => tassert(inst, Foo), TypeError)
  t.throws(() => tassert(inst, Bar), TypeError)
  t.throws(() => tassert(inst, new Baz), TypeError)
})

//
// logic
//

test('and', t => {
  const a = and(literal(42), number)
  t.is(tassert(a, 42), undefined)
  t.throws(() => tassert(a, 41), TypeError)
  t.throws(() => tassert(a, '42'), TypeError)
})

test('or', t => {
  const numberOrString = or(number, string)
  t.is(tassert(numberOrString, 'foo'), undefined)
  t.is(tassert(numberOrString, 42), undefined)
  t.throws(() => tassert(numberOrString, {}), TypeError)
})

test('not', t => {
  const a = not(number)
  t.is(tassert(a, 'foo'), undefined)
  t.is(tassert(a, []), undefined)
  t.throws(() => tassert(a, 42), TypeError)
  t.throws(() => tassert(a, -Infinity), TypeError)
})

test('xor', t => {
  const a = xor(literal(42), number)
  t.is(tassert(a, 41), undefined)
  t.throws(() => tassert(a, 42), TypeError)
  t.throws(() => tassert(a, '42'), TypeError)
})

test('complex logic', t => {
  const a = and(
    number,
    not(literal(42)),
    not(nan)
  )
  t.is(tassert(a, -6321312.97), undefined)
  t.is(tassert(a, 41), undefined)
  t.throws(() => tassert(a, 42), TypeError)
  t.throws(() => tassert(a, NaN), TypeError)
  t.throws(() => tassert(a, 'foo'), TypeError)
})