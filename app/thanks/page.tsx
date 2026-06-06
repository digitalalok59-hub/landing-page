import type { Metadata } from "next";
import Image from "next/image";
import { MessageCircle, PlayCircle } from "lucide-react";

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

        <div className="mt-10 aspect-video w-full max-w-3xl overflow-hidden rounded-lg border border-brand-line bg-brand-soft shadow-soft">
          <div className="flex h-full flex-col items-center justify-center px-6 text-center">
            <PlayCircle className="mb-4 text-brand-blue" size={48} aria-hidden="true" />
            <p className="text-lg font-bold text-brand-ink">
              Vimeo video will be added here
            </p>
            <p className="mt-2 max-w-md text-sm leading-6 text-slate-600">
              Send the Vimeo video link and this box will become the embedded
              video.
            </p>
          </div>
        </div>

        <button
          type="button"
          disabled
          className="mt-9 inline-flex min-h-14 cursor-not-allowed items-center justify-center gap-2 rounded-md bg-brand-blue px-7 text-base font-bold text-white opacity-60 shadow-soft"
        >
          <MessageCircle aria-hidden="true" size={20} />
          Chat with me on WhatsApp
        </button>
        <p className="mt-3 text-sm text-slate-500">
          Send your WhatsApp chat link and this button will open WhatsApp.
        </p>
      </section>
    </main>
  );
}
