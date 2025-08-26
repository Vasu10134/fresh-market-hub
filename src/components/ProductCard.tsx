import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

interface ProductCardProps {
  image: string;
  name: string;
  price: string;
}

export const ProductCard = ({ image, name, price }: ProductCardProps) => {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 border-muted">
      <CardContent className="p-0">
        <div className="aspect-square overflow-hidden rounded-t-lg">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      </CardContent>
      <CardFooter className="p-4 space-y-3">
        <div className="w-full">
          <h3 className="font-semibold text-lg">{name}</h3>
          <p className="text-2xl font-bold text-primary">{price}</p>
          <Button className="w-full mt-3 bg-primary hover:bg-primary/90">
            Add to Cart
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};