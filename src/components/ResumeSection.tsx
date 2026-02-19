import { motion } from "framer-motion";
import { GraduationCap, Award, Wrench, Heart, Download } from "lucide-react";

const education = [
  { period: "2022 – Present", title: "B.Sc. in CSE", place: "American International University–Bangladesh (AIUB)", detail: "11th Semester · CGPA: 3.00" },
  { period: "2020 – 2021", title: "HSC – Science", place: "Ashugonj Sar Karkhana College", detail: "GPA: 4.50" },
  { period: "2014 – 2019", title: "SSC – Science", place: "Roushan Ara Jalil Girls High School", detail: "GPA: 3.89" },
];

const skills = [
  "C++", "Java", "C#", "HTML", "CSS", "JavaScript", "PHP", "Assembly Language",
  "SQL", "PL/SQL", "Oracle SQL", "Microsoft SQL Server", "MySQL", "XAMPP",
  "Figma", "MATLAB", "Arduino", "AutoCAD",
  "Desktop Applications", "Web Development", "UI/UX Design Basics",
];

const strengths = [
  "Quick Learner", "Responsible", "Dedicated", "Team Player",
  "Strong Communication", "Analytical Thinking", "Structured Coding", "Logical Problem-Solving",
];

const ResumeSection = () => {
  return (
    <section id="resume" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-sm font-medium text-primary tracking-wider uppercase mb-2">
            My Background
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold">
            <span className="font-serif italic accent-underline">Resume</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-primary/10">
                <GraduationCap size={20} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold">Education</h3>
            </div>
            <div className="space-y-6 border-l-2 border-border pl-6 relative">
              {education.map((item, i) => (
                <div key={i} className="relative">
                  <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-primary border-2 border-background" />
                  <span className="text-xs font-medium text-primary">{item.period}</span>
                  <h4 className="font-semibold text-foreground mt-1">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.place}</p>
                  <p className="text-sm text-muted-foreground">{item.detail}</p>
                </div>
              ))}
            </div>

            {/* Certification */}
            <div className="mt-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-accent/20">
                  <Award size={20} className="text-accent-foreground" />
                </div>
                <h3 className="text-xl font-bold">Certification</h3>
              </div>
              <div className="p-4 rounded-xl bg-card border border-border">
                <h4 className="font-semibold text-foreground">IT Essentials</h4>
                <p className="text-sm text-muted-foreground">Cisco Networking Academy</p>
              </div>
            </div>
          </motion.div>

          {/* Skills & Strengths */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-primary/10">
                <Wrench size={20} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold">Technical Skills</h3>
            </div>
            <div className="flex flex-wrap gap-2 mb-10">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 rounded-full text-xs font-medium bg-secondary text-secondary-foreground border border-border hover:border-primary/40 hover:bg-primary/10 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-primary/10">
                <Heart size={20} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold">Personal Strengths</h3>
            </div>
            <div className="flex flex-wrap gap-2 mb-10">
              {strengths.map((s) => (
                <span
                  key={s}
                  className="px-3 py-1.5 rounded-full text-xs font-medium bg-accent/20 text-accent-foreground border border-accent/30"
                >
                  {s}
                </span>
              ))}
            </div>

            {/* Download button */}
            <button className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-background font-medium hover:opacity-90 transition-opacity">
              <Download size={16} />
              Download Resume PDF
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
