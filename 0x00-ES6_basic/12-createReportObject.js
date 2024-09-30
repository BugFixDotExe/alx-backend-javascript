export default function createReportObject(employeesList) {
  const employeesListObj = {
    allEmployees: { ...employeesList },
    getNumberOfDepartments(objKey) {
      return Object.values(objKey).length;
    },
  };
  return (employeesListObj);
}
