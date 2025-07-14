import React from "react";
import Man from "../assets/Fuzail.png";

function Header() {
  return (
    <nav className="w-full px-8 bg-purple-700 text-white py-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <img
            className="rounded-full h-10 w-10 mr-2 md:h-12 md:w-12"
            src={Man}
            alt="Profile Image"
          />
          <h1 className="text-2xl font-bold ">Fuzail Palnak</h1>
        </div>
        <ul className="md:flex space-x-8 hidden text-xl font-semibold">
          <li>
            <a href="https://www.linkedin.com/in/fuzail-palnak-b4962994/" className="cursor-pointer hover:underline">
              About Me
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/fuzail-palnak-b4962994/details/projects/" className="cursor-pointer hover:underline">
              Projects
            </a>
          </li>
          <li>
            <a href="https://apricot-desiri-95.tiiny.site/" className="cursor-pointer hover:underline">
              Resume
            </a>
          </li>
          <li>
            <a href="mailto:fuzailpalnak@gmail.com" className="cursor-pointer hover:underline">
              Contact
            </a>
          </li>
        </ul>
        <div className="md:hidden">
          <a className="text-4xl font-semibold" href="#">
            &#8801;
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Header;
