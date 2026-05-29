import { CheckCircle2 } from "lucide-react";

const benefits = [
  "Know what is not working in your current marketing",
  "Get clear ideas to attract more customers",
  "Understand how to improve your Facebook, Instagram, Google, or website presence",
  "Stop wasting money on random boosting",
  "Get a simple marketing plan for your business"
];

const steps = [
  {
    title: "Step 1",
    copy: "Fill out the short form."
  },
  {
    title: "Step 2",
    copy: "We review your business and current marketing."
  },
  {
    title: "Step 3",
    copy: "You get a customized marketing strategy or plan."
  }
];

export default function Benefits() {
  return (
    <section className="px-5 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-brand-blue">
            How you benefit
          </p>
          <h2 className="text-3xl font-bold leading-tight text-brand-ink sm:text-4xl">
            How You Benefit From This Consultation
          </h2>
        </div>

        <div className="mt-9 grid gap-4 md:grid-cols-2">
          {benefits.map((benefit) => (
            <div
              key={benefit}
              className="flex gap-4 rounded-lg border border-brand-line bg-white p-5 shadow-sm"
            >
              <CheckCircle2
                className="mt-1 shrink-0 text-brand-blue"
                aria-hidden="true"
              />
              <p className="text-base font-semibold leading-7 text-brand-ink">
                {benefit}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-14">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-brand-blue">
            Process
          </p>
          <h3 className="text-2xl font-bold text-brand-ink">
            Process of This Consultation
          </h3>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {steps.map((step) => (
              <div
                key={step.title}
                className="rounded-lg border border-brand-line bg-white p-5 shadow-sm"
              >
                <p className="text-sm font-bold uppercase tracking-[0.14em] text-brand-blue">
                  {step.title}
                </p>
                <p className="mt-3 text-base leading-7 text-slate-600">
                  {step.copy}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
