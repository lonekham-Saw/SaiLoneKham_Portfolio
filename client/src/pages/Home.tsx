import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail, ExternalLink, Images } from "lucide-react";
import { useState } from "react";
import ContactForm from "@/components/ContactForm";

/**
 * Modern Gradient Elegance Portfolio
 * Design Philosophy: Dark mode with gold and emerald accents, smooth gradients, glassmorphism
 * Typography: Space Mono for headings, Outfit for body
 */

export default function Home() {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  const projects = [
    {
      id: "graphic-1",
      title: "Canva Brand Identity Design",
      image: "/canva_design.png",
      category: "Graphic Design",
      description: "A complete visual identity system created with Canva, focusing on modern aesthetics and brand consistency.",
      tags: ["Canva", "Branding", "Visual Design"],
      gradient: "from-gold-500/20 to-emerald-600/20",
    },
    {
      id: "dev-1",
      title: "Flutter E-Commerce Mobile App",
      category: "Software Development",
      description: "Cross-platform e-commerce application built with Flutter, featuring real-time inventory sync, secure payment integration, and responsive UI design.",
      tags: ["Flutter", "Dart", "Firebase", "Cross-Platform"],
      gradient: "from-purple-500/20 to-indigo-600/20",
    },
    {
      id: "dev-2",
      title: "Python Backend API System",
      category: "Software Development",
      description: "Scalable backend system with Python, featuring REST APIs, database optimization, and real-time data processing for enterprise applications.",
      tags: ["Python", "REST API", "Database", "Backend"],
      gradient: "from-blue-500/20 to-cyan-600/20",
    },
    {
      id: "design-1",
      title: "Social Media Campaign Assets",
      category: "Graphic Design",
      description: "Complete social media visual identity created with Canva, including post templates, stories, and branded graphics for consistent online presence.",
      tags: ["Canva", "Social Media", "Branding", "Visual Design"],
      gradient: "from-amber-500/20 to-orange-600/20",
    },
    {
      id: "design-2",
      title: "Brand Visual Identity System",
      category: "Graphic Design",
      description: "Comprehensive brand identity with Canva, including logo variations, color palettes, typography guidelines, and marketing collateral.",
      tags: ["Canva", "Branding", "Design System", "Visual Identity"],
      gradient: "from-emerald-500/20 to-teal-600/20",
    },
    {
      id: "dev-3",
      title: "Flutter + Python Integrated App",
      category: "Full-Stack Development",
      description: "Complete application combining Flutter frontend with Python backend, demonstrating seamless integration of mobile UI with robust server logic.",
      tags: ["Flutter", "Python", "Full-Stack", "Integration"],
      gradient: "from-rose-500/20 to-pink-600/20",
    },
    {
      id: "design-3",
      title: "Professional Marketing Collateral",
      category: "Graphic Design",
      description: "Eye-catching marketing materials designed with Canva, including presentations, infographics, and promotional graphics for brand campaigns.",
      tags: ["Canva", "Marketing", "Infographics", "Presentations"],
      gradient: "from-yellow-500/20 to-orange-600/20",
    },
  ];

  const skills = {
    development: ["Flutter (Cross-Platform)", "Python (Backend)", "Dart", "REST APIs", "Firebase", "Database Design"],
    design: ["Canva Expert", "Visual Identity", "Social Media Design", "Branding", "UI/UX Design", "Graphic Design"],
    tools: ["Git & Version Control", "Responsive Design", "API Integration", "UI Prototyping", "Design Systems", "Project Management"],
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <div className="text-xl font-mono font-bold bg-gradient-to-r from-amber-400 to-emerald-400 bg-clip-text text-transparent">
            SAI LONE KHAM
          </div>
          <div className="flex items-center gap-6">
            <a href="#work" className="text-sm hover:text-primary transition-colors">
              Work
            </a>
            <a href="#skills" className="text-sm hover:text-primary transition-colors">
              Skills
            </a>
            <a href="#contact" className="text-sm hover:text-primary transition-colors">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663626993651/h2f2AxVg7G8efduehUrg2v/hero-gradient-abstract-GW7xtBTf5eaSB9F36ZZaBC.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
        </div>

        {/* Content */}
        <div className="container relative z-10 text-center max-w-3xl mx-auto px-4">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-mono font-bold leading-tight">
              <span className="block mb-2">Software Developer</span>
              <span className="bg-gradient-to-r from-amber-400 via-emerald-400 to-amber-400 bg-clip-text text-transparent">
                & Graphic Designer
              </span>
            </h1>

            <p className="text-lg md:text-xl text-foreground/80 font-light max-w-2xl mx-auto leading-relaxed">
              "Hi, I’m SAI LONE KHAM. I live at the intersection of Design and Development. As a Graphic Designer turned Full-stack Developer, I don't just build functional websites—I craft visual stories. With expertise in Flutter and Python backed by a strong eye for Graphic Design, I ensure that every project is as aesthetically pleasing as it is technically robust. From brand identity to seamless app interfaces, I bring your digital vision to life."
            </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-mono group"
            onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View My Work
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button 
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary/10 font-mono"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get In Touch
          </Button>
        </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
              <div className="w-1 h-2 bg-primary rounded-full animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-20 md:py-32 bg-gradient-to-b from-background via-background to-background/80">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-mono font-bold mb-4">
              Featured <span className="text-primary">Work</span>
            </h2>
            <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
              A selection of projects showcasing my expertise in both graphic design and full-stack development.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group relative h-80 rounded-xl overflow-hidden cursor-pointer"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Card Background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} backdrop-blur-sm border border-border/50 transition-all duration-500 ${
                    hoveredProject === project.id ? "scale-105" : ""
                  }`}
                />
                {/* Background Image */}
          {project.image && (
            <img 
              src={project.image} 
              alt={project.title}
              className={`absolute inset-0 w-full h-full object-cover transition-transform duration-500 ${
                hoveredProject === project.id ? "scale-110" : "scale-100"
              }`}
            />
          )}
          
          {/* Overlay to make text readable */}
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />

                {/* Content */}
                <div className="relative h-full p-6 flex flex-col justify-between z-10">
                  <div>
                    <div className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-mono mb-4">
                      {project.category}
                    </div>
                    <h3 className="text-xl font-mono font-bold mb-2">{project.title}</h3>
                    <p className="text-foreground/70 text-sm">{project.description}</p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-1 rounded bg-primary/10 text-primary/80 font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Hover Arrow */}
                  <div
                    className={`absolute top-6 right-6 transition-all duration-300 ${
                      hoveredProject === project.id ? "translate-x-1 -translate-y-1" : ""
                    }`}
                  >
                    <ExternalLink className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 md:py-32 bg-gradient-to-b from-background/80 to-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-mono font-bold mb-4">
              Skills & <span className="text-primary">Expertise</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Development Skills */}
            <div className="p-8 rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm hover:border-secondary/50 transition-colors">
              <h3 className="text-xl font-mono font-bold mb-4 text-secondary">Software Development</h3>
              <ul className="space-y-3">
                {skills.development.map((skill) => (
                  <li key={skill} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-secondary" />
                    <span className="text-foreground/80">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Design Skills */}
            <div className="p-8 rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-colors">
              <h3 className="text-xl font-mono font-bold mb-4 text-primary">Graphic Design</h3>
              <ul className="space-y-3">
                {skills.design.map((skill) => (
                  <li key={skill} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-foreground/80">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tools & Others */}
            <div className="p-8 rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm hover:border-accent/50 transition-colors">
              <h3 className="text-xl font-mono font-bold mb-4 text-accent">Tools & Others</h3>
              <ul className="space-y-3">
                {skills.tools.map((skill) => (
                  <li key={skill} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                    <span className="text-foreground/80">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-32 bg-gradient-to-b from-background to-background">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-mono font-bold mb-6">
                Ready to Build <span className="text-primary">Together?</span>
              </h2>
              <p className="text-foreground/70 text-lg">
                Whether you need a cross-platform mobile app, a powerful backend system, stunning visual branding, or a complete full-stack solution, I'm ready to deliver excellence in both code and design.
              </p>
            </div>

            {/* Contact Form */}
            <div className="bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-sm border border-border/50 rounded-2xl p-8 md:p-12">
              <ContactForm />
            </div>

            {/* Social Links */}
            <div className="mt-12 flex justify-center gap-6">
              <a
                href="#"
                className="p-3 rounded-lg border border-border/50 hover:border-primary/50 hover:bg-primary/10 transition-all group"
                title="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-foreground/70 group-hover:text-primary transition-colors" />
              </a>
              <a
                href="#"
                className="p-3 rounded-lg border border-border/50 hover:border-primary/50 hover:bg-primary/10 transition-all group"
                title="GitHub"
              >
                <Github className="w-5 h-5 text-foreground/70 group-hover:text-primary transition-colors" />
              </a>
              <a
                href="mailto:your.email@example.com"
                className="p-3 rounded-lg border border-border/50 hover:border-primary/50 hover:bg-primary/10 transition-all group"
                title="Email"
              >
                <Mail className="w-5 h-5 text-foreground/70 group-hover:text-primary transition-colors" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 py-8 bg-background/50 backdrop-blur-sm">
        <div className="container text-center text-foreground/60 text-sm space-y-2">
          <p>© 2024 Sai Lone Kham. All rights reserved.</p>
          <p className="text-xs">Software Developer & Graphic Designer | Flutter • Python • Canva</p>
        </div>
      </footer>

      {/* Styles for animations */}
      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
      `}</style>
    </div>
  );
}
