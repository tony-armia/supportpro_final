import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#FDFAF5] dark:bg-[#0B0B0B] flex items-center justify-center px-6 text-center">
      <div>
        <p className="text-[#FF8101] font-semibold text-sm tracking-widest uppercase mb-4">404</p>
        <h1 className="font-display text-5xl md:text-7xl text-[#1A1A18] dark:text-white leading-[0.95] mb-6">
          Page not found.
        </h1>
        <p className="text-[#5A5A54] dark:text-[#A7A7A3] max-w-sm mx-auto mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full bg-[#FF8101] text-white px-6 py-3 text-sm font-medium hover:brightness-110 transition-all"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}
