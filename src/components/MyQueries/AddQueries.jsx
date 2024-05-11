import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const AddQueries = () => {

    const { user } = useAuth();

    const navigate = useNavigate();

    const handleAddProduct = e => {
        e.preventDefault();
        const form = e.target;
        const productName = form.productName.value;
        const productBrand = form.productBrand.value;
        const productPhoto = form.productPhoto.value;
        const queryTitle = form.queryTitle.value;
        const boycottReason = form.boycottReason.value;
        const name = form.name.value;


        const query = {
            productName,
            productBrand,
            productPhoto,
            queryTitle,
            boycottReason,
            email: user.email,
            name: name,
            currentDate: new Date().toLocaleDateString(),
            postedTime: new Date().toLocaleTimeString()
        }

        axios.post('http://localhost:3000/queries', query, { withCredentials: true })
            .then((res) => {
                console.log(res);
                toast.success('Query added successfully!');
                navigate('/myqueries');
            })
            .catch((err) => {
                console.log(err);
                toast.error('Invalid email or password');
            })
    }

    return (
        <div className='my-20'>
            <div className=" md:w-fit mx-auto p-4">
                <div className=" bg-gray-50 shadow-xl p-6 rounded-xl">
                    <h3 className="text-center text-2xl font-semibold mb-6">Add a Query</h3>
                    <form onSubmit={handleAddProduct}>
                        <div className="flex flex-col md:flex-row gap-4 mt-4">
                            <input type="text" name="productName" placeholder="Product Name" className="input input-bordered w-full" />
                            <input type="text" name="productBrand" placeholder="Product Brand" className="input input-bordered w-full" />
                        </div>
                        <div className="flex flex-col md:flex-row gap-4 mt-4">
                            <input type="text" name="productPhoto" placeholder="Product Photo URL" className="input input-bordered w-full" />
                            <input type="text" name="queryTitle" placeholder="Query Title" className="input input-bordered w-full" />
                        </div>
                        <div className="flex flex-col md:flex-row gap-4 mt-4">
                            <input type="text" name="boycottReason" placeholder="Reason of Boycotting" className="input input-bordered w-full" />
                            <input type="text" name="name" placeholder="Your Name" className="input input-bordered w-full" />
                        </div>
                        <div className="mt-6 w-fit mx-auto">
                            <button className="btn w-60 md:w-96 bg-orange-400">Add Query</button>
                        </div>
                    </form>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default AddQueries;