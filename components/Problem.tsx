import { AlertCircle, CheckCircle2 } from "lucide-react";

export default function Problem() {
  const problems = [
    "Posting on Facebook and Instagram but not getting enough inquiries",
    "Boosting posts but not seeing real sales",
    "Not knowing what marketing strategy to use",
    "Getting random leads but not serious customers",
    "Depending only on referrals or word of mouth",
    "Feeling confused about ads, content, landing pages, and follow-up"
  ];

  return (
    <section className="border-y border-brand-line bg-white px-5 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-brand-blue">
            The problem
          </p>
          <h2 className="text-3xl font-bold leading-tight text-brand-ink sm:text-4xl">
            Digital marketing should bring customers, not confusion.
          </h2>
          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            If you are a business owner in Nepal and your online marketing feels
            random, this call is designed to give you clarity.
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-[1fr_0.9fr] lg:items-start">
          <div className="rounded-lg border border-brand-line bg-slate-50 p-6">
            <div className="mb-5 flex items-center gap-3 text-brand-blue">
              <AlertCircle aria-hidden="true" />
              <h3 className="text-lg font-bold text-brand-ink">
                This may sound familiar
              </h3>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {problems.map((problem) => (
                <div key={problem} className="flex gap-3">
                  <CheckCircle2
                    className="mt-1 shrink-0 text-brand-blue"
                    size={18}
                    aria-hidden="true"
                  />
                  <p className="text-sm leading-6 text-slate-600 sm:text-base">
                    {problem}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-lg border border-brand-line bg-brand-blue p-6 text-white shadow-soft">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-100">
              The solution
            </p>
            <h3 className="mt-3 text-2xl font-bold leading-tight">
              Get a clear plan before you spend more money.
            </h3>
            <p className="mt-4 leading-7 text-blue-50">
              In this free consultation call, we will understand your business,
              identify what is not working, and give you a clear digital
              marketing plan you can start implementing immediately.
            </p>
            <a
              href="#book-call"
              className="mt-6 inline-flex min-h-12 items-center justify-center rounded-md bg-white px-5 text-base font-bold text-brand-blue transition hover:bg-blue-50 focus:outline-none focus:ring-4 focus:ring-white/30"
            >
              Book Your FREE Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
