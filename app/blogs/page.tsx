import Link from 'next/link'
import { getPrisma } from '@/lib/prisma'

export const revalidate = 60

export const metadata = {
  title: 'Blogs',
  description: 'Posts stored in Supabase via Prisma.',
}

export default async function BlogsPage() {
  const prisma = getPrisma()
  if (!prisma) {
    return (
      <main className="relative z-10 mx-auto w-full max-w-2xl px-4 py-10">
        <h1 className="text-2xl font-semibold text-neutral-800 dark:text-neutral-100">Blogs</h1>
        <p className="mt-6 text-sm text-neutral-500 dark:text-neutral-400">
          Database is not configured. Add <code>DATABASE_URL</code> to <code>.env.local</code>.
        </p>
      </main>
    )
  }

  const posts = await prisma.post.findMany({
    where: { status: 'published' },
    select: { slug: true, title: true, description: true, createdAt: true, views: true, likes: true },
    orderBy: { createdAt: 'desc' },
  })

  return (
    <main className="relative z-10 mx-auto w-full max-w-2xl px-4 py-10">
      <h1 className="text-2xl font-semibold text-neutral-800 dark:text-neutral-100">Blogs</h1>
      {posts.length === 0 ? (
        <p className="mt-6 text-sm text-neutral-500 dark:text-neutral-400">
          No published posts yet.
        </p>
      ) : (
        <div className="mt-6 rounded-sm border border-black/5 bg-white p-4 shadow-sm dark:border-white/10 dark:bg-neutral-900">
          <ul className="flex flex-col gap-4">
          {posts.map((post) => (
            <li
              key={post.slug}
              className="border-b border-black/10 pb-4 dark:border-white/10"
            >
              <Link href={`/blogs/${post.slug}`} className="block">
                <h2 className="text-lg font-medium text-neutral-800 hover:underline dark:text-neutral-100">
                  {post.title}
                </h2>
                {post.description && (
                  <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
                    {post.description}
                  </p>
                )}
                <p className="mt-2 flex items-center gap-3 text-xs text-neutral-400 dark:text-neutral-500">
                  <span>{new Date(post.createdAt).toLocaleDateString()}</span>
                  <span>{post.views} views</span>
                  <span>{post.likes} likes</span>
                </p>
              </Link>
            </li>
          ))}
          </ul>
        </div>
      )}
    </main>
  )
}
