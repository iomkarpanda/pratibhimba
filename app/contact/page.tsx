
const Page = () => {
  return (
    <main className="relative flex min-h-screen w-full items-center justify-center px-4 py-10 text-[#1A1A1A] dark:text-[#FAFAF9]">
      <section className="w-full max-w-lg rounded-sm border border-black/5 bg-white p-6 shadow-sm sm:p-8 dark:border-white/10 dark:bg-neutral-900">
        <div className="mb-8">
          <p className="mb-2 text-xs uppercase tracking-[0.2em] text-black/45 dark:text-white/45">
            Contact
          </p>
          <h1 className="text-2xl font-medium tracking-tight">Let&apos;s connect</h1>
          <p className="mt-2 text-sm leading-6 text-black/55 dark:text-white/55">
            Have a project, opportunity, or question? Send a message and I&apos;ll get back to you.
          </p>
        </div>

        <form className="space-y-5">
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              required
              className="h-11 w-full rounded-sm border border-black/15 bg-transparent px-3 text-sm outline-none transition placeholder:text-black/35 focus:border-black/60 focus:ring-2 focus:ring-black/10 dark:border-white/15 dark:placeholder:text-white/35 dark:focus:border-white/60 dark:focus:ring-white/10"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Tell me a little about your idea..."
              required
              rows={6}
              className="w-full resize-y rounded-sm border border-black/15 bg-transparent px-3 py-3 text-sm leading-6 outline-none transition placeholder:text-black/35 focus:border-black/60 focus:ring-2 focus:ring-black/10 dark:border-white/15 dark:placeholder:text-white/35 dark:focus:border-white/60 dark:focus:ring-white/10"
            />
          </div>

          <button
            type="submit"
            className="h-11 w-full rounded-sm bg-[#1A1A1A] px-4 text-sm font-medium text-white transition hover:bg-black focus:outline-none focus:ring-2 focus:ring-black/30 focus:ring-offset-2 dark:bg-[#FAFAF9] dark:text-[#1A1A1A] dark:hover:bg-white dark:focus:ring-white/30 dark:focus:ring-offset-neutral-900"
          >
            Send message
          </button>
        </form>
      </section>
    </main>
  );
};

export default Page;