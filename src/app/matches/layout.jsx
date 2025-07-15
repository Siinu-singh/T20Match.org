export const metadata = {
  title: 'Matches | T.20Match',
  description: 'Find live T20 cricket scores, results, and fixtures for all major tournaments. Get ball-by-ball updates from the match center.',
  alternates: {
    canonical: '/matches',
  },
   openGraph: {
    title: 'Matches | T.20Match',
    description: 'Find live T20 cricket scores, results, and fixtures.',
    url: '/matches',
  },
};

export default function MatchesLayout({ children }) {
  return children;
}
