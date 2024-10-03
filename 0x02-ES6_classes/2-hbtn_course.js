export default class HolbertonCourse {
  constructor(name, length, students) {
    // Type check is performed during object creation
    if (typeof name !== 'string') throw new TypeError('Name must be a string');
    if (!Number.isInteger(length)) throw new TypeError('Length must be a number');
    const isStringorNot = students.every((item) => typeof item === 'string');
    if (!isStringorNot) throw new TypeError('Students must be an array of strings');

    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    if (typeof name !== 'string') throw new TypeError('Name must be a string');
    this._name = name;
  }

  get length() {
    return this._length;
  }

  set length(length) {
    if (!Number.isInteger(length)) throw new TypeError('Length must be a number');
    this._length = length;
  }

  get students() {
    return this._students;
  }

  set students(students) {
    if (!Array.isArray(students) || !students.every((item) => typeof item === 'string')) throw new TypeError('Students must be an array of strings');
    this._students = students;
  }
}
