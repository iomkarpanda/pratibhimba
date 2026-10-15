import { defineConfig } from 'prisma/config'

// Table is managed by supabase/schema.sql, so `prisma migrate` is never
// run here. The URL below only needs to resolve at config-load time.
const migrateUrl = process.env['DIRECT_URL'] ?? process.env['DATABASE_URL'] ?? ''

export default defineConfig({
  schema: 'prisma/schema.prisma',
  datasource: {
    url: migrateUrl,
  },
})
