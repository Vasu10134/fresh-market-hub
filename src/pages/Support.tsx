import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const Support = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Support Center</h1>
            <p className="text-xl text-muted-foreground">
              Get help with your Fresh Market Hub experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardHeader>
                <CardTitle>Submit a Support Ticket</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="support-email">Email</Label>
                  <Input id="support-email" type="email" placeholder="your@email.com" />
                </div>
                <div>
                  <Label htmlFor="support-subject">Subject</Label>
                  <Input id="support-subject" placeholder="What can we help you with?" />
                </div>
                <div>
                  <Label htmlFor="support-message">Message</Label>
                  <Textarea id="support-message" placeholder="Describe your issue..." className="min-h-32" />
                </div>
                <Button className="w-full">Submit Ticket</Button>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">📞 Phone Support</h3>
                  <p className="text-muted-foreground">
                    +1 (555) 123-4567<br />
                    Monday - Friday: 8AM - 6PM
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">✉️ Email Support</h3>
                  <p className="text-muted-foreground">
                    support@freshmarkethub.com<br />
                    We respond within 24 hours
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">💬 Live Chat</h3>
                  <p className="text-muted-foreground">
                    Available 24/7<br />
                    Click the chat icon in the bottom right
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <Card className="bg-accent/20">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold mb-6 text-center">Common Issues</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-2">Account Issues</h3>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Forgot password</li>
                    <li>• Account locked</li>
                    <li>• Profile updates</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Technical Issues</h3>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• App not loading</li>
                    <li>• Payment problems</li>
                    <li>• Mobile app issues</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Support;
