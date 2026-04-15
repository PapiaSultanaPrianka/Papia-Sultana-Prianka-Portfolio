import { motion } from "framer-motion";
import { ArrowUpRight, FileText, Video, Image as ImageIcon } from "lucide-react";

const projectsRepoLink = "https://github.com/PapiaSultanaPrianka/Projects.git";

const projects = [
  {
    title: "MeatBazar - E-Commerce Platform",
    stack: "PHP, MySQL, HTML, CSS, JavaScript",
    description:
      "Full-stack role-based e-commerce platform with multi-role dashboards, PHP session authentication, a product catalog, cart and checkout flow, and order management with delivery tracking.",
    tags: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    color: "bg-primary/10",
    href: projectsRepoLink,
  },
  {
    title: "University Admission Management System",
    stack: "Oracle SQL, PL/SQL, Database Design",
    description:
      "Centralized relational database for admission workflows with a normalized 3NF schema for data consistency and PL/SQL procedures for application processing.",
    tags: ["Oracle SQL", "PL/SQL", "Database Design"],
    color: "bg-accent/20",
    href: projectsRepoLink,
  },
  {
    title: "Seaside City - 2D Graphics Simulation",
    stack: "C++, OpenGL, GLUT",
    description:
      "Real-time animated 2D coastal city simulation with interactive controls and day/night cycle effects.",
    tags: ["C++", "OpenGL", "GLUT"],
    color: "bg-primary/10",
    href: projectsRepoLink,
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 section-alt">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-sm font-medium text-primary tracking-wider uppercase mb-2">
            What I've Built
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold">
            My{" "}
            <span className="font-serif accent-underline">Projects</span>
          </h2>
          <p className="text-muted-foreground mt-3 max-w-md mx-auto text-sm">
            A collection of academic and personal projects showcasing my skills and thought process.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.a
              key={i}
              href={project.href}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group block rounded-2xl bg-card border border-border hover:border-primary/40 hover:shadow-xl transition-all overflow-hidden"
            >
              {/* Placeholder media area */}
              <div className={`h-48 ${project.color} flex items-center justify-center`}>
                <div className="flex gap-4 text-muted-foreground/40">
                  <ImageIcon size={28} />
                  <Video size={28} />
                  <FileText size={28} />
                </div>
              </div>

              <div className="p-5">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-bold text-foreground">{project.title}</h3>
                  <div className="p-2 rounded-full bg-primary text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight size={14} />
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-4">{project.description}</p>

                <div className="text-xs text-muted-foreground mb-4">
                  <p>
                    <strong className="text-foreground">Languages:</strong> {project.stack}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 rounded-full text-[10px] font-medium bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
