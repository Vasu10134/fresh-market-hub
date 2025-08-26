import { Card, CardContent } from "@/components/ui/card";

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

export const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <Card className="text-center hover:shadow-md transition-shadow border-muted">
      <CardContent className="p-8">
        <div className="text-5xl mb-4">{icon}</div>
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  );
};