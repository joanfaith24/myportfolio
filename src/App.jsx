import {
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  Flame,
  Mail,
  Menu,
  MessageSquare,
  Sparkles,
  X,
} from "lucide-react";
import { useState } from "react";
import FloatingButtons from "./FloatingButtons";

const projects = [
  {
    title: "Casa de Flowers",
    category: "E-commerce",
    description:
      "An online flower shop featuring product browsing, search suggestions, wishlist management, and a complete cart flow. Built with React and hosted on Firebase.",
    stack: ["React", "Vite", "Firebase"],
    link: "https://ecommerce-app-70965.web.app",
  },
  {
    title: "POS System",
    category: "Minimart POS",
    description:
      "A grocery POS with live currency rates, country & state tax breakdowns, cashier login, serial-numbered sales invoices, and transaction history search.",
    stack: ["React", "Vite", "CSS", "Netlify"],
    link: "https://joan-minimart-calculator.netlify.app/",
  },
  {
    title: "JF Farms",
    category: "WOOCOMMERCE STORE",
    description:
      "A farm-to-door delivery store built with WordPress and WooCommerce. Features product variations, Cash on Delivery, shipping zones, and a fully customized Elementor design.",
    stack: ["WordPress", "WooCommerce", "Elementor", "Astra Theme"],
    link: "#",
  },
  {
    title: "SlimPlate PH",
    category: "WORDPRESS SITE",
    description:
      " A health and wellness website built with WordPress, Astra theme, and Elementor. Features a clean landing page, service sections, and contact form.",
    stack: ["WordPress", "CSS", "Elementor", "Astra Theme"],
    link: "#",
  },
  {
    title: "HomeKitchen E-Commerce",
    category: "Online Shop",
    description:
      "A responsive kitchen e-commerce store built with Vanilla JS. Browse and shop kitchen essentials with a clean product layout that works smoothly across all devices.",
    stack: ["HTML", "CSS", "Vanilla JavaScript"],
    link: "https://homekitchenstudioshop.netlify.app/",
  },
  {
  title: "BlueWave Laundry",
  category: "Landing Page",
  description:
    "A modern, responsive landing page for a laundry service business featuring sections for services, pricing, testimonials, and a blog. Built with React and Vite, deployed on Vercel.",
  stack: ["React", "Vite", "CSS", "Vercel"],
  link: "https://bluewavelaundry.vercel.app/",
  },
  {
    title: "Task Planner",
    category: "Task Chart",
    description:
      "A task planner with: create, edit, complete, delete, schedule, and repeat options, designed for a smooth and user-friendly experience across devices.",
    stack: ["React", "Vite", "CSS", "Netlify"],
    link: "https://joandailyplanner.netlify.app/",
  },
];

