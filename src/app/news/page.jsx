
"use client";

import { useState } from "react";
import { NewsCard } from "@/components/NewsCard";
import newsData from "@/data/news.json";
import PageHero from "@/components/PageHero";
import { Button } from "@/components/ui/button";

export default function NewsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 6; // Number of articles in the grid below the featured one

  const sortedNews = [...newsData].sort((a, b) => new Date(b.date) - new Date(a.date));
  const featuredArticle = sortedNews[0];
  const otherArticles = sortedNews.slice(1);

  const totalPages = Math.ceil(otherArticles.length / articlesPerPage);

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const startIndex = (currentPage - 1) * articlesPerPage;
  const selectedArticles = otherArticles.slice(startIndex, startIndex + articlesPerPage);

  return (
    <div className="space-y-8">
      <PageHero 
        title="Cricket News"
        subtitle="Stay updated with the latest T20 headlines."
      />

      {/* Featured Article Section */}
      {featuredArticle && (
        <div className="mb-12">
            <h2 className="font-headline text-3xl font-bold mb-6 text-center">Top Story</h2>
            <NewsCard article={featuredArticle} layout="horizontal" />
        </div>
      )}

      {/* More Stories Section */}
       <div>
        <h2 className="font-headline text-3xl font-bold mb-6 text-center">More Stories</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[600px]">
            {selectedArticles.map((article) => (
            <NewsCard key={article.id} article={article} layout="vertical" />
            ))}
        </div>
      </div>


      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-4 mt-8">
          <Button onClick={handlePrevPage} disabled={currentPage === 1} variant="outline">
            Previous
          </Button>
          <span className="text-sm font-medium text-muted-foreground">
            Page {currentPage} of {totalPages}
          </span>
          <Button onClick={handleNextPage} disabled={currentPage === totalPages} variant="outline">
            Next
          </Button>
        </div>
      )}
    </div>
  );
}
