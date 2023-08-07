import React from "react";
import { RiArrowRightSLine } from "react-icons/ri";
import profile from "../assets/profile.jpeg";

const Home = () => {
  return (
    <div
      name="home"
      className="h-full w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full mt-36 md:mt-30 lg:mt-5 px-5">
          <h2 className="text-4xl sm:text-7xl md:text-5xl lg:text-7xl font-bold text-white">
            I'm a Full Stack Developer
          </h2>
          <p className="py-4 text-gray-500 max-w-md">
            Seeking Entry-level positions in a growth-oriented company in any
            field. To acquire a challenging position in a reputed organization
            where I could use my hardworking and creative skills for the growth
            and good market position of the company.
          </p>
          <div>
            <button className="group text-white w-fit px-6 py-3 my-3 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
              Portfolio
              <span className="group-hover:rotate-90 duration-300 text-2xl ml-2">
                <RiArrowRightSLine />
              </span>
            </button>
          </div>
        </div>
        <div className="my-5 md:my-28 md:mt-28 ">
          <img
            src={profile}
            alt="my profile"
            className="mx-auto w-3/4 rounded-3xl md:w-2/3"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
