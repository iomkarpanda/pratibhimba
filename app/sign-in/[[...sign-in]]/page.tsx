import { SignIn } from '@clerk/nextjs'

export default function SignInPage() {
  return (
    <main className="relative z-10 mx-auto flex w-full max-w-2xl flex-1 items-center justify-center px-4 py-10">
      <SignIn />
    </main>
  )
}
