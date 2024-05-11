import { useLoaderData } from "react-router-dom";
import QueryCard from "./QueryCard";

const Queries = () => {

    const queries = useLoaderData();

    return (
        <div className="my-20">
            <p className="w-fit mx-auto text-3xl font-semibold">All Queries</p>
            <div className="w-3/5 md:w-4/5 mx-auto my-10 md:my-20 grid grid-cols-1 md:grid-cols-4 gap-6 p-1 md:p-0">
                {
                    queries.map(query => <QueryCard key={query._id} query={query}></QueryCard>)
                }
            </div>
        </div>
    );
};

export default Queries;