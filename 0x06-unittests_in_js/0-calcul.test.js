const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('should return the correct sum for integers', () => {
    assert.strictEqual(calculateNumber(1, 2), 3);
  });

  it('should return the correct sum with rounded numbers', () => {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
  });

  it('should return the correct sum with two rounded numbers', () => {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  });

  it('should handle decimal numbers correctly', () => {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  });

  it('should handle singned numbers correctly', () => {
    assert.strictEqual(calculateNumber(-5, -7), -12);
  });
});
