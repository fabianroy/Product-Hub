import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { useEffect, useState } from 'react';

const AddQueries = () => {

    document.title = "Add Queries";

    const { user } = useAuth();

    const [userInfo, setUserInfo] = useState([]);

    const url = `http://localhost:3000/users?email=${user.email}`;

    useEffect(() => {
        axios.get(url)
            .then(res => {
                const dataArray = res.data;
                const userArray = dataArray.filter(data => data.email === user.email);
                setUserInfo(userArray[0]);
            })
    }, [user.email, url]);

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
            userPhoto: userInfo.photoURL,
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
                            <input type="text" name="productName" placeholder="Product Name" minLength='3' maxLength='16' className="input input-bordered w-full" required />
                            <input type="text" name="productBrand" placeholder="Product Brand" maxLength='20' className="input input-bordered w-full" required />
                        </div>
                        <div className="flex flex-col md:flex-row gap-4 mt-4">
                            <input type="text" name="productPhoto" placeholder="Product Photo URL" className="input input-bordered w-full" required />
                            <input type="text" name="queryTitle" placeholder="Query Title" minLength='16' maxLength='60' className="input input-bordered w-full" required />
                        </div>
                        <div className="flex flex-col md:flex-row gap-4 mt-4">
                            <input type="text" name="boycottReason" placeholder="Reason of Boycotting" minLength='60' maxLength='200' className="input input-bordered w-full" required />
                            <input type="text" name="name" defaultValue={userInfo.displayName} readOnly className="input input-bordered w-full" />
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