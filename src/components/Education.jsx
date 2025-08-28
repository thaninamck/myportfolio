import React from "react";
import { motion } from "framer-motion";

const Education = () => {
  const educations = [
    {
      year: "2020 - 2022",
      title: "Preparatory Classes",
      school:
        "National Higher School of Computer Science and Digital Sciences (ESTIN), Algeria",
      description:
        "Completed intensive preparatory studies in mathematics, computer science, and engineering fundamentals.",
    },
    {
      year: "2023 - 2025",
      title: "Engineering Studies",
      school: "National Higher School of Computer Science (ESI), Algeria",
      description:
        "Admitted after the national entrance exam (high national ranking). Specialized in computer systems and software engineering.",
    },
    {
      year: "July 2025",
      title: "Double Degree",
      school: "National Higher School of Computer Science (ESI), Algeria",
      description:
        "Graduated with a Master’s degree (M2) in Computer Systems & Software Engineering and a State Engineer degree in Computer Science.",
    },
    {
      year: "Sept. 2025 - 2026",
      title: "Master 2 in Data Science",
      school:
        "University of Versailles Saint-Quentin-en-Yvelines (UVSQ), France",
      description:
        "Pursuing a Master’s degree in Large-Scale Data Mining and Knowledge Extraction.",
    },
  ];

  return (
    <div className="flex flex-col items-center mt-20">
      <h3 className="text-gray-700 text-3xl font-bold mb-12">Education</h3>

      <div className="relative border-l-4 border-purple-500 pl-8 space-y-12">
        {educations.map((edu, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? 60 : -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="relative bg-white shadow-xl rounded-2xl p-6 w-[600px] max-w-full"
          >
            {/* Dot */}
            <span className="absolute -left-10 top-6 w-6 h-6 bg-purple-500 rounded-full border-4 border-white shadow"></span>

            <p className="text-sm font-semibold text-purple-600">{edu.year}</p>
            <h3 className="text-xl font-bold text-gray-800">{edu.title}</h3>
            <h4 className="text-md font-medium text-gray-600">{edu.school}</h4>
            <p className="mt-3 text-gray-500">{edu.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Education;
