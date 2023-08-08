import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import github from "../assets/github.png";
import graphql from "../assets/graphql.png";
import javascript from "../assets/javascript.png";
import nextjs from "../assets/nextjs.png";
import react from "../assets/react.png";
import tailwind from "../assets/tailwind.png";

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
      src: tailwind,
      title: "TAILWIND",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: nextjs,
      title: "NEXTJS",
      style: "shadow-white",
    },
    {
      id: 7,
      src: graphql,
      title: "GRAPHQL",
      style: "shadow-pink-400",
    },
    {
      id: 8,
      src: github,
      title: "GITHUB",
      style: "shadow-gray-400",
    },
  ];

  return (
    <div
      name="Skills"
      className="h-screen w-full bg-gradient-to-b from-gray-800 to-black"
    >
      <div className="mx-auto max-w-screen-lg md:pt-44 lg:pt-42 xl:pt-20 max-[426px]:pt-36 p-4 flex flex-col justify-center w-full h-full text-white">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 p-2 border-gray-500 capitalize">
            Skills
          </p>
          <p className="py-6 text-xl">
            These are the technologies I've used with
          </p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 lg:py-2 md:py-2 px-12 sm:px-0 max-[426px]:py-0.5">
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
                className="w-20 md:w-12 max-[426px]:w-10 mx-auto"
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
