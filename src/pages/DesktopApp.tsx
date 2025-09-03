import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const DesktopApp = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Desktop App</h1>
            <p className="text-xl text-muted-foreground">
              Download Fresh Market Hub for your desktop
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardHeader>
                <CardTitle>Windows App</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="w-32 h-32 bg-gray-200 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <span className="text-4xl">🪟</span>
                </div>
                <p className="text-muted-foreground mb-4">
                  Download our Windows desktop application
                </p>
                <Button className="w-full">Download for Windows</Button>
                <p className="text-xs text-muted-foreground mt-2">
                  Windows 10 or later (64-bit)
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>macOS App</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="w-32 h-32 bg-gray-200 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <span className="text-4xl">🍎</span>
                </div>
                <p className="text-muted-foreground mb-4">
                  Download our macOS desktop application
                </p>
                <Button className="w-full">Download for macOS</Button>
                <p className="text-xs text-muted-foreground mt-2">
                  macOS 11.0 or later
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-accent/20">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold mb-6 text-center">Desktop App Benefits</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-4">Performance</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Faster loading times</li>
                    <li>• Offline browsing capability</li>
                    <li>• Native desktop notifications</li>
                    <li>• Better resource management</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-4">Features</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Keyboard shortcuts</li>
                    <li>• Drag and drop functionality</li>
                    <li>• System tray integration</li>
                    <li>• Auto-updates</li>
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

export default DesktopApp;
