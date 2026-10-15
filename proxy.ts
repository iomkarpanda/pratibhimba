import { clerkMiddleware } from '@clerk/nextjs/server'

// Session handling only. Access control lives with each protected
// resource (/create page, POST /api/blogs), not in path matching.
export default clerkMiddleware()

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
}
