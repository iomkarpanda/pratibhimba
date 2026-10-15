import 'server-only'
import { PrismaClient } from '@prisma/client'
import { PrismaPg } from '@prisma/adapter-pg'
import { Pool } from 'pg'

const globalForPrisma = globalThis as unknown as { prisma?: PrismaClient }

// Runtime connects with the pooler connection string (Supabase port 6543),
// which is safe for serverless. Table/RLS/counters live in supabase/schema.sql.
export function getPrisma(): PrismaClient | null {
  if (!process.env.DATABASE_URL) return null
  if (!globalForPrisma.prisma) {
    const pool = new Pool({ connectionString: process.env.DATABASE_URL })
    globalForPrisma.prisma = new PrismaClient({ adapter: new PrismaPg(pool) })
  }
  return globalForPrisma.prisma
}
