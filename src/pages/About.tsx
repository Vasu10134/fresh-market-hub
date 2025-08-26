import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">About Fresh Market Hub</h1>
            <p className="text-xl text-muted-foreground">
              Connecting communities through fresh, quality produce
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Fresh Market Hub is dedicated to revolutionizing how people access and trade fresh produce. 
                  We connect local farmers, vendors, and consumers in a seamless digital marketplace that 
                  prioritizes quality, freshness, and community engagement.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To create a sustainable ecosystem where fresh produce is accessible to everyone, 
                  supporting local agriculture while providing consumers with the highest quality 
                  fruits and vegetables at fair prices.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-accent/20">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold mb-6 text-center">Technical Excellence</h2>
              <div className="bg-muted/50 p-6 rounded-lg border">
                <h3 className="font-semibold mb-4 text-primary">Fresh Market Hub</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Developed modular, reusable React components for product cards, user profiles, and trading workflows.</li>
                  <li>• Applied Tailwind CSS utility classes for responsive layouts.</li>
                  <li>• Tech Used: React, TypeScript, Tailwind CSS, Vite</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;