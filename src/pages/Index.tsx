import { HeroSection } from "@/components/HeroSection";
import { FeatureCard } from "@/components/FeatureCard";
import { ProductCard } from "@/components/ProductCard";

const Index = () => {
  const features = [
    {
      icon: "🛒",
      title: "Browse Fresh Products",
      description: "Explore our wide selection of fresh, locally-sourced produce from trusted farmers and vendors."
    },
    {
      icon: "🤝",
      title: "Connect with Sellers",
      description: "Build relationships with local farmers and suppliers to ensure consistent quality and fair pricing."
    },
    {
      icon: "🔒",
      title: "Easy & Secure Trading",
      description: "Safe and transparent transactions with built-in quality assurance and payment protection."
    }
  ];

  const featuredProducts = [
    { id: 1, image: "/api/placeholder/300/300", name: "Fresh Apple Basket", price: "$12.99" },
    { id: 2, image: "/api/placeholder/300/300", name: "Organic Vegetables Bundle", price: "$18.99" },
    { id: 3, image: "/api/placeholder/300/300", name: "Mixed Berry Selection", price: "$8.99" },
    { id: 4, image: "/api/placeholder/300/300", name: "Citrus Fruit Pack", price: "$15.99" },
    { id: 5, image: "/api/placeholder/300/300", name: "Leafy Greens Variety", price: "$10.99" },
    { id: 6, image: "/api/placeholder/300/300", name: "Premium Banana Bunch", price: "$4.99" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      
      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Fresh Market Hub?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience the future of fresh produce trading with our innovative platform
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Product Showcase Section */}
      <section className="py-20">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Products</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover our handpicked selection of the freshest produce available
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                image={product.image}
                name={product.name}
                price={product.price}
              />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-accent/20">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Fresh Market Hub</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Fresh Market Hub is revolutionizing the way people access and trade fresh produce. 
              Our platform connects local farmers, vendors, and consumers in a seamless digital 
              marketplace that prioritizes quality, freshness, and community engagement. We believe 
              in supporting local agriculture while providing everyone with access to the highest 
              quality fruits and vegetables at fair prices.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
