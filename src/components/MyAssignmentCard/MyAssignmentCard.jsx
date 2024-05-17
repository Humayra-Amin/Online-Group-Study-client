
const MyAssignmentCard = ({ assignments }) => {

    const { title, status, marks, obtainedMarks, feedback } = assignments;


    return (

        <div>
            <div className="card w-96 bg-base-100 shadow-xl border-2 border-pink-600">
                <div className="card-body lg:h-[280px]">
                    <h2 className="card-title lg:text-2xl font-sedan">Assignment Title: {title}</h2>
                    <p className="font-bold text-xl">Status: <span className="font-normal">{status}</span></p>
                    <p className="font-bold text-xl">Marks: <span className="font-normal">{marks}</span></p>
                    <p className="font-bold text-xl">Obtained Marks: <span className="font-normal">{obtainedMarks}</span></p>
                    <p className="font-bold text-xl">FeedBack: <span className="font-normal">{feedback}</span></p>
                </div>
            </div>

        </div>
    );
};

export default MyAssignmentCard;
