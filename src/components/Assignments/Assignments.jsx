import { useLoaderData } from "react-router-dom";
import AllAssignments from "../AllAssignments/AllAssignments";

const Assignments = () => {
    const allAssignment = useLoaderData();
    return (
        <div>
            <div className="grid md:grid-cols-2 lg:grid-cols-2 lg:gap-5 md:gap-2">
                {allAssignment.map(assignments => <AllAssignments key={assignments._id} assignments={assignments}></AllAssignments>)}
            </div>
        </div>
    );
};

export default Assignments;