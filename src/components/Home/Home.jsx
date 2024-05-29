import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Features from "../Features/Features";
import FAQ from "../FAQ/FAQ";
import Newsletter from "../Newsletter/Newsletter";
import Comments from "../Comments/Comments";
import { useEffect, useState } from "react";

const Home = () => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        // Fetch comments data when the component mounts
        fetchComments();
    }, []);

    const fetchComments = async () => {
        try {
            const response = await fetch('http://localhost:5000/comments');
            const commentsData = await response.json();
            setComments(commentsData);
        } catch (error) {
            console.error("Error fetching comments:", error);
        }
    };

    return (
        <div>
            
            <Banner></Banner>

            <Features></Features>
            
            <FAQ></FAQ>

            <Comments comments={comments} />

            <Newsletter></Newsletter>

            <Helmet>
                <title>Study Bizz | Home</title>
                <link rel="icon" type="image/jpg" href="/src/assets/images/icon.png" />
            </Helmet>

        </div>
    );
};

export default Home;