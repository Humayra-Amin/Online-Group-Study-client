import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import AuthProvider from "../AuthProvider/AuthProvider";

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <AuthProvider></AuthProvider>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;