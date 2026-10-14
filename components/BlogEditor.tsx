'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

type ToolbarIconName =
  | 'paragraph'
  | 'heading1'
  | 'heading2'
  | 'heading3'
  | 'bold'
  | 'italic'
  | 'strike'
  | 'bulletList'
  | 'orderedList'
  | 'blockquote'
  | 'codeBlock'

const toolbarButtons = [
  { action: 'paragraph', format: 'paragraph' as const, label: 'Paragraph' },
  { action: 'heading1', format: 'heading1' as const, label: 'Heading 1' },
  { action: 'heading2', format: 'heading2' as const, label: 'Heading 2' },
  { action: 'heading3', format: 'heading3' as const, label: 'Heading 3' },
  { action: 'bold', format: 'bold' as const, label: 'Bold' },
  { action: 'italic', format: 'italic' as const, label: 'Italic' },
  { action: 'strike', format: 'strike' as const, label: 'Strikethrough' },
  { action: 'bulletList', format: 'bulletList' as const, label: 'Bullet list' },
  { action: 'orderedList', format: 'orderedList' as const, label: 'Numbered list' },
  { action: 'blockquote', format: 'blockquote' as const, label: 'Blockquote' },
  { action: 'codeBlock', format: 'codeBlock' as const, label: 'Code block' },
]

function ToolbarIcon({ name }: { name: ToolbarIconName }) {
  const common = {
    className: 'h-4 w-4',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.8,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true,
  }

  if (name === 'bold') return <svg {...common}><path d="M7 5h5a4 4 0 0 1 0 8H7zm0 8h6a4 4 0 0 1 0 8H7z" /></svg>
  if (name === 'italic') return <svg {...common}><path d="M10 5h8M6 19h8M14 5 10 19" /></svg>
  if (name === 'strike') return <svg {...common}><path d="M5 12h14M8 7c.8-1.3 2.3-2 4.5-2 2.7 0 4.5 1.2 4.5 3M16 17c-.8 1.3-2.3 2-4.5 2-2.7 0-4.5-1.2-4.5-3" /></svg>
  if (name === 'bulletList') return <svg {...common}><path d="M9 6h11M9 12h11M9 18h11M4 6h.01M4 12h.01M4 18h.01" /></svg>
  if (name === 'orderedList') return <svg {...common}><path d="M10 6h10M10 12h10M10 18h10M4 5h1v3M3 8h3M3 13c0-1 3-1 3 0 0 1-3 2-3 3h3M3 19c0-1 3-1 3 0s-3 1-3 2h3" /></svg>
  if (name === 'blockquote') return <svg {...common}><path d="M6 6H3v6h4v-3H5a4 4 0 0 1 4-4M17 6h-3v6h4v-3h-2a4 4 0 0 1 4-4" /></svg>
  if (name === 'codeBlock') return <svg {...common}><path d="m8 8-4 4 4 4M16 8l4 4-4 4M14 5l-4 14" /></svg>
  if (name === 'heading1') return <svg {...common}><path d="M4 5v14M12 5v14M4 12h8M17 8h3v11M17 19h4" /></svg>
  if (name === 'heading2') return <svg {...common}><path d="M4 5v14M12 5v14M4 12h8M16 9c.3-2 4-2 4 0 0 2-4 3-4 5h4" /></svg>
  if (name === 'heading3') return <svg {...common}><path d="M4 5v14M12 5v14M4 12h8M16 9c4-2 4 2 1.8 2.5C20 12 20 16 16 15" /></svg>
  return <svg {...common}><path d="M5 6h14M5 12h14M5 18h14" /></svg>
}

