import React from "react";
import FirstImg from "./../../assets/heroimg.png";
import { ReactTyped } from "react-typed";
function SecondHero() {
  return (
    <div>
      <section className="text-gray-600 body-font dark:text-white dark:bg-black">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
         
          <div className="lg:flex-grow md:w-1/2 lg:w-1/2 lg:p-20 md:p-8 flex flex-col md:items-start md:text-left items-center text-center">
          <div className="">
            <h1 className="text-[30px] font-extrabold text-black leading-none lg:text-[50px] md:text-[50px]  dark:text-white ">
            Empowering Success in <span className="text-green">
            <ReactTyped
                  className="text-animation"
                  strings={[" Web Developer.", "MERN Stack Developer", " Full-Stack Developer."]}
                  typeSpeed={150}
                  backSpeed={150}
                  // attr="placeholder"
                  loop
                >
                  {/* <input type="text" /> */}
            </ReactTyped>
              </span>
        </h1>
            <p className="my-8 leading-relaxed ">
            Hii! Are you ready to embark on an exciting journey into the
                world of web development? Look no further! Our platform offers
                comprehensive training that covers everything you need to know
                to kickstart your career in web development.
            </p>
            <div className="flex lg:justify-start md:justify-start justify-center">
             
              
              <button className="items-center dark:hover:bg-white dark:hover:text-black hover:bg-black hover:text-white block px-10 py-3.5 text-base font-medium text-center col-1 transition duration-500 ease-in-out transform border-2 border-black dark:border-white shadow-md rounded-3xl   text-black  dark:text-white">
                    Start Now !
                  </button>
            </div>
            </div>
          </div>



          <div className=" lg:w-1/2 md:w-1/2 lg:p-10  mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded "
              alt="hero"
              src={FirstImg}
            />
          </div>



        </div>
      </section>
    </div>
  );
}

export default SecondHero;
