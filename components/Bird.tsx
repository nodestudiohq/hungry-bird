export default function Bird({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <path d="M8 38c0-13 10-22 23-22 6 0 10 2 13 5l12-5-4 11c1 3 1 6 0 9-3 10-12 17-24 17-10 0-20-6-20-15Z" fill="currentColor" />
      <circle cx="40" cy="28" r="3" fill="#3B1014" />
      <path d="M54 27l8 3-8 3z" fill="#D8372B" />
      <path d="M24 56l-2 6M32 56l0 6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}
