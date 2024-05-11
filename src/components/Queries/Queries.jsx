import { useLoaderData } from "react-router-dom";
import QueryCard from "./QueryCard";
import { useState } from "react";

const Queries = () => {
    const allQueries = useLoaderData();

    const [searchTerm, setSearchTerm] = useState('');
    const [filteredQueries, setFilteredQueries] = useState(allQueries);

    const searchHandler = () => {
        const filteredProducts = allQueries.filter(query =>
            query.productName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            query.productBrand.toLowerCase().includes(searchTerm.toLowerCase()) ||
            query.queryTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
            query.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredQueries(filteredProducts);
    }

    return (
        <div className="my-10">
            <p className="w-fit mx-auto text-3xl font-semibold">All Queries</p>

            <div className="w-80 md:w-96 mx-auto mt-10">
                <label className="input input-bordered flex justify-between items-center gap-2 py-4">
                    <input type="text"
                        placeholder="eg: product name, brand, title or user"
                        value={searchTerm}
                        onChange={e => setSearchTerm(e.target.value)}
                        className="w-full"
                    />
                    <button onClick={searchHandler} className="btn btn-sm "><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg></button>
                </label>
            </div>

            <div className="w-3/5 md:w-4/5 mx-auto my-10 md:my-20 grid grid-cols-1 md:grid-cols-3 gap-6 p-1 md:p-0">
                {filteredQueries.map(query => (
                    <QueryCard key={query._id} query={query}></QueryCard>
                ))}
            </div>
        </div>
    );
};

export default Queries;
