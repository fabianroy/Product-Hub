import axios from "axios";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import useAuth from "../../hooks/useAuth";
import { useLoaderData, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Recommend = () => {

    document.title = "Recommend";

    const query = useLoaderData();
    const { user } = useAuth();
    const navigate = useNavigate();

    const [userInfo, setUserInfo] = useState({});

    const url = `https://product-hub-server-phi.vercel.app/users?email=${user.email}`;

    useEffect(() => {
        axios.get(url)
            .then(res => {
                const dataArray = res.data;
                const userArray = dataArray.filter(data => data.email === user.email);
                setUserInfo(userArray[0]);
            })
    }, [user.email, url]);

    console.log(userInfo);

    const handleRecommend = e => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const productName = form.productName.value;
        const productPhoto = form.productPhoto.value;
        const reason = form.reason.value;
        const recommendation = form.recommendation.value;

        const recommend = {
            recommendationTitle: title,
            recommendationProductName: productName,
            recommendationPhoto: productPhoto,
            recommendationReason: reason,
            recommendation: recommendation,
            recommendationBy: userInfo.displayName,
            email: user.email,
            queryId: query._id,
            queryProductName: query.productName,
            queryTitle: query.queryTitle,
            queryBy: query.name,
            queryEmail: query.email,
            postedTime: new Date().toLocaleTimeString(),
            postedDate: new Date().toLocaleDateString()
        }

        console.log(recommend);

        axios.post('https://product-hub-server-phi.vercel.app/recommendations', recommend, { withCredentials: true })
            .then(res => {
                console.log(res);
                toast.success('Recommendation added successfully!');
                navigate('/queries');
            })
            .catch(err => {
                console.log(err);
                toast.error('Invalid email or password');
            })
    }

    return (
        <div className='my-20'>
            <div className=" md:w-fit mx-auto p-4">
                <div className=" bg-gray-50 shadow-xl p-6 rounded-xl">
                    <h3 className="text-center text-2xl font-semibold mb-6">Recommend</h3>
                    <form onSubmit={handleRecommend}>
                        <div className="flex flex-col md:flex-row gap-4 mt-4">
                            <input type="text" name="title" placeholder="Recmendation Title" maxLength='60' className="input input-bordered w-full" />
                            <input type="text" name="productName" placeholder="Product Name" maxLength='20' className="input input-bordered w-full" />
                        </div>
                        <div className="flex flex-col md:flex-row gap-4 mt-4">
                            <input type="text" name="productPhoto" placeholder="Product Photo URL" className="input input-bordered w-full" />
                            <input type="text" name="reason" placeholder="Recommendation Reason" maxLength='46' className="input input-bordered w-full" />
                        </div>
                        <div className="flex flex-col md:flex-row gap-4 mt-4">
                            <textarea name='recommendation' placeholder='Recommendation' className='input input-bordered w-full h-32'></textarea>
                        </div>
                        <div className="mt-6 w-fit mx-auto">
                            <button className="btn w-60 md:w-96 bg-orange-400">Add Recommendation</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Recommend;