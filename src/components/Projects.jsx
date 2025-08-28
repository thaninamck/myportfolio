import React from "react";
import project1 from "../assets/projects/project-1.webp";
import project2 from "../assets/projects/project-2.webp";
import project3 from "../assets/projects/project-3.webp"; // ajoute si besoin
import { motion } from "framer-motion";

const Projects = () => {
  // Liste de projets
  const projects = [
    {
      id: 1,
      title: "Cosmetics E-Commerce Website",
      description:
        "An online cosmetics store designed with a modern UI/UX, allowing users to browse, filter, and purchase beauty products seamlessly.",
      image: project1,
    },
    {
      id: 2,
      title: "IT Governance & Audit Platform",
      description:
        "A risk governance and IT audit management solution that supports internal control tracking, audit missions, and reporting automation.",
      image: project2,
    },
    {
      id: 3,
      title: "Medon – Medicine Donation App",
      description:
        "A mobile and web application enabling users to donate unused medicines, improving accessibility for those in need.",
      image: project3,
    },
    {
      id: 4,
      title: "Autopara – Vehicle Comparison Platform",
      description:
        "A car comparison website that helps users evaluate vehicles based on key technical and financial characteristics before making a decision.",
      image: project3,
    },
    {
      id: 5,
      title: "Legal Watch & Chatbot Assistant",
      description:
        "A legal monitoring project where I contributed mainly to data collection and backend development of a chatbot capable of answering legal-related questions.",
      image: project3,
    },
  ];
  

  return (
    <>
      <h1 className="text-gray-600 text-4xl text-center mb-15">Projects</h1>

      

      <div className="flex justify-center">
        <div className="flex flex-col gap-6">
          {projects.map((project) => (
            <motion.div

            initial={{ opacity: 0, y: 50 }}       // état au départ (cachée + décalée vers le bas)
  whileInView={{ opacity: 1, y: 0 }}    // état quand elle entre dans l’écran
  viewport={{  amount: 0.2 }}// "once" = l’anim se joue une seule fois
  transition={{ duration: 0.8 }}        // durée de l’anim
              key={project.id}
              className="flex shadow-2xl w-fit flex-col gap-2 md:flex md:flex-row md:justify-center md:gap-3"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-100 h-100 rounded-2xl"
              />
              <div className="flex flex-col items-start justify-center p-4  text-gray-600">
                <h1 className="text-3xl">{project.title}</h1>
                <p>{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
