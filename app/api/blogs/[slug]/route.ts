import { NextResponse } from 'next/server'
import { auth } from '@clerk/nextjs/server'
import { Prisma } from '@prisma/client'
import { getPrisma } from '@/lib/prisma'

type SlugParams = { params: Promise<{ slug: string }> }

// Public: single published post (without the editor JSON payload).
export async function GET(_req: Request, { params }: SlugParams) {
  const { slug } = await params
  const prisma = getPrisma()
  if (!prisma) {
    return NextResponse.json({ error: 'database not configured' }, { status: 500 })
  }
  const post = await prisma.post.findFirst({
    where: { slug, status: 'published' },
    select: {
      slug: true,
      title: true,
      description: true,
      contentHtml: true,
      createdAt: true,
      views: true,
      likes: true,
    },
  })
  if (!post) return NextResponse.json({ error: 'not found' }, { status: 404 })
  return NextResponse.json({ post })
}

// Protected: delete a post by slug.
export async function DELETE(_req: Request, { params }: SlugParams) {
  const { userId } = await auth()
  if (!userId) {
    return NextResponse.json({ error: 'unauthorized' }, { status: 401 })
  }
  const { slug } = await params
  const prisma = getPrisma()
  if (!prisma) {
    return NextResponse.json({ error: 'database not configured' }, { status: 500 })
  }
  try {
    await prisma.post.delete({ where: { slug } })
    return NextResponse.json({ ok: true })
  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError && e.code === 'P2025') {
      return NextResponse.json({ error: 'not found' }, { status: 404 })
    }
    throw e
  }
}
