import banner1 from '../../assets/banners/1.png';
import banner2 from '../../assets/banners/2.png';
import banner3 from '../../assets/banners/3.png';
import banner4 from '../../assets/banners/4.png';
import banner5 from '../../assets/banners/5.png';
import banner6 from '../../assets/banners/6.png';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className='p-4'>
            <div className="carousel w-full rounded-xl">

                {/* Banner 1 */}
                <div id="slide1" className="relative carousel-item w-full h-96 md:h-[600px] ">
                    <img src={banner1} className="w-full" />
                    <div className="absolute h-full flex">
                        <div className='text-white space-y-7 mt-20 md:mt-28 md:ml-10'>
                            <h2 className='text-xl md:text-7xl font-bold text-center mx-auto'>Explore Limitless Alternatives: Your Gateway to Innovation</h2>
                            <p className='text-sm text-center'>Alternative product solutions provide innovative ways to be sustainable, efficient, and economically resilient.</p>
                            <div className='w-fit mx-auto flex flex-col md:flex-row gap-4'>
                                <Link to="/queries" className="btn bg-orange-600 border-none text-white"><button>Discover Queries</button></Link>
                                <Link to="/recommendations" className="btn bg-transparent border border-white text-white"><button>Recommendations</button></Link>
                            </div>
                        </div>
                    </div>
                    <div className="absolute md:flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 hidden md:visible">
                        <a href="#slide6" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>

                {/* Banner 2 */}

                <div id="slide2" className="relative carousel-item w-full h-96 md:h-[600px] ">
                    <img src={banner2} className="w-full" />
                    <div className="absolute h-full flex">
                        <div className='text-white space-y-7 mt-20 md:mt-28 md:ml-10'>
                            <h2 className='text-xl md:text-7xl font-bold text-center mx-auto'>Explore Limitless Alternatives: Your Gateway to Innovation</h2>
                            <p className='text-sm text-center'>Alternative product solutions provide innovative ways to be sustainable, efficient, and economically resilient.</p>
                            <div className='w-fit mx-auto flex flex-col md:flex-row gap-4'>
                                <Link to="/queries" className="btn bg-orange-600 border-none text-white"><button>Discover Queries</button></Link>
                                <Link to="/recommendations" className="btn bg-transparent border border-white text-white"><button>Recommendations</button></Link>
                            </div>
                        </div>
                    </div>
                    <div className="absolute md:flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 hidden md:visible">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>

                {/* Banner 3 */}

                <div id="slide3" className="relative carousel-item w-full h-96 md:h-[600px] ">
                    <img src={banner3} className="w-full" />
                    <div className="absolute h-full flex">
                        <div className='text-white space-y-7 mt-20 md:mt-28 md:ml-10'>
                            <h2 className='text-xl md:text-7xl font-bold text-center mx-auto'>Explore Limitless Alternatives: Your Gateway to Innovation</h2>
                            <p className='text-sm text-center'>Alternative product solutions provide innovative ways to be sustainable, efficient, and economically resilient.</p>
                            <div className='w-fit mx-auto flex flex-col md:flex-row gap-4'>
                                <Link to="/queries" className="btn bg-orange-600 border-none text-white"><button>Discover Queries</button></Link>
                                <Link to="/recommendations" className="btn bg-transparent border border-white text-white"><button>Recommendations</button></Link>
                            </div>
                        </div>
                    </div>
                    <div className="absolute md:flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 hidden md:visible">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>

                {/* Banner 4 */}

                <div id="slide4" className="relative carousel-item w-full h-96 md:h-[600px] ">
                    <img src={banner4} className="w-full" />
                    <div className="absolute h-full flex">
                        <div className='text-white space-y-7 mt-20 md:mt-28 md:ml-10'>
                            <h2 className='text-xl md:text-7xl font-bold text-center mx-auto'>Explore Limitless Alternatives: Your Gateway to Innovation</h2>
                            <p className='text-sm text-center'>Alternative product solutions provide innovative ways to be sustainable, efficient, and economically resilient.</p>
                            <div className='w-fit mx-auto flex flex-col md:flex-row gap-4'>
                                <Link to="/queries" className="btn bg-orange-600 border-none text-white"><button>Discover Queries</button></Link>
                                <Link to="/recommendations" className="btn bg-transparent border border-white text-white"><button>Recommendations</button></Link>
                            </div>
                        </div>
                    </div>
                    <div className="absolute md:flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 hidden md:visible">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide5" className="btn btn-circle">❯</a>
                    </div>
                </div>

                {/* Banner 5 */}

                <div id="slide5" className="relative carousel-item w-full h-96 md:h-[600px] ">
                    <img src={banner5} className="w-full" />
                    <div className="absolute h-full flex">
                        <div className='text-white space-y-7 mt-20 md:mt-28 md:ml-10'>
                            <h2 className='text-xl md:text-7xl font-bold text-center mx-auto'>Explore Limitless Alternatives: Your Gateway to Innovation</h2>
                            <p className='text-sm text-center'>Alternative product solutions provide innovative ways to be sustainable, efficient, and economically resilient.</p>
                            <div className='w-fit mx-auto flex flex-col md:flex-row gap-4'>
                                <Link to="/queries" className="btn bg-orange-600 border-none text-white"><button>Discover Queries</button></Link>
                                <Link to="/recommendations" className="btn bg-transparent border border-white text-white"><button>Recommendations</button></Link>
                            </div>
                        </div>
                    </div>
                    <div className="absolute md:flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 hidden md:visible">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide6" className="btn btn-circle">❯</a>
                    </div>
                </div>

                {/* Banner 6 */}

                <div id="slide6" className="relative carousel-item w-full h-96 md:h-[600px] ">
                    <img src={banner6} className="w-full" />
                    <div className="absolute h-full flex">
                        <div className='text-white space-y-7 mt-20 md:mt-28 md:ml-10'>
                            <h2 className='text-xl md:text-7xl font-bold text-center mx-auto'>Explore Limitless Alternatives: Your Gateway to Innovation</h2>
                            <p className='text-sm text-center'>Alternative product solutions provide innovative ways to be sustainable, efficient, and economically resilient.</p>
                            <div className='w-fit mx-auto flex flex-col md:flex-row gap-4'>
                                <Link to="/queries" className="btn bg-orange-600 border-none text-white"><button>Discover Queries</button></Link>
                                <Link to="/recommendations" className="btn bg-transparent border border-white text-white"><button>Recommendations</button></Link>
                            </div>
                        </div>
                    </div>
                    <div className="absolute md:flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 hidden md:visible">
                        <a href="#slide5" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>

            </div>
        </div >
    );
};

export default Banner;