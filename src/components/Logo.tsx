// Hex cell = the hive, three stripes = the bee's abdomen and the rows of an index.
export default function Logo() {
  return (
    <a href="#" className="flex items-center gap-2.5" aria-label="Uindex home">
      <svg viewBox="0 0 32 36" className="h-8 w-auto" aria-hidden>
        <defs>
          <linearGradient id="logo-g" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#3b5bff" />
            <stop offset=".55" stopColor="#38e1f0" />
            <stop offset="1" stopColor="#d8f55c" />
          </linearGradient>
          <clipPath id="logo-hex">
            <path d="M16 0l16 9v18l-16 9L0 27V9z" />
          </clipPath>
        </defs>
        <path d="M16 0l16 9v18l-16 9L0 27V9z" fill="#0d0f2b" />
        <g clipPath="url(#logo-hex)" fill="url(#logo-g)">
          <rect x="0" y="10" width="32" height="4" />
          <rect x="0" y="17" width="32" height="4" />
          <rect x="0" y="24" width="32" height="4" />
        </g>
      </svg>
      <span className="text-xl font-semibold tracking-[-0.04em]">uindex</span>
    </a>
  );
}
