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
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Projects />
        <Software />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
      <CommandPalette />
      <ScrollToTop />
    </div>
  );
}
