import { useEffect, useState } from "react";

const useDistricts = (divId) => {
  const [districts, setDistricts] = useState([]);

  useEffect(() => {
    if (divId) {
      fetch(`http://59.152.62.177:8085/api/Employee/District/${divId}`)
        .then((res) => res.json())
        .then((data) => {
          setDistricts(data?.readDistrictData);
        });
    }
  }, [divId]);
  return [districts, setDistricts];
};

export default useDistricts;
