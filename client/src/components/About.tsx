import { Crosshair, Settings2, Cpu } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 relative z-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-start relative">
          
          {/* Left: Engineering Mission */}
          <div className="space-y-10 lg:sticky lg:top-32 self-start">
            <div>
              <h2 className="text-4xl md:text-5xl font-black italic tracking-tighter uppercase text-foreground mb-4">
                Engineering <span className="text-[#C17A45]">Mission</span>
              </h2>
              <div className="w-12 h-1 bg-[#C17A45] rounded-full" />
            </div>

            <div className="space-y-8">
              <div className="flex gap-4 group">
                <div className="shrink-0 mt-1">
                  <div className="w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center group-hover:border-[#C17A45]/50 group-hover:bg-[#C17A45]/10 transition-all duration-300">
                    <Crosshair className="w-6 h-6 text-[#C17A45]" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground uppercase tracking-wider mb-2">Absolute Precision</h3>
                  <p className="text-foreground/70 leading-relaxed text-sm md:text-base">
                    Leveraging advanced GD&T and Tolerance Stack-up analysis to engineer fixtures and automotive components that eliminate shop-floor ambiguity and ensure 100% manufacturing compliance.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 group">
                <div className="shrink-0 mt-1">
                  <div className="w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center group-hover:border-[#C17A45]/50 group-hover:bg-[#C17A45]/10 transition-all duration-300">
                    <Cpu className="w-6 h-6 text-[#C17A45]" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground uppercase tracking-wider mb-2">Digital Integration</h3>
                  <p className="text-foreground/70 leading-relaxed text-sm md:text-base">
                    Bridging the gap between traditional mechanical engineering and modern technological workflows by incorporating AI-driven analysis and rapid CAD prototyping techniques.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 group">
                <div className="shrink-0 mt-1">
                  <div className="w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center group-hover:border-[#C17A45]/50 group-hover:bg-[#C17A45]/10 transition-all duration-300">
                    <Settings2 className="w-6 h-6 text-[#C17A45]" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground uppercase tracking-wider mb-2">Optimized Production</h3>
                  <p className="text-foreground/70 leading-relaxed text-sm md:text-base">
                    Designing robust welding fixtures and checking gauges tailored for high-volume manufacturing, driving efficiency through Kaizen and 5S methodologies.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Technical Parameters Spec Sheet */}
          <div className="relative">
            {/* Decorative background accent */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#C17A45]/10 to-transparent blur-3xl -z-10 rounded-full scale-90" />
            
            <div className="bg-card/60 backdrop-blur-md border border-border/60 rounded-3xl p-8 md:p-10 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#C17A45]/10 rounded-bl-full pointer-events-none" />
              
              <div className="flex items-center justify-between border-b border-border/50 pb-6 mb-8">
                <h3 className="text-2xl font-black text-foreground uppercase tracking-widest">
                  Technical Specs
                </h3>
                <span className="text-[#C17A45] font-mono text-xs font-bold tracking-widest bg-[#C17A45]/10 px-3 py-1 rounded-full">
                  SYS. V1.0
                </span>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
                {[
                  { cat: "Design & Modeling", items: ["3D/2D CAD Modeling", "Welding Fixtures", "Checking Gauges", "Parametric & Surface"] },
                  { cat: "Quality & Analysis", items: ["GD&T (ASME Y14.5)", "Tolerance Stack-up", "Root Cause Analysis", "Reverse Engineering"] },
                  { cat: "Manufacturing", items: ["PPAP & Control Plan", "New Tooling Dev.", "5S & Kaizen", "DFM / DFA"] },
                  { cat: "Soft Skills", items: ["Cross-functional Sync", "Vendor Management", "Project Lifecycle", "Rapid Prototyping"] }
                ].map((group) => (
                  <div key={group.cat}>
                    <h4 className="text-xs font-bold text-[#C17A45] uppercase tracking-wider mb-4 flex items-center gap-2">
                      <div className="w-2 h-2 bg-[#C17A45] rotate-45" />
                      {group.cat}
                    </h4>
                    <ul className="space-y-3">
                      {group.items.map(item => (
                        <li key={item} className="flex items-start gap-3 text-sm text-foreground/80 font-medium">
                          <div className="w-1.5 h-1.5 rounded-full bg-border mt-1.5 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
