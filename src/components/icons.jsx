export const SiteLogo = ({ className, ...props }) => (
  <div className="flex items-center gap-2" {...props}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className="h-8 w-8"
      fill="none"
      aria-labelledby="site-logo-title"
    >
      <title id="site-logo-title">T20Match Logo</title>
      <g>
        <path fill="#FFC107" d="M12 12c3.31 0 6-2.69 6-6s-2.69-6-6-6-6 2.69-6 6 2.69 6 6 6z" />
        <path fill="#E0E0E0" d="M12 12c3.31 0 6-2.69 6-6s-2.69-6-6-6-6 2.69-6 6 2.69 6 6 6z" />
        <path fill="#D1C4E9" d="M16.95 6c0-1.22-.44-2.33-1.17-3.21-1.27 1.48-3.23 2.4-5.43 2.4-.46 0-.9-.05-1.35-.13 1.15 2.16 3.54 3.65 6.24 3.65.42 0 .83-.04 1.23-.11A5.95 5.95 0 0016.95 6z" />
        <path fill="#FF9800" d="M11 24h2V11h-2v13z" />
        <path fill="#FFC107" d="M11 24h2V11h-2v13z" />
        <path fill="#FF9800" d="M15 24h2V13h-2v11z" />
        <path fill="#FF5722" d="M15 17h2v-2h-2v2z" />
        <path fill="#FFC107" d="M15 24h2V13h-2v11z" />
        <path fill="#FF5722" d="M15 17h2v-2h-2v2z" />
        <path fill="#FF9800" d="M7 24h2V13H7v11z" />
        <path fill="#FFC107" d="M7 24h2V13H7v11z" />
        <path fill="#FF5722" d="M7 17h2v-2H7v2z" />
        <path fill="#FF9800" d="M16.4 4.5l-3.56.89.89 3.56 3.56-.89-.89-3.56z" />
        <path fill="#FFC107" d="M16.4 4.5l-3.56.89.89 3.56 3.56-.89-.89-3.56z" />
        <path fill="#FF9800" d="M19.14 4.04l-1.06 1.06-2.12-.42.42-2.12 1.06-1.06.85.85.85.85z" />
        <path fill="#FF9800" d="M11.97 8.35l-1.06 1.06-.42-2.12 2.12-.42-1.06 1.06z" />
        <path fill="#FF9800" d="M7.6 4.5l3.56.89-.89 3.56-3.56-.89.89-3.56z" />
        <path fill="#FFC107" d="M7.6 4.5l3.56.89-.89 3.56-3.56-.89.89-3.56z" />
        <path fill="#FF9800" d="M4.86 4.04l1.06 1.06 2.12-.42-.42-2.12-1.06-1.06-.85.85-.85.85z" />
        <path fill="#FF9800" d="M12.03 8.35l1.06 1.06.42-2.12-2.12-.42 1.06 1.06z" />
      </g>
    </svg>
    <span className="font-headline text-2xl font-bold">
      <span className="text-primary">T20</span>
      <span className="text-foreground">Match</span>
    </span>
  </div>
);


export const CricketBatIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-labelledby="cricket-bat-title"
  >
    <title id="cricket-bat-title">Cricket Bat Icon</title>
    <path d="m10.5 11.5 7-7" />
    <path d="M16 2a4.95 4.95 0 0 1 7 7L12 20l-4-4 11-11" />
  </svg>
);
