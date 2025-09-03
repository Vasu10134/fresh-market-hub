import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQs = () => {
  const faqs = [
    {
      question: "How do I create an account on Fresh Market Hub?",
      answer: "You can create an account by clicking the 'Sign Up' button in the top navigation. You can sign up using your email address or through Google authentication for a faster process."
    },
    {
      question: "What types of products can I find on Fresh Market Hub?",
      answer: "Fresh Market Hub offers a wide variety of fresh produce including fruits, vegetables, organic products, and locally-sourced items from trusted farmers and vendors."
    },
    {
      question: "How do I place an order?",
      answer: "Browse our products, add items to your cart, and proceed to checkout. You can pay securely using various payment methods including credit cards, PayPal, and digital wallets."
    },
    {
      question: "What are your delivery options?",
      answer: "We offer same-day delivery for local areas, next-day delivery for regional orders, and scheduled delivery for bulk purchases. Delivery fees vary by location and order size."
    },
    {
      question: "How can I track my order?",
      answer: "Once your order is confirmed, you'll receive a tracking number via email and SMS. You can track your order in real-time through our website or mobile app."
    },
    {
      question: "What is your return policy?",
      answer: "We offer a 7-day return policy for most products. Fresh produce can be returned within 24 hours if not satisfied with quality. Contact our support team to initiate a return."
    },
    {
      question: "Do you offer bulk discounts?",
      answer: "Yes, we offer volume discounts for bulk orders. Contact our sales team for custom pricing on large orders for restaurants, grocery stores, or events."
    },
    {
      question: "How do I contact customer support?",
      answer: "You can reach our support team through phone (+1 555-123-4567), email (support@freshmarkethub.com), or live chat available 24/7 on our website."
    },
    {
      question: "Is my payment information secure?",
      answer: "Yes, we use industry-standard encryption and secure payment processors to protect your financial information. We never store your complete payment details on our servers."
    },
    {
      question: "Do you have a mobile app?",
      answer: "Yes, our mobile app is available for both iOS and Android devices. You can download it from the App Store or Google Play Store for a better shopping experience."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
            <p className="text-xl text-muted-foreground">
              Find answers to common questions about Fresh Market Hub
            </p>
          </div>

          <Card>
            <CardContent className="p-8">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>

          <div className="text-center mt-12">
            <Card className="bg-accent/20">
              <CardContent className="p-8">
                <h2 className="text-2xl font-semibold mb-4">Still have questions?</h2>
                <p className="text-muted-foreground mb-6">
                  Can't find what you're looking for? Our support team is here to help.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="/contact" className="inline-block">
                    <button className="px-6 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90">
                      Contact Us
                    </button>
                  </a>
                  <a href="/support" className="inline-block">
                    <button className="px-6 py-2 border border-primary text-primary rounded-md hover:bg-primary/10">
                      Support Center
                    </button>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQs;
