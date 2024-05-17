import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";

const AssignmentDetails = () => {
    const assignments = useLoaderData();
    const { user } = useAuth();
    const { title, description, image, marks, difficultyLevel, userEmail } = assignments;
    const [showModal, setShowModal] = useState(false);


    const [formData, setFormData] = useState({
        pdfURL: "",
        quickNote: "",
        userEmail: userEmail,
        studentEmail: user?.email,
        status: "pending",
        title: title,
        description: description,
        marks: marks,
        difficultyLevel: difficultyLevel,
        feedback: "Not given",
        obtainedMarks: "Not scored",        
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (formData.pdfURL !== '') {
            console.log(formData);
            try {
               
                console.log(formData);
    
                const response = await fetch("https://online-group-study-server-azure.vercel.app/submitAssignment", {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formData)
                });
    
                console.log("Response:", response);
    
                if (response.ok) {
                    setShowModal(false);
                    Swal.fire({
                        title: "Success!",
                        text: "Assignment submitted successfully!",
                        icon: "success",
                        confirmButtonText: "OK"
                    });
                    setFormData({
                        pdfURL: "",
                        quickNote: "",
                        userEmail: userEmail,
                        studentEmail: user?.email,
                        status: "pending",
                        title: title,
                        description: description,
                        marks: marks,
                        difficultyLevel: difficultyLevel,
                        feedback: "Not given",
                        obtainedMarks: "Not scored", 
                    });
                } else {
                    throw new Error("Failed to submit assignment");
                }
            } catch (error) {
                console.error("Error submitting assignment:", error);
                Swal.fire({
                    title: "Error!",
                    text: "Failed to submit assignment. Please try again later.",
                    icon: "error",
                    confirmButtonText: "OK"
                });
            }
        }
        else{
            Swal.fire({
                title: "Error!",
                text: "Failed to submit assignment. Must Provide PDF link.",
                icon: "error",
                confirmButtonText: "OK"
            });
        }
    };
    

    return (
        <div>
            <Helmet>
                <title>Study Bizz | Assignments Details</title>
                <link rel="icon" type="image/jpg" href="/src/assets/images/icon.png" />
            </Helmet>



            <div className="container mx-auto w-10/12 lg:w-4/5 font-roboto">

                <h2 className="text-5xl font-bold font-sedan mt-10 text-center">{title}</h2>

                <div className="card lg:card-side mt-14 bg-base-200 shadow-lg border-2 border-pink-600 font-roboto">

                    <figure><img src={image} alt="Album" className="rounded-t-lg lg:rounded-l-lg bg-[#1313130D] w-[573px] h-[411px] lg:w-[650px] lg:h-[750px] md:w-[650px] md:h-[571px] border-2 border-pink-600" /></figure>

                    <div className="lg:ml-14">

                        <h2 className="card-title text-3xl lg:text-5xl ml-4 lg:ml-1 mt-4 lg:mt-20 md:mt-2 md:ml-4 font-roboto">{title}</h2>

                        <p className="lg:text-xl ml-4 mt-2 lg:ml-1 lg:mt-12 font-bold font-roboto md:ml-4">Description: <span className="font-normal">{description}</span></p>


                        <p className="lg:text-xl ml-4 mt-2 lg:ml-1 lg:mt-12 font-bold font-roboto md:ml-4">Marks: <span className="font-normal">{marks}</span></p>


                        <p className="lg:text-xl ml-4 mt-2 lg:ml-1 lg:mt-12 font-bold font-roboto md:ml-4">Difficulty Level: <span className="font-normal">{difficultyLevel}</span></p>


                        <button onClick={() => setShowModal(true)} className="btn bg-pink-400 border-pink-800 text-black lg:text-xl hover:bg-white hover:text-black hover:border-pink-700 mb-4 ml-4 lg:mb-0 lg:ml-0 lg:mt-20 md:ml-4 md:mb-4">Take Assignments</button>

                    </div>

                </div>

            </div>

            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                    <div className="bg-white p-8 rounded-lg z-10">
                        <h2 className="text-2xl font-semibold mb-4">Submit Assignment</h2>

                        <div className="mb-4">
                            <label htmlFor="pdfURL" className="block text-sm font-medium text-black">PDF URL</label>
                            <input type="text" name="pdfURL" id="pdfURL" value={formData.pdfURL} onChange={handleChange} placeholder="PDF URL" className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded py-2 px-2" />
                        </div>


                        <div className="mb-4">
                            <label htmlFor="quickNote" className="block text-sm font-medium text-black">Quick Note</label>
                            <input type="text" name="quickNote" id="quickNote" value={formData.quickNote} onChange={handleChange} placeholder="Quick Note" className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded py-2 px-2" />
                        </div>

                        <button onClick={handleSubmit} className="bg-pink-400 text-white px-4 py-2 rounded-md hover:bg-pink-500">Submit</button>

                    </div>
                </div>
            )}
        </div>
    );
};

export default AssignmentDetails;