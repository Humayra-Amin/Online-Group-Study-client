import banner from '../../assets/images/bg-wave.png'
import pic1 from '../../assets/images/pic11.png'
import pic2 from '../../assets/images/pic2.jpg'
import pic3 from '../../assets/images/pic3.jpg'
import pic4 from '../../assets/images/pic4.jpg'


const Banner = () => {

    return (
        <div className='relative overflow-hidden flex justify-center items-center'>

            <div className="hero h-[450px] md:h-[550px] lg:h-[650px]" style={{ backgroundImage: `url(${banner})` }}>

                <div className="container pb-8 sm:pb-0">

                        <div>
                            <div className='grid grid-cols-1 lg:grid-cols-2'>

                                <div className='flex flex-col justify-center gap-4 pt-12 lg:pt-0 text-center lg:text-left order-1 lg:order-2 relative z-10'>

                                    <h1 data-aos="zoom-in-up" data-aos-duration="1000" className='text-xl md:text-4xl lg:text-5xl font-roboto'>Study Together, Succeed Together</h1>
                                    <p className='lg:p-6 lg:text-[18px] font-sedan'>Join our online group study platform and collaborate with friends to ace your assignments and exams. With interactive features and a supportive community, learning has never been this engaging</p>

                                </div>

                                <div className='order-1 lg:order-2'>
                                    <div className='mb-28 relative z-10'>
                                        <img data-aos="flip-up" data-aos-duration="1000" src={pic1} alt="" className='scale-105 lg:scale-x-110 object-contain mx-auto' />
                                    </div>
                                </div>

                            </div>
                        </div>

                </div>

            </div>

        </div>
    );
};

export default Banner;