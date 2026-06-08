import type { Metadata } from "next";
import Image from "next/image";
import { MessageCircle } from "lucide-react";
import VimeoThankYouPlayer from "@/components/VimeoThankYouPlayer";

export const metadata: Metadata = {
  title: "Thanks",
  description:
    "Before your consultation, watch this short video and see what to do next."
};

export default function ThanksPage() {
  return (
    <main className="min-h-screen bg-white px-5 py-8">
      <section className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-4xl flex-col items-center justify-center text-center">
        <Image
          src="/dak-logo.png"
          alt="DAK Digital Marketer"
          width={220}
          height={80}
          priority
          className="mb-10 h-auto w-44"
        />
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-brand-blue">
          One more step
        </p>
        <h1 className="max-w-3xl text-4xl font-bold leading-tight text-brand-ink sm:text-5xl">
          Wait... watch the video before you go
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
          Before your consultation, please watch this short video so you know
          what to do next.
        </p>

        <VimeoThankYouPlayer />

        <a
          href="https://wa.me/9779841069311"
          target="_blank"
          rel="noreferrer"
          className="mt-9 inline-flex min-h-14 items-center justify-center gap-2 rounded-md bg-brand-blue px-7 text-base font-bold text-white shadow-soft transition hover:bg-[#1d3fc4] focus:outline-none focus:ring-4 focus:ring-brand-blue/20"
        >
          <MessageCircle aria-hidden="true" size={20} />
          Chat with me on WhatsApp
        </a>
      </section>
    </main>
  );
}
