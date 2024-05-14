import { useLoaderData } from "react-router-dom";
import AllAssignments from "../AllAssignments/AllAssignments";
import { useState } from "react";

const Assignments = () => {
    const allAssignment = useLoaderData();

    const [filterBy, setFilterBy] = useState('');

    const handleFilterBy = (filterBy) => {
        setFilterBy(filterBy);
    }

    const filteredAssignments = filterBy ? allAssignment.filter(assignment => {
        return assignment.difficultyLevel === filterBy;
    }) : allAssignment;

    return (
        <div>
            <div className="text-center items-center justify-center">
                <details className="dropdown">
                    <summary className="btn bg-pink-400 mt-4 text-black px-6 py-4 m-1 hover:bg-white hover:text-black border-2 border-pink-500 hover:border-pink-300">Filter</summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li><button onClick={() => handleFilterBy('Easy')}>Easy</button></li>
                        <li><button onClick={() => handleFilterBy('Medium')}>Medium</button></li>
                        <li><button onClick={() => handleFilterBy('Hard')}>Hard</button></li>
                    </ul>
                </details>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-2 lg:gap-5 md:gap-2">
                {filteredAssignments.length > 0 ? (
                    filteredAssignments.map(assignments => <AllAssignments key={assignments._id} assignments={assignments}></AllAssignments>)
                ) : (
                    allAssignment.map(assignments => <AllAssignments key={assignments._id} assignments={assignments}></AllAssignments>)
                )}
            </div>
        </div>
    );
};

export default Assignments;
