"use server";

import { Bot } from "grammy";

export type ContactState = {
  status: "idle" | "success" | "error";
  message: string;
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const TELEGRAM_MAX_LENGTH = 4096;

function chunkForTelegram(text: string, limit = TELEGRAM_MAX_LENGTH): string[] {
  if (text.length <= limit) return [text];

  const chunks: string[] = [];
  let remaining = text;

  while (remaining.length > limit) {
    const breakAt = remaining.lastIndexOf(" ", limit);
    const cut = breakAt > 0 ? breakAt : limit;

    chunks.push(remaining.slice(0, cut).trimEnd());
    remaining = remaining.slice(cut).trimStart();
  }

  if (remaining) chunks.push(remaining);

  return chunks;
}

export async function sendMessage(
  _prevState: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const email = String(formData.get("email") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();
  const company = String(formData.get("company") ?? "").trim();

  if (company) {
    return { status: "success", message: "Thanks for reaching out — I'll get back to you soon." };
  }

  if (!EMAIL_PATTERN.test(email)) {
    return { status: "error", message: "Please enter a valid email address." };
  }

  if (!message) {
    return { status: "error", message: "Please enter a message." };
  }

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    return { status: "error", message: "Messaging is not configured yet — try again later." };
  }

  const body = [
    "New portfolio enquiry",
    `From: ${email}`,
    `Received: ${new Date().toISOString()}`,
    "",
    message,
  ].join("\n");

  try {
    const bot = new Bot(token);

    for (const part of chunkForTelegram(body)) {
      await bot.api.sendMessage(chatId, part);
    }
  } catch (error) {
    console.error("Failed to deliver the contact message to Telegram:", error);
    return { status: "error", message: "Could not send your message — try again later." };
  }

  return { status: "success", message: "Thanks for reaching out — I'll get back to you soon." };
}
