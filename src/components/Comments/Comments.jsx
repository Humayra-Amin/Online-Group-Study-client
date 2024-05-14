
const Comments = () => {
    return (
        <div className="container mx-auto my-16">

            <div className="text-center my-16">
                <h2 className="text-4xl lg:text-5xl font-roboto font-semibold mt-8 lg:mt-6">Don’t just take our word for it</h2>
                <p className="mt-4 font-sedan text-xl">Here's what our community members have to say</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5 md:gap-4 ml-6 lg:ml-20 md:ml-0">

                <div className="card w-96 bg-base-100 shadow-xl border-2 border-pink-600">

                    <div className="card-body">
                        <h2 className="card-title">Awesome Community</h2>
                        <p>‍"As a chronic procrastinator, this community really helps me motivate myself to get my homework done. Has cool leaderboards, timers, and study tips. It’s a really large community so it’s pretty easy to meet people, too."</p>
                    </div>

                </div>

                <div className="card w-96 bg-base-100 shadow-xl border-2 border-pink-600">

                    <div className="card-body">
                        <h2 className="card-title">Thank you</h2>
                        <p>"Yesterday I completed my one year in this community. I feel so amazed that I have so many study hours without even noticing them, just cuz I was so focused with my study pals to achieve what I wanted to!!"</p>
                    </div>

                </div>

                <div className="card w-96 bg-base-100 shadow-xl border-2 border-pink-600">

                    <div className="card-body">
                        <h2 className="card-title">Goals</h2>
                        <p>"I’ve been a part of it for probably a little over a month and I’ve noticed how it’s improved my ability to stay focused. Since everyone is also studying in the call and working hard, I feel obliged to stay on task as well."</p>
                    </div>

                </div>


            </div>
        </div>
    );
};

export default Comments;