import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl text-muted-foreground">
              Get in touch with our team
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Send us a message</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Your name" />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="your@email.com" />
                </div>
                <div>
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="What's this about?" />
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Your message..." className="min-h-32" />
                </div>
                <Button className="w-full">Send Message</Button>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">📍 Address</h3>
                  <p className="text-muted-foreground">
                    123 Market Street<br />
                    Fresh District, FD 12345
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">📞 Phone</h3>
                  <p className="text-muted-foreground">
                    +1 (555) 123-4567
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">✉️ Email</h3>
                  <p className="text-muted-foreground">
                    hello@freshmarkethub.com
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">🕐 Business Hours</h3>
                  <p className="text-muted-foreground">
                    Monday - Friday: 8AM - 6PM<br />
                    Saturday: 9AM - 4PM<br />
                    Sunday: Closed
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;