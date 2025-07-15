import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import PageHero from "@/components/PageHero";
import Link from "next/link";

export const metadata = {
  title: 'Terms and Conditions | T.20Match | Usage Rules & Legal Information',
  description: 'Read the Terms and Conditions for the use of T.20Match. Understand user rights, obligations, use of content, disclaimers, and platform policies.',
  alternates: {
    canonical: '/terms',
  },
   openGraph: {
    title: 'Terms and Conditions | T.20Match | Usage Rules & Legal Information',
    description: 'Read the Terms and Conditions for the use of T.20Match.',
    url: '/terms',
  },
};

export default function TermsPage() {
  const lastUpdatedDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="space-y-8">
       <PageHero 
        title="Terms & Conditions"
        subtitle="Understand our policies and terms of service."
      />
      <div className="max-w-4xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle as="h1" className="font-headline text-3xl">Terms and Conditions: T.20Match</CardTitle>
            <CardDescription>Last updated: {lastUpdatedDate}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 text-muted-foreground prose prose-slate dark:prose-invert max-w-none">
              <p>Welcome to T.20Match, owned and operated by T.20Match Sports Media. The Terms and Conditions below apply to your use of our website, including all content, services, and features provided on or through T.20Match.</p>
              <p>By visiting or using this website, you accept these terms. If you do not accept any of the terms, please do not use the website.</p>

              <div>
                <h2 className="font-headline text-xl font-semibold text-foreground mb-2">1. Acceptance of Terms</h2>
                <p>By accessing T.20Match, you acknowledge that you are over 13 years of age and can legally enter into contracts. You also undertake to adhere to all laws and regulations governing your use of this site.</p>
              </div>

              <div>
                <h2 className="font-headline text-xl font-semibold text-foreground mb-2">2. Use of Content</h2>
                <p>All material on T.20Match, including scores, statistics, news stories, logos, videos, and graphics, is owned by T.20Match or its content partners. You may use the site for personal, noncommercial purposes only.</p>
                <p>You are not allowed to:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Reproduce, redistribute, or republish material without written approval.</li>
                  <li>Use data mining, robots, or other similar tools to extract information.</li>
                  <li>Modify or mislead any portion of the site.</li>
                </ul>
                <p>All rights not specifically granted are reserved.</p>
              </div>

              <div>
                <h2 className="font-headline text-xl font-semibold text-foreground mb-2">3. Live Scores and Updates</h2>
                <p>Live scores and updates of different T20 cricket tournaments and matches are offered by T.20Match. Though we aim to be 100% accurate and realtime, we don't ensure that data shown is free from errors, not interrupted, or entirely uptodate at every moment.</p>
                <p>Discrepancies caused by the delay in feeds or the limitations of thirdparty services are not our responsibility.</p>
              </div>

              <div>
                <h2 className="font-headline text-xl font-semibold text-foreground mb-2">4. User Data and Privacy</h2>
                <p>Your use of T.20Match is also subject to our Privacy Policy, which explains how we collect, use, and protect personal information. Your use of this site indicates acceptance of our data practices as described in the Privacy Policy.</p>
              </div>

              <div>
                <h2 className="font-headline text-xl font-semibold text-foreground mb-2">5. Third Party Links and Services</h2>
                <p>T.20Match can contain links to other websites or show information from other sources for convenience. We are not responsible for these sites or their content, services, and privacy policies.</p>
                <p>Accessing thirdparty links is at your own risk, and we suggest users read the terms and thirdparty site privacy policies before accessing these sites.</p>
              </div>

              <div>
                <h2 className="font-headline text-xl font-semibold text-foreground mb-2">6. Disclaimers and Limitation of Liability</h2>
                <p>All information on T.20Match is presented "as is" and "as available" with no express or implied warranties. We do not guarantee the reliance, availability, or accuracy of the information presented.</p>
                <p>T.20Match will not be responsible for:</p>
                <ul className="list-disc pl-6 space-y-1">
                    <li>Any direct or indirect damage caused by use or inability to use the site.</li>
                    <li>Technical faults or data inaccuracies.</li>
                    <li>Losses due to the use of content from the website.</li>
                </ul>
                <p>Use the site at your own risk and discretion.</p>
              </div>

              <div>
                <h2 className="font-headline text-xl font-semibold text-foreground mb-2">7. Termination of Access</h2>
                <p>We can terminate, block, or suspend your access to T.20Match at any time, with or without notice, if we find that you have broken these Terms or exhibited conduct that is not in the best interests of the site or its users.</p>
              </div>
              
              <div>
                <h2 className="font-headline text-xl font-semibold text-foreground mb-2">8. Modifications to Terms</h2>
                <p>T.20Match can change these Terms and Conditions at any time. Updates will be published on this page with a new effective date. Use of the site after such updates constitutes your agreement to the new terms.</p>
                <p>We invite users to visit this page from time to time to remain informed.</p>
              </div>

              <div>
                <h2 className="font-headline text-xl font-semibold text-foreground mb-2">9. Governing Law</h2>
                <p>These Terms shall be construed in accordance with and governed by the laws of India. Disputes arising out of or in connection with use of this website shall be subject to exclusive jurisdiction of courts within Noida, Uttar Pradesh.</p>
              </div>

               <div>
                <h2 className="font-headline text-xl font-semibold text-foreground mb-2">Contact Us</h2>
                <p>In case you have queries or concerns regarding these Terms and Conditions, you are welcome to contact us: Email: <Link href="mailto:legal@T20Match.com" className="text-primary hover:underline">legal@T20Match.com</Link>. We appreciate your involvement with the T.20Match community. We are dedicated to providing you with the highest quality T20 cricket experience in a fair and transparent way.</p>
              </div>

          </CardContent>
        </Card>
      </div>
    </div>
  );
}
