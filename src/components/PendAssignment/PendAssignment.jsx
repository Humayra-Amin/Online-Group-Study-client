// // import { useLoaderData } from "react-router-dom";
// import MyAssignmentCard from "../MyAssignmentCard/MyAssignmentCard";
// import useAuth from "../../hooks/useAuth";
// import { useEffect, useState } from "react";
// import { Helmet } from "react-helmet-async";

// const PendAssignment = () => {
//     const { user } = useAuth();
//     const userEmail = user?.email;

//     const [pendingAssignments, setPendingAssignments] = useState([]);

//     useEffect(() => {
//         const fetchPendingAssignments = async () => {
//             try {
//                 const response = await fetch(`http://localhost:5000/pendingAssignment/${userEmail}`);
//                 if (response.ok) {
//                     const data = await response.json();
//                     setPendingAssignments(data);
//                 } else {
//                     throw new Error("Failed to fetch pending assignments");
//                 }
//             } catch (error) {
//                 console.error("Error fetching pending assignments:", error);
//             }
//         };

//         if (userEmail) {
//             fetchPendingAssignments();
//         }
//     }, [userEmail]);

//     return (
//         <div>
//             <Helmet>
//                 <title>Study Bizz | Pending Assignment</title>
//                 <link rel="icon" type="image/jpg" href="/src/assets/images/icon.png" />
//             </Helmet>

//             <h1 className="mt-10 text-5xl font-sedan text-center">Pending Assignments</h1>
//             <div className="overflow-x-auto mt-14">
//                 <div className="grid md:grid-cols-2 lg:grid-cols-2 lg:gap-5 md:gap-2">
//                     {pendingAssignments.map((assignment) => (
//                         <MyAssignmentCard key={assignment._id} assignments={assignment} />
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default PendAssignment;
