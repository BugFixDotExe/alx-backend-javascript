const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('SUMMATION of numbers not the SIGMA kind', () => {
  it('adds two decimal numbers', () => {
    assert.strictEqual(calculateNumber('SUM', 1, 2), 3);
  });

  it('adds two floating numbers', () => {
    assert.strictEqual(calculateNumber('SUM', 1.2, 2.9), 4);
  });

  it('adds two floating numbers 2dp', () => {
    assert.strictEqual(calculateNumber('SUM', 1.23, 2.98), 4);
  });

  it('adds two floating numbers 4dp', () => {
    assert.strictEqual(calculateNumber('SUM', 8.3413, 5.4221), 13);
  });
});

describe('SUBTRACTION of numbers', () => {
  it('subtracts two decimal point numbers', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
  });

  it('subtracts two decimal numbers', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 12, 4), 8);
  });

  it('subtracts two signed decimal point numbers', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', -12.4, -32.4), 20);
  });

  it('subtracts two signed decimal 3 point numbers', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', -124.498, -32.490), -92);
  });
});

describe('DIVITION of numbers', () => {
  it('divides two decimal numbers', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
  });

  it('divides two decimal numbers 3dp', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 1.497, 4.528), 0.2);
  });

  it('divides two whole numbers', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 20, 10), 2);
  });

  it('divides two signed decimal numbers', () => {
    assert.strictEqual(calculateNumber('DIVIDE', -1.4, -4.5), 0.25);
  });

  it('divides two decimal numbers', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
  });

  it('divide two decimals with number b as 0', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
  });
});
