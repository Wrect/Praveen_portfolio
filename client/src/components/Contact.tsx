import { Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-32 bg-card/30">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <div className="w-12 h-1 bg-[#C17A45] rounded-full mx-auto" />
          <p className="text-foreground/60 mt-4 max-w-2xl mx-auto">
            Feel free to reach out for collaborations or inquiries.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-background border border-border rounded-lg p-8 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {/* Email */}
            <div className="flex flex-col items-center gap-3 p-4 rounded-lg hover:bg-card/50 transition-colors">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#C17A45]/10 border border-[#C17A45]/20">
                <Mail className="w-6 h-6 text-[#C17A45]" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Email</h3>
                <a
                  href="mailto:sid143pk@gmail.com"
                  className="text-foreground/60 hover:text-[#C17A45] transition-colors text-sm"
                >
                  sid143pk@gmail.com
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex flex-col items-center gap-3 p-4 rounded-lg hover:bg-card/50 transition-colors">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#C17A45]/10 border border-[#C17A45]/20">
                <Phone className="w-6 h-6 text-[#C17A45]" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                <a
                  href="tel:+919795264544"
                  className="text-foreground/60 hover:text-[#C17A45] transition-colors text-sm"
                >
                  +91-9795264544
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="flex flex-col items-center gap-3 p-4 rounded-lg hover:bg-card/50 transition-colors">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#C17A45]/10 border border-[#C17A45]/20">
                <MapPin className="w-6 h-6 text-[#C17A45]" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Location</h3>
                <p className="text-foreground/60 text-sm">Faridabad, Haryana, India</p>
              </div>
            </div>
          </div>

          {/* Social Links & Resume */}
          <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="https://linkedin.com/in/praveen-kashyap-323719251"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-card border border-border rounded-lg hover:border-[#C17A45] hover:text-[#C17A45] transition-colors font-medium"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
              Connect on LinkedIn
            </a>
            
            <button 
              onClick={(e) => {
                e.preventDefault();
                fetch('/resume.pdf')
                  .then(response => response.blob())
                  .then(blob => {
                    const url = window.URL.createObjectURL(blob);
                    const a = document.createElement('a');
                    a.style.display = 'none';
                    a.href = url;
                    a.download = 'Praveen_Kashyap_Resume.pdf';
                    document.body.appendChild(a);
                    a.click();
                    window.URL.revokeObjectURL(url);
                  });
              }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#C17A45] text-white font-semibold rounded-lg hover:bg-[#B5651D] transition-colors cursor-pointer"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              Download Resume
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
