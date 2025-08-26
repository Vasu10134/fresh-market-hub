import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-primary">🥬</span>
          <span className="text-xl font-semibold">Fresh Market Hub</span>
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          <Link 
            to="/" 
            className="text-foreground/80 hover:text-foreground transition-colors"
          >
            Home
          </Link>
          <Link 
            to="/products" 
            className="text-foreground/80 hover:text-foreground transition-colors"
          >
            Products
          </Link>
          <Link 
            to="/about" 
            className="text-foreground/80 hover:text-foreground transition-colors"
          >
            About
          </Link>
          <Link 
            to="/contact" 
            className="text-foreground/80 hover:text-foreground transition-colors"
          >
            Contact
          </Link>
        </div>

        <Button variant="outline" className="border-primary/20 hover:bg-primary/10">
          Login / Sign Up
        </Button>
      </div>
    </nav>
  );
};