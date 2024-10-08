export default function cleanSet(inputSet, startString) {
  if (inputSet instanceof Set === false) { return ('Input must be a set'); }
  if (typeof startString !== 'string' || startString.length === 0) { return ''; }
  const completeString = [];
  for (const item of inputSet) {
    if (startString === item.slice(0, startString.length)) {
      completeString.push(item.slice(startString.length));
    }
  }
  return completeString.join('-');
}
