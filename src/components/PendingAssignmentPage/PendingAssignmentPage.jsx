// import { useEffect, useState } from "react";
// import Swal from "sweetalert2";
// import useAuth from "../../hooks/useAuth";

// const PendingAssignmentPage = () => {
//     const { user } = useAuth();
//     const [pendingAssignments, setPendingAssignments] = useState([]);
//     const [selectedAssignment, setSelectedAssignment] = useState(null);
//     const [formData, setFormData] = useState({
//         obtainedMarks: "",
//         feedback: ""
//     });

//     useEffect(() => {
//         const fetchPendingAssignments = async () => {
//             try {
//                 const response = await fetch(`https://online-group-study-server-azure.vercel.app/pendingAssignments`);
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

//         fetchPendingAssignments();
//     }, []);



//     const handleSelectAssignment = (assignment) => {
//         setSelectedAssignment(assignment);
//     };

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         try {
//             const response = await fetch(`https://online-group-study-server-azure.vercel.app/pendingAssignmentUpdate/${selectedAssignment._id}`, {
//                 method: "PUT",
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify(formData)
//             });

//             if (response.ok) {
//                 setSelectedAssignment(null);
//                 Swal.fire({
//                     title: "Success!",
//                     text: "Marks Given!",
//                     icon: "success",
//                     confirmButtonText: "OK"
//                 });

//                 const fetchPendingAssignments = async () => {
//                     try {
//                         const response = await fetch(`https://online-group-study-server-azure.vercel.app/pendingAssignment/${user.email}`);
//                         if (response.ok) {
//                             const data = await response.json();
//                             setPendingAssignments(data);
//                         } else {
//                             throw new Error("Failed to fetch pending assignments");
//                         }
//                     } catch (error) {
//                         console.error("Error fetching pending assignments:", error);
//                     }
//                 };

//                 fetchPendingAssignments();
//             } else {
//                 throw new Error("Failed to give marks");
//             }
//         } catch (error) {
//             console.error("Error giving marks:", error);
//             Swal.fire({
//                 title: "Error!",
//                 text: "Failed to give marks. Please try again later.",
//                 icon: "error",
//                 confirmButtonText: "OK"
//             });
//         }
//     };

//     return (
//         <div>
//             <h1 className="mt-10 text-5xl font-bold text-center text-gray-800 font-sedan">Pending Assignments</h1>
//             <div className="overflow-x-auto mt-10 px-4">
//                 <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//                     {pendingAssignments.map((assignment) => (
//                         <div key={assignment._id} className="card w-full bg-white shadow-lg rounded-lg overflow-hidden">
//                             <div className="card-body p-4 border-2 border-pink-700 lg:h-[200px]">
//                                 <h2 className="card-title text-xl font-semibold text-gray-900 mb-2">Assignment Title: {assignment.title}</h2>
//                                 <p className="text-gray-700 mb-1">Assignment Mark: {assignment.marks}</p>
//                                 <p className="text-gray-700 mb-4">Examinee Name: {assignment.studentEmail}</p>
//                                 <div className="card-actions flex justify-end">
//                                     <button className="btn bg-pink-400 border-pink-800 text-black text-xl hover:bg-white hover:text-black hover:border-pink-700" onClick={() => handleSelectAssignment(assignment)}>Give Marks</button>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>

//             {selectedAssignment && (
//                 <div className="fixed inset-0 flex items-center justify-center z-50">
//                     <div className="absolute inset-0 bg-black opacity-50"></div>
//                     <div className="bg-white p-8 rounded-lg z-10 shadow-xl w-full max-w-md mx-auto">
//                         <h2 className="text-2xl font-semibold mb-4 text-gray-800">Give Marks</h2>
//                         <div className="mb-4">
//                             <p><strong>PDF Link:</strong> <a href={selectedAssignment.pdfURL} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">{selectedAssignment.pdfURL}</a></p>
//                             <p className="mt-2"><strong>Notes:</strong> {selectedAssignment.quickNote}</p>
//                         </div>
//                         <form onSubmit={handleSubmit}>
//                             <div className="mb-4">
//                                 <label htmlFor="marks" className="block text-sm font-medium text-gray-700">Marks</label>
//                                 <input type="text" name="obtainedMarks" id="marks" value={formData.obtainedMarks} onChange={handleChange} placeholder="Marks" className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded py-2 px-3 focus:ring-blue-500 focus:border-blue-500" />
//                             </div>
//                             <div className="mb-4">
//                                 <label htmlFor="feedback" className="block text-sm font-medium text-gray-700">Feedback</label>
//                                 <textarea name="feedback" id="feedback" value={formData.feedback} onChange={handleChange} placeholder="Feedback" className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded py-2 px-3 focus:ring-blue-500 focus:border-blue-500" />
//                             </div>
//                             <div className="flex justify-end">
//                                 <button type="submit" className="btn bg-pink-400 border-pink-800 text-black hover:bg-white hover:text-black hover:border-pink-700">Submit</button>
//                                 <button type="button" onClick={() => setSelectedAssignment(null)} className="ml-4 bg-gray-400 text-white px-4 py-2 rounded-md hover:bg-gray-500">Cancel</button>
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default PendingAssignmentPage;
