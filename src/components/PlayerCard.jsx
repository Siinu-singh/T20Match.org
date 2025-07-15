import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const PlayerCard = ({ player }) => {
  return (
    <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
      <CardHeader className="p-0 relative h-64">
        <Image
          src={player.image}
          alt={player.name}
          fill
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
          className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
          data-ai-hint={player.imageHint}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />
        <div className="absolute bottom-0 p-4">
          <CardTitle className="text-white text-2xl font-headline">{player.name}</CardTitle>
          <CardDescription className="text-primary font-semibold">{player.role}</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="p-4 space-y-4">
        <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
          {Object.entries(player.stats).map(([key, value]) => (
            <div key={key} className="flex justify-between items-center">
              <span className="text-muted-foreground">{key}</span>
              <span className="font-semibold text-foreground">{value}</span>
            </div>
          ))}
        </div>
        <p className="text-xs text-muted-foreground pt-2">
            <span className="font-bold text-foreground">{player.team}</span> | {player.country}
        </p>
        <Button asChild variant="outline" className="w-full">
            <Link href="#">
                View Profile <ArrowRight className="ml-2" />
            </Link>
        </Button>
      </CardContent>
    </Card>
  );
};