const Tiptap = () => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: '<p>Hello World! 🌎️</p>',
    immediatelyRender: false,
    editorProps: {
      attributes: {
        class:
          'tiptap-editor min-h-full w-full rounded-sm border border-black/5 bg-[#eeeeec] px-4 py-3 text-sm leading-relaxed text-neutral-700 outline-none transition-colors focus:border-black/10 dark:border-white/10 dark:bg-neutral-900 dark:text-neutral-200 dark:focus:border-white/15',
      },
    },
  })

  if (!editor) {
    return null
  }

  const toggleFormat = (format: string) => {
    if (format === 'paragraph') editor.chain().focus().setParagraph().run()
    if (format === 'bold') editor.chain().focus().toggleBold().run()
    if (format === 'italic') editor.chain().focus().toggleItalic().run()
    if (format === 'strike') editor.chain().focus().toggleStrike().run()
    if (format === 'heading1') editor.chain().focus().toggleHeading({ level: 1 }).run()
    if (format === 'heading2') editor.chain().focus().toggleHeading({ level: 2 }).run()
    if (format === 'heading3') editor.chain().focus().toggleHeading({ level: 3 }).run()
    if (format === 'bulletList') editor.chain().focus().toggleBulletList().run()
    if (format === 'orderedList') editor.chain().focus().toggleOrderedList().run()
    if (format === 'blockquote') editor.chain().focus().toggleBlockquote().run()
    if (format === 'codeBlock') editor.chain().focus().toggleCodeBlock().run()
  }

  return (
    <div className="relative z-10 mx-auto flex h-screen w-full max-w-2xl flex-col overflow-hidden rounded-sm border border-black/5 bg-[#f5f5f3] shadow-sm dark:border-white/10 dark:bg-neutral-900">
      <div className="relative z-20 flex shrink-0 items-center justify-between border-b border-black/5 bg-[#f5f5f3] px-4 py-3 dark:border-white/10 dark:bg-neutral-950">
        <p className="text-sm font-medium text-neutral-800 dark:text-neutral-100">Blog Editor</p>
        <span className="rounded-full border border-black/10 px-2 py-0.5 text-[10px] uppercase tracking-[0.16em] text-neutral-500 dark:border-white/15 dark:text-neutral-400">
          Draft
        </span>
      </div>

      <div className="min-h-0 flex-1 overflow-y-auto p-4 pb-40">
        <EditorContent editor={editor} className="min-h-full" />
      </div>

      <div className="fixed bottom-5 left-1/2 z-30 flex h-12 w-[min(36rem,calc(100vw-2rem))] -translate-x-1/2 items-center justify-center gap-1 overflow-x-auto rounded-md border border-black/10 bg-[#f5f5f3]/95 px-2 shadow-lg backdrop-blur dark:border-white/15 dark:bg-neutral-950/95">
        {toolbarButtons.map(({ label, action, format }) => {
          const isActive =
            (format === 'paragraph' && editor.isActive('paragraph')) ||
            (format === 'heading1' && editor.isActive('heading', { level: 1 })) ||
            (format === 'heading2' && editor.isActive('heading', { level: 2 })) ||
            (format === 'heading3' && editor.isActive('heading', { level: 3 })) ||
            (format === 'bold' && editor.isActive('bold')) ||
            (format === 'italic' && editor.isActive('italic')) ||
            (format === 'strike' && editor.isActive('strike')) ||
            (format === 'bulletList' && editor.isActive('bulletList')) ||
            (format === 'orderedList' && editor.isActive('orderedList')) ||
            (format === 'blockquote' && editor.isActive('blockquote')) ||
            (format === 'codeBlock' && editor.isActive('codeBlock'))

          return (
            <button
              key={action}
              type="button"
              onMouseDown={(event) => {
                event.preventDefault()
                toggleFormat(format)
              }}
              aria-label={`Toggle ${label}`}
              title={label}
              className={[
                'flex h-8 w-8 shrink-0 items-center justify-center rounded-sm border text-[11px] font-medium transition-colors',
                isActive
                  ? 'border-black/10 bg-neutral-900 text-white dark:border-white/15 dark:bg-neutral-100 dark:text-neutral-900'
                  : 'border-black/10 bg-white text-neutral-600 hover:bg-neutral-100 dark:border-white/15 dark:bg-neutral-900 dark:text-neutral-300 dark:hover:bg-neutral-800',
              ].join(' ')}
            >
              <ToolbarIcon name={format} />
            </button>
          )
        })}
      </div>

    </div>
  )
}

export default Tiptap