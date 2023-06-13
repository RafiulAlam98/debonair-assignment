import { useEffect, useState } from "react";

const useDivisions = () => {
  const [divisions, setDivisions] = useState([]);
  useEffect(() => {
    fetch("http://59.152.62.177:8085/api/Employee/Division")
      .then((res) => res.json())
      .then((data) => {
        setDivisions(data.readDivisionData);
      });
  }, []);
  return [divisions, setDivisions];
};

export default useDivisions;
