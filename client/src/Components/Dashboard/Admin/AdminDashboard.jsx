import { NavLink, Outlet } from 'react-router-dom';
import { FaHome, FaUser, FaUserFriends } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProviders";

export default function AdminDashboard() {
  const { user, logout } = useContext(AuthContext);
  // console.log(user);
  const userLinks = (
    <>
      <li>
        <h1 className='font-bold uppercase'>{user?.role} Dashboard</h1>
      </li>
      <li>
        <NavLink to='/admin-dashboard/profile'>
          <FaUser />
          Profile
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/profile">
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

  return (
    <div className="pt-2 mx-auto px-2">
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="flex-none pt-14">
          {/* Page content here */}
          <label htmlFor="my-drawer-2" className="btn btn-square btn-ghost ">
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
          <div className="flex-1 p-8">
            <Outlet />
          </div>
        </div>

        <div className="drawer-side pt-20">
          <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
          <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
            {/* Sidebar content here */}
            {userLinks}
            <div className="divider"></div>
            <li>
              <NavLink to="/">
                <FaHome /> Home
              </NavLink>
            </li>
            <li>
              <button onClick={logout} className="px-4 py-2 rounded-md hover:bg-red-700 focus:outline-none focus:bg-red-700">Logout</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
