import React from "react";

const Contact = () => {
  return (
    <div
      name="Contact"
      className="w-full h-full bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="flex flex-col p-4 md:pt-28 lg:pt-40 xl:pt-28 max-[426px]:pt-20 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 p-2 border-gray-500">
            Contact
          </p>
          <p className="py-8 text-xl">
            Submit the form below to get in touch with me
          </p>
        </div>
        <div className="flex h-screen justify-center items-center">
          <form
            action="https://getform.io/f/321bb355-3283-4ed5-bdad-c29c19cb7841"
            method="POST"
            className="flex flex-col h-full w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your mail"
              className="p-2 my-4 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              rows={10}
              placeholder="Enter your message"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto items-center rounded-md hover:scale-110 duration-300">
              let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
