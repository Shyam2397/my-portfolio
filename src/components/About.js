import React from "react";

const About = () => {
  return (
    <div
      name="About"
      className="w-full h-full bg-gradient-to-b from-black to-gray-800"
    >
      <div className="flex flex-col max-w-screen-lg mx-auto h-screen w-full text-white justify-center md:px-10 sm:p-10 max-[426px]: px-5">
        <div className="pb-8">
          <p className="text-4xl font-bold capitalize inline border-b-4 border-gray-500 p-2">
            about
          </p>
        </div>
        <p className="text-xl">
          Hi, I'm a Well-qualified Full Stack Developer familiar with a wide
          range of programming utilities and languages. Knowledgeable of backend
          and frontend development requirements with database management.
          Handles any part of the process with ease. Collaborative team player
          with a willingness to learn in and grow with the organization.
        </p>
      </div>
    </div>
  );
};

export default About;
