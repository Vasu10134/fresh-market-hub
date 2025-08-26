import { ShoppingBag, Users, Shield, Code, Layers, Palette } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import FeatureCard from "@/components/FeatureCard";
import ProductCard from "@/components/ProductCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Import product images
import appleBasket from "@/assets/apple-basket.jpg";
import vegetablesBundle from "@/assets/vegetables-bundle.jpg";
import berriesMix from "@/assets/berries-mix.jpg";
import citrusFruits from "@/assets/citrus-fruits.jpg";
import leafyGreens from "@/assets/leafy-greens.jpg";
import bananas from "@/assets/bananas.jpg";

const Index = () => {
  const features = [
    {
      icon: ShoppingBag,
      title: "Browse Fresh Products",
      description: "Discover a wide variety of fresh, organic produce from local farmers and trusted suppliers. Quality guaranteed with every purchase."
    },
    {
      icon: Users,
      title: "Connect with Sellers",
      description: "Build direct relationships with farmers and sellers in your area. Support local agriculture and get the freshest products."
    },
    {
      icon: Shield,
      title: "Easy & Secure Trading",
      description: "Enjoy seamless, secure transactions with our trusted payment system. Fast delivery and customer satisfaction guaranteed."
    }
  ];

  const products = [
    {
      image: appleBasket,
      name: "Organic Apple Basket",
      price: "$12.99",
      description: "Fresh red and green apples, perfect for snacking"
    },
    {
      image: vegetablesBundle,
      name: "Fresh Vegetable Bundle",
      price: "$18.50",
      description: "Mixed seasonal vegetables from local farms"
    },
    {
      image: berriesMix,
      name: "Berry Mix Collection",
      price: "$15.75",
      description: "Strawberries, blueberries, and raspberries"
    },
    {
      image: citrusFruits,
      name: "Citrus Fruits Pack",
      price: "$14.25",
      description: "Fresh oranges, lemons, and limes"
    },
    {
      image: leafyGreens,
      name: "Leafy Greens Bundle",
      price: "$11.99",
      description: "Spinach, kale, and lettuce varieties"
    },
    {
      image: bananas,
      name: "Premium Bananas",
      price: "$8.99",
      description: "Sweet, ripe bananas perfect for any meal"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Why Choose Fresh Market Hub?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We connect you directly with the freshest produce and most trusted sellers in your area.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
      <section id="products" className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Fresh Products</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover our selection of premium fresh produce, sourced directly from local farms.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <ProductCard
                key={index}
                image={product.image}
                name={product.name}
                price={product.price}
                description={product.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-card">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-foreground mb-8">About Fresh Market Hub</h2>
            <div className="prose prose-lg mx-auto text-muted-foreground">
              <p className="text-xl leading-relaxed mb-6">
                Fresh Market Hub is revolutionizing the way people connect with fresh, local produce. 
                Our platform bridges the gap between farmers, sellers, and consumers, creating a 
                sustainable ecosystem that benefits everyone.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                We believe in supporting local agriculture, reducing food waste, and ensuring that 
                fresh, healthy produce is accessible to all communities. Our technology-driven 
                approach makes it easier than ever to discover, purchase, and enjoy the freshest 
                products from trusted local sources.
              </p>
              <p className="text-lg leading-relaxed">
                Join thousands of satisfied customers who have made Fresh Market Hub their 
                go-to destination for premium produce and exceptional service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Info Section */}
      <section id="contact" className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <Card className="bg-gradient-to-br from-card to-accent/10 border-primary/20 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl text-foreground">
                  <Code className="w-6 h-6 mr-3 text-primary" />
                  Technical Excellence
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-primary/5 p-6 rounded-lg border border-primary/10">
                  <h3 className="text-xl font-semibold text-foreground mb-4">Fresh Market Hub</h3>
                  <div className="space-y-3 text-muted-foreground">
                    <div className="flex items-start">
                      <Layers className="w-5 h-5 mr-3 mt-0.5 text-primary flex-shrink-0" />
                      <span>Developed modular, reusable React components for product cards, user profiles, and trading workflows.</span>
                    </div>
                    <div className="flex items-start">
                      <Palette className="w-5 h-5 mr-3 mt-0.5 text-primary flex-shrink-0" />
                      <span>Applied Tailwind CSS utility classes for responsive layouts and modern design system.</span>
                    </div>
                    <div className="flex items-start">
                      <Code className="w-5 h-5 mr-3 mt-0.5 text-primary flex-shrink-0" />
                      <span><strong>Tech Used:</strong> React, TypeScript (ES6+), Tailwind CSS, Vite</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;