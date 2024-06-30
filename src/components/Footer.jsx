import React from "react";
import "./Footer.css";
import Logo from "./../assets/Logo/logonobg.png";
import { FaGithub, FaLinkedinIn, FaWhatsapp  } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
function Footer() {
  return (
    <div className="bg-black">
      <footer className="footer-container text-center bg-white dark:bg-black text-neutral-600 dark:text-neutral-300  lg:text-left">
        

        {/* <!-- Main container div: holds the entire content of the footer, including four sections (TW Elements, Products, Useful links, and Contact), with responsive styling and appropriate padding/margins. --> */}
        <div className="mx-6 py-10 text-center md:text-left">
          <div className="flex items-center justify-between flex-wrap p-5">
            {/* <!-- TW Elements section --> */}
            <div className="pages-foot">
              <h2 className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start foot-logo">
                <img className="foot-logo w-auto" src={Logo} alt="logo" />
              </h2>
              <p>
               
              </p>
            </div>
            {/* <!-- Products section --> */}
            <div className="pages-foot flex justify-center items-top flex-col">
              <h6 className="mb-4 flex justify-center col-yello sm:block font-semibold uppercase md:justify-start">
                PAGES
              </h6>
              <p className="mb-4">
                <a className=" hover:ml-2" href="/home">
                  Home
                </a>
              </p>
              <p className="mb-4">
                <a className=" hover:ml-2" href="/about">
                  Documentation
                </a>
              </p>
              <p className="mb-4">
                <a className="hover:ml-2" href="/career">
                  Videos
                </a>
              </p>
              <p className="mb-4">
                <a className="hover:ml-2" href="#">
                  About
                </a>
              </p>
              <p>
                <a className="hover:ml-2" href="/contact">
                  Contact
                </a>
              </p>
            </div>
            {/* <!-- Useful links section --> */}
            <div className="pages-foot flex justify-center items-top flex-col">
              <h6 className="mb-4 col-yello  font-semibold uppercase ">
                Documentation
              </h6>
              <p className="mb-4">
                <a className="hover:ml-2" href="#feature">
                  React
                </a>
              </p>
              <p className="mb-4">
                <a className="hover:ml-2" href="#contact">
                  Tailwind CSS
                </a>
              </p>
              <p className="mb-4">
                <a className="hover:ml-2" href="#contact">
                  NodeJS
                </a>
              </p>
              <p className="mb-4">
                <a className="hover:ml-2" href="#contact">
                  ExpressJS
                </a>
              </p>
              <p className="mb-4">
                <a className="hover:ml-2" href="#contact">
                  MongoDB
                </a>
              </p>
            </div>
            {/* <!-- Contact section --> */}
            <div className="pages-foot">
              <h6 className="mb-4 flex justify-center font-semibold uppercase col-yello">
                Follow, contact, tag, like, clone, watch - me
              </h6>
              

            
              
              <p className="flex items-top justify-center md:justify-start">
                <FaGithub className="m-3 h-8  w-8 h-text-green cursor-pointer" />
                <FaLinkedinIn className="m-3 h-8 h-text-green cursor-pointer  w-8" />
                <FaWhatsapp  className="m-3 h-8 h-text-green cursor-pointer w-8" />
                <IoMail  className="m-3 h-8 h-text-green cursor-pointer w-8" />
              </p>
            </div>
          </div>
        </div>

       
        {/* <div className=" p-6 text-center ">
          <span className="text-gray-60">© 2024 Copyright : </span>
          <a
            className="font-semibold text-gray-60 "
            href=""
          >
            {" "}
            LearnFlow All Reverce
          </a>
        </div> */}
      </footer>
    </div>
  );
}

export default Footer;
