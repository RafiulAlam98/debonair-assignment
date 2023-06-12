import { Button } from "@mui/material";
import React from "react";
import AddUserModal from "../../../components/AddUserModal/AddUserModal";

const Users = () => {
  const [openModal, setOpenModal] = React.useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  return (
    <div>
      <Button onClick={handleOpenModal}>Add User</Button>
      <AddUserModal openModal={openModal} handleCloseModal={handleCloseModal} />
    </div>
  );
};

export default Users;
