'use client'

import { useEffect, useState } from 'react'

// Counts one view per browser session (no double-count on re-renders).
export function ViewTracker({ slug }: { slug: string }) {
  useEffect(() => {
    const flag = `viewed-${slug}`
    if (sessionStorage.getItem(flag)) return
    sessionStorage.setItem(flag, '1')
    fetch(`/api/blogs/${slug}/view`, { method: 'POST' }).catch(() => {})
  }, [slug])
  return null
}

export function LikeButton({ slug, initialLikes }: { slug: string; initialLikes: number }) {
  const [likes, setLikes] = useState(initialLikes)
  const [liked, setLiked] = useState(false)
  const [pending, setPending] = useState(false)

  useEffect(() => {
    setLiked(localStorage.getItem(`liked-${slug}`) === '1')
  }, [slug])

  const toggle = async () => {
    if (pending) return
    const next = !liked
    setLiked(next)
    setLikes((c) => c + (next ? 1 : -1))
    setPending(true)
    try {
      const res = await fetch(`/api/blogs/${slug}/like`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ delta: next ? 1 : -1 }),
      })
      if (!res.ok) throw new Error('like failed')
      localStorage.setItem(`liked-${slug}`, next ? '1' : '0')
    } catch {
      setLiked(!next)
      setLikes((c) => c + (next ? -1 : 1))
    } finally {
      setPending(false)
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      disabled={pending}
      aria-pressed={liked}
      aria-label={liked ? 'Unlike this post' : 'Like this post'}
      className={[
        'flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium transition-colors disabled:opacity-50',
        liked
          ? 'border-black/10 bg-neutral-900 text-white dark:border-white/15 dark:bg-neutral-100 dark:text-neutral-900'
          : 'border-black/10 bg-white text-neutral-600 hover:bg-neutral-100 dark:border-white/15 dark:bg-neutral-900 dark:text-neutral-300 dark:hover:bg-neutral-800',
      ].join(' ')}
    >
      <svg
        className="h-3.5 w-3.5"
        viewBox="0 0 24 24"
        fill={liked ? 'currentColor' : 'none'}
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7z" />
      </svg>
      {likes}
    </button>
  )
}

export function Stat({ label, value }: { label: string; value: number }) {
  return (
    <span className="text-xs text-neutral-400 dark:text-neutral-500">
      {value} {label}
    </span>
  )
}
