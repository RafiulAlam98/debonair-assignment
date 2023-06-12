import { createBrowserRouter } from "react-router-dom";
import Homepage from "../../../Pages/Homepage/Homepage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
    children: [],
  },
]);
export default router;
