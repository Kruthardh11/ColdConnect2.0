import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import iconn from './assets/icon.svg';

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/");
  };

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className="bg-purple-400">
      <nav className="flex items-center justify-between flex-wrap p-6 w-full z-10 top-0">
        <div className="flex items-center flex-shrink-0 text-[#656EDF] mr-6">
          <img src={iconn} alt=" " className="w-16 h-16 cursor-pointer" onClick={handleLogoClick} />
        </div>

        <div className="block lg:hidden">
          <button
            id="nav-toggle"
            className="flex items-center px-3 py-2 border rounded text-[#656EDF] border-[#656EDF] hover:text-[#656EDF] hover:border-white"
            onClick={toggleNav}
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>

        <div
          className={`w-full flex-grow lg:flex lg:items-center lg:w-auto ${
            isNavOpen ? "block" : "hidden" // Use the state to conditionally apply "block" or "hidden" class
          } pt-6 lg:pt-0`}
          id="nav-content"
        >
          <ul className="list-reset lg:flex justify-end flex-1 items-center">
            <li className="mr-3">
              <a
                className="inline-block py-2 px-4 text-[#656EDF] no-underline"
                href="#Home"
              >
                How it Works
              </a>
            </li>
            <li className="mr-3">
              <Link
                to="/ourteam"
                className="inline-block text-gray-800 no-underline hover:text-[#656EDF] hover:text-underline py-2 px-4"
              >
                Our Team
              </Link>
            </li>
            <li className="mr-3">
              <Link
                to="/signup"
                className="inline-block text-gray-800 no-underline hover:text-[#656EDF] hover:text-underline py-2 px-4"
              >
                <button>Sign Up</button>
              </Link>
            </li>
            <li className="mr-3">
              <Link
                to="/login"
                className="inline-block text-gray-800 no-underline hover:text-[#656EDF] hover:text-underline py-2 px-4"
              >
                <button>Log In</button>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
