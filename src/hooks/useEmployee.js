import { useEffect, useState } from "react";

const useEmployee = () => {
  const [employees, setEmployees] = useState([]);
  const [displayEmployees, setDisplayEmployees] = useState([]);

  useEffect(() => {
    fetch("http://59.152.62.177:8085/api/Employee/EmployeeData")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.readEmployeeData);
        setEmployees(data.readEmployeeData);
        setDisplayEmployees(data.readEmployeeData);
      });
  }, []);
  // console.log(employees?.readEmployeeData);
  return { employees, displayEmployees, setDisplayEmployees };
};

export default useEmployee;
