import { Button } from "@/components/ui/button";
import { Leaf } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="bg-card border-b border-border sticky top-0 z-50 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-br from-primary to-primary-hover p-2 rounded-xl">
              <Leaf className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">Fresh Market Hub</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
              Home
            </a>
            <a href="#products" className="text-muted-foreground hover:text-primary transition-colors font-medium">
              Products
            </a>
            <a href="#about" className="text-muted-foreground hover:text-primary transition-colors font-medium">
              About
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors font-medium">
              Contact
            </a>
          </div>

          {/* Auth Button */}
          <Button variant="default" className="shadow-md hover:shadow-lg transition-all duration-300">
            Login / Sign Up
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;