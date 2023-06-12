import { createBrowserRouter } from "react-router-dom";
import Main from "../../../Layout/Main";
import Employees from "../../../Pages/Employees/Employees/Employees";
import Users from "../../../Pages/Users/Users/Users";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Users />,
      },
      {
        path: "users",
        element: <Users />,
      },
      {
        path: "employees",
        element: <Employees />,
      },
    ],
  },
]);
export default router;
