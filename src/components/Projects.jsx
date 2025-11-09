import React from "react";
import { motion } from "framer-motion";

// ==== Images ====
import project1 from "../assets/projects/project-1.webp";
import project2 from "../assets/projects/project-2.webp";
import project3 from "../assets/projects/project-3.webp";
import datafactory from "../assets/projects/datafactory.jpg";
import archi from "../assets/projects/archi.jpg";
import synapsis from "../assets/projects/synapsis.png";
import talendq from "../assets/projects/talendq.jpg";
const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Cosmetics E-Commerce Website",
      description:
        "An online cosmetics store with a modern UI/UX, featuring product filtering, cart management, and secure checkout.",
      image: project1,
    },
    {
      id: 2,
      title: "IT Governance & Audit Platform",
      description:
        "A governance and risk management solution designed to centralize IT controls, automate reporting, and track remediation actions within audit processes.",
      image: project2,
    },
    {
      id: 3,
      title: "Medon – Medicine Donation App",
      description:
        "A full-stack mobile and web application enabling users to donate unused medicines, improving access to healthcare resources for those in need.",
      image: project3,
    },
    {
      id: 4,
      title: "Autopara – Vehicle Comparison Platform",
      description:
        "A responsive web platform for car comparison, allowing users to evaluate vehicles based on technical and financial criteria before purchase.",
      image: project3,
    },
    {
      id: 5,
      title: "Legal Watch & Chatbot Assistant",
      description:
        "A legal monitoring project leveraging NLP techniques and data scraping of Algerian legal texts. Designed a backend pipeline and chatbot for automated legal insights.",
      image: project3,
    },
    {
      id: 6,
      title: "Data Quality Assessment",
      description:
        "A data analysis project evaluating the quality of French energy consumption datasets. Implemented anomaly detection and proposed data consistency rules.",
      image: talendq,
    },
    {
      id: 7,
      title: "End-to-End Data Pipeline on Azure",
      description:
        "Built a complete Azure-based data pipeline: ingestion from API → Data Lake → transformation with Data Factory → loading into Synapse Analytics for dashboarding.",
      images: [archi, datafactory, synapsis], // <=== plusieurs images ici
    },
  ];

  return (
    <>
      <h1 className="text-gray-600 text-4xl text-center mb-16">Projects</h1>

      <div className="flex justify-center">
        <div className="flex flex-col gap-10">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.2 }}
              transition={{ duration: 0.8 }}
              className="flex shadow-2xl w-fit flex-col gap-4 md:flex md:flex-row md:justify-center md:gap-6 rounded-2xl overflow-hidden bg-white"
            >
              {/* ==== Slider pour projets avec plusieurs images ==== */}
              {project.images ? (
                <motion.div
                  className="w-[400px] h-[250px] overflow-hidden rounded-2xl flex"
                  whileHover={{ scale: 1.02 }}
                >
                  <motion.div
                    className="flex"
                    animate={{ x: [0, -400, -800, 0] }} // défilement horizontal automatique
                    transition={{
                      repeat: Infinity,
                      duration: 12,
                      ease: "linear",
                    }}
                  >
                    {project.images.map((img, i) => (
                      <img
                        key={i}
                        src={img}
                        alt={`${project.title} ${i + 1}`}
                        className="w-[400px] h-[250px] object-cover rounded-2xl"
                      />
                    ))}
                  </motion.div>
                </motion.div>
              ) : (
                // ==== Image simple ====
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-[400px] h-[250px] rounded-2xl object-cover"
                />
              )}

              {/* ==== Description du projet ==== */}
              <div className="flex flex-col items-start justify-center p-4 text-gray-700 max-w-[500px]">
                <h1 className="text-3xl font-semibold mb-2">
                  {project.title}
                </h1>
                <p className="text-sm leading-relaxed">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
