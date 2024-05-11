import axios from 'axios';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const QueryCard = ({ query }) => {

    const { _id, productName, productBrand, productPhoto, queryTitle, boycottReason, rating } = query;

    const handleDeleteQuery = () => {
        axios.delete(`http://localhost:3000/queries/${_id}`, { withCredentials: true })
            .then((res) => {
                console.log(res);
                console.log('Query deleted successfully!');
            })
            .catch((err) => {
                console.log(err);
            });
    }

    return (
        <div className='p-6 md:p-0'>
            <div className="card md:w-[600px] bg-base-100 shadow-xl flex items-center flex-col md:flex-row p-4">
                <div className='flex-1'>
                    <figure><img className='w-full md:w-60 md:h-40' src={productPhoto} alt={productName} /></figure>
                </div>
                <div className="card-body flex-1">
                    <h2 className="card-title">
                        {queryTitle}
                    </h2>
                    <p className="text-gray-500 mt-2">{productName} - {productBrand}</p>
                    <p className="text-gray-500 mt-2">{boycottReason}</p>
                    <p className="text-gray-500 mt-2">{rating}</p>
                </div>
                <div className="flex md:flex-col flex-row gap-4">
                    <Link className='btn bg-orange-400' to={`/queryDetails/${_id}`}><button>Details</button></Link>
                    <Link className='btn bg-orange-400' to={`/updatequery/${_id}`}><button>Update</button></Link>
                    <button onClick={handleDeleteQuery} className="btn bg-orange-400">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default QueryCard;

QueryCard.propTypes = {
    query: PropTypes.object
}