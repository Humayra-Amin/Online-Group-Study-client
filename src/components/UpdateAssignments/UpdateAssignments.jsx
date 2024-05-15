import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Helmet } from "react-helmet-async";

const UpdateAssignments = () => {
    const assignments = useLoaderData();


    const { _id, title, description, image, marks, difficultyLevel, dueDate } = assignments;

    const [selectedDueDate, setSelectedDueDate] = useState(new Date(dueDate));

    const handleUpdateAssignments = event => {
        event.preventDefault();

        const form = event.target;

        const title = form.title.value;
        const description = form.description.value;
        const image = form.image.value;
        const marks = form.marks.value;
        const difficultyLevel = form.difficultyLevel.value;
        const dueDate= selectedDueDate.toISOString();
        form.reset();

        const updatedAssignments = { title, description, image, marks, difficultyLevel, dueDate }


        fetch(`https://online-group-study-server-sepia.vercel.app/assignments/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedAssignments)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success',
                        text: 'Updated Assignments Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }


    return (
        <div>

            <Helmet>
                <title>Study Bizz | Update Assignments</title>
                <link rel="icon" type="image/jpg" href="/src/assets/images/icon.png" />
            </Helmet>

            <div className="hero min-h-screen bg-base-200">

                <div className="hero-content flex-col lg:flex-row-reverse">

                    <div className="card shrink-0 lg:w-[700px] bg-base-100">

                        <form onSubmit={handleUpdateAssignments} className="card-body border-2 border-pink-600 p-14 shadow-2xl rounded-xl">


                            <h2 className="text-4xl md:text-4xl lg:text-4xl font-bold font-sedan mb-4 text-center">Update Assignment</h2>


                            {/* ROW 1 */}

                            <div className="form-control">

                                <div className="md:flex mb-8 gap-5">

                                    <div className="form-control md:w-1/2">
                                        <label className="label">
                                            <span className="label-text">Assignment Title</span>
                                        </label>
                                        <label className="input-group">
                                            <input type="text" name="title" defaultValue={title} placeholder="Title" className="input input-bordered w-full" />
                                        </label>
                                    </div>


                                    <div className="form-control md:w-1/2">
                                        <label className="label">
                                            <span className="label-text">Description</span>
                                        </label>
                                        <label className="input-group">
                                            <textarea type="textarea textarea-bordered" name="description" defaultValue={description} placeholder="Description" className="input input-bordered w-full" />
                                        </label>
                                    </div>


                                </div>

                            </div>


                            {/* ROW 2 */}

                            <div className="form-control">

                                <div className="md:flex mb-8 gap-5">

                                    <div className="form-control md:w-1/2">
                                        <label className="label">
                                            <span className="label-text">Image URL</span>
                                        </label>
                                        <label className="input-group">
                                            <input type="text" name="image" defaultValue={image} placeholder="Image URL" className="input input-bordered w-full" />
                                        </label>
                                    </div>


                                    <div className="form-control md:w-1/2">
                                        <label className="label">
                                            <span className="label-text">Marks</span>
                                        </label>
                                        <label className="input-group">
                                            <input type="text" name="marks" defaultValue={marks} placeholder="Marks" className="input input-bordered w-full" />
                                        </label>
                                    </div>


                                </div>

                            </div>


                            {/* ROW 3 */}

                            <div className="form-control">

                                <div className="md:flex mb-8 gap-5">

                                    <div className="form-control md:w-1/2">
                                        <label className="form-control w-full">
                                            <div className="label">
                                                <span className="label-text-alt">Difficulty Level</span>
                                            </div>
                                            <select name="difficultyLevel" defaultValue={difficultyLevel} className="select select-bordered">
                                                <option disabled selected>Select Difficulty Level</option>
                                                <option value="Easy">Easy</option>
                                                <option value="Medium">Medium</option>
                                                <option value="Hard">Hard</option>
                                            </select>
                                        </label>
                                    </div>


                                    <div className="form-control md:w-1/2">
                                        <label className="label">
                                            <span className="label-text">Due Date</span>
                                        </label>
                                        <DatePicker
                                            selected={selectedDueDate}
                                            onChange={(date) => setSelectedDueDate(date)}
                                            className="input input-bordered w-full"
                                        />
                                    </div>

                                </div>

                            </div>


                            {/* button */}

                            <div className="form-control mt-6">
                                <button className="btn bg-pink-400 border-pink-800 text-black text-xl hover:bg-white hover:text-black hover:border-pink-700">Update</button>
                            </div>


                        </form>

                    </div>

                </div>

            </div>
        </div>
    );
};

export default UpdateAssignments;