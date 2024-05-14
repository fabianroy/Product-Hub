import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import QueryCard from "./MyQueryCard";

const MyQueries = () => {

    document.title = "My Queries";

    const { user } = useAuth();
    const [queries, setQueries] = useState([]);

    const url = `http://localhost:3000/queries?email=${user.email}`;

    useEffect(() => {
        axios.get(url, { withCredentials: true })
            .then(res => setQueries(res.data))
            .catch(err => console.log(err))
    }, [url]);

    return (
        <div className="my-10 md:my-20">
            <div className="w-fit mx-auto">
                <Link className="btn md:w-96 bg-orange-400" to='/addqueries'>Add Queries</Link>
            </div>
            <div className="my-10">
                {
                    queries.map(query => <QueryCard key={query._id} query={query}></QueryCard>)
                }
            </div>
        </div>
    );
};

export default MyQueries;