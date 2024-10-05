import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    if (!Number.isInteger(floors)) { return new TypeError('Floors must be a Number'); }
    super(sqft);
    this._floors = floors;
  }

  get sqft() { return this._sqft; }

  get floors() { return this._floors; }

  evacuationWarningMessage() {
    return (`Evacuate slowly the ${this.floors} floors.`);
  }
}
