import { Link } from 'react-router-dom';
import error from '../../assets/images/error.gif'

const ErrorPage = () => {
    return (
        <div>
            <div className='text-center mt-28 md:mt-20 lg:mt-36 text-slate-400'>
                <h1 className='text-2xl'>UH-Oh</h1>
                <p>The page you are looking for may have been removed, deleted or possibly never existed......</p>
            </div>
            <div className='ml-[110px] mt-10 md:ml-[220px] md:mt-10 lg:ml-[550px] lg:mt-20'>
                <img src={error} className='w-[200px] md:w-[250px] lg:w-[300px] rounded-lg'/>
            </div>
            <div>
                <Link to='/'><button className='border-2 border-pink-800 ml-[135px] mt-6 md:ml-[340px] md:mt-8 lg:ml-[620px] lg:mt-12 text-xl p-2 bg-pink-700 text-white rounded-xl'>Go Back Home</button></Link>
            </div>
        </div>
    );
};

export default ErrorPage;