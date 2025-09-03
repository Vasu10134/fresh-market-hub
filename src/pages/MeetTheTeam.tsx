import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const MeetTheTeam = () => {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      image: "/api/placeholder/200/200",
      description: "Passionate about connecting communities through fresh produce. 10+ years in agricultural technology."
    },
    {
      name: "Michael Chen",
      role: "CTO",
      image: "/api/placeholder/200/200",
      description: "Tech visionary leading our platform development. Expert in scalable e-commerce solutions."
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Operations",
      image: "/api/placeholder/200/200",
      description: "Ensures smooth operations and quality control. Background in supply chain management."
    },
    {
      name: "David Kim",
      role: "Head of Marketing",
      image: "/api/placeholder/200/200",
      description: "Drives our mission to reach more communities. Expert in digital marketing and brand strategy."
    },
    {
      name: "Lisa Thompson",
      role: "Head of Customer Success",
      image: "/api/placeholder/200/200",
      description: "Dedicated to ensuring every customer has an amazing experience with Fresh Market Hub."
    },
    {
      name: "James Wilson",
      role: "Lead Developer",
      image: "/api/placeholder/200/200",
      description: "Builds the technology that powers our platform. Full-stack developer with a passion for innovation."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Meet Our Team</h1>
            <p className="text-xl text-muted-foreground">
              The passionate people behind Fresh Market Hub
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <Avatar className="w-24 h-24 mx-auto mb-4">
                    <AvatarImage src={member.image} alt={member.name} />
                    <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-accent/20">
            <CardContent className="p-8">
              <div className="text-center">
                <h2 className="text-2xl font-semibold mb-4">Join Our Team</h2>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  We're always looking for passionate individuals who share our vision of connecting 
                  communities through fresh produce. Join us in revolutionizing the way people access 
                  and trade fresh food.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button>View Open Positions</Button>
                  <Button variant="outline">Contact HR</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default MeetTheTeam;
