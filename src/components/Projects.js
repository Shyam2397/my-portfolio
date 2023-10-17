import React from "react";
import gmail from "../assets/p-icon/gmail.jpg";
import imbd from "../assets/p-icon/Imbd.png";
import restaurant from "../assets/p-icon/Restaurant.png";
import makeup from "../assets/p-icon/makeup.png";

const Projects = () => {
  const projects = [
    {
      id: 1,
      src: gmail,
      live: "https://shyam-capstone-1.netlify.app/",
      code: "https://github.com/Shyam2397/gmail_clone_frontend",
    },
    {
      id: 2,
      src: imbd,
      live: "https://imbd-clone-1012.netlify.app/",
      code: "https://github.com/Shyam2397/imbd-fe",
    },
    {
      id: 3,
      src: restaurant,
      live: "https://myrestaurant-1012.netlify.app/",
      code: "https://github.com/Shyam2397/resturant-website",
    },
    {
      id: 4,
      src: makeup,
      live: "https://shyne-blue-makeup.netlify.app/",
      code: "https://github.com/Shyam2397/Makeup-API",
    },
  ];

  return (
    <div
      name="Projects"
      className="w-full h-full bg-gradient-to-t from-gray-800 to-black"
    >
      <div className="flex flex-col max-w-screen-lg max-[426px]:h-auto h-screen w-full text-white justify-center mx-auto sm:px-10 max-[426px]:pt-20 max-[426px]:pb-5">
        <div className="pb-8 max-[426px]:px-5">
          <p className="text-4xl inline font-bold border-b-4 p-2 border-gray-500 capitalize">
            projects
          </p>
          <p className="py-6 lg:py-0 lg:pt-6 text-xl">
            Check out some of my work right here
          </p>
        </div>
        <div className="grid max-[426px]:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-8 max-[426px]:gap-4 px-12 sm:px-0 max-[426px]:px-15">
          {projects.map(({ id, src, live, code }) => (
            <div
              key={id}
              className=" max-[426px]:w-28 shadow-md shadow-gray-600 rounded-lg lg:w-56"
            >
              <img
                src={src}
                alt="project-img"
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-2 m-2 duration-200 hover:scale-105 max-[426px]:px-3 max-[426px]:m-0">
                  <a href={live} target="_blank" rel="noreferrer">
                    Live
                  </a>
                </button>
                <button className="w-1/2 px-6 py-2 m-2 duration-200 hover:scale-105 max-[426px]:px-3 max-[426px]:m-0">
                  <a href={code} target="_blank" rel="noreferrer">
                    Code
                  </a>
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
