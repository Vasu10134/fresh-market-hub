import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ShoppingCart } from "lucide-react";

interface ProductCardProps {
  image: string;
  name: string;
  price: string;
  description?: string;
}

const ProductCard = ({ image, name, price, description }: ProductCardProps) => {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card border-border">
      <CardContent className="p-0">
        <div className="aspect-square overflow-hidden rounded-t-lg bg-accent/20">
          <img 
            src={image} 
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-card-foreground mb-2">{name}</h3>
          {description && (
            <p className="text-sm text-muted-foreground mb-3">{description}</p>
          )}
          <div className="flex items-center justify-between">
            <span className="text-lg font-bold text-primary">{price}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button className="w-full group-hover:bg-primary-hover transition-colors">
          <ShoppingCart className="w-4 h-4 mr-2" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;