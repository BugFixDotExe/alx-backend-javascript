import getStudentsByLocation from './2-get_students_by_loc'
export default function updateStudentGradeByCity(listofStudents, city, grades) {
    if (!Array.isArray(listofStudents)){ return ([])}
    if (!Array.isArray(grades)){return ([])}
    if (!typeof city === 'string'){return new TypeError('City must be a string')}
   return listofStudents.filter((student) => student.location === city).map((filtered) => grades.map((stuGrade) => filtered.id === stuGrade.studentId ? {...filtered, 'grade' : stuGrade.grade}: ''))
}