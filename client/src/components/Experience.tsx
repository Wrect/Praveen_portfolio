import { ChevronDown } from "lucide-react";
import { useState } from "react";

const experiences = [
  {
    id: 1,
    title: "Design Engineer",
    company: "Usaka Engineers",
    period: "March 2025 – Present",
    location: "Faridabad, Haryana",
    achievements: [
      "Developing 3D CAD models and 2D drawings in SolidWorks, AutoCAD, and CATIA V5 per client specs",
      "Designing welding fixtures and checking gauges compliant with GD&T standards",
      "Coordinating with tool room during fixture/gauge manufacturing and try-out",
      "Resolving production and inspection issues via design changes",
      "Maintaining design files, revision history, and BOMs for full traceability",
    ],
    technologies: ["SolidWorks", "AutoCAD", "CATIA V5", "GD&T", "PPAP"],
  },
  {
    id: 2,
    title: "Design Engineer",
    company: "Jayem Auto Industries Pvt. Ltd.",
    period: "July 2022 – March 2025",
    location: "Faridabad, Haryana",
    achievements: [
      "Designed pipeline and hose assembly components (SolidWorks, AutoCAD) to GD&T-compliant accuracy",
      "Led new tooling development from concept to production",
      "Created/updated 2D drawings and BOMs for new and revised product variants",
      "Drove 5S, Kaizen, and quality improvement initiatives on the shop floor",
      "Collaborated cross-functionally for design feasibility review and approval",
    ],
    technologies: ["SolidWorks", "AutoCAD", "GD&T", "5S", "Kaizen"],
  },
  {
    id: 3,
    title: "Design Engineer Trainee",
    company: "Tenneco Automotive India Pvt. Ltd.",
    period: "July 2021 – July 2022",
    location: "Faridabad, Haryana",
    achievements: [
      "Trained at a U.S.-based Tier 1 automotive supplier (Clean Air, Powertrain, DRIV divisions)",
      "Used Vernier calipers, micrometers, and height gauges for dimensional inspection",
      "Applied root cause analysis to reduce in-house failures and improve throughput",
    ],
    technologies: ["Dimensional Inspection", "RCA", "Quality Control"],
  },
];

export default function Experience() {
  const [expandedId, setExpandedId] = useState<number | null>(1);

  return (
    <section id="experience" className="py-20 md:py-32 relative z-10">
      <div className="container">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Experience
          </h2>
          <div className="w-12 h-1 bg-[#C17A45] rounded-full" />
        </div>

        <div className="space-y-6">
          {experiences.map((exp, idx) => (
            <div
              key={exp.id}
              className="relative"
            >
              {/* Timeline line */}
              {idx < experiences.length - 1 && (
                <div className="absolute left-6 top-20 w-0.5 h-24 bg-gradient-to-b from-[#C17A45] to-border hidden md:block" />
              )}

              {/* Timeline dot */}
              <div className="absolute left-0 top-6 w-12 h-12 bg-background border-2 border-[#C17A45] rounded-full flex items-center justify-center hidden md:flex">
                <div className="w-3 h-3 bg-[#C17A45] rounded-full" />
              </div>

              {/* Card */}
              <div className="md:ml-24 bg-card border border-border rounded-lg overflow-hidden hover:border-[#C17A45]/50 transition-all duration-200">
                <button
                  onClick={() =>
                    setExpandedId(expandedId === exp.id ? null : exp.id)
                  }
                  className="w-full p-6 text-left hover:bg-background/50 transition-colors"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-foreground">
                        {exp.title}
                      </h3>
                      <p className="text-[#C17A45] font-semibold mt-1">
                        {exp.company}
                      </p>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mt-2 text-sm text-[#E0E0E0] font-medium">
                        <span>{exp.period}</span>
                        <span className="hidden sm:inline text-border">•</span>
                        <span>{exp.location}</span>
                      </div>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-foreground/60 transition-transform duration-200 flex-shrink-0 ${
                        expandedId === exp.id ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                </button>

                {/* Expanded Content */}
                {expandedId === exp.id && (
                  <div className="px-6 pb-6 border-t border-border space-y-4">
                    {/* Achievements */}
                    <div>
                      <p className="text-xs font-semibold text-foreground/60 uppercase tracking-wide mb-3">
                        Key Achievements
                      </p>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li
                            key={i}
                            className="flex gap-3 text-sm text-[#E0E0E0] font-medium"
                          >
                            <span className="text-[#C17A45] font-bold mt-0.5">
                              ✓
                            </span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <p className="text-xs font-semibold text-foreground/60 uppercase tracking-wide mb-3">
                        Technologies & Skills
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-background border border-border rounded-full text-xs font-semibold text-[#E0E0E0]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
