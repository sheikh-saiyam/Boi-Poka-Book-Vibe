import { NavLink } from "react-router-dom";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink to='/'>Home</NavLink>
      </li>
      <li>
        <NavLink to='/listedBooks'>Listed Books</NavLink>
      </li>
      <li>
        <NavLink to='/ErrorPage'>Pages To Read</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-active mr-2 lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 
            rounded-box z-[1] mt-3 w-52 p-2 shadow space-y-3"
          >{links}</ul>
        </div>
        <a href="/" className="font-bold text-2xl">BooK VibE</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-2 space-x-4 font-semibold">{links}</ul>
      </div>
      <div className="navbar-end space-x-2">
        <button className="btn btn-success text-white">Sign in</button>
        <button className="btn btn-primary text-white">Login</button>
      </div>
    </div>
  );
};

export default Navbar;
