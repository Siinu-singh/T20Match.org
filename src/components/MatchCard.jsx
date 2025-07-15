import Link from "next/link";
import Image from "next/image";
import { format } from "date-fns";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin } from "lucide-react";

export const MatchCard = ({ match }) => {
  const isLive = match.status === 'LIVE';
  const isUpcoming = match.status === 'UPCOMING';
  const isCompleted = match.status === 'COMPLETED';

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col">
      <CardHeader className="p-0">
        <div className="relative h-48 w-full">
          <Image 
            src={match.image} 
            alt={match.matchTitle} 
            fill 
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover" 
            data-ai-hint={match.imageHint} 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
          <div className="absolute top-4 left-4">
             {isLive && <Badge variant="destructive" className="animate-pulse">LIVE</Badge>}
             {isUpcoming && <Badge variant="secondary">UPCOMING</Badge>}
             {isCompleted && <Badge>COMPLETED</Badge>}
          </div>
          <div className="absolute bottom-4 left-4 right-4">
            <h3 className="text-lg font-bold text-white mt-1">{match.matchTitle}</h3>
            <p className="text-xs text-white/80">{match.tournament}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-4 flex-grow flex flex-col">
        {isLive && (
          <div className="grid grid-cols-2 gap-4 text-center">
            <div>
              <h4 className="font-bold text-base">{match.teamA.name}</h4>
              <p className="font-headline text-2xl text-primary mt-1">{match.teamA.score}</p>
              <p className="text-muted-foreground text-xs">{match.teamA.overs}</p>
            </div>
            <div>
              <h4 className="font-bold text-base">{match.teamB.name}</h4>
              <p className="font-headline text-2xl mt-1">{match.teamB.score}</p>
              <p className="text-muted-foreground text-xs">{match.teamB.overs}</p>
            </div>
          </div>
        )}
        {!isLive && (
           <div className="text-center">
            <h4 className="font-bold text-lg">{match.teamA.name}</h4>
            <p className="text-muted-foreground font-bold text-lg">vs</p>
            <h4 className="font-bold text-lg">{match.teamB.name}</h4>
          </div>
        )}
        <div className="text-center text-sm text-accent-foreground/80 mt-2 font-medium flex-grow space-y-2">
            {isLive && <p>{match.statusText}</p>}
            {isUpcoming && (
              <div className="text-muted-foreground text-xs space-y-1">
                 <p className="flex items-center justify-center gap-2"><Calendar size={14}/> {format(new Date(match.matchTime), "PPP p")}</p>
                 <p className="flex items-center justify-center gap-2"><MapPin size={14}/>{match.venue}</p>
              </div>
            )}
             {isCompleted && <p className="font-bold text-base">{match.result}</p>}
        </div>
        <Button asChild className="w-full mt-4" variant={isLive ? "default" : "outline"}>
          <Link href="#">{isLive ? 'Live Match Center' : 'View Match Details'}</Link>
        </Button>
      </CardContent>
    </Card>
  );
};
