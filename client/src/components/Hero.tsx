import { ArrowRight, Download } from "lucide-react";
import { useEffect, useState, lazy, Suspense } from "react";

// Lazy load the heavy 3D viewer to keep the initial page load blazing fast
const ThreeModelViewer = lazy(() => import("@/components/ThreeModelViewer"));

export default function Hero() {
  const [displayStats, setDisplayStats] = useState({
    years: 0,
    companies: 0,
    projects: 0,
  });

  useEffect(() => {
    // Animate counter numbers on mount
    const intervals = [
      setInterval(() => {
        setDisplayStats((prev) => ({
          ...prev,
          years: Math.min(prev.years + 1, 4),
        }));
      }, 100),
      setInterval(() => {
        setDisplayStats((prev) => ({
          ...prev,
          companies: Math.min(prev.companies + 1, 3),
        }));
      }, 150),
      setInterval(() => {
        setDisplayStats((prev) => ({
          ...prev,
          projects: Math.min(prev.projects + 1, 50),
        }));
      }, 30),
    ];

    return () => intervals.forEach(clearInterval);
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-16 pb-20 md:pt-20 md:pb-32 relative overflow-hidden"
      style={{
        backgroundImage: "url('/manus-storage/hero-background_8c50bbdc.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Adaptive Theme Overlay */}
      <div className="absolute inset-0 bg-background/80 dark:bg-background/95 pointer-events-none z-0" />
      
      {/* Blueprint grid overlay */}
      <div className="absolute inset-0 blueprint-grid opacity-30 dark:opacity-10 pointer-events-none z-0" />

      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start pt-4 md:pt-12">
          {/* Left: Text & CTAs */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex flex-row items-center gap-5 md:gap-6">
                <div className="w-20 h-28 md:w-28 md:h-36 shrink-0 rounded-xl overflow-hidden border-2 border-[#C17A45]/30 shadow-xl relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10 pointer-events-none" />
                  <img 
                    src={`${import.meta.env.BASE_URL}profile.png`} 
                    alt="Praveen Kashyap" 
                    className="w-full h-full object-cover z-0 relative"
                  />
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-[1.1] tracking-tight">
                  Praveen <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C17A45] to-[#E8A573]">Kashyap</span>
                </h1>
              </div>
              <p className="text-xl text-foreground/70 font-light leading-relaxed max-w-lg border-l-2 border-[#C17A45]/50 pl-4 mt-6">
                Engineering the future of automotive manufacturing through robust fixture design, 100% accurate GD&T modeling, and optimized production workflows.
              </p>
            </div>

            {/* Animated Stats */}
            <div className="grid grid-cols-3 gap-6 py-8 border-y border-border">
              <div className="text-center md:text-left">
                <div className="text-3xl md:text-4xl font-bold text-[#C17A45]">
                  {displayStats.years}+
                </div>
                <p className="text-sm text-foreground/60 mt-1">Years Experience</p>
              </div>
              <div className="text-center md:text-left">
                <div className="text-3xl md:text-4xl font-bold text-[#C17A45]">
                  {displayStats.companies}
                </div>
                <p className="text-sm text-foreground/60 mt-1">Tier 1 Companies</p>
              </div>
              <div className="text-center md:text-left">
                <div className="text-3xl md:text-4xl font-bold text-[#C17A45]">
                  {displayStats.projects}+
                </div>
                <p className="text-sm text-foreground/60 mt-1">Designs Delivered</p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 bg-[#C17A45] text-white font-semibold px-8 py-4 rounded-lg hover:bg-[#B5651D] transition-colors duration-200 shadow-md hover:shadow-lg"
              >
                View Projects
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href={`${import.meta.env.BASE_URL}resume.pdf`}
                download="Praveen_Kashyap_Resume.pdf"
                className="inline-flex items-center justify-center gap-2 border border-border text-foreground font-semibold px-8 py-4 rounded-lg hover:bg-card transition-colors duration-200 cursor-pointer"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </a>
            </div>

            {/* Tech Stack */}
            <div className="space-y-4 pt-4">
              <p className="text-xs font-bold text-foreground/50 uppercase tracking-[0.2em]">
                Software Arsenal
              </p>
              <div className="flex flex-wrap gap-3">
                {[
                  { name: "CATIA V5", icon: "📐" },
                  { name: "SolidWorks", icon: "⚙️" },
                  { name: "AutoCAD", icon: "📏" },
                  { name: "GD&T", icon: "🎯" },
                  { name: "PPAP", icon: "📊" }
                ].map((tech) => (
                  <div
                    key={tech.name}
                    className="flex items-center gap-2 px-4 py-2 bg-card/60 backdrop-blur-md border border-[#C17A45]/20 shadow-[0_4px_20px_rgba(193,122,69,0.05)] text-foreground text-sm font-bold rounded-lg hover:border-[#C17A45]/80 hover:bg-[#C17A45]/10 hover:-translate-y-1 transition-all duration-300"
                  >
                    <span className="text-lg drop-shadow-md">{tech.icon}</span>
                    {tech.name}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: 3D CAD Viewer */}
          <div className="hidden md:flex items-center justify-center h-[500px]">
            <div className="w-full h-full rounded-2xl border border-border/50 shadow-2xl overflow-hidden relative group">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#C17A45]/5 to-transparent pointer-events-none z-10" />
              <Suspense fallback={
                <div className="w-full h-full flex items-center justify-center bg-card">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#C17A45]"></div>
                </div>
              }>
                <ThreeModelViewer />
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
