export default function getStudentsByLocation(listOfStudents, city) {
  if (!Array.isArray(listOfStudents)) { return []; }
  return listOfStudents.filter((item) => item.location === city);
}
