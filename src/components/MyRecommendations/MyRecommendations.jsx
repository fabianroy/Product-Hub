import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";

const MyRecommendations = () => {

    document.title = "My Recommendations";

    const { user } = useAuth();
    const [recommendations, setRecommendations] = useState([]);
    const url = `http://localhost:3000/recommendations?email=${user.email}`;

    useEffect(() => {
        axios.get(url)
            .then(res => {
                setRecommendations(res.data);
            })
            .catch(error => {
                console.error('Error fetching recommendations:', error);
            });
    }, [user.email, url]);


    const handleDelete = id => {
        axios.delete(`http://localhost:3000/recommendations/${id}`)
            .then(res => {
                console.log(res);
            })
            .catch(error => {
                console.error('Error deleting recommendation:', error);
            });
    }

    return (
        <div className="container mx-auto my-20">
            <h1 className="text-3xl font-semibold text-center mb-6">My Recommendations</h1>
            <div className="md:w-/4 gap-4">
                {
                    recommendations.map(recommendation => (
                        <div key={recommendation._id} className="flex flex-row w-[800px] mx-auto items-center bg-base-100 shadow-xl">
                            <figure>
                                <img className="w-60 h-60 object-cover" src={recommendation.recommendationPhoto} alt={recommendation.recommendationProductName} />
                            </figure>
                            <div className="card-body">
                                <h2 className="font-semibold text-xl">{recommendation.recommendationTitle}</h2>
                                <hr />
                                <p className="text-gray-500">Recommended Product : {recommendation.recommendationProductName}</p>
                                <p className="text-gray-500">Reason: {recommendation.recommendationReason}</p>
                                <p className="text-gray-500 text-sm">Recommended by: {recommendation.recommendationBy}</p>
                                <hr />
                                <p className="font-semibold">Recommendation For : {recommendation.queryTitle}</p>
                                <p className="text-gray-500 text-sm">Product: {recommendation.queryProductName}</p>
                                <p className="text-gray-500 text-sm">Query by: {recommendation.queryBy}</p>
                                <hr />
                                <p className="text-sm">Posted on: {recommendation.postedDate} | {recommendation.postedTime}</p>
                                <div className="mt-4">
                                    <button onClick={() => handleDelete(recommendation._id)} className="btn w-full">Delete</button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default MyRecommendations;
