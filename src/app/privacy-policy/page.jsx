import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import PageHero from "@/components/PageHero";
import Link from "next/link";

export const metadata = {
  title: 'Privacy Policy | T.20Match | Your Data, Our Commitment',
  description: 'Read the T.20Match Privacy Policy to learn how we collect, use, and keep your personal information secure. Transparency and user privacy are our priority.',
  alternates: {
    canonical: '/privacy-policy',
  },
  openGraph: {
    title: 'Privacy Policy | T.20Match | Your Data, Our Commitment',
    description: 'Read the T.20Match Privacy Policy to learn how we collect, use, and keep your personal information secure.',
    url: '/privacy-policy',
  },
};

export default function PrivacyPolicyPage() {
    const lastUpdatedDate = new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

  return (
    <div className="space-y-8">
      <PageHero
        title="Privacy Policy"
        subtitle="Your Data, Our Commitment"
      />
      <div className="max-w-4xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle as="h1" className="font-headline text-3xl">Privacy Policy: T.20Match</CardTitle>
            <CardDescription>Last updated: {lastUpdatedDate}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 text-muted-foreground prose prose-slate dark:prose-invert max-w-none">
            <p>At T.20Match, we believe in safeguarding your privacy and being open about how we collect, store, and use your personal data. In this Privacy Policy, we describe what data we gather, why we gather it, what we do with it, and the control you have as a user of our site.</p>
            <p>By using T.20Match, you are agreeing to the conditions described in this Privacy Policy.</p>

            <h2 className="font-headline text-xl font-semibold text-foreground pt-4">Information We Collect</h2>
            <p>When you utilize T.20Match, we might gather some information types, such as:</p>
            <ol className="list-decimal pl-6 space-y-2">
                <li>
                    <h3 className="font-semibold text-foreground inline">Personal Information:</h3>
                    <p className="inline"> When you reach out to us, sign up for alerts, or leave feedback, we might gather your name, email address, and other details you share voluntarily.</p>
                </li>
                <li>
                    <h3 className="font-semibold text-foreground inline">Usage Data:</h3>
                    <p className="inline"> We might gather data about how you use our website, e.g., pages visited, duration spent, device type, browser type, and IP address. This assists us in enhancing your experience.</p>
                </li>
                <li>
                    <h3 className="font-semibold text-foreground inline">Cookies and Tracking Technologies:</h3>
                    <p className="inline"> We utilize cookies and other similar tools to improve the user experience, remember preferences, and to analyze traffic on our websites. You can regulate your cookie preferences at any time in your browser.</p>
                </li>
            </ol>
            
            <h2 className="font-headline text-xl font-semibold text-foreground pt-4">How We Use Your Information</h2>
            <p>T.20Match utilizes your information for the following reasons: To deliver live sports content and personalized functionality, To deliver messages or updates you have chosen to receive, To communicate with you regarding your inquiries and support requests, For the purposes of improving our website performance and functionality, For tracking usage of our websites and data analytics, Compliance with legal requirements where such is necessary. We do not rent, trade, or sell your personal data to third parties for marketing purposes.</p>

            <h2 className="font-headline text-xl font-semibold text-foreground pt-4">Data Security</h2>
            <p>We take the protection of your information seriously. T.20Match uses secure servers, encryption protocols, and access control measures to safeguard your personal data. However, please note that no method of data transmission over the internet is 100% secure, and we cannot guarantee absolute security.</p>

            <h2 className="font-headline text-xl font-semibold text-foreground pt-4">Sharing of Information</h2>
            <p>We may share limited data with third-party service providers who assist us in website maintenance, analytics, or communication services. These third parties are contractually obligated to keep your information confidential and use it solely for the purposes defined by T.20Match.</p>
            <p>We may also disclose your information if required by law or in response to valid legal requests.</p>

            <h2 className="font-headline text-xl font-semibold text-foreground pt-4">Your Choices & Control</h2>
            <p>You have full control over your personal information and preferences: You can unsubscribe from email alerts or notices at any time. You can delete or control cookies using your browser settings. You can contact us to ask for, modify, or erase your personal information. To submit a request regarding your data, email: <Link href="mailto:privacy@T20Match.com" className="text-primary hover:underline">privacy@T20Match.com</Link></p>

            <h2 className="font-headline text-xl font-semibold text-foreground pt-4">Children's Privacy</h2>
            <p>T.20Match is not intended for children under the age of 13. We do not knowingly collect information from anyone under 13 years of age. If we become aware that we have collected information from a child without their parents' knowledge, we will take steps to remove it as quickly as possible.</p>

            <h2 className="font-headline text-xl font-semibold text-foreground pt-4">International Users</h2>
            <p>Using T.20Match from a location outside India, you agree that your data can be processed and stored in India where we have our servers, and the data protection laws in India could be different from your home jurisdiction.</p>
            
            <h2 className="font-headline text-xl font-semibold text-foreground pt-4">Changes to This Privacy Policy</h2>
            <p>T.20Match will update this Privacy Policy from time to time to comply with changes in our services, laws, or user feedback. The updates will be published on this page by modifying the T.20Match.com. We suggest checking back on this policy periodically to stay updated on how your information is treated.</p>
            
            <h2 className="font-headline text-xl font-semibold text-foreground pt-4">Contact Us</h2>
            <p>We encourage you to contact us if you have questions, concerns, or comments regarding this Privacy Policy or our practices relating to data: Email: <Link href="mailto:privacy@T20Match.com" className="text-primary hover:underline">privacy@T20Match.com</Link></p>
            <p>We appreciate your trust in T.20Match. We respect your privacy and are committed to protecting it throughout.</p>

          </CardContent>
        </Card>
      </div>
    </div>
  );
}
