import { NextResponse } from 'next/server'
import { Prisma } from '@prisma/client'
import { getPrisma } from '@/lib/prisma'

export async function POST(req: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const prisma = getPrisma()
  if (!prisma) return NextResponse.json({ error: 'database not configured' }, { status: 500 })

  let delta = 1
  try {
    const body = (await req.json()) as { delta?: unknown }
    if (body.delta === -1) delta = -1
  } catch {
    // default to +1
  }

  try {
    if (delta === 1) {
      await prisma.post.update({ where: { slug }, data: { likes: { increment: 1 } } })
    } else {
      // Decrement only when above zero — keeps the counter floored without raw SQL.
      await prisma.post.updateMany({
        where: { slug, likes: { gt: 0 } },
        data: { likes: { increment: -1 } },
      })
    }
    return NextResponse.json({ ok: true })
  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError && e.code === 'P2025') {
      return NextResponse.json({ error: 'not found' }, { status: 404 })
    }
    throw e
  }
}
