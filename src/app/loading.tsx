export default function Loading() {
  return (
    <div className="min-h-screen bg-usc-bg flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-usc-surface border-t-usc-green rounded-full animate-spin" />
        <p className="text-usc-text-muted text-sm">Loading...</p>
      </div>
    </div>
  );
}
