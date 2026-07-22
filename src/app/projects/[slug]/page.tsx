import Link from "next/link";
import Navigation from "@/components/Navigation";

// Mock data fetching function
function getProject(slug: string) {
  const projects = {
    spendsense: {
      id: "spendsense",
      title: "SpendSense",
      overview: "An AI-powered expense tracker that understands natural language input.",
      problem: "Traditional expense trackers require manual data entry, which is tedious and often leads to inconsistent tracking.",
      solution: "SpendSense allows users to speak or type their expenses naturally (e.g., 'Spent $15 on coffee yesterday'), automatically categorizing and logging them using LLMs.",
      features: ["Voice Input", "AI Categorization", "Financial Insights", "Export to CSV"],
      tech: ["React", "Node", "MongoDB", "Flask", "Gemini API"],
      challenges: "Ensuring low latency for the voice-to-text pipeline and maintaining high accuracy in LLM categorization without hallucinations.",
      next: "aethra",
      nextTitle: "Aethra"
    },
    aethra: {
      id: "aethra",
      title: "Aethra",
      overview: "A distributed task orchestrator for high-throughput systems.",
      problem: "Managing complex asynchronous workflows across microservices is error-prone and hard to trace.",
      solution: "A robust event-driven architecture that guarantees at-least-once delivery with visual workflow tracking.",
      features: ["Visual Workflow Builder", "Real-time Tracing", "Retry Mechanisms", "gRPC Communication"],
      tech: ["Go", "gRPC", "PostgreSQL", "Next.js"],
      challenges: "Handling concurrent database transactions safely under high load and implementing reliable backoff strategies.",
      next: "spendsense",
      nextTitle: "SpendSense"
    }
  };
  return projects[slug as keyof typeof projects] || projects.spendsense;
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);

  return (
    <main className="flex min-h-screen flex-col w-full bg-offwhite text-pureblack">
      <Navigation />
      
      <article className="w-full pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
        {/* Header */}
        <header className="mb-24 mt-12">
          <Link href="/#projects" className="text-sm uppercase tracking-widest hover:text-accent transition-colors mb-12 inline-block">
            ← Back to Projects
          </Link>
          <h1 className="font-serif text-[12vw] leading-none uppercase tracking-tighter mb-12">
            {project.title}
          </h1>
          <div className="w-full aspect-[21/9] bg-pureblack/5 flex items-center justify-center relative overflow-hidden">
            <span className="opacity-20 font-serif text-4xl">Massive Hero Image</span>
          </div>
        </header>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Left Column - Meta */}
          <div className="md:col-span-4 flex flex-col space-y-12">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest mb-4">Tech Stack</h3>
              <ul className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <li key={t} className="text-sm font-medium border border-pureblack/20 rounded-full px-3 py-1">{t}</li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest mb-4">Features</h3>
              <ul className="space-y-2">
                {project.features.map((f) => (
                  <li key={f} className="text-sm opacity-70 flex items-start">
                    <span className="text-accent mr-2 text-xs mt-1">◆</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col space-y-4 pt-8 border-t border-pureblack/10">
              <a href="#" className="group flex items-center justify-between text-sm uppercase tracking-widest font-bold hover:text-accent transition-colors">
                <span>View Live Demo</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
              <a href="#" className="group flex items-center justify-between text-sm uppercase tracking-widest font-bold hover:text-accent transition-colors">
                <span>View Source Code</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          </div>

          {/* Right Column - Details */}
          <div className="md:col-span-8 flex flex-col space-y-24">
            <section>
              <h2 className="font-serif text-4xl md:text-5xl mb-8">Overview</h2>
              <p className="text-lg md:text-2xl font-serif italic leading-relaxed">
                {project.overview}
              </p>
            </section>

            <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="font-serif text-3xl mb-6">The Problem</h2>
                <p className="opacity-70 leading-relaxed">{project.problem}</p>
              </div>
              <div>
                <h2 className="font-serif text-3xl mb-6">The Solution</h2>
                <p className="opacity-70 leading-relaxed">{project.solution}</p>
              </div>
            </section>

            <section>
              <h2 className="font-serif text-4xl md:text-5xl mb-8">Architecture</h2>
              <div className="w-full aspect-video bg-pureblack/5 flex items-center justify-center mb-8">
                <span className="opacity-20 font-serif text-2xl">Architecture Diagram</span>
              </div>
              <h3 className="font-serif text-3xl mb-4">Technical Challenges</h3>
              <p className="opacity-70 leading-relaxed">{project.challenges}</p>
            </section>
            
            <section>
               <h2 className="font-serif text-4xl md:text-5xl mb-8">Screenshots</h2>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div className="aspect-[4/3] bg-pureblack/5 flex items-center justify-center">
                    <span className="opacity-20 font-serif">UI Shot 1</span>
                 </div>
                 <div className="aspect-[4/3] bg-pureblack/5 flex items-center justify-center">
                    <span className="opacity-20 font-serif">UI Shot 2</span>
                 </div>
               </div>
            </section>
          </div>
        </div>

        {/* Next Project */}
        <div className="mt-40 pt-24 border-t border-pureblack/10 text-center">
          <p className="text-sm uppercase tracking-widest opacity-50 mb-8">Up Next</p>
          <Link href={`/projects/${project.next}`} className="group inline-block">
            <h2 className="font-serif text-6xl md:text-9xl group-hover:italic transition-all duration-300">
              {project.nextTitle}
            </h2>
          </Link>
        </div>
      </article>
    </main>
  );
}
