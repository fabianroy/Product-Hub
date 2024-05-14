import axios from 'axios';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const QueryCard = ({ query }) => {

    const { _id, productName, productBrand, productPhoto, queryTitle, currentDate } = query;

    const handleDeleteQuery = () => {
        axios.delete(`https://product-hub-server-phi.vercel.app/queries/${_id}`, { withCredentials: true })
            .then((res) => {
                console.log(res);
                console.log('Query deleted successfully!');
            })
            .catch((err) => {
                console.log(err);
            });
    }

    return (
        <div className='p-6 md:p-0 mt-2 w-fit mx-auto'>
            <div className="card md:w-[600px] md:h-80 bg-base-100 shadow-xl flex items-center flex-col md:flex-row p-6">
                <div className='flex-1'>
                    <figure><img className='w-full md:w-52 md:h-52' src={productPhoto} alt={productName} /></figure>
                </div>
                <div className="card-body flex-1">
                    <h2 className="card-title">
                        {queryTitle}
                    </h2>
                    <p className="text-gray-500 mt-2">Product : {productName}</p>
                    <p className="text-gray-500">Brand : {productBrand}</p>
                    <p className="text-gray-500">Posted on : {currentDate}</p>
                </div>
                <div className="flex flex-row md:flex-col gap-1 md:gap-4">
                    <Link className='btn bg-orange-400' to={`/queryDetails/${_id}`}><button>Details</button></Link>
                    <Link className='btn bg-orange-400' to={`/updatequery/${_id}`}><button>Update</button></Link>
                    <button onClick={() => handleDeleteQuery(_id)} className='btn bg-red-400'><button>Delete</button></button>
                </div>
            </div>
        </div>
    );
};

export default QueryCard;

QueryCard.propTypes = {
    query: PropTypes.object
}