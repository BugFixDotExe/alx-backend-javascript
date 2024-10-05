import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    // Ensure that 'floors' is an integer
    if (!Number.isInteger(floors)) {
      throw new TypeError('Floors must be a number');
    }

    // Call parent class constructor with 'sqft'
    super(sqft);

    // Set the floors as a private property
    this._floors = floors;
  }

  // Getter for sqft (uses parent's getter)
  get sqft() {
    return super.sqft;
  }

  // Getter for floors
  get floors() {
    return this._floors;
  }

  // Override method to return the evacuation message
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this.floors} floors.`;
  }
}
