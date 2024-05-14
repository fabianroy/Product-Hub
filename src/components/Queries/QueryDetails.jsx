import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const QueryDetails = () => {

    const query = useLoaderData();

    const [recommendations, setRecommendations] = useState([]);

    const url = "https://product-hub-server-phi.vercel.app/recommendations";

    useEffect(() => {
        axios.get(url)
            .then(res => {
                const dataArray = res.data;
                const filteredData = dataArray.filter(data => data.queryId === query._id);
                setRecommendations(filteredData);
            })
            .catch(err => {
                console.log(err);
            });
    }, [query._id]);

    const { productName, productBrand, productPhoto, queryTitle, boycottReason, name, userPhoto, currentDate, postedTime } = query;

    document.title = `${queryTitle} - Details`

    return (
        <div>
            <div className="my-10 md:my-20">
                <div className="flex flex-col md:flex-row gap-6 w-96 md:w-fit p-10 border rounded-xl mx-auto">
                    <div>
                        <img className="w-full md:w-96" src={productPhoto} alt="" />
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold md:max-w-[600px]">{queryTitle}</h1>
                        <p className="mt-4 text-xl font-semibold">Product : {productName}</p>
                        <p className="mt-2 text-orange-600 font-semibold">Brand : {productBrand}</p>
                        <p className="mt-4 font-semibold">Recommendations : {recommendations.length}</p>
                        <br />
                        <hr />
                        <p className="mt-6 text-lg md:max-w-[600px]">{boycottReason}</p>
                        <br />
                        <hr />
                        <p className="text-gray-500 mt-6">Posted by : {name}</p>
                        <p className="text-gray-500 mt-2">Posted on : {currentDate} | {postedTime}</p>
                    </div>
                    <div>
                        <img className="w-12 h-12 rounded-full" src={userPhoto} alt={name} title={name} />
                    </div>
                </div>
                <div className="w-fit mx-auto mt-10">
                    <Link to="/queries" className="btn bg-orange-400">Back to Queries</Link>
                </div>
            </div>

        </div>
    );
};

export default QueryDetails;