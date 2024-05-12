import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Features from "../Features/Features";
// import { useLoaderData } from "react-router-dom";

const Home = () => {

    // const allAssignments = useLoaderData();

    return (
        <div>
            <Banner></Banner>
            <Features></Features>
            {/* <div>

                <div className="text-center my-16">
                    <h2 className="text-4xl lg:text-5xl font-roboto font-semibold mt-8 lg:mt-6">Features</h2> */}
            {/* <p className="mt-6 font-sedan">Rich in history and culture, offers a diverse array of tourist attractions. Visitors can explore the vibrant souks of Middle East country.<br></br> The Middle East is a destination that truly has something for everyone</p> */}
            {/* </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3">
                    {allAssignments.map(assignments => <Features key={assignments._id} assignments={assignments}></Features>)}
                </div>

            </div> */}

            <Helmet>
                <title>Study Bizz | Home</title>
                <link rel="icon" type="image/jpg" href="/src/assets/images/icon.png" />
            </Helmet>
        </div>
    );
};

export default Home;