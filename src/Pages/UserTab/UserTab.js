import {
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@material-ui/core";
import React from "react";
import AddUserModal from "../../components/AddUserModal/AddUserModal";
import useEmployee from "../../hooks/useEmployee";
import { Link } from "react-router-dom";
import UpdateUserModal from "../../components/UpdateUserModal/UpdateUserModal";

const UserTab = () => {
  const [openModal, setOpenModal] = React.useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);
  const handleOpenUpdateModal = () => setOpenModal(true);
  const handleCloseUpdateModal = () => setOpenModal(false);
  const { employees, displayEmployees, setDisplayEmployees } = useEmployee();

  const handleSearch = (e) => {
    const searchProduct = e.target.value;

    const matchProduct = employees?.filter((emp) =>
      emp.firstName.toLowerCase().includes(searchProduct.toLowerCase())
    );
    console.log(matchProduct);
    setDisplayEmployees(matchProduct);
  };
  return (
    <React.Fragment>
      <Button onClick={handleOpenModal} style={{ marginBottom: 10 }}>
        Add New User
      </Button>
      <AddUserModal openModal={openModal} handleCloseModal={handleCloseModal} />
      <UpdateUserModal
        openUpdateModal={openModal}
        handleCloseUpdateModal={handleCloseUpdateModal}
      />
      <Box sx={{ marginTop: 10 }}>
        <TextField
          onChange={handleSearch}
          sx={{ width: "100%", marginTop: 10 }}
          id="outlined-basic"
          label="Search User"
          variant="outlined"
          size="small"
        />
      </Box>
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
            {displayEmployees?.map(
              (employee) =>
                employee.employeeType === "Admin" && (
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
                          to={`/user-details/${employee.empID}`}
                          style={{ textDecoration: "none" }}
                        >
                          Details
                        </Link>
                      </Button>
                    </TableCell>
                    <TableCell align="center">
                      <Button
                        onClick={handleOpenUpdateModal}
                        variant="contained"
                      >
                        Update
                      </Button>
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

export default UserTab;
