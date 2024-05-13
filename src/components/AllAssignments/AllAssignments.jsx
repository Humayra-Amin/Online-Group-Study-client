import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const AllAssignments = ({ assignments }) => {

    const { _id, title , description , image , marks, difficultyLevel } = assignments;


    return (
        <div>
            <Helmet>
                <title>Study Bizz | Assignments</title>
                <link rel="icon" type="image/jpg" href="/src/assets/images/icon.png" />
            </Helmet>

            <div className="container mx-auto font-roboto my-10">
            <div className="card lg:card-side bg-base-200 shadow-xl border-2 border-pink-400  md:h-[680px] lg:h-[400px]">
                <figure><img src={image} className="lg:w-full lg:h-[550px] border-2 border-pink-400"/></figure>
                <div className="card-body">
                    <h2 className="card-title lg:text-3xl">{title}</h2>
                    <p className="lg:text-xl lg:mt-4 font-bold font-roboto">Description: <span className="font-sedan font-normal">{description}</span></p>
                    <p className="lg:text-xl lg:mt-4 font-bold font-roboto">Total Marks: <span className="font-sedan font-normal"> {marks}</span></p>
                    <p className="lg:text-xl lg:mt-4 font-bold font-roboto">Difficulty Level: <span className="font-sedan font-normal"> {difficultyLevel}</span></p>

                    <div className="card-actions flex flex-row justify-start">
                        <button className="btn bg-pink-400 border-pink-800 text-black hover:bg-white hover:text-black hover:border-pink-700">View Details</button>
                       <Link to={`/updateAssignments/${_id}`}><button className="btn bg-pink-400 border-pink-800 text-black hover:bg-white hover:text-black hover:border-pink-700">Update</button></Link>
                        <button className="btn bg-pink-400 border-pink-800 text-black hover:bg-white hover:text-black hover:border-pink-700">Delete</button>
                    </div>

                </div>
            </div>
            </div>

        </div>
    );
};

export default AllAssignments;