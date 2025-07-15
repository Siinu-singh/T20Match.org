"use client";

import { useState } from "react";
import { MatchCard } from "@/components/MatchCard";
import matches from "@/data/matches.json";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PageHero from "@/components/PageHero";
import { Button } from "@/components/ui/button";

// Note: This page does not have server-side metadata because it uses client-side rendering.
// For Next.js App Router, you'd typically define metadata in a server component.
// However, since this is a client component, we can't export a metadata object directly.
// In a real-world scenario, you might lift the state or use a server component wrapper.
// For now, we are omitting the metadata export here.
// To add metadata, you would convert this to a server component or a parent server component.

export default function MatchesPage() {
  const liveMatches = matches.filter((m) => m.status === "LIVE");
  const upcomingMatches = matches.filter((m) => m.status === "UPCOMING");
  const completedMatches = matches.filter((m) => m.status === "COMPLETED");

  const [currentPage, setCurrentPage] = useState({
    live: 1,
    upcoming: 1,
    completed: 1,
  });

  const matchesPerPage = 6;

  const renderPaginatedMatches = (matchesForTab, tabName) => {
    const page = currentPage[tabName];
    const indexOfLastMatch = page * matchesPerPage;
    const indexOfFirstMatch = indexOfLastMatch - matchesPerPage;
    const currentMatches = matchesForTab.slice(indexOfFirstMatch, indexOfLastMatch);
    const totalPages = Math.ceil(matchesForTab.length / matchesPerPage);

    const handleNextPage = () => {
      setCurrentPage((prev) => ({ ...prev, [tabName]: prev[tabName] + 1 }));
    };

    const handlePrevPage = () => {
      setCurrentPage((prev) => ({ ...prev, [tabName]: prev[tabName] - 1 }));
    };

    return (
      <div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 min-h-[450px]">
          {currentMatches.length > 0 ? (
            currentMatches.map((match) => (
              <MatchCard key={match.id} match={match} />
            ))
          ) : (
            <p className="text-center text-muted-foreground md:col-span-3 pt-10">
              No {tabName} matches currently.
            </p>
          )}
        </div>
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-4 mt-8">
            <Button onClick={handlePrevPage} disabled={page === 1} variant="outline">
              Previous
            </Button>
            <span className="text-sm font-medium text-muted-foreground">
              Page {page} of {totalPages}
            </span>
            <Button onClick={handleNextPage} disabled={page === totalPages} variant="outline">
              Next
            </Button>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="space-y-8">
      <PageHero
        title="Match Center"
        subtitle="Live scores, results & upcoming T20 fixtures."
      />

      <Tabs defaultValue="live" className="w-full">
        <TabsList className="grid w-full grid-cols-3 max-w-lg mx-auto">
          <TabsTrigger value="live">Live</TabsTrigger>
          <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
        </TabsList>
        <TabsContent value="live">
          {renderPaginatedMatches(liveMatches, 'live')}
        </TabsContent>
        <TabsContent value="upcoming">
          {renderPaginatedMatches(upcomingMatches, 'upcoming')}
        </TabsContent>
        <TabsContent value="completed">
          {renderPaginatedMatches(completedMatches, 'completed')}
        </TabsContent>
      </Tabs>
    </div>
  );
}