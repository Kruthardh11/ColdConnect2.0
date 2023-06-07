import React from "react";
import iconn from './assets/icon.svg';
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="bg-purple-400  ">
      <nav class="flex items-center justify-between flex-wrap  p-6 w-full z-10 top-0 ">
        <div class="flex items-center flex-shrink-0 text-[#656EDF] mr-6">
          <img src={iconn} alt=" " className="w-8" />
        </div>

        <div class="block lg:hidden">
          <button
            id="nav-toggle"
            class="flex items-center px-3 py-2 border rounded text-[#656EDF] border-[#656EDF] hover:text-[#656EDF] hover:border-white"
          >
            <svg
              class="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>

        <div
          class="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block pt-6 lg:pt-0"
          id="nav-content"
        >
          <ul class="list-reset lg:flex justify-end flex-1 items-center">
            <li class="mr-3">
              <a
                class="inline-block py-2 px-4 text-[#656EDF] no-underline"
                href="#Home"
              >
                How it Works
              </a>
            </li>
            <li class="mr-3">
              <a
                class="inline-block text-gray-800 no-underline hover:text-[#656EDF] hover:text-underline py-2 px-4"
                href="#Features"
              >
                Our Team
              </a>
            </li>
            <li class="mr-3">
              <a
                class="inline-block text-gray-800 no-underline hover:text-[#656EDF] hover:text-underline py-2 px-4"
                href="#Team"
              >
                <button><Link to='/signup' >Sign Up</Link></button>
              </a>
            </li>
            <li class="mr-3">
              <a
                class="inline-block text-gray-800 no-underline hover:text-[#656EDF] hover:text-underline py-2 px-4"
              >
                <button><Link to='/Login'  >Log In</Link></button>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
window.onload = function () {
  document.getElementById("nav-toggle").onclick = function () {
    document.getElementById("nav-content").classList.toggle("hidden");
  };
};
