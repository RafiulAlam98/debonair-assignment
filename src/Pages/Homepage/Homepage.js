import { Tab, Tabs } from "@material-ui/core";
import React, { useState } from "react";

import EmployeesTab from "../EmployeesTab/EmployeesTab";
import UserTab from "../UserTab/UserTab";

function Homepage() {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <div>
      <Tabs value={tabValue} onChange={handleTabChange}>
        <Tab label="User" />
        <Tab label="Employees" />
      </Tabs>

      {tabValue === 0 && <UserTab />}
      {tabValue === 1 && <EmployeesTab />}
    </div>
  );
}

export default Homepage;
