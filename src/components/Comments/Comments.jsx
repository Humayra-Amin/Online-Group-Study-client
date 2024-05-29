
const Comments = ({ comments }) => {

    return (
        <div className="container mx-auto my-16">

            <div className="text-center my-16">
                <h2 className="text-4xl lg:text-5xl font-roboto font-semibold mt-8 lg:mt-6">Don’t just take our word for it</h2>
                <p className="mt-4 font-sedan text-xl">Here's what our community members have to say</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5 md:gap-4 mt-8">
                {comments && comments.map(comment => (
                    <div key={comment._id} className="card w-full bg-base-100 shadow-xl border-2 border-pink-600">
                        <div className="card-body">
                            <h2 className="card-title lg:text-3xl">{comment.title}</h2>
                            <p className="font-sedan">{comment.description}</p>
                            <p className="text-gray-400">{comment.userEmail}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Comments;
