import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import React from "react";
import useEmployee from "../../hooks/useEmployee";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const EmployeesTab = () => {
  const { employees } = useEmployee();

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
              <TableCell align="center"></TableCell>
              <TableCell align="center"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {employees?.readEmployeeData.map(
              (employee) =>
                employee.employeeType === "Employee" && (
                  <TableRow
                    key={employee.empID}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="center">{employee.firstName}</TableCell>
                    <TableCell align="center">{employee.lastName}</TableCell>
                    <TableCell align="center">{employee.district}</TableCell>
                    <TableCell align="center">{employee.disvision}</TableCell>
                    <TableCell align="center">
                      {employee.employeeType}
                    </TableCell>
                    <TableCell align="center">
                      <Button variant="contained">
                        <Link
                          to={`/employee-details/${employee.empID}`}
                          style={{ textDecoration: "none" }}
                        >
                          Details
                        </Link>
                      </Button>
                    </TableCell>
                    <TableCell align="center">
                      <Button variant="contained">Update</Button>
                    </TableCell>
                  </TableRow>
                )
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </React.Fragment>
  );
};

export default EmployeesTab;
