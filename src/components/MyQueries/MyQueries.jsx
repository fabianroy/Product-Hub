import { Link } from "react-router-dom";

const MyQueries = () => {
    return (
        <div className="my-10">
            <Link className="btn" to='/addqueries'>Add Queries</Link>
        </div>
    );
};

export default MyQueries;