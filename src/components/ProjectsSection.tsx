import { motion } from "framer-motion";
import { ArrowUpRight, FileText, Video, Image as ImageIcon } from "lucide-react";

const projects = [
  {
    title: "Project A",
    description: "Purpose, scope, and objectives of this project will be described here.",
    tags: ["C++", "Java"],
    color: "bg-primary/10",
  },
  {
    title: "Project B",
    description: "Purpose, scope, and objectives of this project will be described here.",
    tags: ["C#", "SQL Server"],
    color: "bg-accent/20",
  },
  {
    title: "Project C",
    description: "Purpose, scope, and objectives of this project will be described here.",
    tags: ["HTML", "CSS", "JavaScript", "PHP"],
    color: "bg-primary/10",
  },
  {
    title: "Project D",
    description: "Purpose, scope, and objectives of this project will be described here.",
    tags: ["Figma", "MATLAB"],
    color: "bg-accent/20",
  },
  {
    title: "Project E",
    description: "Purpose, scope, and objectives of this project will be described here.",
    tags: ["Arduino", "AutoCAD"],
    color: "bg-primary/10",
  },
  {
    title: "Project F",
    description: "Purpose, scope, and objectives of this project will be described here.",
    tags: ["XAMPP", "Oracle SQL"],
    color: "bg-accent/20",
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
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group rounded-2xl bg-card border border-border hover:border-primary/40 hover:shadow-xl transition-all overflow-hidden"
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

                {/* Info placeholders */}
                <div className="space-y-2 text-xs text-muted-foreground mb-4">
                  <p><strong className="text-foreground">Role:</strong> To be added</p>
                  <p><strong className="text-foreground">Outcome:</strong> To be added</p>
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
