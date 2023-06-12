import { Button } from "@material-ui/core";
import React from "react";
import AddUserModal from "../../components/AddUserModal/AddUserModal";

const UserTab = () => {
  const [openModal, setOpenModal] = React.useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);
  return (
    <React.Fragment>
      <Button onClick={handleOpenModal}>Open modal</Button>
      <AddUserModal openModal={openModal} handleCloseModal={handleCloseModal} />
    </React.Fragment>
  );
};

export default UserTab;
