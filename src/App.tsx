import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code2,
  Terminal,
  Database,
  Cpu,
  ChevronRight,
  User,
  Layers,
  Sparkles,
  Check,
} from "lucide-react";
import projectsData from "./data/projects.json";
import { Project } from "./data/projects";


const SKILL_PROFICIENCY = [
  { name: "HTML", level: 95 },
  { name: "CSS", level: 90 },
  { name: "JavaScript", level: 95 },
  { name: "Node.js", level: 92 },
  { name: "Python", level: 85 },
  { name: "MongoDB", level: 88 },
  { name: "Express.js", level: 90 },
  { name: "Tailwind CSS", level: 95 },
];

// --- Components ---

const FloatingCode = () => {
  const lines = [
    "const dev = new Developer('Markus');",
    "dev.skills = ['Node', 'Python', 'React'];",
    "await dev.buildFuture();",
    "// Success!",
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 40, rotate: 5 }}
      animate={{ opacity: 0.2, x: 0, rotate: -2 }}
      transition={{ duration: 1.2, delay: 0.5 }}
      className="absolute -right-12 top-0 hidden xl:block pointer-events-none"
    >
      <div className="glass p-6 rounded-2xl font-mono text-sm text-emerald-400 text-left border-emerald-400/20 shadow-2xl">
        <div className="flex gap-1.5 mb-4">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
        </div>
        {lines.map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1.5 + i * 0.3 }}
            className="mb-1.5 whitespace-nowrap"
          >
            <span className="text-white/30 mr-3">{i + 1}</span>
            {line}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

const Background = () => (
  <div className="fixed inset-0 -z-10 overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-full bg-[#030303]" />

    {/* Animated Blobs */}
    <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-500/10 rounded-full blur-[120px] animate-blob" />
    <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/10 rounded-full blur-[120px] animate-blob animation-delay-2000" />
    <div className="absolute top-[30%] right-[20%] w-[30%] h-[30%] bg-purple-500/10 rounded-full blur-[120px] animate-blob animation-delay-4000" />

    {/* Subtle Grid Pattern */}
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

    {/* Noise Texture */}
    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 pointer-events-none" />
  </div>
);

const SkillBar = ({
  name,
  level,
}: {
  name: string;
  level: number;
  key?: React.Key;
}) => (
  <div className="mb-6">
    <div className="flex justify-between mb-2">
      <span className="text-sm font-bold tracking-wider text-white/80 uppercase">
        {name}
      </span>
      <span className="text-sm font-mono text-emerald-400">{level}%</span>
    </div>
    <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="h-full bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full"
      />
    </div>
  </div>
);

