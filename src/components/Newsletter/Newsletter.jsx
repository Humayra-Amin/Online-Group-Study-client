
const Newsletter = () => {
    return (
        <div>

            <div className="hero h-[500px]" style={{ backgroundImage: 'url(https://plus.unsplash.com/premium_photo-1682310468892-5d8ade38f606?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bmV3c2xldHRlcnxlbnwwfHwwfHx8MA%3D%3D)' }}>

                <div className="hero-overlay bg-opacity-80"></div>

                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-3xl md:text-5xl lg:text-5xl font-roboto font-bold text-black">SUBSCRIBE TO OUR <span className="text-pink-600">NEWSLETTER</span></h1>
                        <p className="mb-5 text-black font-sedan font-semibold text-xl md:text-2xl lg:text-2xl">Sign up to receive the best offers on coupons.</p>

                        <label className="input input-bordered flex items-center gap-2 mb-4">
                            <input type="text" className="grow" placeholder="Email Here" />
                            <button className="btn bg-pink-500 text-black font-bold text-xl font-sedan">Subscribe</button>
                        </label>

                    </div>

                </div>

            </div>
        </div>
    );
};

export default Newsletter;