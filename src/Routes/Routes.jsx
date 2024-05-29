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
import AssignmentDetails from "../components/AssignmentDetails/AssignmentDetails";
import PendingAssignmentsPage from "../components/PendingAssignmentPage/PendingAssignmentPage";
import MyAssignment from "../components/MyAssignment/MyAssignment";
import CommentForm from "../components/Comments/CommentForm";
import Comments from "../components/Comments/Comments";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('https://online-group-study-server-azure.vercel.app/assignments'),
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
        element: <ProtectedRoute>
          <UpdateAssignments></UpdateAssignments>,
        </ProtectedRoute>,
        loader: ({ params }) => fetch(`https://online-group-study-server-azure.vercel.app/assignments/${params._id}`)
      },
      {
        path: '/assignments',
        element: <Assignments></Assignments>,
        loader: () => fetch('https://online-group-study-server-azure.vercel.app/assignments'),
      },
      {
        path: '/assignments/:_id',
        element: <ProtectedRoute>
          <AssignmentDetails></AssignmentDetails>,
        </ProtectedRoute>,
        loader: ({ params }) => fetch(`https://online-group-study-server-azure.vercel.app/assignments/${params._id}`)
      },
      {
        path: '/myAssignment/:studentEmail',
        element: <ProtectedRoute>
          <MyAssignment></MyAssignment>,
        </ProtectedRoute>,
        loader: ({ params }) => fetch(`https://online-group-study-server-azure.vercel.app/myAssignment/${params.studentEmail}`)
      },
      {
        path: '/pendingAssignment/:userEmail',
        element: <ProtectedRoute>
          <PendingAssignmentsPage></PendingAssignmentsPage>,
        </ProtectedRoute>,
        loader: ({ params }) => fetch(`https://online-group-study-server-azure.vercel.app/pendingAssignment/${params.userEmail}`)
      },
      {
        path: '/comments',
        element: <ProtectedRoute>
          <CommentForm></CommentForm>
        </ProtectedRoute>,
        loader: () => fetch('http://localhost:5000/comments'),
    },
    {
      path: '/comments',
      element: <Comments></Comments>, 
      loader: async () => {
          const response = await fetch('http://localhost:5000/comments');
          const comments = await response.json();
          return { comments };
      },
  },
      
    ]
  },
]);

export default router;