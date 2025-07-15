import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

export const metadata = {
  title: '404: Page Not Found',
  description: 'The page you are looking for does not exist or has been moved. Let us help you find your way back to the live cricket action on T20Match.org.',
  robots: 'noindex, follow',
};

export default function NotFound() {
  return (
    <div className="flex items-center justify-center py-12">
      <Card className="w-full max-w-md text-center">
        <CardHeader>
          <CardTitle as="h1" className="font-headline text-6xl text-primary">404</CardTitle>
          <CardDescription className="text-xl font-medium">Page Not Found</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-muted-foreground">Oops! It seems you've been stumped. The page you're looking for might have been caught out, moved to a different pitch, or never existed in the first place. Don't worry, even the best players miss a shot now and then. Let's get you back to the main field where all the live action is happening. You can return to our homepage to catch up on the latest scores, news, and match highlights. From there, you can navigate to any section you need. If you believe you've reached this page in error, feel free to use our contact page to let us know. We appreciate your help in keeping our field in top condition for all fans. Now, let's get you back to the game! Click the button below to head back to safety.</p>
          <Button asChild>
            <Link href="/">Return to Homepage</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
