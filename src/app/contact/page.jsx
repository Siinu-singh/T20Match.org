import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import PageHero from "@/components/PageHero";
import { Mail, Briefcase, Code, Twitter, Github, Linkedin } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: 'Contact Us | T.20Match | Get in Touch with Our Cricket Coverage & Support Team',
  description: 'Questions or comments? Reach out to the T.20Match team for help, collaborations, or media requests. We are available 24/7 to support cricket enthusiasts.',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact Us | T.20Match | Get in Touch with Our Cricket Coverage & Support Team',
    description: 'Reach out to the T.20Match team for help, collaborations, or media requests.',
    url: '/contact',
  },
};

const contactMethods = [
  {
    icon: <Mail className="text-primary" />,
    title: "General Inquiries",
    description: "For general inquiries, website comments, or suggestions, you can send an email. We will try to get back to you within 24 to 48 hours.",
    email: "support@T20Match.com"
  },
  {
    icon: <Briefcase className="text-primary" />,
    title: "Business & Partnerships",
    description: "If you're a cricket brand, fantasy league site, sponsor, or media outlet looking to partner with T.20Match, we'd be glad to discuss collaboration possibilities.",
    email: "partnerships@T20Match.com"
  },
  {
    icon: <Code className="text-primary" />,
    title: "Technical Support",
    description: "Should you have any technical issues concerning live scores, match data, or site navigation, our technical support team is available to assist.",
    email: "tech@T20Match.com"
  },
];

const socialLinks = [
  { href: "#", icon: Twitter, label: "Twitter" },
  { href: "#", icon: Github, label: "GitHub" },
  { href: "#", icon: Linkedin, label: "LinkedIn" },
];

export default function ContactPage() {
  return (
    <div className="space-y-8">
      <PageHero
        title="Contact Us"
        subtitle="We're Here for Every Cricket Fan"
      />
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center">
            <h1 className="font-headline text-3xl font-bold">Get in Touch</h1>
            <p className="max-w-3xl mx-auto mt-2 text-muted-foreground">
              At T.20Match, we appreciate your input, questions, and suggestions. Even if you have an idea to make the platform better, need to report a problem, or are interested in media and partnership opportunities we'd love to hear from you. We are committed to building the world's best T20 cricket experience for cricket fans worldwide, and your feedback helps us grow and improve daily.
            </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {contactMethods.map((method) => (
            <Card key={method.title} className="text-center flex flex-col">
              <CardHeader className="items-center">
                <div className="p-3 bg-primary/10 rounded-full">{method.icon}</div>
                <CardTitle as="h2" className="font-headline text-xl mt-4">{method.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground text-sm mb-4">{method.description}</p>
                 <Button asChild variant="outline">
                    <Link href={`mailto:${method.email}`}>{method.email}</Link>
                 </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
            <h2 className="font-headline text-2xl font-bold">Join the T.20Match Community</h2>
            <p className="max-w-2xl mx-auto mt-2 text-muted-foreground">
                Want to be connected beyond mail? Follow us on social media for the latest, the best of, the poll of, and the cricket quotient:
            </p>
            <div className="flex justify-center items-center gap-6 mt-6">
              {socialLinks.map((social) => (
                <Link key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                  <social.icon className="w-6 h-6 text-muted-foreground hover:text-primary transition-colors" />
                </Link>
              ))}
            </div>
        </div>

        <div className="text-center text-muted-foreground p-6 rounded-lg bg-card/50">
            <h3 className="font-semibold text-foreground">Thank You for Reaching Out</h3>
            <p className="mt-2 text-sm">
                Even if you're an avid supporter or a newcomer, your voice is important. T.20Match is always changing, and we're here to make your cricket-viewing experience smarter, quicker, and more thrilling. Contact us anytime.
            </p>
        </div>

      </div>
    </div>
  );
}
