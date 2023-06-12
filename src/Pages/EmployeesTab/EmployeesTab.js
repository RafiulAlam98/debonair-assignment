import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import React from "react";
import { useQuery } from "react-query";
import Loading from "../../components/Loading/Loading";

const EmployeesTab = () => {
  const {
    data: employees = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["employees"],
    queryFn: async () => {
      const result = await fetch(
        `http://59.152.62.177:8085/api/Employee/EmployeeData`
      );
      const data = await result.json();
      return data;
    },
  });

  if (isLoading) {
    return <Loading />;
  }
  console.log(employees.readEmployeeData);
  return (
    <React.Fragment>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">First Name</TableCell>
              <TableCell align="center">Last Name</TableCell>
              <TableCell align="center">District</TableCell>
              <TableCell align="center">Division</TableCell>
              <TableCell align="center">Employee Type</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {employees.readEmployeeData.map((employee) => (
              <TableRow
                key={employee.firstName}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center">{employee.firstName}</TableCell>
                <TableCell align="center">{employee.lastName}</TableCell>
                <TableCell align="center">{employee.district}</TableCell>
                <TableCell align="center">{employee.disvision}</TableCell>
                <TableCell align="center">{employee.employeeType}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </React.Fragment>
  );
};

export default EmployeesTab;
