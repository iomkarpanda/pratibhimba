import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import Tiptap from '@/components/BlogEditor'

export default async function CreatePage() {
  const { userId } = await auth()
  if (!userId) redirect('/sign-in')

  return (
    <div className="mx-auto flex h-screen w-full max-w-2xl flex-col">
      <Tiptap />
    </div>
  )
}
