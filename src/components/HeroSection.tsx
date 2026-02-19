import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Facebook } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-20 pb-16 relative overflow-hidden"
    >
      {/* Decorative shapes */}
      <div className="absolute top-20 right-0 w-72 h-72 rounded-full bg-accent/20 blur-3xl -z-10" />
      <div className="absolute bottom-20 left-0 w-96 h-96 rounded-full bg-primary/10 blur-3xl -z-10" />

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="order-2 lg:order-1"
          >
            <p className="text-sm font-medium text-primary mb-3 tracking-wider uppercase">
              CSE Student &amp; Aspiring Software Engineer
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Hi, I'm{" "}
              <span className="font-serif italic accent-underline">
                Papia Sultana
              </span>{" "}
              Prianka
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-lg mb-8">
              A CSE student at AIUB, passionate about software development, problem-solving, and AI research. 
              Skilled in C++, Java, C#, web development, and desktop applications. Currently working on 
              Reinforcement Learning in Human-Computer Interaction (HCI).
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-10">
              <a
                href="#contact"
                className="px-7 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
              >
                Hire Me
              </a>
              <a
                href="#projects"
                className="px-7 py-3 rounded-full border-2 border-foreground text-foreground font-medium hover:bg-foreground hover:text-background transition-colors"
              >
                View Projects
              </a>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/PapiaSultanaPrianka"
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/papia-sultana-priyanka-a2a3063b2/"
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://www.facebook.com/share/17y4RKMs7t/?mibextid=wwXIfr"
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
            </div>
          </motion.div>

          {/* Profile photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-accent/30 scale-110 -z-10" />
              <img
                src={profilePhoto}
                alt="Papia Sultana Prianka"
                className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full object-cover border-4 border-background shadow-2xl"
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2"
        >
          <span className="text-xs text-muted-foreground">Scroll Down</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ArrowDown size={16} className="text-muted-foreground" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
