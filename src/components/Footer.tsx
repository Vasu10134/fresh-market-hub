import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="border-t bg-muted/30 mt-20">
      <div className="container px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-2xl">🥬</span>
              <span className="text-xl font-semibold">Fresh Market Hub</span>
            </div>
            <p className="text-muted-foreground">
              Your one-stop platform for fresh produce and smart trading.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/privacy" className="block text-muted-foreground hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="block text-muted-foreground hover:text-foreground transition-colors">
                Terms of Service
              </Link>
              <Link to="/contact" className="block text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </Link>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                📘 Facebook
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                📷 Instagram
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                💼 LinkedIn
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t pt-8 mt-8 text-center text-muted-foreground">
          <p>© 2025 Fresh Market Hub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};