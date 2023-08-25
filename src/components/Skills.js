import React from "react";
import html from "../assets/skills/html.png";
import css from "../assets/skills/css.png";
import github from "../assets/skills/github.png";
import mongodb from "../assets/skills/mongodb.png";
import javascript from "../assets/skills/javascript.png";
import nodejs from "../assets/skills/nodejs.png";
import react from "../assets/skills/react.png";
import tailwind from "../assets/skills/tailwind.png";
import bootstrap from "../assets/skills/bootstrap.png";

const Skills = () => {
  const skills = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JAVASCRIPT",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: react,
      title: "REACT",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: mongodb,
      title: "MONGODB",
      style: "shadow-green-400",
    },
    {
      id: 6,
      src: nodejs,
      title: "NODEJS",
      style: "shadow-green-200",
    },
    {
      id: 7,
      src: tailwind,
      title: "TAILWIND",
      style: "shadow-sky-400",
    },
    {
      id: 8,
      src: bootstrap,
      title: "BOOTSTRAP",
      style: "shadow-violet-400",
    },
    {
      id: 9,
      src: github,
      title: "GITHUB",
      style: "shadow-gray-400",
    },
  ];

  return (
    <div
      name="Skills"
      className="w-full h-full bg-gradient-to-t from-black to-gray-800"
    >
      <div className="flex flex-col max-w-screen-lg w-full h-screen text-white justify-center max-[426px]:px-5 md:px-10 sm:px-8 mx-auto max-[426px]:pt-20">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 p-2 capitalize">
            skills
          </p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 lg:py-2 md:py-2 px-12 sm:px-0 max-[426px]:py-0.5 max-[426px]:gap-4">
          {skills.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={
                "duration-500 shadow-md hover:scale-105 rounded-lg" +
                " " +
                style
              }
            >
              <img
                src={src}
                alt="skill-pic"
                className="lg:w-16 md:w-16 md:p-2 sm:p-1 max-[426px]:p-2 max-[426px]:w-10 mx-auto"
              />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
