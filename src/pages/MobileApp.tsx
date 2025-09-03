import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const MobileApp = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Mobile App</h1>
            <p className="text-xl text-muted-foreground">
              Download Fresh Market Hub on your mobile device
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardHeader>
                <CardTitle>iOS App</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="w-32 h-32 bg-gray-200 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <span className="text-4xl">📱</span>
                </div>
                <p className="text-muted-foreground mb-4">
                  Download our iOS app from the App Store
                </p>
                <Button className="w-full">Download for iOS</Button>
                <p className="text-xs text-muted-foreground mt-2">
                  Requires iOS 14.0 or later
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Android App</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="w-32 h-32 bg-gray-200 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <span className="text-4xl">🤖</span>
                </div>
                <p className="text-muted-foreground mb-4">
                  Download our Android app from Google Play
                </p>
                <Button className="w-full">Download for Android</Button>
                <p className="text-xs text-muted-foreground mt-2">
                  Requires Android 8.0 or later
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-accent/20">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold mb-6 text-center">App Features</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-4">Core Features</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Browse fresh products</li>
                    <li>• Easy ordering and checkout</li>
                    <li>• Real-time order tracking</li>
                    <li>• Push notifications</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-4">Advanced Features</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Barcode scanning</li>
                    <li>• Wishlist and favorites</li>
                    <li>• Loyalty rewards</li>
                    <li>• Social sharing</li>
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

export default MobileApp;
