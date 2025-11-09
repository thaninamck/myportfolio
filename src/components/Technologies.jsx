import React from "react";
import { motion } from "framer-motion";

// ==== Font Awesome ====
import {
  FaLaravel,
  FaReact,
  FaPhp,
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaDatabase,
  FaPython,
  FaGithub,
  FaLinux,
  FaCogs,
  FaProjectDiagram,
  FaChartBar,
  FaAws, // ✅ Logo AWS correct ici
  FaMicrosoft, // ✅ Logo Microsoft pour Azure
  FaGoogle, // ✅ Logo Google pour GCP
} from "react-icons/fa";

// ==== Simple Icons ====
import {
  SiApachespark,
  SiApacheairflow,
  SiDatabricks,
  SiTalend,
  SiTailwindcss,
  SiFramer,
  SiMysql,
  SiPostgresql,
  SiGithubactions,
  SiApachehadoop,
  SiUml,
} from "react-icons/si";

// ==== Material Design ====
import { MdStorage, MdWaterDrop } from "react-icons/md";

export const Technologies = () => {
  // Animation flottante
  const float = {
    y: [0, -3, 0],
    transition: { repeat: Infinity, duration: 3, ease: "easeInOut" },
  };

  // Composant réutilisable
  const TechItem = ({ children, label }) => (
    <motion.div
      className="flex cursor-pointer flex-col items-center"
      whileHover={{ scale: 1.2 }}
      animate={float}
    >
      {children}
      <p className="text-sm mt-2">{label}</p>
    </motion.div>
  );

  return (
    <div>
      <h2 className="text-gray-600 text-4xl text-center my-20">Technologies</h2>

      {/* === Web Development === */}
      <h3 className="text-gray-600 text-lg text-center mt-2 mb-8">
        Web Development
      </h3>
      <div className="flex flex-col md:flex-row flex-wrap justify-center gap-10 text-6xl text-gray-600">
        <TechItem label="React">
          <FaReact className="text-cyan-400" />
        </TechItem>
        <TechItem label="Tailwind CSS">
          <SiTailwindcss className="text-sky-400" />
        </TechItem>
        <TechItem label="Framer Motion">
          <SiFramer className="text-pink-500" />
        </TechItem>
        <TechItem label="Laravel">
          <FaLaravel className="text-red-500" />
        </TechItem>
        <TechItem label="PHP">
          <FaPhp className="text-indigo-500" />
        </TechItem>
        <TechItem label="Java">
          <FaJava className="text-orange-600" />
        </TechItem>
        <TechItem label="JavaScript">
          <FaJs className="text-yellow-400" />
        </TechItem>
        <TechItem label="HTML">
          <FaHtml5 className="text-orange-500" />
        </TechItem>
        <TechItem label="CSS">
          <FaCss3Alt className="text-blue-500" />
        </TechItem>
        <TechItem label="SQL">
          <FaDatabase className="text-gray-400" />
        </TechItem>
        <TechItem label="MySQL">
          <SiMysql className="text-blue-600" />
        </TechItem>
        <TechItem label="PostgreSQL">
          <SiPostgresql className="text-blue-400" />
        </TechItem>
      </div>

      {/* === Data Engineering === */}
      <h3 className="text-gray-600 text-lg text-center mt-12 mb-8">
        Data Engineering
      </h3>
      <div className="flex flex-col md:flex-row flex-wrap justify-center gap-10 text-6xl text-gray-600">
        <TechItem label="Python">
          <FaPython className="text-yellow-400" />
        </TechItem>
        <TechItem label="Apache Spark">
          <SiApachespark className="text-orange-500" />
        </TechItem>
        <TechItem label="PySpark">
          <SiApachespark className="text-red-500" />
        </TechItem>
        <TechItem label="Hadoop">
          <SiApachehadoop className="text-blue-500" />
        </TechItem>
        <TechItem label="Airflow">
          <SiApacheairflow className="text-sky-500" />
        </TechItem>
        <TechItem label="Databricks">
          <SiDatabricks className="text-red-600" />
        </TechItem>
        <TechItem label="Talend">
          <SiTalend className="text-orange-400" />
        </TechItem>
        <TechItem label="Data Warehouse">
          <MdStorage className="text-blue-400" />
        </TechItem>
        <TechItem label="Data Lake">
          <MdWaterDrop className="text-blue-500" />
        </TechItem>
        <TechItem label="Data Quality">
          <FaChartBar className="text-green-500" />
        </TechItem>
      </div>

      {/* === Cloud Platforms === */}
      <h3 className="text-gray-600 text-lg text-center mt-12 mb-8">
        Cloud Platforms
      </h3>
      <div className="flex flex-col md:flex-row flex-wrap justify-center gap-10 text-6xl text-gray-600">
        <TechItem label="Microsoft Azure">
          <FaMicrosoft className="text-blue-500" />
        </TechItem>
        <TechItem label="Amazon Web Services (AWS)">
          <FaAws className="text-yellow-500" />
        </TechItem>
        <TechItem label="Google Cloud Platform">
          <FaGoogle className="text-red-500" />
        </TechItem>
      </div>

      {/* === DevOps & Architecture === */}
      <h3 className="text-gray-600 text-lg text-center mt-12 mb-8">
        Architecture & DevOps
      </h3>
      <div className="flex flex-col md:flex-row flex-wrap justify-center gap-10 text-6xl text-gray-600">
        <TechItem label="Git / GitHub">
          <FaGithub className="text-gray-800" />
        </TechItem>
        <TechItem label="GitHub Actions">
          <SiGithubactions className="text-blue-500" />
        </TechItem>
        <TechItem label="Linux">
          <FaLinux className="text-gray-500" />
        </TechItem>
        <TechItem label="Design Patterns">
          <FaCogs className="text-gray-600" />
        </TechItem>
        <TechItem label="Software Architecture">
          <FaProjectDiagram className="text-indigo-500" />
        </TechItem>
        <TechItem label="UML Modeling">
          <SiUml className="text-purple-500" />
        </TechItem>
      </div>
    </div>
  );
};
