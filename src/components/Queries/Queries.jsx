import QueryCard from "./QueryCard";
import { useEffect, useState } from "react";
import axios from "axios";

const Queries = () => {

    document.title = "All Queries";

    const [queries, setQueries] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredQueries, setFilteredQueries] = useState([]);

    useEffect(() => {
        axios.get('https://product-hub-server-phi.vercel.app/queries', { withCredentials: true })
            .then(res => {
                setQueries(res.data);
                setFilteredQueries(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    useEffect(() => {
        const filteredProducts = queries.filter(query =>
            query.productName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            query.productBrand.toLowerCase().includes(searchTerm.toLowerCase()) ||
            query.queryTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
            query.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredQueries(filteredProducts);
    }, [searchTerm, queries]);

    return (
        <div className="my-10">
            <p className="w-fit mx-auto text-3xl font-semibold">All Queries</p>

            <div className="w-80 md:w-96 mx-auto mt-10 flex items-center">
                <input type="text"
                    placeholder="eg: product name, brand, title or user"
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                    className="input input-bordered flex-grow mr-2"
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4 w-fit mx-auto mt-10">
                {filteredQueries.map(query => (
                    <QueryCard key={query._id} query={query} />
                ))}
            </div>
        </div>
    );
};

export default Queries;
