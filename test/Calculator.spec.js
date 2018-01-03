const assert = require('assert');
const Calculator = require('../src/Calculator.js');

describe('Calculator', () => {
  const calculator = new Calculator();

  describe('Addition', () => {
    it('should return 2 when adding 1 and 1', () => {
      assert.equal(calculator.add(1, 1), 2);
    });

    it('should return 5 when adding 2 and 3', () => {
      assert.equal(calculator.add(2, 3), 5);
    });

    it('should return 0 when adding 0 and 0', () => {
      assert.equal(calculator.add(0, 0), 0);
    });
  });

  describe('Subtraction', () => {
    it('should return 1 when subtracting 2 by 1', () => {
      assert.equal(calculator.sub(2, 1), 1);
    });

    it('should return 7 when subtracting 10 by 3', () => {
      assert.equal(calculator.sub(10, 3), 7);
    });

    it('should return 0 when subtracting 0 by 0', () => {
      assert.equal(calculator.sub(0, 0), 0);
    });

    it('should return -1 when subtracting 1 by 2', () => {
      assert.equal(calculator.sub(1, 2), -1);
    });

    it('should return -3 when subtracting 2 by 5', () => {
      assert.equal(calculator.sub(2, 5), -3);
    });
  });
});
