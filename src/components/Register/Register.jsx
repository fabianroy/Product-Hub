import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {

    const { createUser } = useAuth();

    const handleRegister = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const photoURL = e.target.photoURL.value;

        const user = { 
            displayName: name,
            email: email,
            password: password,
            photoURL: photoURL
         };

        createUser(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                if (user) {
                    toast.success('User created successfully!');
                }
            })
            .then(() => {
                axios.post('http://localhost:3000/users', user, { withCredentials: true })
                    .then((res) => {
                        console.log(res);
                    })
                    .catch((err) => {
                        console.log(err);
                        toast.error('Invalid email or password');
                    })
            })
    }

    return (
        <div className="hero my-20">
            <div className="hero-content flex-col md:flex-row gap-20">

                <div className="card shrink-0 w-96 max-w-sm shadow-2xl bg-base-100">
                    <h1 className="text-3xl font-bold text-center mt-10">Sign Up Now!</h1>

                    <form onSubmit={handleRegister} className="card-body">


                        <div className="form-control">
                            <label htmlFor="email" className="label">
                                Name
                            </label>
                            <input
                                type="name"
                                name="name"
                                id="name"
                                placeholder="Enter your name"
                                className="input input-bordered"
                                required
                            />
                        </div>

                        <div className="form-control">
                            <label htmlFor="email" className="label">
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
                            <label htmlFor="image" className="label">
                                Email
                            </label>
                            <input
                                type="url"
                                name="photoURL"
                                id="photoURL"
                                placeholder="Enter your photo URL"
                                className="input input-bordered"
                                required
                            />
                        </div>

                        <div className="form-control">
                            <label htmlFor="password" className="label">
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
                            <button type="submit" className="btn bg-orange-600 text-white">
                                Register
                            </button>
                        </div>
                        <div className="form-control mt-2">
                            <button className="btn bg-gray-100">Login With Google</button>
                        </div>
                    </form>
                    <div className="text-center mb-4">
                        Already have an account? <Link className='text-orange-600' to="/login">Login Here</Link>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Register;