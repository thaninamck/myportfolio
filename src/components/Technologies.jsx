import React from 'react'
import {motion} from 'framer-motion'
import { FaLaravel, FaReact, FaPhp, FaJava, FaHtml5, FaCss3Alt, FaJs, FaDatabase } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { SiApachespark } from "react-icons/si";
import { MdStorage } from "react-icons/md"; 
import { SiTailwindcss, SiFramer, SiMysql, SiPostgresql } from "react-icons/si";
export const Technologies = () => {
    
        // Animation flottante
        const float = {
          y: [0, -3, 0],
          transition: { repeat: Infinity, duration: 3, ease: "easeInOut" },
        };
      
        // Petite fonction pour éviter de répéter du code
        const TechItem = ({ children, label }) => (
          <motion.div className="flex cursor-pointer
          flex-col items-center" 
          whileHover={{ scale: 1.2 }}
          animate={float}>
            {children}
            <p className="text-sm mt-2">{label}</p>
          </motion.div>
        );
  return (
    <div>
    <h2 className="text-gray-600 text-4xl text-center my-20">Technologies</h2>
    <h3 className="text-gray-600 text-lg text-center mt-2 mb-8">Web Development</h3>

    {/* Web stack */}
    <div className="flex flex-col md:flex-row flex-wrap justify-center gap-10 text-6xl text-gray-600">
      <TechItem label="Laravel"><FaLaravel className="text-red-500" /></TechItem>
      <TechItem label="React"><FaReact className="text-cyan-400" /></TechItem>
      <TechItem label="Tailwind"><SiTailwindcss className="text-sky-400" /></TechItem>
      <TechItem label="Framer Motion"><SiFramer className="text-pink-500" /></TechItem>
      <TechItem label="PHP"><FaPhp className="text-indigo-500" /></TechItem>
      <TechItem label="Java"><FaJava className="text-orange-600" /></TechItem>
      <TechItem label="JavaScript"><FaJs className="text-yellow-400" /></TechItem>
      <TechItem label="HTML"><FaHtml5 className="text-orange-500" /></TechItem>
      <TechItem label="CSS"><FaCss3Alt className="text-blue-500" /></TechItem>
      <TechItem label="SQL"><FaDatabase className="text-gray-400" /></TechItem>
      <TechItem label="MySQL"><SiMysql className="text-blue-600" /></TechItem>
      <TechItem label="Postgres"><SiPostgresql className="text-blue-400" /></TechItem>
    </div>

    <h3 className="text-gray-600 text-lg text-center mt-9 mb-8">Data</h3>

    {/* Data stack */}
    <div className="flex flex-col md:flex-row flex-wrap justify-center gap-10 text-6xl text-gray-600">
      <TechItem label="Python"><FaPython className="text-yellow-400" /></TechItem>
      <TechItem label="Apache Spark"><SiApachespark className="text-orange-500" /></TechItem>
      <TechItem label="PySpark"><SiApachespark className="text-red-500" /></TechItem>
      <TechItem label="Data Warehouse"><MdStorage className="text-blue-400" /></TechItem>
    </div>
  </div>
  )
}
