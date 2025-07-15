import Image from "next/image";
import Link from "next/link";
import { format, parseISO } from "date-fns";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Calendar, Tag } from "lucide-react";

export const NewsCard = ({ article, layout = 'vertical' }) => {
  const isHorizontal = layout === 'horizontal';
  const articleUrl = `/news/${article.id}`;

  if (isHorizontal) {
    return (
      <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col md:flex-row group">
        <div className="md:w-1/3 relative h-60 md:h-auto">
          <Link href={articleUrl} className="absolute inset-0">
            <Image
              src={article.image}
              alt={article.title}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              data-ai-hint={article.imageHint}
            />
          </Link>
        </div>
        <div className="md:w-2/3 flex flex-col">
          <CardHeader>
            <div className="flex items-center gap-4 text-xs text-muted-foreground mb-2">
                <div className="flex items-center gap-1.5"><Tag size={14} /><Badge variant="secondary">{article.category}</Badge></div>
                <div className="flex items-center gap-1.5"><Calendar size={14} /><span>{format(parseISO(article.date), 'PPP')}</span></div>
            </div>
            <CardTitle as="h2" className="text-xl font-headline">
              <Link href={articleUrl} className="hover:text-primary transition-colors">{article.title}</Link>
            </CardTitle>
          </CardHeader>
          <CardContent className="flex-grow">
            <p className="text-muted-foreground text-sm">{article.summary}</p>
          </CardContent>
          <div className="p-6 pt-0">
             <Button asChild variant="link" className="p-0 h-auto">
                <Link href={articleUrl}>Read More <ArrowRight className="ml-2" /></Link>
             </Button>
          </div>
        </div>
      </Card>
    );
  }

  // Vertical layout
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col group">
      <CardHeader className="p-0">
        <Link href={articleUrl}>
          <div className="relative h-40 w-full">
            <Image
              src={article.image}
              alt={article.title}
              fill
              sizes="(max-width: 1024px) 100vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              data-ai-hint={article.imageHint}
            />
          </div>
        </Link>
      </CardHeader>
      <CardContent className="p-4 flex-grow flex flex-col">
         <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
            <div className="flex items-center gap-1.5"><Tag size={14} /><Badge variant="outline">{article.category}</Badge></div>
            <span>&middot;</span>
            <div className="flex items-center gap-1.5"><Calendar size={14} /><span>{format(parseISO(article.date), 'MMM d')}</span></div>
        </div>
        <CardTitle as="h3" className="text-base font-headline flex-grow">
             <Link href={articleUrl} className="hover:text-primary transition-colors">{article.title}</Link>
        </CardTitle>
         <Button asChild variant="link" className="p-0 h-auto mt-4 justify-start">
            <Link href={articleUrl}>Read More <ArrowRight className="ml-2" /></Link>
         </Button>
      </CardContent>
    </Card>
  );
};
