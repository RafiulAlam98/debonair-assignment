import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../../components/Loading/Loading";
import { Card, CardContent, Typography } from "@material-ui/core";

const EmployeeDetails = () => {
  const { id } = useParams();
  const {
    data: user = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const result = await fetch(
        `http://59.152.62.177:8085/api/Employee/IndividualEmployeeData/${id}`
      );
      const data = await result.json();
      return data;
    },
  });

  if (isLoading) {
    return <Loading />;
  }
  console.log(user.readEmployeeData[0]);
  return (
    <React.Fragment>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Name: {user.readEmployeeData[0].firstName}
            <span> {user.readEmployeeData[0].lastName}</span>
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Type: {user.readEmployeeData[0].employeeType}
          </Typography>
        </CardContent>
      </Card>
    </React.Fragment>
  );
};

export default EmployeeDetails;
