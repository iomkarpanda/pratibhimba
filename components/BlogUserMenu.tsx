'use client'

import { Show, UserButton } from '@clerk/nextjs'

// Account icon, rendered only on blog-related pages.
export function BlogUserMenu() {
  return (
    <Show when="signed-in">
      <UserButton />
    </Show>
  )
}
