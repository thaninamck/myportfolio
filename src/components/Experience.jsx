import React from "react";
import { motion } from "framer-motion";

const Experience = () => {
  const experiences = [
    {
      year: "July 2023",
      title: "Software Developer Intern",
      company: "CNEP (Caisse Nationale d’Épargne, Algeria)",
      description:
        "Developed a desktop application for monitoring electronic payment terminals (TPE). Responsible for both design and implementation, delivering multiple management features within one month.",
    },
    {
      year: "Oct 2024 – Jul 2025",
      title: "Risk & IT Governance Intern",
      company: "Forvis Mazars, Algeria",
      description:
        "Designed and developed a web-based application to support IT risk and control governance. The system manages more than 400 controls and supports audit missions and governance processes.",
    },
  ];

  return (
    <div className="flex flex-col items-center gap-6">
      <h3 className="text-gray-600 text-center text-3xl mt-20 mb-6">Experience</h3>

      {experiences.map((exp, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: i % 2 === 0 ? 80 : -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ amount: 0.2}}
          transition={{ duration: 0.8 }}
          className="text-gray-600 w-1/2 bg-transparent shadow-2xl rounded-2xl h-fit p-6 flex flex-col items-start mb-6"
        >
          <p className="font-normal">{exp.year}</p>
          <div className="flex justify-evenly items-center gap-1">
            <h3 className="text-2xl">{exp.title}</h3>
            <p className="font-bold"> - </p>
            <h4 className="text-lg">{exp.company}</h4>
          </div>
          <p className="mt-5 max-w-md text-start">{exp.description}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default Experience;
