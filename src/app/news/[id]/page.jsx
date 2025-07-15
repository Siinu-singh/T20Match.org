import { notFound } from 'next/navigation';
import Image from 'next/image';
import { format, parseISO } from 'date-fns';
import { ArrowLeft, Calendar, Tag } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import news from '@/data/news.json';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export async function generateStaticParams() {
  return news.map((article) => ({
    id: article.id.toString(),
  }));
}

export async function generateMetadata({ params }) {
  const awaitedParams = await params;
  const article = news.find((p) => p.id.toString() === awaitedParams.id);
  if (!article) {
    return {
      title: 'Article Not Found',
    };
  }

  return {
    title: article.title,
    description: article.summary,
    alternates: {
      canonical: `/news/${article.id}`,
    },
    openGraph: {
      title: article.title,
      description: article.summary,
      url: `/news/${article.id}`,
      images: [
        {
          url: article.image,
          width: 1200,
          height: 630,
        },
      ],
    },
  };
}

export default async function NewsArticlePage({ params }) {
  const awaitedParams = await params;
  const article = news.find((p) => p.id.toString() === awaitedParams.id);

  if (!article) {
    notFound();
  }

  return (
    <div className="pb-12">
      <div className="relative h-64 md:h-80 w-full mb-[-8rem] md:mb-[-10rem]">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
          data-ai-hint={article.imageHint}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
      </div>

      <div className="relative max-w-4xl mx-auto">
        <Card className="shadow-lg">
          <CardHeader className="p-6 md:p-8">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground mb-4">
              <div className="flex items-center gap-2">
                <Tag size={16} />
                <Badge variant="secondary">{article.category}</Badge>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>{format(parseISO(article.date), 'PPP')}</span>
              </div>
            </div>
            <CardTitle as="h1" className="text-3xl md:text-5xl font-headline font-bold mb-2 text-foreground leading-tight">{article.title}</CardTitle>
          </CardHeader>
          <CardContent className="p-6 md:p-8 pt-0">
            <div
              className="prose prose-slate dark:prose-invert max-w-none prose-p:text-muted-foreground prose-headings:text-foreground prose-lg"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />

            <div className="mt-12 pt-8 border-t">
              <Button asChild variant="outline">
                <Link href="/news">
                  <ArrowLeft className="mr-2" />
                  Back to News
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
