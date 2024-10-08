export default function setFromArray(polyArray) {
    if (!Array.isArray(polyArray)){return new TypeError('Must be an Array of any data type')}
    return new Set(polyArray)
}