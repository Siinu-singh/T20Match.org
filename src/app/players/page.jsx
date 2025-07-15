"use client";

import { useState } from "react";
import { PlayerCard } from "@/components/PlayerCard";
import players from "@/data/players.json";
import PageHero from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

// Note: This page does not have server-side metadata because it uses client-side rendering.
// To add metadata, this would need to be refactored to use a Server Component wrapper.
export default function PlayersPage() {
  const [visiblePlayers, setVisiblePlayers] = useState(8);
  const { toast } = useToast();

  const loadMorePlayers = () => {
    if (visiblePlayers < players.length) {
      setVisiblePlayers((prevVisiblePlayers) => prevVisiblePlayers + 4);
    } else {
      toast({
        title: "All Players Loaded",
        description: "You've reached the end of the player list.",
      });
    }
  };

  return (
    <div className="space-y-8">
      <PageHero
        title="Players"
        subtitle="Meet the heroes of T20 cricket across all formats."
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {players.slice(0, visiblePlayers).map((player) => (
          <PlayerCard key={player.id} player={player} />
        ))}
      </div>

      <div className="text-center mt-8">
        <Button onClick={loadMorePlayers} size="lg">
          Load More Players
        </Button>
      </div>
    </div>
  );
}