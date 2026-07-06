import { Award, BookOpen, Download } from "lucide-react";

const education = [
  {
    degree: "Diploma in Mechanical Engineering (CAD)",
    school: "Little Flower Polytechnic",
    location: "Gorakhpur, U.P.",
    year: "2020",
    score: "66.6%",
  },
  {
    degree: "Class XII (Intermediate)",
    school: "M.P. Inter College",
    location: "Gorakhpur, U.P.",
    year: "2016",
    score: "62.2%",
  },
  {
    degree: "Class X (High School)",
    school: "R.A.K. Inter College",
    location: "Gorakhpur, U.P.",
    year: "2014",
    score: "78.5%",
  },
];

const certifications = [
  {
    title: "CATIA V5 Course Completion Certificate",
    issuer: "RVM CAD Institute, Faridabad",
    skills: [
      "Part Design",
      "Assembly Design",
      "Drafting",
      "Generative Shape Design",
      "Generative Sheetmetal Design",
    ],
    downloadUrl: "#",
  },
  {
    title: "SolidWorks Professional",
    issuer: "Professional-level 3D CAD Modeling and Simulation",
    skills: ["3D Modeling", "Simulation", "Assemblies"],
    downloadUrl: "#",
  },
  {
    title: "AutoCAD",
    issuer: "2D Drafting, Technical Drawing, Annotation",
    skills: ["2D Drafting", "Technical Drawing", "Annotation"],
    downloadUrl: "#",
  },
  {
    title: "Microsoft Office",
    issuer: "Word, Excel, PowerPoint",
    skills: ["Word", "Excel", "PowerPoint"],
    downloadUrl: "#",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-20 md:py-32 bg-card/30">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <BookOpen className="w-6 h-6 text-[#C17A45]" />
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  Education
                </h2>
              </div>
              <div className="w-12 h-1 bg-[#C17A45] rounded-full" />
            </div>

            <div className="space-y-6">
              {education.map((edu, idx) => (
                <div
                  key={idx}
                  className="bg-background border border-border rounded-lg p-6 hover:shadow-md transition-all duration-200"
                >
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {edu.degree}
                  </h3>
                  <p className="text-[#C17A45] font-semibold text-sm mb-3">
                    {edu.school}
                  </p>
                  <div className="flex items-center justify-between text-sm text-foreground/60">
                    <span>{edu.location}</span>
                    <span className="font-semibold text-foreground">{edu.year}</span>
                  </div>
                  <div className="mt-3 pt-3 border-t border-border">
                    <span className="inline-block px-3 py-1 bg-[#C17A45]/10 text-[#C17A45] text-sm font-semibold rounded-full">
                      {edu.score}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <Award className="w-6 h-6 text-[#C17A45]" />
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  Certifications
                </h2>
              </div>
              <div className="w-12 h-1 bg-[#C17A45] rounded-full" />
            </div>

            <div className="space-y-6">
              {certifications.map((cert, idx) => (
                <div
                  key={idx}
                  className="bg-background border border-border rounded-lg p-6 hover:shadow-md transition-all duration-200"
                >
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-lg font-bold text-foreground mb-2">
                        {cert.title}
                      </h3>
                      <p className="text-foreground/60 text-sm">
                        {cert.issuer}
                      </p>
                    </div>
                    <a
                      href={cert.downloadUrl}
                      className="flex-shrink-0 p-2 bg-[#C17A45]/10 text-[#C17A45] rounded-lg hover:bg-[#C17A45]/20 transition-colors"
                      aria-label="Download certificate"
                    >
                      <Download className="w-5 h-5" />
                    </a>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 bg-[#C17A45]/10 text-[#C17A45] text-xs font-medium rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
