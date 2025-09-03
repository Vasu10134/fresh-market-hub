import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Documentation = () => {
  const sections = [
    {
      title: "Getting Started",
      description: "Learn the basics of using Fresh Market Hub",
      items: [
        "Account Setup Guide",
        "First Order Tutorial",
        "Mobile App Installation",
        "Profile Configuration"
      ]
    },
    {
      title: "User Guide",
      description: "Comprehensive guides for all features",
      items: [
        "Browsing Products",
        "Placing Orders",
        "Payment Methods",
        "Order Tracking"
      ]
    },
    {
      title: "API Documentation",
      description: "For developers and integrations",
      items: [
        "API Authentication",
        "Product Endpoints",
        "Order Management",
        "Webhook Integration"
      ]
    },
    {
      title: "Troubleshooting",
      description: "Common issues and solutions",
      items: [
        "Login Problems",
        "Payment Issues",
        "Delivery Concerns",
        "App Crashes"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Documentation</h1>
            <p className="text-xl text-muted-foreground">
              Complete guides and resources for Fresh Market Hub
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {sections.map((section, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{section.title}</CardTitle>
                  <p className="text-muted-foreground">{section.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-4" variant="outline">
                    View {section.title}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-accent/20">
            <CardContent className="p-8">
              <div className="text-center">
                <h2 className="text-2xl font-semibold mb-4">Quick Links</h2>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <h3 className="font-semibold mb-2">📱 Mobile App</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Download our mobile app for iOS and Android
                    </p>
                    <Button variant="outline" size="sm">Download</Button>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">🎥 Video Tutorials</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Watch step-by-step video guides
                    </p>
                    <Button variant="outline" size="sm">Watch Now</Button>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">📞 Support</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Get help from our support team
                    </p>
                    <Button variant="outline" size="sm">Contact</Button>
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

export default Documentation;
