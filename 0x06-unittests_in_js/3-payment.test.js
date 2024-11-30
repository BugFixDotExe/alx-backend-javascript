const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
  it('check if the function was called', () => {
    const utilsWrapper = sinon.spy(Utils, 'calculateNumber');
    sendPaymentRequestToApi(100, 20);
    expect(utilsWrapper.called).to.equal(true);
    utilsWrapper.restore();
  });

  it('check if it was called with the right argunments', () => {
    const utilsWrapper = sinon.spy(Utils, 'calculateNumber');
    sendPaymentRequestToApi(100, 20);
    expect(utilsWrapper.calledWith('SUM', 100, 20)).to.equal(true);
    utilsWrapper.restore();
  });
});
