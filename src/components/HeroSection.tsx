import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-accent/30 to-background py-20 overflow-hidden">
      <div className="container relative px-4 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Welcome to Fresh Market Hub
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Your one-stop platform for fresh produce and smart trading
          </p>
          <div className="pt-6">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-6">
              <Link to="/products">Explore Products</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};