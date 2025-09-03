import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useCategories, useProductsByCategory } from "@/hooks/useProducts";
import { Skeleton } from "@/components/ui/skeleton";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useState } from "react";

const Categories = () => {
  const { data: categoriesResponse, isLoading: categoriesLoading, error: categoriesError } = useCategories();
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const { data: productsResponse, isLoading: productsLoading } = useProductsByCategory(selectedCategory, 4);

  const categories = categoriesResponse?.data || [];
  const products = productsResponse?.data || [];

  const categoryInfo = {
    electronics: {
      title: "Electronics",
      description: "Latest gadgets and electronic devices",
      icon: "📱",
      color: "bg-blue-100 text-blue-800"
    },
    "men's clothing": {
      title: "Men's Clothing",
      description: "Stylish and comfortable men's apparel",
      icon: "👔",
      color: "bg-gray-100 text-gray-800"
    },
    "women's clothing": {
      title: "Women's Clothing",
      description: "Trendy and elegant women's fashion",
      icon: "👗",
      color: "bg-pink-100 text-pink-800"
    },
    jewelry: {
      title: "Jewelry",
      description: "Beautiful and elegant jewelry pieces",
      icon: "💎",
      color: "bg-purple-100 text-purple-800"
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Product Categories</h1>
            <p className="text-xl text-muted-foreground">
              Explore our wide range of product categories
            </p>
          </div>

          {categoriesError && (
            <Alert className="mb-8">
              <AlertDescription>
                Failed to load categories. Please try again later.
              </AlertDescription>
            </Alert>
          )}

          {/* Categories Grid */}
          {categoriesLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {Array.from({ length: 4 }).map((_, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <Skeleton className="w-12 h-12 rounded-lg mb-4" />
                    <Skeleton className="h-6 w-3/4 mb-2" />
                    <Skeleton className="h-4 w-full" />
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {categories.map((category) => {
                const info = categoryInfo[category as keyof typeof categoryInfo] || {
                  title: category.charAt(0).toUpperCase() + category.slice(1),
                  description: `Explore our ${category} collection`,
                  icon: "📦",
                  color: "bg-green-100 text-green-800"
                };

                return (
                  <Card 
                    key={category} 
                    className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                      selectedCategory === category ? 'ring-2 ring-primary' : ''
                    }`}
                    onClick={() => setSelectedCategory(selectedCategory === category ? "" : category)}
                  >
                    <CardContent className="p-6 text-center">
                      <div className="text-4xl mb-4">{info.icon}</div>
                      <h3 className="text-lg font-semibold mb-2">{info.title}</h3>
                      <p className="text-sm text-muted-foreground mb-4">{info.description}</p>
                      <Badge className={info.color}>
                        {category}
                      </Badge>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          )}

          {/* Selected Category Products */}
          {selectedCategory && (
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  {categoryInfo[selectedCategory as keyof typeof categoryInfo]?.icon}
                  {categoryInfo[selectedCategory as keyof typeof categoryInfo]?.title || selectedCategory}
                </CardTitle>
                <p className="text-muted-foreground">
                  {categoryInfo[selectedCategory as keyof typeof categoryInfo]?.description}
                </p>
              </CardHeader>
              <CardContent>
                {productsLoading ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {Array.from({ length: 4 }).map((_, index) => (
                      <div key={index} className="space-y-3">
                        <Skeleton className="aspect-square w-full rounded-lg" />
                        <Skeleton className="h-4 w-3/4" />
                        <Skeleton className="h-4 w-1/2" />
                      </div>
                    ))}
                  </div>
                ) : products.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {products.map((product) => (
                      <Card key={product.id} className="group hover:shadow-lg transition-all duration-300">
                        <CardContent className="p-0">
                          <div className="aspect-square overflow-hidden rounded-t-lg">
                            <img
                              src={product.image}
                              alt={product.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                              onError={(e) => {
                                e.currentTarget.src = '/placeholder.svg';
                              }}
                            />
                          </div>
                          <div className="p-4">
                            <h4 className="font-semibold text-sm line-clamp-2 mb-2">{product.title}</h4>
                            <p className="text-lg font-bold text-primary">${product.price.toFixed(2)}</p>
                            <div className="flex items-center space-x-1 mt-1">
                              <span className="text-yellow-400">★</span>
                              <span className="text-sm text-muted-foreground">
                                {product.rating.rate} ({product.rating.count})
                              </span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <p className="text-muted-foreground">No products found in this category.</p>
                  </div>
                )}
                <div className="text-center mt-6">
                  <Button asChild>
                    <a href={`/products?category=${selectedCategory}`}>
                      View All {categoryInfo[selectedCategory as keyof typeof categoryInfo]?.title || selectedCategory}
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Category Statistics */}
          <Card className="bg-accent/20">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold mb-6 text-center">Category Overview</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">{categories.length}</div>
                  <p className="text-muted-foreground">Total Categories</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">500+</div>
                  <p className="text-muted-foreground">Products Available</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                  <p className="text-muted-foreground">Customer Support</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Categories;
