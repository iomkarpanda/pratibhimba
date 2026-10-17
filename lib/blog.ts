// Shared display helpers for blog cards and the post page.

// Strip HTML tags/entities, then collapse whitespace for counting.
function htmlToText(html: string): string {
  return html
    .replace(/<[^>]*>/g, ' ')
    .replace(/&[a-z#0-9]+;/gi, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

// Average adult reading speed, excluding code.
export function readingTime(html: string): number {
  const words = htmlToText(html).split(' ').filter(Boolean).length
  const wpm = 200
  return Math.max(1, Math.round(words / wpm))
}

export function readingTimeLabel(html: string): string {
  const minutes = readingTime(html)
  return `${minutes} min read`
}

// Same format used by the existing cards ("toLocaleDateString").
export function formatDate(date: Date | string): string {
  return new Date(date).toLocaleDateString()
}
