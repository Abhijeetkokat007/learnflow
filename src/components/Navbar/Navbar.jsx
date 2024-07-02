import { useState, useEffect } from "react";
import Darklogo from "./../../assets/Logo/logonobg.png";
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
const Navbar = () => {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <nav className=" flex justify-between items-center fixed z-50 w-full nav-bg  px-6 py-2 lg:px-10 ">
      <div href="/" className="flex items-center gap-1">
        <a href="" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={Darklogo} className="h-16" alt="Flowbite Logo" />
        </a>
        <p className="text-[26px] font-extrabold text-white max-sm:hidden"></p>
      </div>

      <div className="hidden justify-center items-center text-[20px] font-bold lg:flex md:flex  gap-5 text-black dark:text-white sm:hidden">
      <div className="cursor-pointer h-text-green" onClick={()=>{window.location.href = '/';}}>Home </div>
      <div className="cursor-pointer h-text-green" onClick={()=>{window.location.href = '/about';}} >About</div>
      <div className="cursor-pointer h-text-green" onClick={()=>{window.location.href = '/tutorial';}}> Tutorial</div>
      <div className="cursor-pointer h-text-green" onClick={()=>{window.location.href = '/docs';}}>Docs</div>
      </div>
      <div className="flex justify-end items-center gap-5">
      <button
        onClick={handleThemeSwitch}
        className="h-10 rounded-lg p-2  hover:bg-gray-100 border w-20 dark:hover:bg-gray-700"
      >
        <svg
          className="fill-green-500 w-20 hidden dark:block theme-button-logo"
          fill="currentColor"
        >
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
        </svg>
        <svg
          className="fill-yellow-500 block ms-10 theme-button-logo  dark:hidden "
          fill="currentColor"
        >
          <path
            d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
            fill-rule="evenodd"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
      <GiHamburgerMenu className="md:hidden lg:hidden h-8  w-8  cursor-pointer dark:text-white" />
      </div>
    </nav>
  );
};

export default Navbar;
