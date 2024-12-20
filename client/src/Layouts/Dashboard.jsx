import { useContext } from 'react'
import { AuthContext } from '../Providers/AuthProviders';
import { NavLink, Outlet } from 'react-router-dom';
import { FaHome, FaProductHunt, FaUser, FaUserFriends } from 'react-icons/fa';
import Navbar from '../Shared/Navbar';

export default function Dashboard() {

    const { user, logout } = useContext(AuthContext);

    const adminLinks = (
        <>
            <li>
                <h1 className='font-bold uppercase'>{user?.role} Dashboard</h1>
            </li>
            <li>
                <NavLink to='/dashboard/profile'>
                    <FaUser />
                    Profile
                </NavLink>
            </li>
            <li>
                <NavLink to="/dashboard/alluser">
                    <FaUserFriends></FaUserFriends>
                    All Users
                </NavLink>
            </li>
            <li>
                <NavLink to="/dashboard/mybooking">

                    Cash-Out</NavLink>
            </li>
            <li>
                <NavLink to="/dashboard/mywishlist">

                    Cash-In</NavLink>
            </li>
            <li>
                <NavLink to="/dashboard/requestAdmin">

                    Balance Inquiry</NavLink>
            </li>
            <li>
                <NavLink to="/dashboard/transactions">

                    Transactions History</NavLink>
            </li>
        </>
    );


    const userLinks = (
        <>
            <li>
                <h1 className='font-bold uppercase'>{user?.role} Dashboard</h1>
            </li>
            <li>
                <NavLink to="/dashboard/profile">
                    <FaProductHunt></FaProductHunt>
                    Profile
                </NavLink>
            </li>
            <li>
                <NavLink to="/dashboard/mybooking">

                    Cash-Out</NavLink>
            </li>
            <li>
                <NavLink to="/dashboard/mywishlist">

                    Cash-In</NavLink>
            </li>
            <li>
                <NavLink to="/dashboard/requestAdmin">

                    Balance Inquiry</NavLink>
            </li>
            <li>
                <NavLink to="/dashboard/transactions">

                    Transactions History</NavLink>
            </li>
        </>

    );

    let links;
    if (user?.role === 'admin') {
        links = adminLinks;
    } else {
        links = userLinks;
    }

    return (
        <div className=''>
            <Navbar></Navbar>
            <div className='drawer lg:drawer-open pt-2'>
                <input type="checkbox" id="my-drawer-2" className="drawer-toggle" />
                <div className="drawer-content flex-none">
                    <label htmlFor="my-drawer-2" className="btn btn-square btn-ghost lg:hidden mt-16">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            className="inline-block h-6 w-6 stroke-current">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </label>
                    <div>
                        <Outlet></Outlet>
                    </div>
                </div>
                <div className="drawer-side pt-20">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full bg-base-200">
                        {links}
                        <div className="divider"></div>
                        <li>
                            <NavLink to="/">
                                <FaHome /> Home
                            </NavLink>
                        </li>
                        <li>
                            <button onClick={logout} className="px-4 py-2 bg-red-600 rounded-md hover:bg-red-700 focus:outline-none focus:bg-red-700">Logout</button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
