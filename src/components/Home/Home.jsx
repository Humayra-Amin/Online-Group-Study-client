import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Features from "../Features/Features";

const Home = () => {
    return (
        <div>
            <Banner></Banner>

            <Features></Features>
            
            <Helmet>
                <title>Study Bizz | Home</title>
                <link rel="icon" type="image/jpg" href="/src/assets/images/icon.png" />
            </Helmet>
        </div>
    );
};

export default Home;