import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.jpg';
import { AuthContext } from '../Providers/AuthProviders';

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);
  console.log(user);
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem('token') !== null;
  const role = localStorage.getItem('role');

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const NavList = <>
    <li><Link to="/">Home</Link> </li>
    <li> <Link to="/all-product">Product</Link> </li>
    <li> <Link to="/contact Us">Contact Us</Link> </li>
  </>

  const NavList2 = <>
    <li>
      <Link to={`/${role}-dashboard`}>
        Dashboard
      </Link>
    </li>
    <li><button onClick={handleLogout}>Logout</button></li>
  </>

  return (
    <div className="navbar fixed z-10 bg-base-100 bg-opacity-15 text-black">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            {NavList}
          </ul>
        </div>
        <ul className="menu menu-horizontal px-1 hidden lg:flex">
          {NavList}
        </ul>
      </div>

      {/* Center: LOGO */}
      <div className="navbar-center">
        <a href='/' className="btn btn-ghost text-xl">
          <img src={logo} className='h-[45px] lg:h-[55px]' />
          <p className="text-lg font-bold text-gray-800 dark:text-white absolute -mb-12 -ml-28">
            <span className="text-pink700">Fashion</span> House
          </p>
        </a>
      </div>

      {/* End: Search, Icon, Auth */}
      <div className="flex-none gap-2 navbar-end">
        <div className="navbar-center flex items-center">
          <div className="form-control">
            <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
          </div>
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar lg:hidden">
              <div
                className="w-10 h-10 rounded-full bg-gray-300 dark:bg-gray-600 overflow-hidden cursor-pointer"
                title="User Profile"
              >
                <img
                  src="https://via.placeholder.com/40"
                  alt="User Avatar"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              {isLoggedIn && (
                <>
                  {NavList2}
                </>
              )}
              {!user && <>
                <div className="gap-2 flex justify-around">
                  <Link to='/signin'>
                    <button className="btn btn-sm">Sign In</button>
                  </Link>
                  <Link to='/signup'>
                    <button className="btn btn-sm bg-red-600 text-white">Sign Up</button>
                  </Link>
                </div>
              </>}
            </ul>
          </div>
          <ul className="menu menu-horizontal px-1 hidden lg:flex">
            {isLoggedIn && (
              <>
                {NavList2}
              </>
            )}
          </ul>
          {!user && <>
            <div className="gap-3 hidden lg:flex">
              <Link to='/signin'>
                <button className="btn btn-sm">Sign In</button>
              </Link>
              <Link to='/signup'>
                <button className="btn btn-sm bg-red-600 text-white">Sign Up</button>
              </Link>
            </div>
          </>}
        </div>
      </div>
    </div >
  )
}
