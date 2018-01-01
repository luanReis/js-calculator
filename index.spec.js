const assert = require('assert');
const Calculator = require('./index.js');

const calculator = new Calculator();

describe('Calculator', () => {
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
