import React from "react";
import { RiArrowRightSLine } from "react-icons/ri";
import profile from "../assets/profile.jpeg";
import { Link } from "react-scroll";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Home = () => {
  const [text] = useTypewriter({
    words: ["Full Stack Developer..", "Professional Coder.."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });

  return (
    <div
      name="Home"
      className="flex flex-col w-full h-full md:pt-20 bg-gradient-to-t from-black to-gray-800 lg:flex-row max-[426px]:px-5"
    >
      <div className="grid max-w-screen-lg flex-grow max-[426px]:h-auto max-[426px]:pt-40 h-screen lg:ml-40  place-items-center">
        <div className="flex flex-col gap-4">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
            Hi, I'm{" "}
            <span className="lg:text-7xl text-red-700 capitalize">
              shyam sundar
            </span>
          </h2>
          <h2 className="text-gray-300 font-bold lg:text-4xl text-3xl max-[376px]:text-2xl max-w-md">
            a <span>{text}</span>
            <Cursor
              cursorBlinking="false"
              cursorStyle="|"
              cursorColor="#ff014f"
            />
          </h2>
          <div>
            <Link
              to="Projects"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-3 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Projects
              <span className="group-hover:rotate-90 duration-300 text-2xl ml-2">
                <RiArrowRightSLine />
              </span>
            </Link>
          </div>
        </div>
      </div>
      <div className="grid max-w-screen-lg flex-grow max-[426px]:h-auto max-[426px]:pt-20 h-screen place-items-center">
        <div>
          <img
            src={profile}
            alt="my profile"
            className="mx-auto rounded-3xl w-10/12 lg:w-5/12 md:w-6/12 sm:w-9/12"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
