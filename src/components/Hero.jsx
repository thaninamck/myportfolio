import React from "react";
import nina from "../assets/nina.png";
import { FaArrowRight, FaLongArrowAltRight } from "react-icons/fa";
import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center p-4 gap-2">

  {/* Image */}
  <div className="flex justify-center">
    <img
      src={nina}
      alt="nina mck"
      className="   w-80 h-80  md:h-90 md:w-90 object-cover border border-stone-700 rounded-4xl shadow-2xl"
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
