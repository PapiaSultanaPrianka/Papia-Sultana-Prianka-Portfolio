import { motion } from "framer-motion";
import { Code, Brain, Users, BookOpen } from "lucide-react";

const highlights = [
  { icon: Code, label: "Programming", desc: "C++, Java, C#, Web Dev" },
  { icon: Brain, label: "AI Research", desc: "RL in HCI Thesis" },
  { icon: Users, label: "Team Player", desc: "Collaborative & Communicative" },
  { icon: BookOpen, label: "Quick Learner", desc: "Continuously Improving" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 section-alt">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-sm font-medium text-primary tracking-wider uppercase mb-2">
            Get To Know Me
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold">
            About <span className="font-serif italic accent-underline">Me</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Text column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 space-y-5 text-muted-foreground leading-relaxed"
          >
            <p>
              Hello, I am Papia Sultana Prianka, a Computer Science and Engineering (CSE) student at 
              American International University–Bangladesh (AIUB), currently in my 11th semester. I am 
              passionate about becoming a Software Engineer and building efficient, user-focused software solutions.
            </p>
            <p>
              I have strong programming knowledge in C++, Java, and C#, along with experience in GUI and 
              desktop application development. My academic background includes Data Structures & Algorithms, 
              Database Management Systems (Oracle, SQL Server, MySQL, PL/SQL), Computer Networks, and Operating Systems. 
              I also have web development skills in HTML, CSS, JavaScript, and PHP, and basic UI/UX design experience using Figma.
            </p>
            <p>
              I earned an IT Essentials certificate from Cisco Networking Academy, which strengthened my 
              understanding of networking and IT fundamentals.
            </p>
            <p>
              Currently, I am working on my undergraduate thesis on Reinforcement Learning in Human-Computer 
              Interaction (HCI), focusing on intelligent detection systems.
            </p>
            <p>
              I am a motivated learner who enjoys solving problems, learning new technologies, and continuously 
              improving my skills to grow as a software engineering professional.
            </p>
          </motion.div>

          {/* Highlight cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 grid grid-cols-2 gap-4"
          >
            {highlights.map((item, i) => (
              <div
                key={i}
                className="p-5 rounded-xl bg-card border border-border hover:border-primary/40 hover:shadow-lg transition-all text-center"
              >
                <div className="w-10 h-10 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center">
                  <item.icon size={20} className="text-primary" />
                </div>
                <h4 className="font-semibold text-sm text-foreground mb-1">{item.label}</h4>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
