import { NextResponse } from 'next/server'
import { Prisma } from '@prisma/client'
import { getPrisma } from '@/lib/prisma'

export async function POST(_req: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const prisma = getPrisma()
  if (!prisma) return NextResponse.json({ error: 'database not configured' }, { status: 500 })
  try {
    // Single atomic UPDATE — no read-then-write race.
    await prisma.post.update({ where: { slug }, data: { views: { increment: 1 } } })
    return NextResponse.json({ ok: true })
  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError && e.code === 'P2025') {
      return NextResponse.json({ error: 'not found' }, { status: 404 })
    }
    throw e
  }
}
