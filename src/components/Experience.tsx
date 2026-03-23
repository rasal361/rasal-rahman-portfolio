import { motion } from "framer-motion";
import { Briefcase, Award } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Work Experience */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-center mb-16"
        >
          Experience & <span className="text-gradient">Certifications</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-xl p-8 mb-12"
        >
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-lg bg-primary/10 text-primary shrink-0">
              <Briefcase size={24} />
            </div>
            <div>
              <h3 className="text-xl font-semibold">
                Full Stack Developer & Jr. Project Manager
              </h3>
              <p className="text-primary text-sm font-mono mt-1">
                PRO26 LLP, India · Jan 2025 – Jan 2026
              </p>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  Managed full SDLC from planning to deployment across multiple projects
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  Integrated REST APIs and optimized application performance
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  Coordinated cross-functional teams for on-time delivery
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Certifications */}
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            "Microsoft Azure AI Essentials",
            "Flutter Development",
            "Full Stack Web Development",
          ].map((cert, i) => (
            <motion.div
              key={cert}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-xl p-5 flex items-center gap-3 hover:border-primary/30 transition-colors"
            >
              <Award className="text-primary shrink-0" size={20} />
              <span className="text-sm font-medium">{cert}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
