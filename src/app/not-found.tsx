import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-usc-bg flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <h1 className="text-8xl font-bold text-usc-green mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-usc-text mb-4">
          Page Not Found
        </h2>
        <p className="text-usc-text-secondary mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 bg-usc-green text-usc-bg font-semibold rounded-lg hover:bg-usc-green-light transition-colors"
          >
            Go Home
          </Link>
          <Link
            href="/docs"
            className="inline-flex items-center justify-center px-6 py-3 border border-usc-border text-usc-text font-semibold rounded-lg hover:border-usc-green hover:text-usc-green transition-colors"
          >
            View Docs
          </Link>
        </div>
      </div>
    </div>
  );
}
