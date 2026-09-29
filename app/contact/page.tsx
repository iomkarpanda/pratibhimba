
import ContactForm from "@/components/ContactForm";

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

        <ContactForm />
      </section>
    </main>
  );
};

export default Page;