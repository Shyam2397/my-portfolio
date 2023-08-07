import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="p-4 max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline capitalize border-b-4 border-gray-500">
            about
          </p>
        </div>
        <p className="text-xl mt-20">
          Seeking Entry-level positions in a growth-oriented company in any
          field. To acquire a challenging position in a reputed organization
          where I could use my hardworking and creative skills for the growth
          and good market position of the company.
        </p>
        <br />
        <p className="text-xl">
          Seeking Entry-level positions in a growth-oriented company in any
          field. To acquire a challenging position in a reputed organization
          where I could use my hardworking and creative skills for the growth
          and good market position of the company.
        </p>
      </div>
    </div>
  );
};

export default About;
