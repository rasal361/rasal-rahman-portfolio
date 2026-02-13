import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Learning Management System",
    description:
      "A comprehensive LMS built with Flutter and Appwrite, featuring course management, user authentication, and progress tracking.",
    stack: ["Flutter", "Dart", "Appwrite"],
    github: "https://github.com/Mohd-Aflah/learning-management-system",
  },
  {
    title: "Blockchain Table Dining System",
    description:
      "A decentralized dining reservation system using Ethereum smart contracts for transparent and tamper-proof table bookings.",
    stack: ["Ethereum", "Solidity", "Smart Contracts"],
    github: "https://github.com/Mohd-Aflah/blockchain-dining-system",
  },
  {
    title: "Handwritten Equation Solver",
    description:
      "An AI-powered application that recognizes and solves handwritten arithmetic equations using computer vision and machine learning.",
    stack: ["Python", "OpenCV", "Machine Learning"],
    github: "https://github.com/Mohd-Aflah/equation-solver-ai",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-center mb-16"
        >
          Featured <span className="text-gradient">Projects</span>
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="glass rounded-xl p-6 flex flex-col hover:border-primary/30 transition-colors group"
            >
              <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors">
                {p.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-5 flex-1">
                {p.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-5">
                {p.stack.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-mono px-2 py-1 rounded bg-secondary text-primary"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <a
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
              >
                View on GitHub <ExternalLink size={14} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
