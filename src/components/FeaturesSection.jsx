import { BarChart2, Bell, Globe, Hand, Heart, Tv, Zap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const features = [
  {
    icon: <Zap size={32} className="text-primary" />,
    title: 'Real-Time Live Scores & Commentary',
    description: "With every delivery being a game changer, live accuracy isn't an extra feature—it's the minimum. Our live scoring engine is extremely fast and regularly updated, offering you second-to-second ball-by-ball commentary.",
  },
  {
    icon: <Tv size={32} className="text-primary" />,
    title: 'Full T20 Match Coverage',
    description: 'We believe that every T20 game must be provided with expansive coverage. Our website offers expansive previews, including toss results, team squads, player combinations, and pitch updates.',
  },
  {
    icon: <BarChart2 size={32} className="text-primary" />,
    title: 'Detailed Stats & Match Insights',
    description: "T20 cricket is all about pace, but there's a whole universe of data per ball—and we open it up for you. We provide cutting-edge analysis, including powerplay comparisons, run rate graphs, and player strike rates.",
  },
  {
    icon: <Hand size={32} className="text-primary" />,
    title: 'Match Highlights & Key Moments',
    description: 'Missed the match? No problem. At T20Match, you can relive the most exciting moments with our recap page, match wrap-ups, and analyses of turning points that bring you quickly up to date.',
  },
  {
    icon: <Bell size={32} className="text-primary" />,
    title: 'Personalized Notifications & Smart Alerts',
    description: 'Customize your alerts at T20Match. Choose to receive alerts about the toss, milestones like fifties or 100+ partnerships, wickets, or match results for your favorite teams and players.',
  },
  {
    icon: <Globe size={32} className="text-primary" />,
    title: 'Global T20 League Tracker',
    description: "From the high-voltage action of the IPL to the competitive nature of the BBL, or emerging talent in associate leagues, we're tracking every run and result. We follow women's T20 cricket just as keenly.",
  },
];

const FeatureCard = ({ icon, title, description }) => (
  <Card className="bg-card/50 hover:shadow-lg transition-shadow duration-300">
    <CardHeader className="flex flex-row items-center gap-4">
      <div className="bg-primary/10 p-3 rounded-full">{icon}</div>
      <CardTitle as="h3" className="font-headline text-xl">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-muted-foreground">{description}</p>
    </CardContent>
  </Card>
);

export default function FeaturesSection() {
  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl font-bold mb-4">The Pulse of T20 Cricket</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            At T20Match, we celebrate the spirit of this quick cricket by offering fans an engaged, real-time digital experience. We're built for avid cricket enthusiasts yearning for something beyond scores.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
        
        <div className="mt-16 text-center">
            <Card className="bg-card/50 max-w-4xl mx-auto">
                <CardHeader>
                    <div className="flex justify-center mb-4">
                         <Heart size={32} className="text-primary" />
                    </div>
                    <CardTitle as="h3" className="font-headline text-2xl">Built for the Fans</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground space-y-4">
                    <p>Essentially, T20Match is created for the supporters. We understand what it means to be cheering your favorite team or idolizing your favorite player. That is why our website is user-friendly, quick to load, and mobile-supportive for the best viewing experience on any device. You are on the go or at home, you will always be one click away from live match action.</p>
                    <p className="font-semibold text-foreground">T20Match — Where Every Ball Has a Story</p>
                </CardContent>
            </Card>
        </div>

      </div>
    </section>
  );
}
