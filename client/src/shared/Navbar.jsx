import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineHeart, AiOutlineShoppingCart, AiOutlineSearch } from 'react-icons/ai';
import { AuthContext } from '../Providers/AuthProviders';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem('token') !== null;
  const role = localStorage.getItem('role');

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const NavList = (
    <>
      <li>
        <NavLink to="/" className={({ isActive }) => isActive ? "text-pink700 font-bold" : ""}>Home</NavLink>
      </li>
      <li>
        <NavLink to="/product" className={({ isActive }) => isActive ? "text-pink700 font-bold" : ""}>Product</NavLink>
      </li>
      <li>
        <NavLink to="/contact-us" className={({ isActive }) => isActive ? "text-pink700 font-bold" : ""}>Contact Us</NavLink>
      </li>
      <li>
        <NavLink to="/contact-us" className={({ isActive }) => isActive ? "text-pink700 font-bold" : ""}>Categories</NavLink>
      </li>
      <li>
        <NavLink to="/contact-us" className={({ isActive }) => isActive ? "text-pink700 font-bold" : ""}>Offers</NavLink>
      </li>
    </>
  );

  const NavList2 = (
    <>
      <li>
        <Link to={`/${role}-dashboard`}>Dashboard</Link>
      </li>
      <li>
        <button onClick={handleLogout}>Logout</button>
      </li>
    </>
  );

  return (
    <div className="w-full">
      {/* First Line */}
      <div className="bg-white">
        <div className="container mx-auto max-w-[1120px] flex items-center justify-between py-3">
          {/* Left: Logo */}
          <div className="flex items-center">
            <a href="/" className="btn btn-ghost text-2xl">
              <div className="flex">
                <p className="font-bold text-gray-800">
                  <span className="text-pink700">Fashion</span> House
                </p>
              </div>
            </a>
          </div>

          {/* Middle: Search Bar */}
          <div className="flex-1 flex justify-center">
            <div className="relative w-2/3 md:w-1/2 lg:w-[75%]">
              <input
                type="text"
                placeholder="Search"
                className="input input-bordered w-full border-pink700 pr-12 h-10 text-base"
              />
              <button className="absolute top-0 right-0 h-full px-4 bg-pink700 text-white flex items-center justify-center">
                <AiOutlineSearch className="text-lg" />
              </button>
            </div>
          </div>

          {/* Right: Wishlist, Cart, Login/Signup */}
          <div className="flex items-center gap-2">
            <Link to="/wishlist">
              <button className="btn btn-ghost btn-circle">
                <AiOutlineHeart className="text-gray-700 text-2xl" />
              </button>
            </Link>
            <Link to="/cart">
              <button className="btn btn-ghost btn-circle">
                <AiOutlineShoppingCart className="text-gray-700 text-2xl" />
              </button>
            </Link>
            {isLoggedIn ? (
              <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden">
                    <img src={user?.user.photo} alt="User Avatar" className="w-full h-full object-cover" />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                  <div className="pb-3">
                    <p className="font-bold text-sm">{user?.user.username}</p>
                    <p className="text-xs">{user?.email}</p>
                  </div>
                  {NavList2}
                </ul>
              </div>
            ) : (
              <div className="gap-2 flex">
                <Link to="/signin">
                  <button className="btn btn-sm bg-pink700 text-white">Sign In</button>
                </Link>
                <Link to="/signup">
                  <button className="btn btn-sm bg-transparent text-black hover:bg-pink700 hover:text-white">Sign Up</button>
                </Link>
              </div>
            )}
          </div>
        </div>
        {/* Full Width Border */}
        <div className="w-full border-b border-black"></div>
      </div>

      {/* Second Line */}
      <div className="navbar-bottom bg-gray-100 h-11">
        <div className="container mx-auto max-w-[1120px] flex items-center justify-between">
          {/* Center: Nav Links */}
          <ul className="menu menu-horizontal text-sm font-bold justify-center flex-1">
            {NavList}
          </ul>

          {/* Right: Hotline Number */}
          <div className="text-sm font-semibold text-gray-700 flex-none">
            Hotline: <span className="text-pink700">+1-234-567-890</span>
          </div>
        </div>
      </div>
    </div>
  );
}
