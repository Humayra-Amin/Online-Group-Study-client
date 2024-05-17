import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import MyAssignmentCard from "../MyAssignmentCard/MyAssignmentCard";

const MyAssignment = () => {
    const assignment = useLoaderData();

    return (
        <div className='flex flex-col items-center'>

            <Helmet>
                <title>Study Bizz | My Assignment</title>
                <link rel="icon" type="image/jpg" href="/src/assets/images/icon.png" />
            </Helmet>

            <h1 className="mt-10 text-5xl font-sedan text-center">My Assignment</h1>

            <div className="overflow-x-auto mt-14">


                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-5 lg:gap-5 md:gap-2">
                    {
                        assignment.map(assignments => <MyAssignmentCard key={assignments._id} assignments={assignments} allAssignment={assignment}></MyAssignmentCard >)
                    }

                </div>
            </div>

        </div>

    );
};

export default MyAssignment;
