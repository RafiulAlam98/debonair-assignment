import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@material-ui/core";
import React from "react";
import AddUserModal from "../../components/AddUserModal/AddUserModal";
import useEmployee from "../../hooks/useEmployee";
import Loading from "../../components/Loading/Loading";

const UserTab = () => {
  const [openModal, setOpenModal] = React.useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);
  const { employees, isLoading } = useEmployee()
  if (isLoading) {
    return <Loading/>
  }
  return (
    <React.Fragment>
      <Button onClick={handleOpenModal}>Open modal</Button>
      <AddUserModal openModal={openModal} handleCloseModal={handleCloseModal} />
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
              employee.employeeType === "Admin"  &&
            <TableRow
              key={employee.empID}
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

export default UserTab;
