import { motion } from "framer-motion";
import { Code2, Layers, Zap } from "lucide-react";

const highlights = [
  { icon: Code2, text: "Cross-platform app development with Flutter & React" },
  { icon: Layers, text: "UI/UX optimization & backend collaboration" },
  { icon: Zap, text: "Performance-focused, clean & scalable code" },
];

const About = () => {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-12">
            Energetic Full-Stack Developer skilled in Flutter, React.js, Node.js,
            WordPress, and REST API integration. Experienced in cross-platform app
            development, UI/UX optimization, and backend collaboration with a
            strong focus on performance, clean code, and scalable architecture.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {highlights.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.4 }}
              className="glass rounded-xl p-6 text-center hover:border-primary/30 transition-colors"
            >
              <item.icon className="mx-auto mb-4 text-primary" size={28} />
              <p className="text-sm text-muted-foreground">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
