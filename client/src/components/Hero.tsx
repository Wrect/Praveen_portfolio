import { Linkedin, Github, Mail } from "lucide-react";
import { useEffect, useState } from "react";

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
      className="min-h-screen flex items-center justify-center pt-20 pb-20 relative z-10"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-16 lg:gap-12">
          
          {/* Left Column */}
          <div className="flex-1 space-y-8 w-full">
            <div className="space-y-2 text-center lg:text-left">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                Praveen Kashyap
              </h1>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#C17A45] tracking-tight pt-2 drop-shadow-sm">
                Mechanical Design Engineer
              </h2>
            </div>

            {/* Stats Card */}
            <div className="mt-6 bg-card/30 backdrop-blur-xl border border-border/30 rounded-2xl p-6 flex items-center justify-between max-w-xl mx-auto lg:mx-0 shadow-xl">
              <div className="text-center px-2 sm:px-4">
                <h3 className="text-2xl sm:text-3xl font-bold text-[#C17A45]">{displayStats.years}+</h3>
                <p className="text-xs sm:text-sm text-foreground/60 mt-1 font-medium">Experiences</p>
              </div>
              <div className="w-px h-12 bg-border/50"></div>
              <div className="text-center px-2 sm:px-4">
                <h3 className="text-2xl sm:text-3xl font-bold text-[#C17A45]">{displayStats.projects}+</h3>
                <p className="text-xs sm:text-sm text-foreground/60 mt-1 font-medium">Project done</p>
              </div>
              <div className="w-px h-12 bg-border/50"></div>
              <div className="text-center px-2 sm:px-4">
                <h3 className="text-2xl sm:text-3xl font-bold text-[#C17A45]">{displayStats.companies}+</h3>
                <p className="text-xs sm:text-sm text-foreground/60 mt-1 font-medium">Happy Clients</p>
              </div>
            </div>

            <div className="flex flex-col gap-6 pt-4">
              {/* Social Icons */}
              <div className="flex gap-4 justify-center lg:justify-start">
                <a href="#" className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-foreground/70 hover:bg-[#C17A45] hover:text-white hover:border-[#C17A45] transition-all shadow-sm">
                   <Linkedin className="w-5 h-5" />
                </a>
                <a href="https://github.com/Wrect" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-foreground/70 hover:bg-[#C17A45] hover:text-white hover:border-[#C17A45] transition-all shadow-sm">
                   <Github className="w-5 h-5" />
                </a>
                <a href="#contact" className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-foreground/70 hover:bg-[#C17A45] hover:text-white hover:border-[#C17A45] transition-all shadow-sm">
                   <Mail className="w-5 h-5" />
                </a>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <a href="#contact" className="px-8 py-3 bg-[#C17A45] text-white font-bold rounded-md hover:bg-[#A56336] transition-colors shadow-lg">
                  Hire Me
                </a>
                <a href={`${import.meta.env.BASE_URL}resume.pdf`} download="Praveen_Kashyap_Resume.pdf" className="px-8 py-3 border border-border text-foreground font-bold rounded-md hover:bg-white/5 transition-colors">
                  Download CV
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Profile Image */}
          <div className="flex-1 flex justify-center lg:justify-end relative w-full max-w-md lg:max-w-none">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[450px] lg:h-[450px]">
              {/* Dark circle background */}
              <div className="absolute inset-0 bg-background rounded-full scale-110 -z-10 shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-border/20"></div>
              
              {/* Profile image cutout */}
              <img 
                src={`${import.meta.env.BASE_URL}profile.png`} 
                alt="Praveen Kashyap" 
                className="w-full h-full object-cover rounded-full drop-shadow-2xl grayscale-[50%] contrast-125 hover:grayscale-0 transition-all duration-700 object-top"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
