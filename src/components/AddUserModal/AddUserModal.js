import { Box, Button, MenuItem, Modal, TextField } from "@mui/material";
import { useFormik } from "formik";
import React, { useState } from "react";
import * as Yup from 'yup';
import useDivisions from "../../hooks/useDivisions";
import useDistricts from "../../hooks/useDistricts";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 450,
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 24,
  p: 4,
};

const AddUserModal = ({ openModal, handleCloseModal }) => {
  const [divisions] = useDivisions()
  const [selectDivision, setSelectDivison] = useState("")
  const [selectDistrict, setSelectDistrict] = useState("")
  const divId = selectDivision
  const [districts] = useDistricts(divId)

  console.log("districeID",selectDistrict)

  const formik = useFormik({
    
    initialValues: {
      firstName: "",
      lastName: "",
      employeeType: "",
      districeID: selectDistrict,
    },
  
    onSubmit: (values) => {
      console.log(values);

      // fetch("http://59.152.62.177:8085/api/SaveEmployeeInformation", {
      //   method: "POST",
      //   headers: {
      //     "content-type": "application/json",
      //   },
      //   body: JSON.stringify(values),
      // })
      //   .then((res) => res.json())
      //   .then((data) => {
      //     if (data.acknowledged === true) {
      //       console.log(data);
      //     } else {
      //       console.log(data);
      //     }
      //   });
    },
  });

  

  return (
    <Modal
      open={openModal}
      onClose={handleCloseModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <form onSubmit={formik.handleSubmit}>
          <TextField
            required
            sx={{ width: "100%" }}
            id="standard-basic firstName"
            label="First Name"
            variant="standard"
            name="firstName"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.firstName}
          />
          <TextField
            required
            sx={{ width: "100%", mt: 4 }}
            label="Last Name"
            variant="standard"
            name="lastName"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.lastName}
          />
          <TextField
            required
            sx={{ width: "100%", mt: 4 }}
            id="standard-basic employeeType"
            label="Employee Type"
            variant="standard"
            name="employeeType"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.employeeType}
          />
          <TextField
            required
            sx={{ width: "100%", mt: 4 }}
            id="standard-basic"
            select
            label="Select"
            variant="standard"
            defaultValue=""
            onChange={(e=>{setSelectDivison(e.target.value)})}
            helperText="Please select your division"
          >
            {divisions.map((option) => (
              <MenuItem key={option.divID} value={option.divID}>
                {option.divisionName}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            required
            sx={{ width: "100%", mt: 4 }}
            id="standard-basic"
            select
            label="Select"
            variant="standard"
            defaultValue=""
            onChange={(e=>{setSelectDistrict(e.target.value)})}
            helperText="Please select your district"
          >
            {districts.map((option) => (
              <MenuItem key={option.districtID} value={option.districtID}>
                {option.districtName}
              </MenuItem>
            ))}
          </TextField>
        
          <TextField
            required
            sx={{ width: "100%", mt: 4 }}
            id="standard-basic districeID"
            label="District ID"
            variant="standard"
            name="districeID"
            onChange={formik.handleChange}
            value={selectDistrict}
          />

          <Button sx={{ marginTop: 4 }} type="submit" variant="contained">
            Submit
          </Button>
        </form>
      </Box>
    </Modal>
  );
};

export default AddUserModal;
