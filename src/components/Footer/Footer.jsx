import { useState } from 'react';
import logo from '../../assets/images/logos.png'
import { FaChevronUp, FaFacebook, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {

    const [chevron, setChevron] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const toggleVisible = () => {
        if (window.pageYOffset > 300) {
            setChevron(true);
        }
        else {
            setChevron(false);
        }
    }

    window.addEventListener('scroll', toggleVisible);

    return (
        <div>
            <footer className="footer p-20 md:p-8 bg-pink-100 text-black mt-10 bg-opacity-60">
                <aside>
                    <div className="flex-1">
                        <Link to='/'><img src={logo} alt="" className="lg:ml-0 ml-2 w-[150px] lg:w-[150px] lg:h-[100px] md:w-[100px] lg:p-2" /></Link>
                        <p className='text-xl md:text-[18px] font-sedan font-semibold mt-4'>Search For Us Here</p>
                        <div className='flex flex-row justify-between mt-6 text-2xl text-pink-900 hover:cursor-pointer lg:p-4 gap-5'>
                            <h1 className='border-2 border-pink-900 p-2 rounded-md bg-pink-300'><FaGoogle></FaGoogle></h1>
                            <h1 className='border-2 border-pink-900 p-2 rounded-md bg-pink-300'><FaTwitter></FaTwitter></h1>
                            <h1 className='border-2 border-pink-900 p-2 rounded-md bg-pink-300'><FaInstagram></FaInstagram></h1>
                            <h1 className='border-2 border-pink-900 p-2 rounded-md bg-pink-300'><FaFacebook></FaFacebook></h1>
                        </div>
                    </div>
                </aside>
                <nav>
                    <h6 className="font-roboto text-black text-[18px] md:text-[18px] lg:text-2xl font-bold">Company</h6>
                    <a className="link link-hover font-sedan font-medium text-[17px]">About us</a>
                    <a className="link link-hover font-sedan font-medium text-[17px]">Our Team</a>
                    <a className="link link-hover font-sedan font-medium text-[17px]">Our Services</a>
                </nav>
                <nav>
                    <h6 className="font-roboto text-black text-[18px] md:text-[18px] lg:text-2xl font-bold">Terms & Condition</h6>
                    <a className="link link-hover font-sedan font-medium text-[17px]">Terms of services</a>
                    <a className="link link-hover font-sedan font-medium text-[17px]">Privacy policy</a>
                    <a className="link link-hover font-sedan font-medium text-[17px]">Cookie policy</a>
                    <a className="link link-hover font-sedan font-medium text-[17px]">FAQ</a>
                </nav>
                <nav>
                    <h6 className="font-roboto text-black text-[18px] md:text-[18px] lg:text-2xl font-bold">Contact Us</h6>
                    <ul>
                        <li className="mb-2">
                            <h1 className="font-semibold">123 Main St, Chittagong, Bangladesh</h1>
                        </li>
                        <li className="mb-2">
                            <span className="font-semibold">Phone:</span> +8801875469911
                        </li>
                        <li className="mb-2">
                            <span className="font-semibold">Email:</span> STUDYBIZZ@gmail.com
                        </li>
                    </ul>
                </nav>

                {chevron && (
                    <button onClick={scrollToTop} className="fixed bottom-6 right-6 bg-gray-300 p-2 rounded-full">
                        <FaChevronUp size={30}></FaChevronUp>
                    </button>
                )}

            </footer>

            <footer className="footer px-10 py-4 border-t border-pink-500 bg-pink-300 text-base-content flex justify-center items-center">
                <aside>
                    <p className='font-bold text-black'>Copyright © 2024 - All right reserved by Study Bizz</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;