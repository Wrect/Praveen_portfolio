import { motion } from "framer-motion";

const skills = [
  "GD&T",
  "PPAP & Control Plan",
  "3D Modeling",
  "2D Drawing/BOM",
  "Welding Fixture Design",
  "Checking Gauge Design",
  "Parametric Modeling",
  "Surface Modeling",
  "Assembly Design",
  "Tolerance Stack-up",
  "Reverse Engineering",
  "Root Cause Analysis",
  "5S & Kaizen",
  "New Tooling Development",
  "Cross-functional Collaboration",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.2,
    } as any,
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
    },
  },
};

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 relative z-10">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left: Philosophy */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                About Me
              </h2>
              <div className="w-12 h-1 bg-[#C17A45] rounded-full" />
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-foreground/90 mb-3">
                  Executive Summary
                </h3>
                <p className="text-foreground/90 leading-relaxed">
                  I bridge the gap between traditional mechanical engineering and modern technological workflows by leveraging tools like vibe coding and AI alongside established manufacturing practices. With a strong foundation in precision CAD design and GD&T, I engineer high-tolerance fixtures and automotive components that eliminate shop-floor ambiguity. My goal is to build intelligent, highly-optimized physical systems that merge the reliability of classical engineering with the speed of digital innovation.
                </p>
              </div>

            </div>
          </div>

          {/* Right: Animated Skill Tags */}
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-6">
                Core Competencies
              </h3>
            </div>

            <motion.div
              className="flex flex-wrap gap-3"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" } as any}
            >
              {skills.map((skill) => (
                <motion.div
                  key={skill}
                  variants={itemVariants as any}
                  className="px-4 py-2 bg-card border border-border rounded-lg hover:border-[#C17A45] hover:shadow-md transition-all duration-200 cursor-default"
                >
                  <span className="text-sm font-medium text-foreground">{skill}</span>
                </motion.div>
              ))}
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
