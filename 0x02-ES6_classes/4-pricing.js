import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    if (!Number.isInteger(amount)) { throw new TypeError('Amount must be of type Number'); }
    if (currency instanceof Currency === false) { throw new TypeError('Currency must be of type Currency'); }
    this._amount = amount;
    this._currency = currency;
  }

  get amount() { return this._amount; }

  set amount(amount) {
    if (!Number.isInteger(amount)) { throw new TypeError('Amount must be of type Number'); }
    this._amount = amount;
  }

  get currency() { return this._currency; }

  set currency(currency) {
    if (currency instanceof Currency === false) {
      throw new TypeError('Currency must be of type Currency');
    }
    this._currency = currency;
  }

  displayFullPrice() {
    return (`${this.amount} ${this.currency.name} (${this.currency.code})`);
  }

  static convertPrice(amount, conversionRate) {
    if (!Number.isInteger(amount)) { throw TypeError('Amount must be a number or int'); }
    if (!Number.isInteger(conversionRate)) { throw TypeError('ConversionRate must be a number or int'); }
    return (amount * conversionRate);
  }
}
