import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Mail, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Thank You",
  description:
    "Your free 1:1 digital marketing consultation request has been received."
};

export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-white px-5 py-8">
      <section className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-3xl flex-col items-center justify-center text-center">
        <Image
          src="/dak-logo.png"
          alt="DAK Digital Marketer"
          width={220}
          height={80}
          priority
          className="mb-8 h-auto w-44"
        />
        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-brand-soft text-brand-blue">
          <CheckCircle2 aria-hidden="true" size={34} />
        </div>
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-brand-blue">
          Request received
        </p>
        <h1 className="max-w-2xl text-4xl font-bold leading-tight text-brand-ink sm:text-5xl">
          Thank you for booking your free consultation.
        </h1>
        <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">
          We will review your business and current marketing, then prepare a
          customized strategy or plan for your consultation.
        </p>
        <div className="mt-10 grid w-full gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-brand-line bg-white p-5 text-left shadow-soft">
            <Mail className="mb-4 text-brand-blue" aria-hidden="true" />
            <h2 className="text-base font-bold text-brand-ink">
              Check your email
            </h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Watch for the consultation details and next steps.
            </p>
          </div>
          <div className="rounded-lg border border-brand-line bg-white p-5 text-left shadow-soft">
            <MessageCircle className="mb-4 text-brand-blue" aria-hidden="true" />
            <h2 className="text-base font-bold text-brand-ink">
              Keep WhatsApp active
            </h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              We may contact you there to confirm your free call.
            </p>
          </div>
        </div>
        <Link
          href="/"
          className="mt-10 inline-flex min-h-12 items-center justify-center rounded-md bg-brand-blue px-6 text-base font-bold text-white shadow-soft transition hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-brand-blue/20"
        >
          Back to Landing Page
        </Link>
      </section>
    </main>
  );
}
