import { NewsCard } from "@/components/NewsCard";
import news from "@/data/news.json";
import PageHero from "@/components/PageHero";

export const metadata = {
  title: 'Cricket News | Latest T20 Headlines & Match Analysis | T.20Match',
  description: 'Get the latest T20 cricket news, match analysis, and updates from around the world. Stay informed with in-depth articles on T20Match.org.',
  alternates: {
    canonical: '/news',
  },
  openGraph: {
    title: 'Cricket News | Latest T20 Headlines & Match Analysis | T.20Match',
    description: 'Get the latest T20 cricket news, match analysis, and updates from around the world.',
    url: '/news',
  },
};

export default function NewsPage() {
  return (
    <div className="space-y-8">
      <PageHero 
        title="Cricket News"
        subtitle="Stay updated with the latest T20 headlines."
      />

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="grid gap-8">
            {news.slice(0, 3).map((article) => (
              <NewsCard key={article.id} article={article} layout="horizontal" />
            ))}
          </div>
        </div>
        <div className="lg:col-span-1">
          <h2 className="text-2xl font-headline font-bold mb-4">More Stories</h2>
          <div className="grid gap-6">
            {news.slice(3).map((article) => (
               <NewsCard key={article.id} article={article} layout="vertical" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

    
