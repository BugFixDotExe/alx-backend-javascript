import setFromArray from './6-set';

export default function hasValuesFromArray(setOfArray, sinlgeArray) {
  if (!Array.isArray(sinlgeArray)) { return new TypeError('Must be an Array or Set'); }

  const arraySet = setFromArray(sinlgeArray);
  return setOfArray.isSupersetOf(arraySet);
}
