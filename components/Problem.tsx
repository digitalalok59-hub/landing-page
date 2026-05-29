import { AlertCircle } from "lucide-react";

export default function Problem() {
  return (
    <section className="border-y border-brand-line bg-white px-5 py-16 sm:py-20">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <div>
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-brand-blue">
            The problem
          </p>
          <h2 className="text-3xl font-bold leading-tight text-brand-ink sm:text-4xl">
            Posting and boosting should bring customers, not confusion.
          </h2>
        </div>
        <div className="rounded-lg border border-brand-line bg-slate-50 p-6">
          <div className="flex gap-4">
            <AlertCircle
              className="mt-1 shrink-0 text-brand-blue"
              aria-hidden="true"
            />
            <p className="text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              For business owners who are posting, boosting, or trying online
              marketing but not getting enough customers, this consultation
              helps you understand what is not working and what needs to improve
              across Facebook, Instagram, Google, or your website presence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
