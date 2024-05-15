import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Helmet } from "react-helmet-async";
// import useAuth from "../../hooks/useAuth";
import Swal from 'sweetalert2';

const CreateAssignment = () => {

    // const { user } = useAuth();

    const [dueDate, setDueDate] = useState(new Date());

    const handleDateChange = (date) => {
        setDueDate(date);
    };

    const handleCreateAssignment = event => {
        event.preventDefault();

        const form = event.target;

        const title = form.title.value;
        const description = form.description.value;
        const image = form.image.value;
        const marks = form.marks.value;
        const difficultyLevel = form.difficultyLevel.value;
        const dueDate = form.dueDate.value;
        form.reset();

        if (
            !title ||
            !description ||
            !image ||
            !marks ||
            !difficultyLevel ||
            !dueDate
        ) {
            Swal.fire({
                title: 'Error',
                text: 'Please fill out all the fields',
                icon: 'error',
                confirmButtonText: 'OK'
            });
            return;
        }


        const newAssignment = { title, description, image, marks, difficultyLevel, dueDate }


        fetch('https://online-group-study-server-azure.vercel.app/assignments', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newAssignment)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success',
                        text: `Assignment Created Successfully`,
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }


    return (
        <div>

            <Helmet>
                <title>Study Bizz | Create Assignments</title>
                <link rel="icon" type="image/jpg" href="/src/assets/images/icon.png" />
            </Helmet>

            <div className="hero min-h-screen bg-base-200">

                <div className="hero-content flex-col lg:flex-row-reverse">

                    <div className="text-center lg:text-left">
                        <h1 className="text-4xl md:text-3xl lg:text-5xl font-bold font-roboto">Create Assignments</h1>
                        <p className="py-6 font-sedan md:text-xl lg:text-2xl">Build assignments that cater to diverse learning styles and abilities to promote inclusivity and accessibility</p>
                    </div>

                    <div className="card shrink-0 lg:w-[700px] bg-base-100">

                        <form onSubmit={handleCreateAssignment} className="card-body border-2 border-pink-600 p-14 shadow-2xl rounded-xl">


                            <h2 className="text-4xl md:text-4xl lg:text-4xl font-bold font-sedan mb-4 text-center">Add Assignment</h2>
                            <p className="text-[16px] md:text-xl lg:text-xl font-sedan mb-4 text-center">Add the assignment in the form with related information</p>

                            {/* ROW 1 */}

                            <div className="form-control">

                                <div className="md:flex mb-8 gap-5">

                                    <div className="form-control md:w-1/2">
                                        <label className="label">
                                            <span className="label-text">Assignment Title</span>
                                        </label>
                                        <label className="input-group">
                                            <input type="text" name="title" placeholder="Title" className="input input-bordered w-full" />
                                        </label>
                                    </div>


                                    <div className="form-control md:w-1/2">
                                        <label className="label">
                                            <span className="label-text">Description</span>
                                        </label>
                                        <label className="input-group">
                                            <textarea type="textarea textarea-bordered" name="description" placeholder="Description" className="input input-bordered w-full" />
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
                                            <input type="text" name="image" placeholder="Image URL" className="input input-bordered w-full" />
                                        </label>
                                    </div>


                                    <div className="form-control md:w-1/2">
                                        <label className="label">
                                            <span className="label-text">Marks</span>
                                        </label>
                                        <label className="input-group">
                                            <input type="text" name="marks" placeholder="Marks" className="input input-bordered w-full" />
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
                                            <select name="difficultyLevel" className="select select-bordered">
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
                                            selected={dueDate}
                                            onChange={handleDateChange}
                                            name="dueDate"
                                            className="input input-bordered w-full" />
                                    </div>

                                </div>

                            </div>


                            {/* button */}

                            <div className="form-control mt-6">
                                <button className="btn bg-pink-400 border-pink-800 text-black text-xl hover:bg-white hover:text-black hover:border-pink-700">Create</button>
                            </div>


                        </form>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default CreateAssignment;