import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const QueryCard = ({ query }) => {

    const { _id, productName, productBrand, productPhoto, queryTitle} = query;

    return (
        <div>
            <div>
                <div className="card md:w-72 h-fit md:max-h-[600px] bg-base-100 shadow-xl p-2 pb-4 md:p-0">
                    <div className=''>
                        <figure><img className='w-full md:w-32 md:h-32' src={productPhoto} alt={productName} /></figure>
                    </div>
                    <div className="card-body">
                        <h2 className="font-semibold">
                            {queryTitle}
                        </h2>
                        <hr />
                        <p className="text-gray-500">{productName}</p>
                        <p className="text-gray-500">Brand : {productBrand}</p>
                    </div>
                    <div className="flex md:flex-col flex-row gap-2 w-fit md:w-full mx-auto p-4">
                        <Link className='btn btn-sm bg-orange-400' to={`/queryDetails/${_id}`}><button>Details</button></Link>
                        <Link className='btn btn-sm bg-gray-50'><button>Recommend</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QueryCard;

QueryCard.propTypes = {
    query: PropTypes.object
}