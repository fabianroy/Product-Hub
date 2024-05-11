import { Link, useLoaderData } from "react-router-dom";

const QueryDetails = () => {

    const query = useLoaderData();

    const { productName, productBrand, productPhoto, queryTitle, boycottReason, name, userPhoto, currentDate, postedTime } = query;

    return (
        <div>
            <div>
                <div className="w-fit mx-auto mt-10 ">
                    <Link to="/queries" className="btn bg-orange-400">Back to Queries</Link>
                </div>
                <div className="mt-10 md:my-10 flex flex-col md:flex-row gap-6 w-96 md:w-fit p-10 border rounded-xl mx-auto">
                    <div>
                        <img className="w-full md:w-96" src={productPhoto} alt="" />
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold">{queryTitle}</h1>
                        <p className="text-gray-500 mt-4 text-xl">{productName} - {productBrand}</p>
                        <p className="text-gray-500 mt-6">{boycottReason}</p>
                        <p className="text-gray-500 mt-6">Posted by: {name}</p>
                        <p className="text-gray-500 mt-2">Posted on: {currentDate} | {postedTime}</p>
                    </div>
                    <div>
                        <img className="w-12 h-12 rounded-full" src={userPhoto} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QueryDetails;