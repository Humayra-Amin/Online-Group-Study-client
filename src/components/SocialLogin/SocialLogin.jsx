import { FaGoogle, FaGithub } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const SocialLogin = () => {

    const { googleLogin, githubLogin } = useAuth();

    const navigate = useNavigate();
    const location = useLocation();
    console.log(location);

    const from = location?.state || "/";


    const handleSocialLogin = socialProvider => {
        socialProvider()
            .then((result) => {
                if (result.user) {
                    navigate(from);
                }
            });
    };

    return (
        <div className="font-roboto">
            <div className="divider font-sedan text-xl">OR</div>

            <div className="mt-6 text-2xl">

                <h1 className="border-2 flex flex-row lg:flex-row md:flex-row justify-center items-center gap-10 p-1 rounded-md bg-pink-100 border-pink-600 font-sedan text-pink-900"><FaGoogle onClick={() => handleSocialLogin(googleLogin)}></FaGoogle>Continue with Google</h1>

                <h1 className="border-2 flex flex-row lg:flex-row md:flex-row justify-center items-center gap-10 p-1 rounded-md bg-pink-100 border-pink-600 mt-6 font-sedan text-pink-900"><FaGithub onClick={() => handleSocialLogin(githubLogin)}></FaGithub>Continue with Github</h1>

            </div>

        </div>
    );
};

export default SocialLogin;