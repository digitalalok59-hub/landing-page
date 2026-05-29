import { Clock3 } from "lucide-react";

export default function Urgency() {
  return (
    <section className="px-5 pb-16 sm:pb-20">
      <div className="mx-auto max-w-6xl rounded-lg border border-brand-line bg-brand-blue p-6 text-white shadow-soft sm:p-8">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-white/15">
              <Clock3 aria-hidden="true" />
            </div>
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-100">
                Limited consultation time
              </p>
              <h2 className="mt-2 text-2xl font-bold">
                Book your free consultation today.
              </h2>
              <p className="mt-2 max-w-2xl leading-7 text-blue-50">
                Fill the form and book your free consultation today so we can
                review your business and current marketing.
              </p>
            </div>
          </div>
          <a
            href="#book-call"
            className="inline-flex min-h-12 shrink-0 items-center justify-center rounded-md bg-white px-5 text-base font-bold text-brand-blue transition hover:bg-blue-50 focus:outline-none focus:ring-4 focus:ring-white/30"
          >
            Book Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
