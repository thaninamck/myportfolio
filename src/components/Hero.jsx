import React from "react";
import nina from "../assets/nina.png";
import { FaArrowRight, FaLongArrowAltRight } from "react-icons/fa";
import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center p-4 gap-2">

  {/* Image */}
  <div className="flex justify-center relative ">
  {/* blob en arrière-plan */}
  <svg
    className="absolute w-[420px] h-[420px]  -z-10 text-purple-500 opacity-80"
    viewBox="0 0 200 200"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill="currentColor"
      d="M39.5,-66.7C50.9,-60.7,61.5,-51.1,68.4,-39.2C75.3,-27.3,78.6,-13.6,77.8,-0.3C77,13,72.1,26.1,64,36.7C55.9,47.3,44.6,55.4,32.1,61.3C19.5,67.2,5.7,70.8,-7.6,71.6C-20.9,72.5,-33.7,70.7,-45,63.9C-56.3,57,-66.1,45.2,-70.9,31.8C-75.7,18.4,-75.6,3.4,-72.3,-10.3C-69.1,-23.9,-62.8,-36.1,-52.5,-44.7C-42.1,-53.2,-27.7,-58,-13.1,-63.7C1.5,-69.3,15.6,-75.8,29.8,-74.3C44.1,-72.9,58.6,-63.4,39.5,-66.7Z"
      transform="translate(100 100)"
    />
  </svg>

  {/* ton image */}
  <img
    src={nina}
    alt="nina mck"
    className="w-80 h-80 object-cover rounded-full   "
  />
</div>


  {/* Texte */}
  <div className="tracking-tight text-center md:text-left text-gray-600">

  <h1 className="text-3xl md:text-5xl font-bold shadow-2xl bg-gradient-to-r from-[#d5c5ff] via-purple-500 to-gray-800 bg-clip-text text-transparent">
 
  <ReactTyped
        strings={[
          "Hi, I'm Nina Mck",
          "",
         
        ]}
        typeSpeed={70}      // vitesse de frappe
        backDelay={999999}   // gros délai avant backspace (donc ça n'efface jamais)
        showCursor={true}    // curseur visible
        loop={false}         // ne pas répéter
      />
</h1>
   
    <h2 className="mt-4 text-base md:text-lg">
      Software Engineer, Web Developer, and Data Engineering Enthusiast
    </h2>
    <p className="mt-4 mb-7 max-w-xl text-sm md:text-base text-gray-500">
    Passionate about technology and innovation, I build modern web solutions 
    and dive into data engineering to design efficient data pipelines and 
    unlock valuable insights. Curious and motivated, I thrive on continuous 
    learning and tackling new technical challenges.
  </p>
  <a href="/resume.pdf" download target="_blank" rel="noopener noreferrer" className=" bg-white border text-black p-3 font-normal text-sm rounded-full  hover:bg-pink-700 ">
    Download resume
  </a>
  </div>
</div>

  );
};

export default Hero;
