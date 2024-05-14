import { useLoaderData } from "react-router-dom";
import AllAssignments from "../AllAssignments/AllAssignments";

const Features = () => {
    const allAssignment = useLoaderData();


    const limitedAssignments = allAssignment.slice(0, 2);


    return (
        <div>

            <div className="text-center my-16">
                <h2 className="text-4xl lg:text-5xl font-roboto font-semibold mt-8 lg:mt-6">Assignment Features</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-2 lg:gap-5 md:gap-2">
                {limitedAssignments.map(assignments => <AllAssignments key={assignments._id} assignments={assignments}></AllAssignments>)}
            </div>

        </div>
    );
};

export default Features;