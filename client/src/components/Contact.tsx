import { Mail, MapPin, Phone, Linkedin } from "lucide-react";

export default function Contact() {
  const currentYear = new Date().getFullYear();

  return (
    <section id="contact" className="pt-24 pb-12 bg-card rounded-t-[40px] md:rounded-t-[80px] relative mt-20 border-t border-border/20 z-30">
      <div className="container mx-auto px-6 flex flex-col items-center">
        
        {/* Name Logo */}
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-black italic tracking-tighter uppercase flex justify-center gap-2">
            <span className="text-foreground drop-shadow-md">PRAVEEN</span>
            <span className="text-[#C17A45] drop-shadow-md">KASHYAP</span>
          </h2>
          <p className="text-foreground/50 tracking-[0.2em] md:tracking-[0.4em] text-xs md:text-sm font-bold mt-6 uppercase">
            Precision Meets Engineering
          </p>
        </div>

        {/* Contact Pills */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 mt-16 w-full max-w-5xl">
          
          <a href="mailto:sid143pk@gmail.com" className="flex items-center gap-4 bg-background/40 hover:bg-background border border-border/60 rounded-full px-6 py-4 transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center justify-center w-8 h-8 rounded-full border border-foreground/20">
              <Mail className="w-4 h-4 text-foreground/70" />
            </div>
            <span className="text-foreground font-bold text-sm">sid143pk@gmail.com</span>
          </a>

          <a href="https://linkedin.com/in/praveen-kashyap-323719251" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 bg-background/40 hover:bg-background border border-border/60 rounded-full px-6 py-4 transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center justify-center w-8 h-8 rounded-full border border-foreground/20">
              <Linkedin className="w-4 h-4 text-foreground/70" />
            </div>
            <span className="text-foreground font-bold text-sm">LinkedIn</span>
          </a>

          <a href="tel:+919795264544" className="flex items-center gap-4 bg-background/40 hover:bg-background border border-border/60 rounded-full px-6 py-4 transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center justify-center w-8 h-8 rounded-full border border-foreground/20">
              <Phone className="w-4 h-4 text-foreground/70" />
            </div>
            <span className="text-foreground font-bold text-sm">+91-9795264544</span>
          </a>

          <div className="flex items-center gap-4 bg-background/40 hover:bg-background border border-border/60 rounded-full px-6 py-4 transition-all duration-300 hover:-translate-y-1 cursor-default">
            <div className="flex items-center justify-center w-8 h-8 rounded-full border border-[#C17A45]/40">
              <MapPin className="w-4 h-4 text-[#C17A45]" />
            </div>
            <span className="text-foreground font-bold text-sm">Faridabad, Haryana</span>
          </div>

        </div>

        {/* Footer Text */}
        <div className="mt-28 pt-8 w-full text-center relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-border/40 rounded-full"></div>
          <p className="text-foreground/40 text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase pt-4">
            © {currentYear} PRAVEEN KASHYAP . LITTLE FLOWER POLYTECHNIC
          </p>
        </div>

      </div>
    </section>
  );
}
