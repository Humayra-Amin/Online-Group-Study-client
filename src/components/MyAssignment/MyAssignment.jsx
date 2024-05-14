// import { Helmet } from "react-helmet-async";
// import { useLoaderData } from "react-router-dom";
// import { useState } from "react";
// import MyAssignmentCard from "../MyAssignmentCard/MyAssignmentCard";

// const MyAssignment = () => {
//   const assignment = useLoaderData();

//   const [allAssignment, setAllAssignment] = useState(assignment);
//   console.log(allAssignment);


//   return (
//     <div className='flex flex-col items-center'>

//       <Helmet>
//         <title>Study Bizz | My Assignment</title>
//         <link rel="icon" type="image/jpg" href="/src/assets/images/icon.png" />
//       </Helmet>


//       <h1 className="mt-10 text-5xl font-sedan text-center">My List</h1>

//       <div className="overflow-x-auto mt-14">
//         <table className="table table-xs md:table-md lg:table-lg border-amber-500 bg-amber-200">
//           <thead className="text-xs md:text-[14px] lg:text-xl text-center">
//             <tr>
//               <th>Tourist Spot</th>
//               <th>Travel Time</th>
//               <th>Average Cost</th>
//               <th></th>
//               <th></th>
//             </tr>
//           </thead>
//           <tbody>
//             {
//               allAssignment.map(assignments => <MyAssignmentCard key={assignments._id} assignments={assignments} allAssignment={allAssignment} setAllAssignment={setAllAssignment}></MyAssignmentCard>)
//             }
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default MyAssignment;
