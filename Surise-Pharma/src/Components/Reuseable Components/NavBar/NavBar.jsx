import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <div className="white xl:bg-black text-white mb-2 relative outerContainer">
      <div className="flex xl:flex-row xl:items-center wrapper" click={click}>
        <ul className="flex flex-col items-center justify-evenly flex-1 xl:justify-around relative xl:flex-wrap firstUl">
          <li className="block xl:inline-block mr-2 font-semibold text-base hover:text-gray-700 transition duration-500 ease-in-out">
            RESTAURANTS
            <svg
              className="w-4 h-4 inline-block ml-2"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
            <ul className="absolute bg-black z-10">
              <li className="hover:text-white transition duration-500 ease-in-out font-semibold text-base">
                {" "}
                Link 1{" "}
              </li>
              <li className="hover:text-white transition duration-500 ease-in-out font-semibold text-base">
                {" "}
                Link 2{" "}
              </li>
              <li className="hover:text-white transition duration-500 ease-in-out font-semibold text-base">
                {" "}
                Link 3{" "}
              </li>
            </ul>
          </li>
          <li className="inline-block mr-2 font-semibold text-base hover:text-gray-700 transition duration-500 ease-in-out">
            HOTELS
          </li>
          <li className="inline-block mr-2 font-semibold text-base hover:text-gray-700 transition duration-500 ease-in-out">
            CAFE
          </li>
          <li className="inline-block mr-2 font-semibold text-base hover:text-gray-700 transition duration-500 ease-in-out">
            HOSPITALS
          </li>
        </ul>
        <ul
          className={`flex-1 flex items-center justify-center order-first xl:order-none`}
        >
          <li className="cursor-pointer">
            <Link to="/">
              <img src="" alt="Amaken" className="w-40 my-3" />
            </Link>
          </li>
        </ul>
        <ul className="flex-1 flex flex-col xl:flex-wrap justify-evenly items-center xl:pb-0 pb-10 secondUl">
          <li className="flex flex-1 justify-center hover:text-gray-700 transition duration-500 ease-in-out font-semibold text-base mr-2">
            <img
              src={""}
              alt="Location"
              className="items-baseline h-5 w-3 inline-block mx-2"
            />
            Dubai-UAE
          </li>
          <li className="hover:text-gray-700 transition duration-500 ease-in-out flex-1 font-semibold text-base mr-2">
            <img src="" alt="Language" className="w-5 inline-block mx-2 ml-5" />
            <svg
              className="w-4 h-4 inline-block ml-2"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </li>
          <li className="flex-1 mr-2">
            <button className="rounded-full border-gray-600 border-2 py-1 px-8 hover:text-gray-700 transition duration-500 ease-in-out font-semibold text-base">
              Login
            </button>
          </li>
          <li className="flex-1 flex mr-2">
            <img
              src={"Search"}
              alt="Search"
              className="w-6 items-baseline h-6"
            />
          </li>
          <li className="flex-1 mr-2">
            <Link
              to="/admin"
              className=" border-gray-600 border-2 py-1 font-semibold text-base"
            >
              Admin
            </Link>
          </li>
        </ul>
      </div>
      <svg
        className="bg-white text-black block xl:hidden w-10 h-10 absolute z-10"
        onClick={handleClick}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    </div>
  );
};

export default NavBar;
