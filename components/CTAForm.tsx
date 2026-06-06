import { readFileSync } from "node:fs";
import { join } from "node:path";
import { LockKeyhole } from "lucide-react";
import Script from "next/script";
import FlodeskSuccessRedirect from "./FlodeskSuccessRedirect";

function getFlodeskEmbed() {
  try {
    return readFileSync(join(process.cwd(), "public", "flodesk-embed.html"), "utf8");
  } catch {
    return "";
  }
}

export default function CTAForm() {
  const flodeskEmbed = getFlodeskEmbed();
  const flodeskScripts = Array.from(
    flodeskEmbed.matchAll(/<script>([\s\S]*?)<\/script>/g)
  )
    .map((match) => match[1])
    .join("\n");
  const flodeskMarkup = flodeskEmbed.replace(
    /<script>[\s\S]*?<\/script>/g,
    ""
  );

  return (
    <section id="book-call" className="scroll-mt-6 px-5 pb-20 sm:pb-24">
      <div className="mx-auto grid max-w-6xl gap-10 rounded-[28px] border border-brand-line/80 bg-white/55 p-5 shadow-soft backdrop-blur sm:p-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
        <div className="lg:sticky lg:top-8">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-brand-blue">
            Final step
          </p>
          <h2 className="max-w-xl text-3xl font-bold leading-tight text-brand-ink sm:text-4xl lg:text-5xl">
            Book Your FREE 1:1 Consultation Call
          </h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            Fill up the form below and we’ll contact you with the next steps.
          </p>
          <div className="mt-8 flex max-w-xl items-center gap-3 rounded-2xl border border-brand-line bg-white p-5 text-sm font-semibold text-slate-600 shadow-sm">
            <LockKeyhole
              className="shrink-0 text-brand-blue"
              size={19}
              aria-hidden="true"
            />
            We respect your privacy. No spam.
          </div>
        </div>

        <div className="rounded-[22px] border border-brand-line bg-white p-5 shadow-soft sm:p-8">
          {flodeskEmbed ? (
            <>
              <div
                className="flodesk-form-shell"
                dangerouslySetInnerHTML={{ __html: flodeskMarkup }}
              />
              <Script
                // The script contents come directly from the Flodesk embed.
                id="flodesk-embed-script"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: flodeskScripts }}
              />
              <FlodeskSuccessRedirect />
            </>
          ) : (
            <p className="rounded-md bg-red-50 p-4 text-sm font-semibold text-red-700">
              The booking form could not load. Please refresh the page.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
