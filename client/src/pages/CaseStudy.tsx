import { ArrowLeft, Download, Maximize2, RotateCcw, Zap } from "lucide-react";
import { useLocation } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState, useEffect, lazy, Suspense } from "react";

const ThreeModelViewer = lazy(() => import("@/components/ThreeModelViewer"));


interface CaseStudyData {
  id: number;
  title: string;
  category: string;
  industry: string;
  software: string[];
  difficulty: string;
  description: string;
  metrics: string[];
  objectives?: string[];
  requirements?: string[];
  constraints?: string[];
  solution?: string;
  challenges?: string[];
  lessonsLearned?: string[];
  commands?: string[];
  modelFile?: string;
}

export default function CaseStudy() {
  const [location, navigate] = useLocation();
  const caseStudyId = parseInt(location.split("/").pop() || "1");
  const [caseStudy, setCaseStudy] = useState<CaseStudyData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchCaseStudy = async () => {
      try {
        const res = await fetch(`${import.meta.env.BASE_URL}models/${caseStudyId}.json`);
        if (!res.ok) {
          setError(true);
          return;
        }

        const contentType = res.headers.get("content-type");
        if (contentType && contentType.includes("text/html")) {
          console.error("Received HTML instead of JSON for Case Study.");
          setError(true);
          return;
        }

        const data = await res.json();
        setCaseStudy({ ...data, id: caseStudyId });
      } catch (err) {
        console.error("Error loading case study JSON:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchCaseStudy();
  }, [caseStudyId]);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col bg-background text-foreground">
        <Header />
        <main className="flex-1 container py-20 flex justify-center items-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#C17A45]"></div>
        </main>
        <Footer />
      </div>
    );
  }

  if (error || !caseStudy) {
    return (
      <div className="min-h-screen flex flex-col bg-background text-foreground">
        <Header />
        <main className="flex-1 container py-20 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Case Study Not Found
          </h1>
          <button
            onClick={() => navigate("/#projects")}
            className="inline-flex items-center gap-2 text-[#C17A45] hover:text-[#B5651D] font-semibold"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </button>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />

      <main className="flex-1">
        {/* Back Button */}
        <div className="container pt-8 pb-4">
          <button
            onClick={() => navigate("/#projects")}
            className="inline-flex items-center gap-2 text-[#C17A45] hover:text-[#B5651D] font-semibold transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </button>
        </div>

        {/* Hero Banner */}
        <section className="bg-gradient-to-r from-[#C17A45]/10 to-[#4A5A6A]/10 py-12 border-b border-border">
          <div className="container">
            <div className="space-y-4">
              <span className="inline-block px-3 py-1 bg-[#C17A45]/10 text-[#C17A45] text-xs font-semibold rounded-full">
                {caseStudy.category}
              </span>
              <h1 className="text-5xl font-bold text-foreground">
                {caseStudy.title}
              </h1>
              <p className="text-lg text-foreground/70 max-w-2xl">
                {caseStudy.description}
              </p>

              {/* Meta Info */}
              <div className="flex flex-wrap gap-6 pt-4">
                <div>
                  <p className="text-xs font-semibold text-foreground/60 uppercase">
                    Industry
                  </p>
                  <p className="text-foreground font-semibold">
                    {caseStudy.industry}
                  </p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-foreground/60 uppercase">
                    Difficulty
                  </p>
                  <p className="text-foreground font-semibold">
                    {caseStudy.difficulty}
                  </p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-foreground/60 uppercase">
                    Duration
                  </p>
                  <p className="text-foreground font-semibold">
                    {caseStudy.metrics[0]}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3D CAD Viewer Placeholder */}
        <section className="py-12 border-b border-border">
          <div className="container">
            <div className="relative h-96 bg-gradient-to-br from-card to-background rounded-lg border border-border shadow-lg overflow-hidden flex items-center justify-center">
                {caseStudy.modelFile ? (
                  <Suspense fallback={<div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#C17A45]"></div>}>
                    <ThreeModelViewer modelUrl={`${import.meta.env.BASE_URL}models/${caseStudy.modelFile}`} />
                  </Suspense>
                ) : caseStudy.image ? (
                  <img
                    src={caseStudy.image.startsWith('/') ? `${import.meta.env.BASE_URL}${caseStudy.image.slice(1)}` : caseStudy.image}
                    alt={caseStudy.title}
                    className="w-full h-full object-cover mix-blend-multiply"
                  />
                ) : (
                  <div className="text-center space-y-4">
                    <div className="w-24 h-24 mx-auto bg-[#C17A45]/10 rounded-lg flex items-center justify-center border border-[#C17A45]/20">
                      <svg
                        className="w-12 h-12 text-[#C17A45]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2.75 1.5m0 0l-2.75-1.5m2.75 1.5v2.5M4 7l2.75 1.5m0 0L9.5 7m-2.75 1.5v2.5"
                        />
                      </svg>
                    </div>
                    <p className="text-foreground/60 text-sm font-medium">
                      Interactive 3D CAD Viewer
                    </p>
                    <p className="text-foreground/40 text-xs">
                      Rotate • Zoom • Pan • Explode View
                    </p>
                  </div>
                )}

              {/* Viewer Controls */}
              <div className="absolute bottom-4 right-4 flex gap-2">
                <button className="p-2 bg-card border border-border rounded hover:border-[#C17A45] transition-colors">
                  <RotateCcw className="w-4 h-4 text-foreground/60" />
                </button>
                <button className="p-2 bg-card border border-border rounded hover:border-[#C17A45] transition-colors">
                  <Maximize2 className="w-4 h-4 text-foreground/60" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Content Grid */}
        <section className="py-12 border-b border-border">
          <div className="container grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Objectives */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Objectives
              </h2>
              <ul className="space-y-3">
                {(caseStudy.objectives || []).map((obj, idx) => (
                  <li key={idx} className="flex gap-3 text-foreground/70">
                    <span className="text-[#C17A45] font-bold mt-0.5">✓</span>
                    <span>{obj}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Requirements */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Requirements
              </h2>
              <ul className="space-y-3">
                {(caseStudy.requirements || []).map((req, idx) => (
                  <li key={idx} className="flex gap-3 text-foreground/70">
                    <span className="text-[#C17A45] font-bold mt-0.5">→</span>
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Solution */}
        <section className="py-12 border-b border-border bg-card/30">
          <div className="container">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Solution & Approach
            </h2>
            <p className="text-lg text-foreground/70 leading-relaxed mb-8">
              {caseStudy.solution || "Solution details not available."}
            </p>

            {/* Constraints */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-sm font-semibold text-foreground/60 uppercase mb-4">
                  Constraints
                </h3>
                <ul className="space-y-2">
                  {(caseStudy.constraints || []).map((constraint, idx) => (
                    <li key={idx} className="text-sm text-foreground/70">
                      • {constraint}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Metrics */}
              <div>
                <h3 className="text-sm font-semibold text-foreground/60 uppercase mb-4">
                  Project Metrics
                </h3>
                <ul className="space-y-2">
                  {(caseStudy.metrics || []).map((metric, idx) => (
                    <li key={idx} className="text-sm text-foreground/70">
                      • {metric}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Challenges & Lessons */}
        <section className="py-12 border-b border-border">
          <div className="container grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Challenges
              </h2>
              <ul className="space-y-3">
                {(caseStudy.challenges || []).map((challenge, idx) => (
                  <li key={idx} className="flex gap-3 text-foreground/70">
                    <span className="text-[#C17A45] font-bold">!</span>
                    <span>{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Lessons Learned
              </h2>
              <ul className="space-y-3">
                {(caseStudy.lessonsLearned || []).map((lesson, idx) => (
                  <li key={idx} className="flex gap-3 text-foreground/70">
                    <span className="text-[#C17A45] font-bold">★</span>
                    <span>{lesson}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Commands Used */}
        <section className="py-12 border-b border-border bg-card/30">
          <div className="container">
            <div className="flex items-center gap-3 mb-6">
              <Zap className="w-6 h-6 text-[#C17A45]" />
              <h2 className="text-2xl font-bold text-foreground">
                Commands & Techniques Used
              </h2>
            </div>
            <div className="flex flex-wrap gap-3">
              {(caseStudy.commands || []).map((cmd) => (
                <span
                  key={cmd}
                  className="px-4 py-2 bg-background border border-border rounded-lg text-sm font-medium text-foreground hover:border-[#C17A45] transition-colors"
                >
                  {cmd}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12">
          <div className="container text-center space-y-6">
            <p className="text-foreground/60 text-lg">
              Have a similar fixture or tolerance challenge?
            </p>
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 bg-[#C17A45] text-white font-semibold px-8 py-3 rounded-lg hover:bg-[#B5651D] transition-colors duration-200 shadow-md hover:shadow-lg"
            >
              Let's Discuss Your Project
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
