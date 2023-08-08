import React from "react";
import arraydestruct from "../assets/p-icon/arrayDestruct.jpg";
import installNode from "../assets/p-icon/installNode.jpg";
import navbar from "../assets/p-icon/navbar.jpg";
import reactParallax from "../assets/p-icon/reactParallax.jpg";
import reactSmooth from "../assets/p-icon/reactSmooth.jpg";
import reactWeather from "../assets/p-icon/reactWeather.jpg";

const Projects = () => {
  const projects = [
    {
      id: 1,
      src: arraydestruct,
    },
    {
      id: 2,
      src: installNode,
    },
    {
      id: 3,
      src: navbar,
    },
    {
      id: 4,
      src: reactParallax,
    },
    {
      id: 5,
      src: reactSmooth,
    },
    {
      id: 6,
      src: reactWeather,
    },
  ];

  return (
    <div
      name="Projects"
      className="w-full h-full bg-gradient-to-b from-gray-800 to-black"
    >
      <div className="flex flex-col max-w-screen-lg h-screen w-full text-white justify-center mx-auto sm:px-10">
        <div className="pb-8">
          <p className="text-4xl inline font-bold border-b-4 p-2 border-gray-500 capitalize">
            projects
          </p>
          <p className="py-6 lg:py-0 lg:pt-6 text-xl">
            Check out some of my work right here
          </p>
        </div>
        <div className="grid max-[426px]:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-8 max-[426px]:gap-4 px-12 sm:px-0">
          {projects.map(({ id, src }) => (
            <div
              key={id}
              className=" max-[426px]:w-20 shadow-md shadow-gray-600 rounded-lg lg:w-56"
            >
              <img
                src={src}
                alt="project-img"
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-2 m-2 duration-200 hover:scale-105 max-[426px]:px-3 max-[426px]:m-0">
                  Demo
                </button>
                <button className="w-1/2 px-6 py-2 m-2 duration-200 hover:scale-105 max-[426px]:px-3 max-[426px]:m-0">
                  code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
