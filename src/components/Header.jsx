// import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";
// import logo from "../assets/logo.png";
import logo2 from "../assets/22.png";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const Header = () => {
  const { user, signOutUser } = useContext(AuthContext);

  const handleSignOutUser = () => {
    signOutUser()
      .then(() => console.log("User logged out successfully."))
      .catch(error => console.error(error));
  };

  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/login">Login</NavLink>
      </li>
      <li>
        <NavLink to="/register">Register</NavLink>
      </li>
      <li>
        <NavLink to="/orders">Orders</NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink to="/dashboard">Dashboard</NavLink>
          </li>
          <li>
            <NavLink to="/profile">Profile</NavLink>
          </li>
        </>
      )}
    </>
  );
  return (
    <div className="mb-2">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          </div>

          {/* <a href="/" className="btn btn-ghost normal-case text-xl">
            ABC Firebase Auth
          </a> */}
          <Link to="/">
            <img className="px-5 py-2" src={logo2} alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>

        <div className="navbar-end hidden lg:flex pr-5">
          {user ? (
            <>
              <span>{user.email}</span>{" "}
              <a onClick={handleSignOutUser} className="btn btn-sm">
                Sign Out
              </a>
            </>
          ) : (
            <Link to="/login">
              <button className="btn btn-sm">Please Sign In</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
