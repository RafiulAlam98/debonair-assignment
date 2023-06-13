import { createBrowserRouter } from "react-router-dom";
import Homepage from "../../../Pages/Homepage/Homepage";
import UserDetails from "../../../Pages/UserDetails/UserDetails";
import Main from "../../../Layout/Main";

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
        path: "/user-details",
        element: <UserDetails />,
      },
    ],
  },
]);
export default router;
