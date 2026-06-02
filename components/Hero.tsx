import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function Hero() {
  return (
    <section className="px-5 pb-8 pt-6 sm:pb-10 lg:pb-12">
      <div className="mx-auto max-w-6xl">
        <header className="mb-12 flex items-center justify-between">
          <Image
            src="/dak-logo.png"
            alt="DAK Digital Marketer"
            width={180}
            height={65}
            priority
            className="h-auto w-32 sm:w-40"
          />
          <a
            href="#book-call"
            className="inline-flex h-11 items-center justify-center rounded-md border border-brand-line bg-white px-4 text-sm font-bold text-brand-blue shadow-sm transition hover:border-brand-blue focus:outline-none focus:ring-4 focus:ring-brand-blue/20"
          >
            Book Free Consultation
          </a>
        </header>

        <div className="mx-auto max-w-4xl text-center">
          <div className="flex flex-col items-center">
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand-line bg-white px-4 py-2 text-sm font-bold text-brand-blue shadow-sm">
              <CheckCircle2 aria-hidden="true" size={17} />
              Free 1:1 digital marketing consultation
            </p>
            <h1 className="text-4xl font-bold leading-[1.08] text-brand-ink sm:text-5xl lg:text-6xl">
              Get a Customized Marketing Plan to Grow Your Business Online
            </h1>
            <p className="mt-6 max-w-3xl text-lg font-semibold leading-8 text-brand-blue sm:text-xl sm:leading-9">
              Book a Free 1:1 Digital Marketing Consultation. We will look at
              your business and show you what needs to improve.
            </p>
            <p className="mt-6 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base sm:leading-7">
              For business owners who are posting, boosting, or trying online
              marketing but not getting enough customers. Get a clear strategy
              made for your business.
            </p>
            <div className="mt-9 flex flex-col items-center gap-3">
              <a
                href="#book-call"
                className="inline-flex min-h-14 items-center justify-center gap-2 rounded-md bg-brand-blue px-7 text-base font-bold text-white shadow-soft transition hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-brand-blue/25"
              >
                Book Free Consultation
                <ArrowRight aria-hidden="true" size={19} />
              </a>
              <span className="text-sm font-medium text-slate-500">
                Customized Strategy for Your Business
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