const values = [
  {
    title: "Builds That Work",
    text: "I don't stop at making it look right. I make sure the cart updates, the search filters, the layout holds on mobile, and the deploy doesn't break.",
  },
  {
    title: "Small Things Matter",
    text: "Hover states, spacing consistency, mobile overflow, image sizing: I notice what most people scroll past.",
  },
  {
    title: "Ships It",
    text: "I've taken a full e-commerce project from zero to deployed: with auth, payments, database, and real responsive UI. I finish what I start.",
  },
];

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "Vite",
  "React",
  "React Router",
  "Firebase",
  "Firestore",
  "Netlify",
  "GitHub",
  "WordPress",
  "WooCommerce",
  "Elementor Page Builder",
  "PHP Basics",
  "Responsive UI",
  "localStorage",
  "REST APIs",
  "Agora Video",
  "Cloudinary",
  "Vercel",
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="app">
      <div className="page-shell">
        <header className="site-header">
          <a className="brand" href="#home" onClick={closeMenu} aria-label="Go to home">
            Joan Faith G
          </a>

          <button
            className="menu-button"
            type="button"
            aria-label="Toggle navigation menu"
            onClick={() => setMenuOpen((current) => !current)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          <nav className={menuOpen ? "nav open" : "nav"}>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#work" onClick={closeMenu}>My Work</a>
            <a href="#skills" onClick={closeMenu}>Skills</a>
            <a href="#contact" onClick={closeMenu}>Contact</a>
          </nav>
        </header>

        <main>
          {/* ── HERO ── */}
          <section className="hero-card" id="home">
            <div className="hero-copy">
              <p className="intro-line">Hi, I'm Joan Faith</p>
              <h1>Web Developer</h1>
              <p className="hero-text">
                I design and build responsive websites that are easy to use, visually clean, and crafted to give users a smooth and engaging experience. I focus on clear structure, easy navigation, and consistent design to ensure each site works seamlessly across devices, while tailoring each project to meet the specific needs of every client.
              </p>
              <div className="hero-actions">
                <a className="primary-button" href="#contact">Contact Me</a>
                <a className="secondary-button" href="#work">My Work</a>
              </div>
            </div>

            <div className="portrait-wrap" aria-label="Profile visual">
              <div className="portrait">
                <img src="/images/formal3.jpg" alt="Joan Faith" />
              </div>
              <div className="portrait-caption">
                <Sparkles size={16} />
                Available for projects
              </div>
            </div>
          </section>

          {/* ── ABOUT ── */}
          <section className="about-grid" id="about">
            <div className="value-stack">
              {values.map((item) => (
                <article className="value-card" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>

            <div className="about-copy">
              <p className="section-label">About Me</p>
              <h3>I build complete, deployable web applications using React, Firebase, and modern JavaScript.</h3>
              <p>
                My recent work includes a full-stack e-commerce platform built with real production features: multi-currency pricing, live search with suggestions, mega navigation menus, wishlist and cart logic, Stripe payment integration, Firestore database, Firebase authentication, and fully responsive layouts optimized for both desktop and mobile.
              </p>
              <p>
                I focus on clean component structure, thoughtful UI details, and interfaces that work exactly the way users expect. Every project I take on is built to be presentable, functional, and ready to hand off or deploy.
              </p>
              <p>
                "If you are looking for a developer who can turn ideas into functional and responsive websites, I would be glad to contribute to your project."
              </p>
            </div>
          </section>

          {/* ── WORK ── */}
          <section className="work-section" id="work">
            <div className="section-heading">
              <p className="section-label">My Work</p>
            </div>
            <div className="project-grid">
              {projects.map((project) => (
                <article className="project-card" key={project.title}>
                  <p className="project-category">{project.category}</p>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tag-list">
                    {project.stack.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    View Project
                    <ArrowUpRight size={16} />
                  </a>
                </article>
              ))}
            </div>
          </section>

          {/* ── SKILLS ── */}
          <section className="skills-section" id="skills">
            <div className="section-heading">
              <p className="section-label">My Skills</p>
            </div>

            <div className="skills-layout">
              {/* Card 1 */}
              <div className="skill-feature">
                <Code2 size={28} />
                <h3>Frontend Development</h3>
                <p>
                  React components, Vite setup, CSS Grid and Flexbox,
                  responsive layouts, and localStorage for persistent
                  state across sessions.
                </p>
              </div>

              {/* Card 2 */}
              <div className="skill-feature">
                <Flame size={28} />
                <h3>Firebase & Deployment</h3>
                <p>
                  Firebase Authentication, Firestore real-time database,
                  Firebase Hosting, Netlify deployment, and GitHub
                  version control.
                </p>
              </div>

              {/* Card 3 */}
              <div className="skill-feature">
                <MessageSquare size={28} />
                <h3>App Logic & Features</h3>
                <p>
                  POS systems, live API integration, multi-currency exchange
                  rates, country and US state tax, cashier authentication,
                  and real-time chat with video calling.
                </p>
              </div>
            </div>

            <div className="skills-list">
              {skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </section>

          {/* ── CONTACT ── */}
          <section className="contact-section" id="contact">
            <div>
              <p className="section-label">Contact</p>
              <h2>Let's build something clean and memorable.</h2>
            </div>

            <div className="contact-links">
              <a href="mailto:jfglifetime@gmail.com">
                <Mail size={18} />
                jfglifetime@gmail.com
              </a>
              <a href="https://github.com/joanfaith24" target="_blank" rel="noreferrer">
                <Code2 size={18} />
                GitHub
              </a>
              <a href="https://linkedin.com/in/joan-faith-1a7488231" target="_blank" rel="noreferrer">
                <BriefcaseBusiness size={18} />
                LinkedIn
              </a>
            </div>
          </section>

          <FloatingButtons />
        </main>

        <footer>
          <p>Copyright 2026 Joan Faith. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
