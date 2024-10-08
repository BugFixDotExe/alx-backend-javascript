import getListStudentIds from './1-get_list_student_ids';

export default function getStudentIdsSum(listOfStudents) {
  if (!Array.isArray(listOfStudents)) { return []; }
  const studentIds = getListStudentIds(listOfStudents);
  return studentIds.reduce((prevSum, currentId) => prevSum + currentId);
}
