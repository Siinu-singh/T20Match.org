import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "How accurate are the live scores on T20Match.org?",
    answer: "Our live scores are updated in near real-time, sourced from highly reliable data providers. We strive to provide the fastest and most accurate ball-by-ball updates to keep you at the heart of the action."
  },
  {
    question: "Can I view match schedules for upcoming tournaments?",
    answer: "Yes! Our 'Fixtures' section provides comprehensive schedules for all major T20 leagues and international tournaments. You can find dates, times, and venue information for all upcoming matches."
  },
  {
    question: "Is T20Match.org free to use?",
    answer: "Absolutely. Our platform is completely free for all users. Our mission is to provide a high-quality, accessible cricket experience for fans everywhere, without any subscription fees."
  },
  {
    question: "Do you provide detailed player statistics?",
    answer: "Yes, we offer in-depth statistics for players. You can explore batting, bowling, and fielding records, as well as performance metrics in different match conditions to get a complete picture of a player's career."
  },
  {
    question: "On which devices can I access the website?",
    answer: "T20Match.org is fully responsive and designed to work seamlessly across all devices, including desktops, laptops, tablets, and smartphones. You can enjoy the same great experience no matter where you are."
  },
  {
    question: "How can I get in touch with your team?",
    answer: "We'd love to hear from you! You can reach out to us via the form on our 'Contact' page for any feedback, suggestions, or inquiries. We typically respond within 24-48 hours."
  },
  {
    question: "Do you have a mobile app?",
    answer: "Currently, we offer a fully-featured, mobile-responsive website. While a dedicated mobile app is on our roadmap for the future, our web experience provides all the functionality you need on any device."
  },
  {
    question: "How is my personal data protected?",
    answer: "We take your privacy seriously. The only personal data we collect is through our contact form, and it's used solely to respond to your inquiries. Please review our Privacy Policy, which will be linked in the footer, for more details."
  },
  {
    question: "Can I customize notifications for my favorite teams?",
    answer: "Personalized notifications are a feature we are actively developing and plan to release in a future update. Our goal is to allow you to follow your favorite teams and players and receive alerts for key match events."
  },
  {
    question: "Where can I find information about your terms of service?",
    answer: "Our Terms and Conditions are available via a link in the footer of every page. We encourage you to read them to understand the guidelines for using our website."
  }
];

export default function FaqSection() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="font-headline text-3xl font-bold mb-8 text-center">
          Frequently Asked Questions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
          <Accordion type="single" collapsible className="w-full">
            {faqs.slice(0, 5).map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <Accordion type="single" collapsible className="w-full">
            {faqs.slice(5, 10).map((faq, index) => (
              <AccordionItem key={index + 5} value={`item-${index + 5}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
