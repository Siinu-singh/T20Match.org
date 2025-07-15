import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import PageHero from "@/components/PageHero";

export const metadata = {
  title: 'About Us T.20Match | Your Perfect T20 Cricket Partner',
  description: 'Explore T.20Match, the rapidly growing center point for T20 cricket fans. Live score, expert commentary, match statistics & live coverage of international T20 leagues.',
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About Us T.20Match | Your Perfect T20 Cricket Partner',
    description: 'Explore T.20Match, the rapidly growing center point for T20 cricket fans.',
    url: '/about',
  },
};

export default function AboutPage() {
  return (
    <div className="space-y-8">
      <PageHero
        title="About Us"
        subtitle="Welcome to T20 Cricket World"
      />
      <div className="max-w-4xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle as="h1" className="font-headline text-3xl">We breathe and live T20 cricket</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 text-muted-foreground prose prose-slate dark:prose-invert max-w-none">
            <p>At T.20Match, we've embraced the innovation that has redefined how the world watches the sport. Designed for die-hards who live for live action, statistics, and stories, T.20Match is a complete cricket experience crafted from the anguish, suspense, and drama of Twenty20. Whether you’re following an intense IPL final, a last-over thriller in the Big Bash, or an emerging talent in a regional league, T.20Match brings the action straight to you—fast, reliable, and complete.</p>
            
            <h2 className="font-headline text-2xl font-semibold text-foreground pt-4">Our Mission</h2>
            <p>Our mission is straightforward: to provide the most thorough, minute-by-minute, and fan-driven coverage of T20 cricket worldwide. We hope to be the web home to the tens of millions of cricket fans wanting to watch matches, review players, monitor teams, and not miss a moment from the sport they love. We are here to link you with all the supporters around the world, every wicket, each boundary, each twist of the game—because time is of the essence in T20.</p>
            
            <h2 className="font-headline text-2xl font-semibold text-foreground pt-4">What We Have to Offer</h2>
            <p>Live coverage of live scores, ball-by-ball commentary, pre-match analysis, post-match analysis, and in-depth statistical analysis. But we do not just stop at the scoreboard. Our reporters deliver to you: Breaking transfer news and updates, Performance analysis of players, Fantasy league guidance, Tournament schedules and live standing, Summaries and video highlights. From global competitions such as the ICC T20 World Cup to domestic leagues like PSL, BBL, and CPL, all bases are covered by us with the same level of enthusiasm and depth of coverage.</p>

            <h2 className="font-headline text-2xl font-semibold text-foreground pt-4">Built for Today's Fans</h2>
            <p>T20 cricket is fast, nimble, and so is today's fan. We've designed T.20Match to be fast, mobile-friendly, and easy to use. Whether you're checking your phone at lunch or streaming action on a laptop at home, our site keeps you in the action of every run, wicket, and turning point without interruption and without confusion. With personalized notifications, tracking of your favourite teams, and the ability to dig deep into analytics, all within a clean, intuitive design.</p>

            <h2 className="font-headline text-2xl font-semibold text-foreground pt-4">The Team behind the Platform</h2>
            <p>T.20Match is driven by a passionate team of cricket authors, data analysts, software developers, and sports media experts. Our team merges technology with cricket consciousness to provide users with a smooth experience. We continually advance with user input from cricket enthusiasts such as yourselves, and we aim to bring new features and better coverage with each season. We're not only professionals—just as importantly, we're fans. That's what compels us to create something worthy of your time.</p>

            <h2 className="font-headline text-2xl font-semibold text-foreground pt-4">Be Part of the T.20Match Community</h2>
            <p>T.20Match is the home of tens of thousands of cricket fans across the globe. Join a growing cricket fan community, support your teams, engage with match content, and share your passion with the cricket community. If you would like to be a part of this, partner with us, or just want to talk to us with any ideas or comments, we want to hear from you. This is not just a site you are visiting; you are part of a movement—the excitement of the shortest, fastest form of the game that cricket has to offer.</p>
            
            <blockquote className="border-l-4 border-primary pl-4 italic">
              <h3 className="font-headline text-xl font-semibold text-foreground mb-2">T.20Match: Every Ball has a Story</h3>
              <p>T20 cricket has changed the game, and with T.20Match, we are about to change the experience for cricket fans. With every match, every moment, every milestone we aim to bring the best of cricket to life in its most exhilarating form. Thank you for choosing T.20Match as your cricket buddy of choice. We are just beginning and the best is yet to come.</p>
            </blockquote>

          </CardContent>
        </Card>
      </div>
    </div>
  );
}
