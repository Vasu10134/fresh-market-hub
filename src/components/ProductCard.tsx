import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

interface ProductCardProps {
  id: number;
  image: string;
  title: string;
  price: number;
  category?: string;
  rating?: {
    rate: number;
    count: number;
  };
  description?: string;
}

export const ProductCard = ({ 
  id, 
  image, 
  title, 
  price, 
  category, 
  rating, 
  description 
}: ProductCardProps) => {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 border-muted">
      <CardContent className="p-0">
        <div className="aspect-square overflow-hidden rounded-t-lg relative">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            onError={(e) => {
              // Fallback image if the API image fails to load
              e.currentTarget.src = '/placeholder.svg';
            }}
          />
          {category && (
            <Badge 
              variant="secondary" 
              className="absolute top-2 left-2 bg-background/80 text-foreground"
            >
              {category}
            </Badge>
          )}
        </div>
      </CardContent>
      <CardFooter className="p-4 space-y-3">
        <div className="w-full">
          <h3 className="font-semibold text-lg line-clamp-2">{title}</h3>
          {rating && (
            <div className="flex items-center space-x-1 mt-1">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm text-muted-foreground">
                {rating.rate} ({rating.count})
              </span>
            </div>
          )}
          <p className="text-2xl font-bold text-primary">${price.toFixed(2)}</p>
          {description && (
            <p className="text-sm text-muted-foreground line-clamp-2 mt-2">
              {description}
            </p>
          )}
          <Button className="w-full mt-3 bg-primary hover:bg-primary/90">
            Add to Cart
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};