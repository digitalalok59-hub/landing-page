import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function Hero() {
  return (
    <section className="px-5 pb-14 pt-8 sm:pb-18 lg:pb-20">
      <div className="mx-auto max-w-6xl">
        <header className="mb-12 flex justify-center">
          <Image
            src="/dak-logo.png"
            alt="DAK Digital Marketer"
            width={180}
            height={65}
            priority
            className="h-auto w-40 sm:w-48"
          />
        </header>

        <div className="mx-auto max-w-5xl text-center">
          <div className="flex flex-col items-center">
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand-line bg-white px-4 py-2 text-sm font-bold text-brand-blue shadow-sm">
              <CheckCircle2 aria-hidden="true" size={17} />
              For Nepal-based business owners
            </p>
            <h1 className="text-4xl font-bold leading-[1.08] text-brand-ink sm:text-5xl lg:text-6xl">
              Get a Free 1:1 Digital Marketing Consultation for Your Business
            </h1>
            <p className="mt-6 max-w-3xl text-lg font-semibold leading-8 text-brand-blue sm:text-xl sm:leading-9">
              Find out what is stopping your business from getting more leads,
              customers, and sales online.
            </p>
            <p className="mt-6 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              In this free consultation, we will review your current digital
              marketing situation, understand your business goals, and give you
              a simple customized growth plan. You will know what to fix, what
              to improve, and what steps to take next to attract better
              customers through digital marketing.
            </p>
            <div className="mt-9 flex flex-col items-center gap-3">
              <a
                href="#book-call"
                className="inline-flex min-h-14 items-center justify-center gap-2 rounded-md bg-brand-blue px-7 text-base font-bold text-white shadow-soft transition hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-brand-blue/25"
              >
                Book Your FREE Call Now
                <ArrowRight aria-hidden="true" size={19} />
              </a>
              <span className="text-sm font-medium text-slate-500">
                Get clarity before spending more on ads.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
