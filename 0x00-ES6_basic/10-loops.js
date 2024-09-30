export default function appendToEachArrayValue(array, appendString) {
  for (const idx of array) {
    const index = array.indexOf(idx);
    const newString = appendString + idx;
    array.splice(index, 1, newString);
  }

  return array;
}
