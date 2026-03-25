import { motion } from "framer-motion";

const categories = [
  {
    title: "Languages",
    items: ["JavaScript", "Python", "HTML", "CSS", "Dart"],
  },
  {
    title: "Frameworks",
    items: ["Flutter", "React.js", "Node.js"],
  },
  {
    title: "Platforms / CMS",
    items: ["Shopify", "WordPress"],
  },
  {
    title: "Databases",
    items: ["MySQL", "Appwrite"],
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "VS Code", "Figma"],
  },
  {
    title: "Cloud",
    items: ["Microsoft Azure (AI Essentials"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-center mb-16"
        >
          Technical <span className="text-gradient">Skills</span>
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-xl p-6 hover:border-primary/30 transition-colors"
            >
              <h3 className="text-sm font-mono text-primary uppercase tracking-wider mb-4">
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 text-sm rounded-md bg-secondary text-secondary-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