const ProjectModal = ({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/80 backdrop-blur-sm"
    onClick={onClose}
  >
    <motion.div
      initial={{ scale: 0.9, y: 20 }}
      animate={{ scale: 1, y: 0 }}
      exit={{ scale: 0.9, y: 20 }}
      className="glass w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-[2rem] p-8 md:p-12"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="flex justify-between items-start mb-8">
        <div>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            {project.title}
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="text-xs font-bold tracking-widest uppercase text-emerald-400 bg-emerald-400/10 px-3 py-1 rounded-full"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
        <button
          onClick={onClose}
          className="p-2 hover:bg-white/10 rounded-full transition-colors"
        >
          <ChevronRight className="w-6 h-6 rotate-180" />
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="space-y-4">
          {project.details.screenshots.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Screenshot ${i + 1}`}
              className="w-full rounded-2xl border border-white/10"
              referrerPolicy="no-referrer"
            />
          ))}
        </div>
        <div>
          <h3 className="text-xl font-display font-bold mb-4">
            Project Overview
          </h3>
          <p className="text-white/70 leading-relaxed mb-8">
            {project.details.longDescription}
          </p>
          <div className="flex gap-4">
            <a
              href={project.details.demo}
              className="flex-1 bg-white text-black py-4 rounded-full font-bold text-center flex items-center justify-center gap-2 hover:bg-emerald-400 transition-colors"
            >
              Live Link <ExternalLink className="w-4 h-4" />
            </a>
            <a
              href={project.details.github}
              className="flex-1 glass py-4 rounded-full font-bold text-center flex items-center justify-center gap-2 hover:bg-white/10 transition-colors"
            >
              GitHub <Github className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  </motion.div>
);

const Navbar = () => (
  <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4">
    <div className="max-w-7xl mx-auto flex justify-between items-center glass rounded-full px-8 py-3">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="text-xl font-display font-bold tracking-tighter"
      >
        M<span className="text-emerald-400">.</span>MINA
      </motion.div>
      <div className="hidden md:flex gap-8 text-sm font-medium text-white/60">
        {["About", "Skills", "Projects", "Contact"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="hover:text-white transition-colors"
          >
            {item}
          </a>
        ))}
      </div>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-white text-black px-5 py-1.5 rounded-full text-sm font-semibold hover:bg-emerald-400 transition-colors"
        onClick={() =>
          document
            .getElementById("contact")
            ?.scrollIntoView({ behavior: "smooth" })
        }
      >
        Hire Me
      </motion.button>
    </div>
  </nav>
);

const ProjectCard = ({
  project,
  onClick,
}: {
  project: Project;
  onClick: () => void;
  key?: React.Key;
}) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="group relative glass rounded-3xl overflow-hidden cursor-pointer"
      onClick={onClick}
    >
      <div className="aspect-video overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
          <div className="bg-white text-black p-3 rounded-full hover:bg-emerald-400 transition-colors">
            <ExternalLink className="w-5 h-5" />
          </div>
        </div>
      </div>
      <div className="p-6">
        <div className="flex gap-2 mb-3">
          {project.tech.slice(0, 3).map((t) => (
            <span
              key={t}
              className="text-[10px] uppercase tracking-widest font-bold text-emerald-400/80 bg-emerald-400/10 px-2 py-1 rounded"
            >
              {t}
            </span>
          ))}
        </div>
        <h3 className="text-xl font-display font-bold mb-2">{project.title}</h3>
        <p className="text-white/60 text-sm line-clamp-2">
          {project.description}
        </p>
      </div>
    </motion.div>
  );
};

export default function App() {
  const [activeTab, setActiveTab] = useState("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [formStatus, setFormStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

   const filteredProjects =
     activeTab === "all"
       ? projectsData
       : projectsData.filter((p) => p.category === activeTab);

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("submitting");

    const formData = new FormData(e.currentTarget);
    try {
      const response = await fetch("https://formspree.io/f/mdawapon", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setFormStatus("success");
        (e.target as HTMLFormElement).reset();
      } else {
        setFormStatus("error");
      }
    } catch (error) {
      setFormStatus("error");
    }
  };

  return (
    <div className="min-h-screen font-sans">
      <Background />
      <Navbar />

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {formStatus === "success" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[110] flex items-center justify-center p-6 bg-black/90 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="glass p-12 rounded-[3rem] max-w-md w-full text-center relative z-10"
            >
              <div className="w-20 h-20 bg-emerald-400/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="w-10 h-10 text-emerald-400" />
              </div>
              <h3 className="text-3xl font-display font-bold mb-4">
                Message Sent!
              </h3>
              <p className="text-white/60 mb-8">
                Thank you for reaching out. I'll get back to you as soon as
                possible.
              </p>
              <button
                onClick={() => setFormStatus("idle")}
                className="w-full bg-white text-black py-4 rounded-full font-bold hover:bg-emerald-400 transition-colors"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="max-w-7xl mx-auto px-6 pt-32 pb-20">
        {/* Hero Section */}
        <section
          id="home"
          className="min-h-[80vh] flex flex-col justify-center items-center text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative mb-8"
          >
            <div className="w-32 h-32 rounded-full border-2 border-emerald-400/30 p-2 overflow-hidden relative group">
              <img
                src="https://picsum.photos/seed/markus/400/400"
                alt="Markus Mina"
                className="w-full h-full object-cover rounded-full z-10 relative"
                referrerPolicy="no-referrer"
              />
              <motion.div
                initial={{ y: "100%" }}
                animate={{ y: "-100%" }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-400/20 to-transparent z-0 pointer-events-none"
              />
            </div>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-4 border-t-2 border-emerald-400/50 rounded-full pointer-events-none"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-bold tracking-widest uppercase text-emerald-400 mb-6">
              <Sparkles className="w-3 h-3" /> Available for new projects
            </span>
            <h1 className="text-6xl md:text-8xl font-display font-bold tracking-tighter mb-6 leading-tight relative">
              I'm <span className="text-gradient">Markus Mina</span>
              <br />
              Full Stack Developer
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="inline-block w-2 h-12 md:h-20 bg-emerald-400 ml-2 align-middle"
              />
              <FloatingCode />
            </h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/60 mb-10 leading-relaxed">
              A 17-year-old self-taught engineer crafting high-performance
              digital experiences. Specializing in Node.js, Python, and the
              modern web stack.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-black px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-emerald-400 transition-colors"
                onClick={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                View Projects <ChevronRight className="w-4 h-4" />
              </motion.button>
              <div className="flex gap-2">
                {[Github, Linkedin, Mail].map((Icon, i) => (
                  <motion.a
                    key={i}
                    href="#"
                    whileHover={{
                      scale: 1.05,
                      y: -5,
                      backgroundColor: "rgba(255, 255, 255, 0.1)",
                    }}
                    className="w-14 h-14 glass rounded-full flex items-center justify-center"
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        {/* About & Skills Section */}
        <section id="about" className="py-20 mb-20">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass p-8 md:p-12 rounded-[2rem]"
            >
              <h2 className="text-3xl font-display font-bold mb-6">
                The Journey
              </h2>
              <p className="text-white/70 leading-relaxed mb-6">
                Starting at age 12, I dove headfirst into the world of
                programming. What began as curiosity turned into a passion for
                building scalable systems and elegant user interfaces.
              </p>
              <p className="text-white/70 leading-relaxed">
                As a self-learner, I've mastered the art of rapid adaptation.
                Whether it's architecting complex backends with Node.js or
                crafting pixel-perfect frontends with Tailwind CSS, I focus on
                performance, security, and user experience.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-10">
                <div>
                  <div className="text-4xl font-display font-bold text-emerald-400">
                    17
                  </div>
                  <div className="text-sm text-white/50 uppercase tracking-widest font-bold">
                    Years Old
                  </div>
                </div>
                <div>
                  <div className="text-4xl font-display font-bold text-emerald-400">
                    5+
                  </div>
                  <div className="text-sm text-white/50 uppercase tracking-widest font-bold">
                    Years Coding
                  </div>
                </div>
              </div>
            </motion.div>

            <div id="skills" className="glass p-8 md:p-12 rounded-[2rem]">
              <h2 className="text-3xl font-display font-bold mb-8">
                Technical Proficiency
              </h2>
              <div className="grid gap-2">
                {SKILL_PROFICIENCY.map((skill) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tighter mb-4">
                Selected Works
              </h2>
              <p className="text-white/60">
                A collection of projects that define my technical expertise.
              </p>
            </div>
            <div className="flex gap-2 glass p-1.5 rounded-full self-start md:self-auto overflow-x-auto max-w-full">
              {["all", "web", "api"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                    activeTab === tab
                      ? "bg-white text-black"
                      : "text-white/60 hover:text-white"
                  }`}
                >
                  {tab.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onClick={() => setSelectedProject(project)}
                />
              ))}
            </AnimatePresence>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 mt-20">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass p-12 md:p-16 rounded-[3rem] relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-emerald-500/10 to-transparent -z-10" />
              <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tighter mb-8">
                Let's build something
                <br />
                extraordinary.
              </h2>
              <p className="text-white/60 mb-12 text-lg">
                Currently looking for new opportunities and interesting projects
                to collaborate on.
              </p>

              <div className="space-y-8">
                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center text-emerald-400 group-hover:bg-emerald-400 group-hover:text-black transition-all">
                    <User className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-bold tracking-widest uppercase text-white/40 mb-1">
                      Name
                    </div>
                    <div className="text-lg font-medium">Markus Mina Samir</div>
                  </div>
                </div>

                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center text-emerald-400 group-hover:bg-emerald-400 group-hover:text-black transition-all">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-bold tracking-widest uppercase text-white/40 mb-1">
                      Email
                    </div>
                    <a
                      href="mailto:markboss726@gmail.com"
                      className="text-lg font-medium hover:text-emerald-400 transition-colors"
                    >
                      markboss726@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center text-emerald-400 group-hover:bg-emerald-400 group-hover:text-black transition-all">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-bold tracking-widest uppercase text-white/40 mb-1">
                      Phone
                    </div>
                    <a
                      href="tel:01559993943"
                      className="text-lg font-medium hover:text-emerald-400 transition-colors"
                    >
                      01559993943
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass p-12 md:p-16 rounded-[3rem]"
            >
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold tracking-widest uppercase text-white/40 ml-4">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your Name"
                    className="w-full glass bg-white/5 border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-emerald-400 focus:ring-4 focus:ring-emerald-400/10 transition-all duration-300"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold tracking-widest uppercase text-white/40 ml-4">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Your Email"
                    className="w-full glass bg-white/5 border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-emerald-400 focus:ring-4 focus:ring-emerald-400/10 transition-all duration-300"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold tracking-widest uppercase text-white/40 ml-4">
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    placeholder="Your Message"
                    className="w-full glass bg-white/5 border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-emerald-400 focus:ring-4 focus:ring-emerald-400/10 transition-all duration-300 resize-none"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={formStatus === "submitting"}
                  className="w-full bg-emerald-400 text-black py-5 rounded-2xl font-bold text-lg hover:bg-white transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {formStatus === "submitting" ? "Sending..." : "Send Message"}
                  {formStatus !== "submitting" && (
                    <ChevronRight className="w-5 h-5" />
                  )}
                </motion.button>
                {formStatus === "error" && (
                  <p className="text-red-400 text-sm text-center font-bold">
                    Something went wrong. Please try again.
                  </p>
                )}
              </form>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="max-w-7xl mx-auto px-6 py-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-white/40">
        <p>© 2024 Markus Mina. Built with passion and precision.</p>
        <div className="flex gap-8">
          {[
            { name: "Twitter", href: "#" },
            { name: "GitHub", href: "#" },
            { name: "LinkedIn", href: "#" },
          ].map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              whileHover={{
                scale: 1.1,
                y: -2,
                color: "rgba(255, 255, 255, 1)",
              }}
              className=""
            >
              {link.name}
            </motion.a>
          ))}
        </div>
      </footer>
    </div>
  );
}
