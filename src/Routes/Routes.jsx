import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import CreateAssignment from "../components/CreateAssignment/CreateAssignment";
import Assignments from "../components/Assignments/Assignments";
import ProtectedRoute from "../components/ProtectedRoute/ProtectedRoute";
import UpdateAssignments from "../components/UpdateAssignments/UpdateAssignments";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/assignments'),
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/register',
        element: <Register></Register>,
      },
      {
        path: '/CAssignments',
        element: <ProtectedRoute>
          <CreateAssignment></CreateAssignment>
        </ProtectedRoute>,
      },
      {
        path: '/updateAssignments/:_id',
        element: <UpdateAssignments></UpdateAssignments>,
        loader: ({params}) => fetch(`http://localhost:5000/assignments/${params._id}`)
      },
      {
        path: '/assignments',
        element: <Assignments></Assignments>,
        loader: () => fetch('http://localhost:5000/assignments'),
      },
    ]
  },
]);

export default router;