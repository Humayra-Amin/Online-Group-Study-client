import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Features from "../Features/Features";
import FAQ from "../FAQ/FAQ";
import Newsletter from "../Newsletter/Newsletter";
import Comments from "../Comments/Comments";

const Home = () => {

    return (
        <div>
            
            <Banner></Banner>

            <Features></Features>
            
            <FAQ></FAQ>

            <Comments></Comments>

            <Newsletter></Newsletter>

            <Helmet>
                <title>Study Bizz | Home</title>
                <link rel="icon" type="image/jpg" href="/src/assets/images/icon.png" />
            </Helmet>

        </div>
    );
};

export default Home;