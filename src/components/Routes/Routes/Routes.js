import { createBrowserRouter } from "react-router-dom";
import Homepage from "../../../Pages/Homepage/Homepage";
import UserDetails from "../../../Pages/UserDetails/UserDetails";
import Main from "../../../Layout/Main";
import EmployeeDetails from "../../../Pages/EmployeeDetails/EmployeeDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/home",
        element: <Homepage />,
      },
      {
        path: "/user-details/:id",
        element: <UserDetails />,
      },
      {
        path: "/employee-details/:id",
        element: <EmployeeDetails />,
      },
    ],
  },
]);
export default router;
