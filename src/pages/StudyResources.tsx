import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const StudyResources = () => {
  const resources = [
    {
      title: "Fresh Produce Guide",
      description: "Learn about different types of fresh fruits and vegetables",
      type: "PDF Guide",
      size: "2.5 MB"
    },
    {
      title: "Nutritional Information",
      description: "Comprehensive nutritional data for all our products",
      type: "Excel Spreadsheet",
      size: "1.8 MB"
    },
    {
      title: "Storage Tips",
      description: "Best practices for storing fresh produce",
      type: "PDF Guide",
      size: "1.2 MB"
    },
    {
      title: "Seasonal Calendar",
      description: "When to buy the freshest seasonal produce",
      type: "Interactive Calendar",
      size: "Web App"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Study Resources</h1>
            <p className="text-xl text-muted-foreground">
              Educational materials about fresh produce and healthy living
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {resources.map((resource, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{resource.title}</CardTitle>
                  <p className="text-muted-foreground">{resource.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm text-muted-foreground">{resource.type}</span>
                    <span className="text-sm text-muted-foreground">{resource.size}</span>
                  </div>
                  <Button className="w-full">Download</Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-accent/20">
            <CardContent className="p-8">
              <div className="text-center">
                <h2 className="text-2xl font-semibold mb-4">Educational Content</h2>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Access our comprehensive library of educational materials designed to help you 
                  make informed decisions about fresh produce and healthy eating.
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <h3 className="font-semibold mb-2">📚 Guides</h3>
                    <p className="text-sm text-muted-foreground">
                      Detailed guides on produce selection and preparation
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">📊 Data</h3>
                    <p className="text-sm text-muted-foreground">
                      Nutritional information and seasonal availability data
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">🎥 Videos</h3>
                    <p className="text-sm text-muted-foreground">
                      Video tutorials and cooking demonstrations
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default StudyResources;
