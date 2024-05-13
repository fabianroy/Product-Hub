import axios from "axios";
import { useLoaderData, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UpdateQuery = () => {

    const queries = useLoaderData();

    const { _id, productName, productBrand, productPhoto, queryTitle, boycottReason, name } = queries;

    const navigate = useNavigate();

    const handleUpdateQuery = (e) => {
        e.preventDefault();
        const productName = e.target.productName.value;
        const productBrand = e.target.productBrand.value;
        const productPhoto = e.target.productPhoto.value;
        const queryTitle = e.target.queryTitle.value;
        const boycottReason = e.target.boycottReason.value;
        const name = e.target.name.value;

        const query = {
            productName,
            productBrand,
            productPhoto,
            queryTitle,
            boycottReason,
            name
        }

        axios.put(`http://localhost:3000/queries/${_id}`, query, { withCredentials: true })
            .then((res) => {
                console.log(res);
                navigate('/myqueries');
                toast.success('Query updated successfully!');
            })
            .catch((err) => {
                console.log(err);
            });
    }

    document.title = `${queryTitle} - Update`

    return (
        <div className='my-20'>
            <div className=" md:w-fit mx-auto p-4">
                <div className=" bg-gray-50 shadow-xl p-6 rounded-xl">
                    <h3 className="text-center text-2xl font-semibold mb-6">Add a Query</h3>
                    <form onSubmit={handleUpdateQuery}>
                        <div className="flex flex-col md:flex-row gap-4 mt-4">
                            <input type="text" name="productName" defaultValue={productName} placeholder="Product Name" className="input input-bordered w-full" />
                            <input type="text" name="productBrand" defaultValue={productBrand} placeholder="Product Brand" className="input input-bordered w-full" />
                        </div>
                        <div className="flex flex-col md:flex-row gap-4 mt-4">
                            <input type="text" name="productPhoto" defaultValue={productPhoto} placeholder="Product Photo URL" className="input input-bordered w-full" />
                            <input type="text" name="queryTitle" defaultValue={queryTitle} placeholder="Query Title" className="input input-bordered w-full" />
                        </div>
                        <div className="flex flex-col md:flex-row gap-4 mt-4">
                            <input type="text" name="boycottReason" defaultValue={boycottReason} placeholder="Reason of Boycotting" className="input input-bordered w-full" />
                            <input type="text" name="name" defaultValue={name} placeholder="Your Name" className="input input-bordered w-full" />
                        </div>
                        <div className="mt-6 w-fit mx-auto">
                            <button className="btn w-60 md:w-96 bg-orange-400">Update Query</button>
                        </div>
                    </form>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default UpdateQuery;