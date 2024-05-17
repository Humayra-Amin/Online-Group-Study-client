import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";


const AllAssignments = ({ assignments, allAssignment, setAllAssignment }) => {

    const { user } = useAuth();

    const { _id, title, description, image, marks, difficultyLevel, userEmail } = assignments;


    const handleDelete = _id => {
        if (user?.email ==userEmail) {
            console.log(_id);
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
            }).then((result) => {
                if (result.isConfirmed) {
                    fetch(`https://online-group-study-server-azure.vercel.app/assignments/${_id}`, {
                        method: 'DELETE'
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            if (data.deletedCount > 0) {
                                Swal.fire({
                                    title: 'Deleted!',
                                    text: "Your Assignment has been deleted.",
                                    icon: "success"
                                });
                                window.location.reload();
                                const remaining = allAssignment.filter(assignment => assignment._id !== _id);
                                setAllAssignment(remaining);

                            }
                        })
                }
            })
        }
        else {
            Swal.fire({
                title: 'Not Allowed!',
                text: "You cannot delete this assignment.",
                icon: "error"
            });

        }
    }


    return (
        <div>
            <Helmet>
                <title>Study Bizz | Assignments</title>
                <link rel="icon" type="image/jpg" href="/src/assets/images/icon.png" />
            </Helmet>

            <div className="container mx-auto font-roboto my-10">
                <div className="card lg:card-side bg-base-200 shadow-xl border-2 border-pink-400  md:h-[680px] lg:h-[400px]">
                    <figure><img src={image} className="lg:w-full lg:h-[550px] border-2 border-pink-400" /></figure>
                    <div className="card-body">
                        <h2 className="card-title lg:text-3xl">{title}</h2>
                        <p className="lg:text-xl lg:mt-4 font-bold font-roboto">Description: <span className="font-sedan font-normal">{description}</span></p>
                        <p className="lg:text-xl lg:mt-4 font-bold font-roboto">Total Marks: <span className="font-sedan font-normal"> {marks}</span></p>
                        <p className="lg:text-xl lg:mt-4 font-bold font-roboto">Difficulty Level: <span className="font-sedan font-normal"> {difficultyLevel}</span></p>

                        <div className="card-actions flex flex-row justify-start">

                            <Link to={`/assignments/${_id}`}><button className="btn bg-pink-400 border-pink-800 text-black hover:bg-white hover:text-black hover:border-pink-700">View Details</button></Link>

                            <Link to={`/updateAssignments/${_id}`}><button className="btn bg-pink-400 border-pink-800 text-black hover:bg-white hover:text-black hover:border-pink-700">Update</button></Link>

                            <button onClick={() => handleDelete(_id)} className="btn bg-pink-400 border-pink-800 text-black hover:bg-white hover:text-black hover:border-pink-700">Delete</button>

                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default AllAssignments;