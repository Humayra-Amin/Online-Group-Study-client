import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";


const AssignmentDetails = () => {

    const assignments = useLoaderData();

    const { user } = useAuth();

    const { title, description, image, marks, difficultyLevel } = assignments;

    const [showModal, setShowModal] = useState(false);

    const [pdfFile, setPdfFile] = useState(null);

    const [quickNote, setQuickNote] = useState("");
    

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setPdfFile(file);
    };

    const handleSubmit = async () => {
        try {
            console.log("Submitting assignment...");
            const formData = new FormData();
            formData.append("assignmentId", assignments._id);
            formData.append("pdfFile", pdfFile);
            formData.append("quickNote", quickNote);
            formData.append("userEmail", `${user?.email}`);

            const response = await fetch("https://online-group-study-server-azure.vercel.app/submit-assignment", {
                method: "POST",
                body: formData,
            });

            console.log("Response:", response);

            if (response.ok) {
                setPdfFile(null);
                setQuickNote("");
                setShowModal(false);
                Swal.fire({
                    title: "Success!",
                    text: "Assignment submitted successfully!",
                    icon: "success",
                    confirmButtonText: "OK"
                });
            } else {
                throw new Error("Failed to submit assignment");
            }
        } catch (error) {
            console.error("Error submitting assignment:", error);
            Swal.fire({
                title: "Error!",
                text: "Failed to submit assignment",
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

                    <figure><img src={image} alt="Album" className="rounded-t-lg lg:rounded-l-lg bg-[#1313130D] w-[573px] h-[411px] lg:w-[550px] lg:h-[550px] md:w-[650px] md:h-[571px] border-2 border-pink-600" /></figure>

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
                            <label className="block mb-1">PDF/Doc File</label>
                            <input type="file" onChange={handleFileChange} className="w-full border border-gray-300 rounded-md px-4 py-2" />
                        </div>

                        <div className="mb-4">
                            <label className="block mb-1">Quick Note</label>
                            <textarea value={quickNote} onChange={(e) => setQuickNote(e.target.value)} className="w-full border border-gray-300 rounded-md px-4 py-2" rows="3" />
                        </div>

                        <button onClick={handleSubmit} className="bg-pink-400 text-white px-4 py-2 rounded-md hover:bg-pink-500">Submit</button>

                    </div>

                </div>
            )}

        </div>
    );
};

export default AssignmentDetails;