const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToAPI', () => {
  let consolespy;
  beforeEach(() => {
    consolespy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    consolespy.restore();
  });
  it('console is logging the string The total is: 120 & is called 1', () => {
    sendPaymentRequestToApi(100, 20);
    expect(consolespy.calledWith('The total is: 120')).to.equal(true);
    expect(consolespy.calledOnce).to.equal(true);
  });

  it('console is logging the string The total is: 10 & is called 1', () => {
    sendPaymentRequestToApi(10, 10);
    expect(consolespy.calledWith('The total is: 20')).to.equal(true);
    expect(consolespy.calledOnce).to.equal(true);
  });
});
