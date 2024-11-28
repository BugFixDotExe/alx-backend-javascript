const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('SUMMATION of numbers not the SIGMA kind', () => {
  it('adds two decimal numbers', () => {
    expect(calculateNumber('SUM', 1, 2)).to.equal(3);
  });

  it('adds two floating numbers', () => {
    expect(calculateNumber('SUM', 1.2, 2.9)).to.equal(4);
  });

  it('adds two floating numbers 2dp', () => {
    expect(calculateNumber('SUM', 1.23, 2.98)).to.equal(4);
  });

  it('adds two floating numbers 4dp', () => {
    expect(calculateNumber('SUM', 8.3413, 5.4221)).to.equal(13);
  });
});

describe('SUBTRACTION of numbers', () => {
  it('subtracts two decimal point numbers', () => {
    expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
  });

  it('subtracts two decimal numbers', () => {
    expect(calculateNumber('SUBTRACT', 12, 4)).to.equal(8);
  });

  it('subtracts two signed decimal point numbers', () => {
    expect(calculateNumber('SUBTRACT', -12.4, -32.4)).to.equal(20);
  });

  it('subtracts two signed decimal 3 point numbers', () => {
    expect(calculateNumber('SUBTRACT', -124.498, -32.490)).to.equal(-92);
  });
});

describe('DIVITION of numbers', () => {
  it('divides two decimal numbers', () => {
    expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
  });

  it('divides two decimal numbers 3dp', () => {
    expect(calculateNumber('DIVIDE', 1.497, 4.528)).to.equal(0.2);
  });

  it('divides two whole numbers', () => {
    expect(calculateNumber('DIVIDE', 20, 10)).to.equal(2);
  });

  it('divides two signed decimal numbers', () => {
    expect(calculateNumber('DIVIDE', -1.4, -4.5)).to.equal(0.25);
  });

  it('divides two decimal numbers', () => {
    expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
  });

  it('divide two decimals with number b as 0', () => {
    expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
  });
});
