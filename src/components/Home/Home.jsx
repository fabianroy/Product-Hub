import { useEffect, useState } from "react";
import Banner from "./Banner";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {

    document.title = "Product hub";

    const [latestQueries, setLatestQueries] = useState([]);

    const url = "http://localhost:3000/queries";

    useEffect(() => {
        axios.get(url)
            .then(res => {
                const dataArray = res.data;
                const sortedData = dataArray.sort((a, b) => new Date(b.postedDate) - new Date(a.postedDate));
                const latestQueries = sortedData.slice(0, 4);
                console.log(latestQueries);
                setLatestQueries(latestQueries);
            })
            .catch(err => {
                console.log(err);
            });
    }, [url, setLatestQueries]);

    return (
        <div>
            <Banner></Banner>

            <div>
                <h1 className="text-2xl md:text-3xl font-bold text-center my-10">Latest Queries</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4 w-fit mx-auto">
                    {
                        latestQueries.map(query => (
                            <div key={query._id} className="card mt-5 md:max-w-80 h-fit md:max-h-[600px] bg-base-100 shadow-xl p-2 pb-4 md:p-0">
                                <div className=''>
                                    <figure><img className='w-full md:w-32 md:h-32' src={query.productPhoto} alt={query.productName} /></figure>
                                </div>
                                <div className="card-body">
                                    <h2 className="font-semibold">
                                        {query.queryTitle}
                                    </h2>
                                    <hr />
                                    <p className="text-gray-500">{query.productName}</p>
                                    <p className="text-gray-500">Posted on : {query.currentDate}</p>
                                </div>
                                <div className="flex md:flex-col flex-row gap-2 w-fit md:w-full mx-auto p-4">
                                    <Link className='btn btn-sm bg-orange-400' to={`/queryDetails/${query._id}`}><button>Details</button></Link>
                                    <Link className='btn btn-sm bg-gray-50' query={query} to={`/addrecommendations/${query._id}`}><button>Recommend</button></Link>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

            <div className="bg-gray-100 mt-10 md:mt-20 py-16">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">About Product Hub</h2>
                        <p className="text-lg text-gray-600 mb-8">Your ultimate destination for all things related to product information, recommendations, and queries.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 md:gap-8">
                        <div className="md:col-span-2">
                            <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h3>
                            <p className="text-lg text-gray-600 mb-6">At Product Hub, our mission is simple: to provide a comprehensive platform where users can discover, discuss, and explore a wide range of products.</p>

                            <h3 className="text-2xl font-bold text-gray-800 mb-4">What We Offer</h3>
                            <p className="text-lg text-gray-600 mb-6">- Product Information: Whether you&apos;re researching the latest gadgets, fashion trends, or household essentials, Product Hub offers detailed information on a diverse array of products.</p>
                            <p className="text-lg text-gray-600 mb-6">- Community Engagement: Product Hub is more than just a database of products; it&apos;s a thriving community of passionate consumers and experts.</p>
                            <p className="text-lg text-gray-600 mb-6">- Personalized Recommendations: Discover new products tailored to your preferences with our personalized recommendation system.</p>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Team</h3>
                            <p className="text-lg text-gray-600 mb-6">Behind Product Hub is a dedicated team of product enthusiasts, developers, and designers who are committed to building the best possible platform for our users.</p>

                            <h3 className="text-2xl font-bold text-gray-800 mb-4">Get in Touch</h3>
                            <p className="text-lg text-gray-600 mb-6">Have questions, feedback, or suggestions? We&apos;d love to hear from you! Contact our team at <a href="mailto:contact@producthub.com" className="text-blue-500">contact@producthub.com</a> and let us know how we can improve your Product Hub experience.</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Home;