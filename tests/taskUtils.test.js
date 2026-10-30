const test = require('node:test');
const assert = require('node:assert/strict');
const { add, subtract, multiply, divide } = require('../src/taskUtils');

test('adds numbers', () => assert.equal(add(2, 3), 5));
test('subtracts numbers', () => assert.equal(subtract(8, 3), 5));
test('multiplies numbers', () => assert.equal(multiply(4, 3), 12));
test('divides numbers', () => assert.equal(divide(10, 2), 5));
test('rejects division by zero', () => assert.throws(() => divide(10, 0)));
