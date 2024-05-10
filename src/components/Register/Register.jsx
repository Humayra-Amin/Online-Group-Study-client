import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import { FaEnvelope, FaEye, FaEyeSlash, FaLink, FaLock, FaUser } from "react-icons/fa";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import SocialLogin from "../SocialLogin/SocialLogin";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {

    const { createUser, updateUserProfile } = useAuth();

    const [registerError, setRegisterError] = useState('');
    const [success, setSuccess] = useState('');
    const [showPass, setShowPass] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()


    const navigate = useNavigate();

    const from = '/';

    const onSubmit = (data) => {

        const { email, password, fullname, imageURL } = data;

        setRegisterError('');
        setSuccess('');

        if (password.length < 6) {
            setRegisterError('Password should be at least 6 characters or more');
            return;
        }
        else if (!/[A-Z]/.test(password) ||
            !/[a-z]/.test(password) ||
            !/\d/.test(password)) {
            setRegisterError('Password should contain at least one uppercase characters, one lowercase character and one digit');
            return;
        }

        createUser(email, password)
            .then(() => {
                updateUserProfile(fullname, imageURL)
                    .then(() => {
                        toast.success('User created successfully!!!')
                        setTimeout(() => {
                            navigate(from);
                        }, 1000);

                    })

            })
            .catch((error) => {
                console.error(error);
                toast.error("Email already exist!!!");
            })
    }


    return (
        <div>
            <Helmet>
                <title>Study Bizz | Register</title>
                <link rel="icon" type="image/jpg" href="/src/assets/images/icon.png" />
            </Helmet>


            <div className="hero min-h-screen">
                <div className="hero-content">
                    <div className="card shrink-0 mb-14 md:w-[500px] lg:w-[500px] border-2 border-pink-400 shadow-xl">

                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">

                            {
                                registerError && <p className="text-red-500 flex justify-center font-sedan">{registerError}</p>
                            }

                            {
                                success && <p className="text-green-500 flex justify-center font-sedan">{success}</p>
                            }

                            <h1 className="flex justify-center text-xl lg:text-5xl font-sedan text-pink-700">Register</h1>

                            <div className="form-control">

                                <label className="label">
                                    <span className="label-text">Full Name</span>
                                </label>

                                <div className="relative">
                                    <input type="text" placeholder="fullname" {...register("fullname", { required: true })} className="input input-bordered pl-10 w-full" />
                                    <FaUser className="absolute top-1/2 left-3 transform -translate-y-1/2 h-6 text-pink-200"></FaUser>
                                </div>

                                {errors.fullname && <span className="text-red-500">This field is required</span>}

                            </div>


                            <div className="form-control">

                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>

                                <div className="relative">
                                    <input type="email" placeholder="email" {...register("email", { required: true })} className="input input-bordered pl-10 w-full" />
                                    <FaEnvelope className="absolute top-1/2 left-3 transform -translate-y-1/2 h-6 text-pink-200"></FaEnvelope>
                                </div>

                                {errors.email && <span className="text-red-500">This field is required</span>}

                            </div>

                            <div className="form-control">

                                <label className="label">
                                    <span className="label-text">Image Url</span>
                                </label>

                                <div className="relative">
                                    <input type="text" placeholder="imageURL" {...register("imageURL", { required: true })} className="input input-bordered pl-10 w-full" />
                                    <FaLink className="absolute top-1/2 left-3 transform -translate-y-1/2 h-6 text-pink-200"></FaLink>
                                </div>

                                {errors.imageURL && <span className="text-red-500">This field is required</span>}

                            </div>

                            <div className="form-control">

                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>

                                <div className="relative">

                                    <input type={showPass ? "text" : "password"}
                                        placeholder="password"
                                        {...register("password", { required: true })}
                                        className="input input-bordered pl-10 w-full" />

                                    <span onClick={() => setShowPass(!showPass)} className="absolute top-7 right-3 transform -translate-y-1/2 h-6 text-xl text-pink-200">
                                        {
                                            showPass ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                        }
                                    </span>

                                    <FaLock className="absolute top-1/2 left-3 transform -translate-y-1/2 h-6 text-pink-200"></FaLock>

                                </div>

                                {errors.password && <span className="text-red-500">This field is required</span>}

                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-pink-400 border-pink-800 text-black text-xl hover:bg-white hover:text-black hover:border-pink-700">Register</button>
                            </div>

                            <label className="label text-[16px] font-medium text-gray-400">
                                Have an account? <Link to="/login" className="label-text-alt link link-hover text-xl font-medium text-blue-600 underline font-sedan">Login</Link>
                            </label>

                            <SocialLogin></SocialLogin>

                        </form>

                    </div>

                </div>

            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Register;