import { ProductCard } from "@/components/ProductCard";

const Products = () => {
  const products = [
    { id: 1, image: "/api/placeholder/300/300", name: "Fresh Apple Basket", price: "$12.99" },
    { id: 2, image: "/api/placeholder/300/300", name: "Organic Vegetables Bundle", price: "$18.99" },
    { id: 3, image: "/api/placeholder/300/300", name: "Mixed Berry Selection", price: "$8.99" },
    { id: 4, image: "/api/placeholder/300/300", name: "Citrus Fruit Pack", price: "$15.99" },
    { id: 5, image: "/api/placeholder/300/300", name: "Leafy Greens Variety", price: "$10.99" },
    { id: 6, image: "/api/placeholder/300/300", name: "Premium Banana Bunch", price: "$4.99" },
    { id: 7, image: "/api/placeholder/300/300", name: "Seasonal Fruit Mix", price: "$22.99" },
    { id: 8, image: "/api/placeholder/300/300", name: "Root Vegetable Collection", price: "$14.99" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Our Fresh Products</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our wide selection of fresh, locally-sourced produce
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              image={product.image}
              name={product.name}
              price={product.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;