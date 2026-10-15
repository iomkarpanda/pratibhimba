import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="relative z-10 mx-auto flex min-h-[75vh] w-full max-w-2xl flex-1 items-center justify-center px-4 py-10">
      <div className="w-full rounded-sm border border-black/5 bg-white p-8 text-center shadow-sm dark:border-white/10 dark:bg-neutral-900">
        <p className="text-sm uppercase tracking-[0.2em] text-neutral-400 dark:text-neutral-500">
          404
        </p>
        <h1 className="mt-2 text-2xl font-semibold text-neutral-800 dark:text-neutral-100">
          Page not found
        </h1>
        <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400">
          The page you are looking for does not exist or was moved.
        </p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <Link
            href="/"
            className="rounded-sm bg-neutral-900 px-4 py-2 text-sm font-medium text-white dark:bg-neutral-100 dark:text-neutral-900"
          >
            Go home
          </Link>
          <Link
            href="/blogs"
            className="rounded-sm border border-black/10 bg-white px-4 py-2 text-sm font-medium text-neutral-600 hover:bg-neutral-100 dark:border-white/15 dark:bg-neutral-900 dark:text-neutral-300 dark:hover:bg-neutral-800"
          >
            Read blogs
          </Link>
        </div>
      </div>
    </main>
  )
}
