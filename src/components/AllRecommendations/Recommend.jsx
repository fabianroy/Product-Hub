import { useLoaderData } from "react-router-dom";


const Recommend = () => {

    const query = useLoaderData();

    console.log(query);

    return (
        <div className='my-20'>
            <div className=" md:w-fit mx-auto p-4">
                <div className=" bg-gray-50 shadow-xl p-6 rounded-xl">
                    <h3 className="text-center text-2xl font-semibold mb-6">Recommend</h3>
                    <form>
                        <div className="flex flex-col md:flex-row gap-4 mt-4">
                            <input type="text" name="title" placeholder="Recmendation Title" maxLength='60' className="input input-bordered w-full" />
                            <input type="text" name="productName" placeholder="Product Name" maxLength='20' className="input input-bordered w-full" />
                        </div>
                        <div className="flex flex-col md:flex-row gap-4 mt-4">
                            <input type="text" name="productPhoto" placeholder="Product Photo URL" className="input input-bordered w-full" />
                            <input type="text" name="reason" placeholder="Recommendation Reason" maxLength='40' className="input input-bordered w-full" />
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