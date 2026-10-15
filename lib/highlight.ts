import 'server-only'
import { common, createLowlight } from 'lowlight'
import { toHtml } from 'hast-util-to-html'

const lowlight = createLowlight(common)

// Tiptap saves code blocks as plain <pre><code class="language-x">…</code></pre>
// (highlighting is an editor-only decoration), so colorize them at render time.
function unescapeHtml(s: string): string {
  return s
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&#x27;/g, "'")
    .replace(/&amp;/g, '&')
}

export function highlightCodeBlocks(html: string): string {
  return html.replace(
    /<pre><code(?: class="language-([\w+-]+)")?>([\s\S]*?)<\/code><\/pre>/g,
    (match, lang: string | undefined, code: string) => {
      try {
        const text = unescapeHtml(code)
        const tree =
          lang && lowlight.registered(lang)
            ? lowlight.highlight(lang, text)
            : lowlight.highlightAuto(text)
        return `<pre><code>${toHtml(tree)}</code></pre>`
      } catch {
        return match
      }
    },
  )
}
