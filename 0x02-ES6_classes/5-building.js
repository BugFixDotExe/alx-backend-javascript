export default class Building {
  constructor(sqft) {
    if (!Number.isInteger(sqft)) { throw new TypeError('Sqft must be a number'); }
    this._sqft = sqft;
    if (
      this.evacuationWarningMessage
      === Building.prototype.evacuationWarningMessage
      && this.constructor !== Building) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }

  get sqft() { return this._sqft; }

  static evacuationWarningMessage() {}
}
