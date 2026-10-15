import { NextResponse } from 'next/server'
import { auth } from '@clerk/nextjs/server'
import type { Prisma } from '@prisma/client'
import { getPrisma } from '@/lib/prisma'

function slugify(s: string): string {
  return (
    s
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '') || 'untitled'
  )
}

// Public: list published posts (newest first).
export async function GET() {
  const prisma = getPrisma()
  if (!prisma) {
    return NextResponse.json({ error: 'database not configured' }, { status: 500 })
  }
  const posts = await prisma.post.findMany({
    where: { status: 'published' },
    select: {
      slug: true,
      title: true,
      description: true,
      createdAt: true,
      views: true,
      likes: true,
    },
    orderBy: { createdAt: 'desc' },
  })
  return NextResponse.json({ posts })
}

// Protected: requires a Clerk sign-in. Sign-ups are disabled, so only
// your own user can reach this.
export async function POST(req: Request) {
  const { userId } = await auth()
  if (!userId) {
    return NextResponse.json({ error: 'unauthorized' }, { status: 401 })
  }

  const prisma = getPrisma()
  if (!prisma) {
    return NextResponse.json({ error: 'database not configured' }, { status: 500 })
  }

  let body: Record<string, unknown>
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'invalid json' }, { status: 400 })
  }

  const { title, slug, description, html, json, status } = body as {
    title?: unknown
    slug?: unknown
    description?: unknown
    html?: unknown
    json?: unknown
    status?: unknown
  }

  if (typeof title !== 'string' || !title.trim()) {
    return NextResponse.json({ error: 'title is required' }, { status: 400 })
  }
  if (typeof html !== 'string' || !html.trim()) {
    return NextResponse.json({ error: 'html is required' }, { status: 400 })
  }
  if (status !== 'draft' && status !== 'published') {
    return NextResponse.json({ error: "status must be 'draft' or 'published'" }, { status: 400 })
  }

  const finalSlug = typeof slug === 'string' && slug.trim() ? slugify(slug) : slugify(title)

  try {
    const post = await prisma.post.upsert({
      where: { slug: finalSlug },
      update: {
        title: title.trim(),
        description: typeof description === 'string' ? description : '',
        contentHtml: html,
        contentJson: (json ?? {}) as Prisma.InputJsonValue,
        status,
      },
      create: {
        slug: finalSlug,
        title: title.trim(),
        description: typeof description === 'string' ? description : '',
        contentHtml: html,
        contentJson: (json ?? {}) as Prisma.InputJsonValue,
        status,
      },
      select: { slug: true },
    })
    return NextResponse.json({ slug: post.slug })
  } catch (e) {
    return NextResponse.json(
      { error: e instanceof Error ? e.message : 'save failed' },
      { status: 500 },
    )
  }
}
