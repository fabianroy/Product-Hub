import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import QueryCard from "./MyQueryCard";

const MyQueries = () => {

    const { user } = useAuth();
    const [queries, setQueries] = useState([]);

    const url = `http://localhost:3000/queries?email=${user.email}`;

    useEffect(() => {
        axios.get(url)
            .then(res => setQueries(res.data))
            .catch(err => console.log(err))
    }, [url]);

    return (
        <div className="my-10">
            <div className="w-fit mx-auto">
                <Link className="btn md:w-96 bg-orange-400" to='/addqueries'>Add Queries</Link>
            </div>
            <div className="w-4/5 mx-auto my-20 grid grid-cols-1 md:grid-cols-2">
                {
                    queries.map(query => <QueryCard key={query._id} query={query}></QueryCard>)
                }
            </div>
        </div>
    );
};

export default MyQueries;