import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Software from "@/components/Software";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CommandPalette from "@/components/CommandPalette";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col text-foreground relative">
      
      {/* Global Animated Background Image */}
      <div 
        className="fixed inset-0 animate-slow-pan z-0 pointer-events-none"
        style={{
          backgroundImage: `url('${import.meta.env.BASE_URL}manus-storage/hero-background_8c50bbdc.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      
      {/* Adaptive Theme Overlay */}
      <div className="fixed inset-0 bg-background/90 dark:bg-background/95 pointer-events-none z-0" />
      
      {/* Blueprint grid overlay */}
      <div className="fixed inset-0 blueprint-grid opacity-30 dark:opacity-10 pointer-events-none z-0" />

      {/* Volumetric Glowing Orbs */}
      <div className="fixed top-1/4 left-1/4 w-96 h-96 bg-[#C17A45]/20 rounded-full blur-[120px] pointer-events-none z-0 animate-pulse" />
      <div className="fixed bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-[#4A5A6A]/20 rounded-full blur-[150px] pointer-events-none z-0 animate-pulse" style={{ animationDelay: '2s' }} />

      {/* Content wrapper with z-index to sit above fixed background */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">
          <Hero />
          <About />
          <Projects />
          <Software />
          <Experience />
          <Education />
          <div className="bg-background relative z-20">
            <Contact />
          </div>
        </main>
        <div className="bg-background relative z-20">
          <Footer />
        </div>
      </div>

      <CommandPalette />
      <ScrollToTop />
    </div>
  );
}
