-- Run this in the Supabase SQL editor (one time).
create table if not exists posts (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title text not null,
  description text not null default '',
  content_html text not null default '',
  content_json jsonb not null default '{}'::jsonb,
  status text not null default 'draft' check (status in ('draft', 'published')),
  views integer not null default 0,
  likes integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists posts_slug_idx on posts (slug);
create index if not exists posts_status_created_idx on posts (status, created_at desc);

alter table posts enable row level security;

drop policy if exists "public read published" on posts;
create policy "public read published"
  on posts for select
  using (status = 'published');

-- Writes go through POST /api/blogs with BLOG_ADMIN_TOKEN,
-- which uses the service-role key (bypasses RLS). No write policy needed.

-- If the table already exists (created before views/likes), add the columns:
alter table posts add column if not exists views integer not null default 0;
alter table posts add column if not exists likes integer not null default 0;

-- View/like counters are plain integer columns updated with Prisma's
-- atomic `increment` (single UPDATE, no raw SQL, no race).
-- Cleanup for setups that ran the older version of this file:
drop function if exists increment_views(text);
drop function if exists change_likes(text, int);
