export default function getListStudentIds(outterArray) {
  if (!Array.isArray(outterArray)) { return []; }
  return outterArray.map((item) => item.id);
}
