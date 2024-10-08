export default function createInt8TypedArray(length, position, value) {
  if (!Number.isInteger(length)) { return new TypeError('Length must be a number'); }
  if (!Number.isInteger(position)) { return new TypeError('Position must be a number'); }
  if (!Number.isInteger(value)) { return new TypeError('Value must be a number'); }

  if (position > (length - 1)) { return new Error('Position outside range'); }

  const uint8Buffer = new ArrayBuffer(length);
  const dataView = new DataView(uint8Buffer);
  dataView.setUint8(position, value);

  return (dataView);
}
