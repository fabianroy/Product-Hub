import axios from "axios";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

const AllRecommendation = () => {

    document.title = "Recommendations For Me";

    const { user } = useAuth();

    const [recommendations, setRecommendations] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/recommendations', { withCredentials: true })
            .then(res => {
                const dataArray = res.data;
                const userArray = dataArray.filter(data => data.queryEmail === user.email);
                setRecommendations(userArray);
            })
            .catch(error => {
                console.error('Error fetching recommendations:', error);
            });
    }, [user.email]);

    console.log(recommendations);

    return (
        <div className="my-10 md:my-20">
            <h1 className="text-3xl font-semibold text-center my-6">Recommendations For Me</h1>
            <div className="flex flex-wrap justify-center my-10 mx-4 md:mx-0 gap-6">
                {
                    recommendations.map(recommendation => (
                        <div key={recommendation._id} className="flex flex-col md:flex-row w-[800px] mx-auto items-center bg-base-100 shadow-xl rounded-xl">
                            <figure>
                                <img className="w-60 h-60 object-cover" src={recommendation.recommendationPhoto} alt={recommendation.recommendationProductName} />
                            </figure>
                            <div className="card-body">
                                <h2 className="font-semibold text-xl">{recommendation.recommendationTitle}</h2>
                                <p className="text-gray-500 mt-2 text-sm">Recommended by: {recommendation.recommendationBy}</p>
                                <hr />
                                <p className="font-semibold">Recommended Product : {recommendation.recommendationProductName}</p>
                                <p className="text-gray-500">Reason: {recommendation.recommendationReason}</p>
                                <p className="mt-2 mb-2"> <span className="font-semibold">Message :</span> <span className="mt-1 text-gray-500">{recommendation.recommendation}</span></p>
                                <hr />
                                <p className="font-semibold">Recommendation For : {recommendation.queryTitle}</p>
                                <p className="text-gray-500 text-sm">Product: {recommendation.queryProductName}</p>
                                <p className="text-gray-500 text-sm">Query by: {recommendation.queryBy}</p>
                                <hr />
                                <p className="text-sm">Posted on: {recommendation.postedDate} | {recommendation.postedTime}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default AllRecommendation;