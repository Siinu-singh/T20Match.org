"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselPagination,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const carouselImages = [
  {
    src: "https://images.unsplash.com/photo-1709134800827-6075efb1be1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxjcmlja2V0JTIwcGxheWVycyUyMGFjdGlvbnxlbnwwfHx8fDE3NTI0ODA5Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Cricket players in action during a match",
    hint: "cricket players action",
  },
  {
    src: "https://images.unsplash.com/photo-1722661840554-568357f77b80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxjcmlja2V0JTIwc3RhZGl1bSUyMHN1bnNldHxlbnwwfHx8fDE3NTI0ODA5Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "A packed cricket stadium at sunset",
    hint: "cricket stadium sunset",
  },
  {
    src: "https://images.unsplash.com/photo-1624193822910-a73257ce9e44?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwYmF0c21hbnxlbnwwfHx8fDE3NTI0ODA5Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "A batsman playing a powerful shot",
    hint: "cricket batsman",
  },
  {
    src: "https://images.unsplash.com/photo-1709134800935-d00e89d5b8e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxjcmlja2V0JTIwYm93bGVyfGVufDB8fHx8fDE3NTI0ODA5Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "A bowler in the middle of their delivery stride",
    hint: "cricket bowler",
  },
  {
    src: "https://images.unsplash.com/photo-1624897174291-1bd715e371d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxjcmlja2V0JTIwZmFuc3xlbnwwfHx8fDE3NTI0ODA5Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Cricket fans cheering in the stands",
    hint: "cricket fans",
  },
];

export default function HeroSection() {

  return (
    <section className="w-full bg-card/80 backdrop-blur-sm">
      <div className="container mx-auto grid min-h-[550px] items-center gap-12 px-2 py-16 md:grid-cols-2 md:px-4 lg:gap-20">
        <div
          className="flex flex-col items-start space-y-6"
        >
          <h1
            className="font-headline text-4xl font-bold tracking-tighter text-foreground sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Experience T20 Cricket Live –{" "}
            <span className="text-primary">Every Ball Counts!</span>
          </h1>
          <p
            className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
          >
            Get real-time scores, upcoming fixtures, and team stats for every major T20 league – all in one place. Your ultimate destination for the thrill of the game.
          </p>
          <div
            className="flex flex-col gap-4 sm:flex-row"
          >
            <Button asChild size="lg">
              <Link href="/matches">
                View Live Scores
                <ArrowRight className="ml-2" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/matches">
                <Calendar className="mr-2" />
                Explore Fixtures
              </Link>
            </Button>
          </div>
        </div>
        <div
          className="relative flex w-full flex-col items-center justify-center"
        >
          <div className="absolute inset-0 bg-primary/20 -z-10 blur-3xl" />
           <Carousel 
            plugins={[Autoplay({ delay: 4000, stopOnInteraction: true })]}
            className="w-full max-w-2xl"
            opts={{
              loop: true,
            }}
          >
            <CarouselContent>
              {carouselImages.map((image, index) => (
                <CarouselItem key={index}>
                  <Card className="overflow-hidden shadow-none border-0 bg-transparent">
                    <CardContent className="p-0">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={600}
                        height={400}
                        className="rounded-xl object-cover aspect-[3/2] w-full"
                        data-ai-hint={image.hint}
                        priority={index === 0}
                        fetchPriority={index === 0 ? 'high' : 'auto'}
                        sizes="(max-width: 768px) 90vw, (max-width: 1200px) 45vw, 40vw"
                      />
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex"/>
            <CarouselNext className="hidden sm:flex"/>
            <CarouselPagination />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
