"use client";
import React from "react";

const FormContainer = ({ title, isOpen, toggleAccordion, children }) => {
  return (
    <form className="mt-3.5 p-2 border-2 border-black rounded-lg ">
      <div
        className="text-2xl hover:cursor-pointer flex justify-between group"
        onClick={toggleAccordion} // Call the toggle function when clicked
      >
        <h2 className="font-bold text-2xl">{title}</h2>
        <button
          className={`font-bold group-hover:bg-slate-200 rounded-full p-1 items-center transform transition-transform ease-in-out duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <img src="./drop_down.png" width={25} height={30} alt="drop_down" />
        </button>
      </div>
      {isOpen && children} {/* Render children if isOpen is true */}
    </form>
  );
};

export default FormContainer;
