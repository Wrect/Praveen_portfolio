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
    <section id="about" className="py-20 md:py-32 bg-background">
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
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  Philosophy
                </h3>
                <p className="text-foreground/70 leading-relaxed">
                  Precision-first design thinking — every fixture, gauge, and drawing
                  exists to eliminate ambiguity on the shop floor. I believe that
                  exceptional engineering is about clarity, compliance, and craftsmanship.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  Objective
                </h3>
                <p className="text-foreground/70 leading-relaxed">
                  Grow into a senior/lead design role driving new tooling development
                  and DFM strategy for automotive manufacturing. I'm passionate about
                  mentoring junior engineers and building high-performing design teams.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  Background
                </h3>
                <p className="text-foreground/70 leading-relaxed">
                  4+ years of experience in CAD-based product design, welding fixture
                  and checking gauge development, and quality engineering across Tier 1
                  automotive manufacturing (Usaka Engineers, Jayem Auto Industries,
                  Tenneco Automotive).
                </p>
              </div>

              {/* Certifications */}
              <div className="pt-4">
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  Certifications & Training
                </h3>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between p-4 bg-card border border-border rounded-lg hover:border-[#C17A45]/50 transition-colors">
                    <div>
                      <p className="font-semibold text-foreground">CATIA V5 Advanced Design</p>
                      <p className="text-sm text-foreground/60">Dassault Systèmes</p>
                    </div>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        fetch(`${import.meta.env.BASE_URL}certifications/catia_certification.pdf`)
                          .then(response => response.blob())
                          .then(blob => {
                            const url = window.URL.createObjectURL(blob);
                            const a = document.createElement('a');
                            a.style.display = 'none';
                            a.href = url;
                            a.download = 'CATIA_V5_Certification.pdf';
                            document.body.appendChild(a);
                            a.click();
                            window.URL.revokeObjectURL(url);
                          });
                      }}
                      className="px-4 py-2 text-xs font-semibold bg-[#C17A45]/10 text-[#C17A45] hover:bg-[#C17A45] hover:text-white rounded-md transition-colors cursor-pointer"
                    >
                      Download
                    </button>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-card border border-border rounded-lg hover:border-[#C17A45]/50 transition-colors">
                    <div>
                      <p className="font-semibold text-foreground">GD&T Master Certification</p>
                      <p className="text-sm text-foreground/60">ASME Y14.5 Standard</p>
                    </div>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        fetch(`${import.meta.env.BASE_URL}certifications/gdt_certification.pdf`)
                          .then(response => response.blob())
                          .then(blob => {
                            const url = window.URL.createObjectURL(blob);
                            const a = document.createElement('a');
                            a.style.display = 'none';
                            a.href = url;
                            a.download = 'GDT_Certification.pdf';
                            document.body.appendChild(a);
                            a.click();
                            window.URL.revokeObjectURL(url);
                          });
                      }}
                      className="px-4 py-2 text-xs font-semibold bg-[#C17A45]/10 text-[#C17A45] hover:bg-[#C17A45] hover:text-white rounded-md transition-colors cursor-pointer"
                    >
                      Download
                    </button>
                  </div>
                </div>
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
