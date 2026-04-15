import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <a href="#home" className="font-serif text-lg font-bold text-foreground">
          Prianka<span className="text-primary">.</span>
        </a>
        <p className="text-xs text-muted-foreground flex items-center gap-1">
          © {new Date().getFullYear()} Papia Sultana Prianka. Made with <Heart size={12} className="text-primary" /> All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
