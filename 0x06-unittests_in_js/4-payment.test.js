const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./4-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
  it('check if the function was called', () => {
    const utilsWrapper = sinon.stub(Utils, 'calculateNumber').returns(10);
    sendPaymentRequestToApi(100, 20);
    expect(utilsWrapper.calledWith('SUM', 100, 20)).to.equal(true);
    utilsWrapper.restore();
  });

  it('check the console for the value', () => {
    const utilsWrapper = sinon.stub(Utils, 'calculateNumber').returns(10);
    const consoleSpy = sinon.spy(console, 'log');
    sendPaymentRequestToApi(100, 20);
    expect(consoleSpy.calledWith('The total is: 10')).to.equal(true);
    utilsWrapper.restore();
    consoleSpy.restore();
  });
});
