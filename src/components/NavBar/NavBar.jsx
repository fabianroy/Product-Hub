import { NavLink } from "react-router-dom";
import logo from '/ProductHub.png'

const NavBar = () => {

    return (
        <div>
            <div className="navbar bg-black px-10">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[2] p-2 shadow bg-base-100 rounded-box w-52">
                            <NavLink className="btn btn-sm" to='/'><li>Home</li></NavLink>
                            <NavLink className="btn btn-sm" to='/queries'><li>Queries</li></NavLink>
                            <NavLink className="btn btn-sm" to='/recommendations'><li>Recommendation For Me</li></NavLink>
                            <NavLink className="btn btn-sm" to='/'><li>My Queries</li></NavLink>
                            <NavLink className="btn btn-sm" to='/'><li>My recommendations</li></NavLink>
                            <NavLink className="btn btn-sm" to='/login'><li>LogIn</li></NavLink>
                        </ul>
                    </div>
                    <img className="w-40" src={logo} alt="Product Hub" />
                </div>
                <div className="navbar-center hidden lg:flex navbar-end">
                    <ul className="menu menu-horizontal px-1 flex items-center gap-6">
                        <NavLink className='text-white font-semibold hover:text-orange-400' to='/'><li>Home</li></NavLink>
                        <NavLink className='text-white font-semibold hover:text-orange-400' to='/queries'><li>Queries</li></NavLink>
                        <NavLink className='text-white font-semibold hover:text-orange-400' to='/recommendations'><li>Recommendation For Me</li></NavLink>
                        <NavLink className='text-white font-semibold hover:text-orange-400' to='/'><li>My Queries</li></NavLink>
                        <NavLink className='text-white font-semibold hover:text-orange-400' to='/'><li>My recommendations</li></NavLink>
                        <NavLink className='btn btn-sm bg-orange-400 border-none text-black' to='/login'><li>LogIn</li></NavLink>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default NavBar;