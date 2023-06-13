import React from "react";
import { useQuery } from "react-query";
import Loading from "../components/Loading/Loading";

const useEmployee = () => {
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
  // console.log(employees?.readEmployeeData);
  return { employees, refetch, isLoading };
};

export default useEmployee;
