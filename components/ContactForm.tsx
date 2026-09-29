"use client";

import { useActionState } from "react";
import { sendMessage, type ContactState } from "@/app/contact/actions";

const initialState: ContactState = { status: "idle", message: "" };

export default function ContactForm() {
  const [state, formAction, pending] = useActionState(sendMessage, initialState);

  return (
    <form action={formAction} className="space-y-5">
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

      <div className="hidden" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <button
        type="submit"
        disabled={pending}
        className="h-11 w-full rounded-sm bg-[#1A1A1A] px-4 text-sm font-medium text-white transition hover:bg-black focus:outline-none focus:ring-2 focus:ring-black/30 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60 dark:bg-[#FAFAF9] dark:text-[#1A1A1A] dark:hover:bg-white dark:focus:ring-white/30 dark:focus:ring-offset-neutral-900"
      >
        {pending ? "Sending..." : "Send message"}
      </button>

      <p
        aria-live="polite"
        className={
          state.status === "error"
            ? "text-sm text-red-600 dark:text-red-400"
            : "text-sm text-emerald-600 dark:text-emerald-400"
        }
      >
        {state.status === "idle" ? "" : state.message}
      </p>
    </form>
  );
}
