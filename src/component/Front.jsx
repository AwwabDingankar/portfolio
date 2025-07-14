import React from "react";

import image from "../assets/yman.png";

function Front() {
  return (
    <div className="container mx-auto mt-8 flex flex-col md:flex-row items-center justify-center">
      <div className="text-white mt-8 mx-4 md:mx-8">
        <p className="text-8xl font-bold">I am</p>
        <p className="text-2xl font-bold md:text-4xl md:font-semibold text-yellow-400 mt-4">
          Passionate Researcher
        </p>
        <div className="w-36 h-2 border-b-4 border-purple-600 mt-2 mb-4"></div>
        <p className="text-2xl text-gray-400 mt-8 text-center md:text-start">
          With a passion for pushing the boundaries, I am dedicated to
          developing cutting-edge solutions for real-world problems.
        </p>
      </div>
      <div className="">
        <img
          className="w-auto h-100vh  justify-center  md:max-w-lg md:mt-0  md:h-auto"
          src={image}
          alt="Image"
        />
      </div>
    </div>
  );
}

export default Front;
