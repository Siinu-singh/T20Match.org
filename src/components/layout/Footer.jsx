
import Link from 'next/link';
import { SiteLogo } from "@/components/icons";
import { Github, Linkedin, Twitter } from 'lucide-react';

const footerLinks = {
  explore: [
    { href: "/matches", label: "Matches" },
    { href: "/players", label: "Players" },
    { href: "/news", label: "News" },
    { href: "/sitemap.xml", label: "Sitemap" },
  ],
  company: [
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
    { href: "/terms", label: "Terms of Service" },
    { href: "/privacy-policy", label: "Privacy Policy" },
  ],
};

const socialLinks = [
  { href: "#", icon: Twitter, label: "Twitter" },
  { href: "#", icon: Github, label: "GitHub" },
  { href: "#", icon: Linkedin, label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer className="bg-card/95 backdrop-blur-sm border-t mt-auto text-card-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          <div className="md:col-span-4 flex flex-col justify-between">
            <div>
              <Link href="/" className="mb-4 inline-block" aria-label="T20Match Homepage">
                <SiteLogo />
              </Link>
              <p className="text-sm text-muted-foreground max-w-xs">
                Your ultimate companion for live T20 cricket scores, news, and in-depth analysis from around the globe.
              </p>
            </div>
             <div className="flex items-center gap-4 mt-8">
              {socialLinks.map((social) => (
                <Link key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                  <social.icon className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
                </Link>
              ))}
            </div>
          </div>
          
          <div className="md:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="md:col-start-3">
              <h3 className="text-sm font-semibold tracking-wider uppercase text-foreground mb-4">Explore</h3>
              <ul className="space-y-3">
                {footerLinks.explore.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold tracking-wider uppercase text-foreground mb-4">Company</h3>
              <ul className="space-y-3">
                 {footerLinks.company.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        <div className="mt-12 pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} T20Match.org. All Rights Reserved.</p>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            {/* Additional bottom links if needed */}
          </div>
        </div>

      </div>
    </footer>
  );
}
