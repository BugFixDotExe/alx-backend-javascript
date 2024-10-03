export default class Currency {
  constructor(code, name) {
    if (typeof code !== 'string' || typeof name !== 'string') {
      throw new TypeError('Code and or Name, must both be strings.');
    }
    this._code = code;
    this._name = name;
  }

  get code() { return this._code; }

  set code(code) {
    if (typeof code !== 'string') { throw TypeError('Code must be of type string'); }
    this._code = code;
  }

  get name() { return this._name; }

  set name(name) {
    if (typeof name !== 'string') { throw TypeError('Name must be of type string'); }
    this._name = name;
  }

  displayFullCurrency() {
    return (`${this.name} (${this._code})`);
  }
}
