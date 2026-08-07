export default function OpenToWork() {
  return (
    <div
      role="status"
      className="mb-4 flex w-fit items-center gap-2 rounded-md border border-green-500/30 bg-green-500/10 px-3 py-1"
    >
      <span className="relative flex size-2">
        <span className="absolute inline-flex size-full animate-ping rounded-full bg-green-500 opacity-60" />
        <span className="relative inline-flex size-2 rounded-full bg-green-500" />
      </span>
      <p className="text-xs font-medium text-green-700 dark:text-green-400">
        Open To Work
      </p>
    </div>
  );
}
