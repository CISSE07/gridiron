export function GridIronMark({ size = 96 }: { size?: number }) {
  return (
    <svg
      viewBox="0 0 200 200"
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="GridIron"
    >
      <defs>
        <linearGradient id="gridironOrange" x1="15%" y1="8%" x2="88%" y2="95%">
          <stop offset="0%" stopColor="#f7590f" />
          <stop offset="100%" stopColor="#ffc233" />
        </linearGradient>
      </defs>
      <polygon points="100,12 176.2,56 176.2,144 100,188 23.8,144 23.8,56" fill="#0d0d0f" />
      <polygon points="100,22 167.5,61 167.5,139 100,178 32.5,139 32.5,61" fill="url(#gridironOrange)" />
      <path d="M140,42 L168,58 L150,76 Z" fill="#0d0d0f" opacity="0.16" />
      <path
        d="M143.5,120.3 A48,48 0 1 1 143.5,79.7 L127.2,87.3 A30,30 0 1 0 127.2,112.7 Z"
        fill="#0d0d0f"
      />
      <rect x="118" y="96" width="20" height="8" rx="1" fill="#0d0d0f" />
      <path d="M23.8,91 L41,100 L23.8,109 Z" fill="#0d0d0f" />
    </svg>
  );
}
