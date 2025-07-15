import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import HeroSection from "@/components/HeroSection";
import FaqSection from "@/components/FaqSection";
import FeaturesSection from "@/components/FeaturesSection";
import matchesData from "@/data/matches.json";

export const metadata = {
  alternates: {
    canonical: '/',
  },
};

const LiveMatchCard = ({ match }) => (
  <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col">
    <CardHeader className="p-0">
      <div className="relative h-48 w-full">
        <Image 
          src={match.image} 
          alt={match.matchTitle || "Cricket stadium"} 
          fill 
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover" 
          data-ai-hint={match.imageHint} 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        <div className="absolute top-4 left-4">
          <Badge variant="destructive" className="animate-pulse">LIVE</Badge>
        </div>
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-lg font-bold text-white mt-1">{match.matchTitle}</h3>
        </div>
      </div>
    </CardHeader>
    <CardContent className="p-6 flex-grow flex flex-col">
      <div className="grid grid-cols-2 gap-4 text-center">
        <div>
          <h4 className="font-bold text-lg">{match.teamA.name}</h4>
          <p className="font-headline text-3xl text-primary mt-1">{match.teamA.score}</p>
          <p className="text-muted-foreground text-sm">{match.teamA.overs}</p>
        </div>
        <div>
          <h4 className="font-bold text-lg">{match.teamB.name}</h4>
          <p className="font-headline text-3xl mt-1">{match.teamB.score}</p>
          <p className="text-muted-foreground text-sm">{match.teamB.overs}</p>
        </div>
      </div>
      <p className="text-center text-sm text-accent-foreground/80 mt-4 font-medium flex-grow">{match.statusText}</p>
      <Button asChild className="w-full mt-6" variant="outline">
        <Link href="/matches">Match Center</Link>
      </Button>
    </CardContent>
  </Card>
);


export default function Home() {
  const liveMatches = matchesData.filter(match => match.status === 'LIVE').slice(0, 3);

  return (
    <div className="space-y-12">
      <HeroSection />

      <section className="py-8">
        <h2 className="font-headline text-3xl font-bold mb-6 text-center">Live Matches</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {liveMatches.length > 0 ? (
            liveMatches.map((match) => (
              <LiveMatchCard key={match.id} match={match} />
            ))
          ) : (
            <p className="text-center col-span-full">No live matches currently.</p>
          )}
        </div>
      </section>

      <FeaturesSection />
      
      <FaqSection />
    </div>
  );
}
