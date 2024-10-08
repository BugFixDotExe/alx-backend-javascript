export default function updateUniqueItems(mapAsArg) {
  if (mapAsArg instanceof Map === false) { throw Error('Cannot process'); }
  for (const [key, value] of mapAsArg) {
    if (value === 1) { mapAsArg.set(key, 100); }
  }
}
