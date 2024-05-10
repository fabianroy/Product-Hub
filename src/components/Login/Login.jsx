import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {

    const { signIn } = useContext(AuthContext);

    // const location = useLocation();
    const Navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        signIn(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                if (user) {
                    Navigate('/');
                } else {
                    console.log('User not found');
                }
            })

            .catch((err) => {
                console.log(err);
                toast.error('User not found');
            });
    };

    return (
        <div className="hero my-20">
            <div className="hero-content flex-col md:flex-row gap-20">

                <div className="md:w-96 card shrink-0 max-w-sm shadow-2xl bg-base-100">
                    <h1 className="text-3xl font-bold text-center mt-10">Login Now!</h1>

                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Enter your email"
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                Password
                            </label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                placeholder="Enter your password"
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn bg-orange-400">
                                Login
                            </button>
                        </div>
                        <div className="form-control mt-2">
                            <button className="btn bg-gray-100">Login With Google</button>
                        </div>
                    </form>
                    <div className="text-center mb-4">
                        Haven&apos;t any account? <Link className='text-orange-600' to="/register">Register Here</Link>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Login;