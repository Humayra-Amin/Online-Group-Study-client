import useAuth from "../../hooks/useAuth";
import Swal from 'sweetalert2';

const CommentForm = () => {
    const { user } = useAuth();


    const handleComments = event => {
        event.preventDefault();

        const form = event.target;

        const title = form.title.value;
        const description = form.description.value;
        const userEmail = user?.email;
        form.reset();


        const newComment = { title, description, userEmail }


        fetch('https://online-group-study-server-azure.vercel.app/comments', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newComment)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success',
                        text: `Comment Posted Successfully`,
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }

    return (
        <div className="container mx-auto my-16">
            <h2 className="text-2xl lg:text-4xl font-semibold mb-4 text-center font-sedan">Submit a Comment</h2>
            <form onSubmit={handleComments} className="max-w-md mx-auto">
                <input
                    type="text"
                    name="title"
                    placeholder="Title"
                    className="block w-full border border-pink-400 rounded-md py-2 px-3 mb-3"
                    required
                />
                <textarea
                    name="description"
                    placeholder="What you say....."
                    className="block w-full border border-pink-400 rounded-md py-2 px-3 mb-3 resize-none h-40"
                    required
                ></textarea>
                <button className="btn bg-pink-400 border-pink-800 text-black text-xl hover:bg-white hover:text-black hover:border-pink-700">Post</button>
            </form>
        </div>
    );
};

export default CommentForm;
