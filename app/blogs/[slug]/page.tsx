import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getPrisma } from '@/lib/prisma'
import { formatDate, readingTimeLabel } from '@/lib/blog'
import { highlightCodeBlocks } from '@/lib/highlight'
import { LikeButton, Stat, ViewTracker } from '@/components/BlogEngagement'

export const revalidate = 60

export async function generateStaticParams() {
  const prisma = getPrisma()
  if (!prisma) return []
  const posts = await prisma.post.findMany({
    where: { status: 'published' },
    select: { slug: true },
  })
  return posts.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const prisma = getPrisma()
  if (!prisma) return { title: 'Not found' }
  const post = await prisma.post.findFirst({
    where: { slug, status: 'published' },
    select: { title: true, description: true },
  })
  if (!post) return { title: 'Not found' }
  return { title: post.title, description: post.description }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const prisma = getPrisma()
  if (!prisma) notFound()
  const post = await prisma.post.findFirst({
    where: { slug, status: 'published' },
  })
  if (!post) notFound()

  // Author-only HTML; code blocks are colorized server-side with lowlight.
  const html = highlightCodeBlocks(post.contentHtml)

  return (
    <main className="relative z-10 mx-auto w-full max-w-2xl px-4 py-10">
      <Link
        href="/blogs"
        className="text-sm text-neutral-500 underline underline-offset-4 hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-100"
      >
        ← All posts
      </Link>
      <div className="mt-4 rounded-sm border border-black/5 bg-white p-4 shadow-sm dark:border-white/10 dark:bg-neutral-900 sm:p-6">
        <h1 className="text-2xl font-semibold text-neutral-800 dark:text-neutral-100">
          {post.title}
        </h1>
        <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
          {formatDate(post.createdAt)}
          {post.description ? ` · ${post.description}` : ''}
        </p>
        <div className="mt-3 flex items-center gap-3">
          <Stat label="views" value={post.views} />
          <LikeButton slug={slug} initialLikes={post.likes} />
          <span className="text-xs text-neutral-500 dark:text-neutral-400">
            {readingTimeLabel(post.contentHtml)}
          </span>
        </div>
        <ViewTracker slug={slug} />
        <article className="blog-content mt-6" dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </main>
  )
}
