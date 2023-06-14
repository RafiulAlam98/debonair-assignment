import { Box, Button, MenuItem, Modal, TextField } from "@mui/material";
import { useFormik } from "formik";
import React, { useState } from "react";
import useDivisions from "../../hooks/useDivisions";
import useDistricts from "../../hooks/useDistricts";
import { toast } from "react-hot-toast";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 24,
  p: 4,
};

const initialValues = {
  firstName: "",
  lastName: "",
  employeeType: "",
  districtID: "",
};

const validate = (values) => {
  let errors = {};
  if (!values.firstName) {
    errors.firstName = "Required";
  }
  if (!values.lastName) {
    errors.lastName = "Required";
  }
  if (!values.employeeType) {
    errors.employeeType = "Required";
  }
  if (!values.districtID) {
    errors.districtID = "Required";
  }
};

const AddUserModal = ({ openUserModal, handleCloseUserModal }) => {
  const [divisions] = useDivisions();
  const [selectDivision, setSelectDivison] = useState("");
  const [selectDistrict, setSelectDistrict] = useState("");
  const divId = selectDivision;
  const [districts] = useDistricts(divId);

  // console.log("districtID", selectDistrict);

  const formik = useFormik({
    initialValues,

    validate,

    onSubmit: (values) => {
      values.districtID = selectDistrict;

      console.log(values);
      fetch("http://59.152.62.177:8085/api/Employee/SaveEmployeeInformation", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(values),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.isSuccess === true) {
            handleCloseUserModal();
            toast.success("user added successfully");
          } else {
            console.log(data);
            toast.error(data.message);
          }
        });
    },
  });

  return (
    <Modal
      open={openUserModal}
      onClose={handleCloseUserModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <form onSubmit={formik.handleSubmit}>
          <TextField
            required
            sx={{ width: "45%", margin: 1 }}
            id="standard-basic firstName"
            label="First Name"
            variant="standard"
            name="firstName"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.firstName}
            size="small"
          />
          <TextField
            required
            sx={{ width: "45%", margin: 1 }}
            label="Last Name"
            variant="standard"
            name="lastName"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.lastName}
            size="small"
          />
          <TextField
            required
            sx={{ width: "45%", margin: 1 }}
            id="standard-basic employeeType"
            label="Employee Type"
            variant="standard"
            name="employeeType"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.employeeType}
            size="small"
          />
          <TextField
            required
            sx={{ width: "45%", margin: 1 }}
            id="standard-basic"
            select
            label="Please select your division"
            variant="standard"
            defaultValue=""
            size="small"
            onChange={(e) => {
              setSelectDivison(e.target.value);
            }}
          >
            {divisions.map((option) => (
              <MenuItem key={option.divID} value={option.divID}>
                {option.divisionName}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            required
            sx={{ width: "45%", margin: 1 }}
            id="standard-basic"
            select
            label="Please select your district"
            variant="standard"
            defaultValue=""
            size="small"
            onChange={(e) => {
              setSelectDistrict(e.target.value);
            }}
          >
            {districts.map((option) => (
              <MenuItem key={option.districtID} value={option.districtID}>
                {option.districtName}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            required
            sx={{ width: "45%", mt: 1 }}
            id="standard-basic districtID"
            label="District ID"
            variant="standard"
            name="districtID"
            size="small"
            onChange={formik.handleChange}
            value={selectDistrict}
          />

          <Button sx={{ mt: 2 }} size="small" type="submit" variant="contained">
            Submit
          </Button>
        </form>
      </Box>
    </Modal>
  );
};

export default AddUserModal;
