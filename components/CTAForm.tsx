"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { LockKeyhole } from "lucide-react";

export default function CTAForm() {
  const router = useRouter();
  const embedRef = useRef<HTMLDivElement>(null);
  const [loadError, setLoadError] = useState(false);

  useEffect(() => {
    let isMounted = true;
    let redirectTimer: number | undefined;
    let observer: MutationObserver | undefined;

    async function loadFlodeskEmbed() {
      try {
        document
          .querySelectorAll('[data-local-flodesk-script="true"]')
          .forEach((script) => script.remove());

        const response = await fetch("/flodesk-embed.html", {
          cache: "no-store"
        });

        if (!response.ok) {
          throw new Error("Flodesk embed could not be loaded.");
        }

        const html = await response.text();
        if (!isMounted || !embedRef.current) return;

        embedRef.current.innerHTML = html;

        const scripts = Array.from(embedRef.current.querySelectorAll("script"));
        scripts.forEach((oldScript) => {
          const script = document.createElement("script");

          Array.from(oldScript.attributes).forEach((attribute) => {
            script.setAttribute(attribute.name, attribute.value);
          });

          script.setAttribute("data-local-flodesk-script", "true");
          script.textContent = oldScript.textContent;
          document.body.appendChild(script);
          oldScript.remove();
        });

        const flodeskRoot = embedRef.current.querySelector(
          '[data-ff-el="root"]'
        );

        if (!flodeskRoot) return;

        const redirectAfterFlodeskSuccess = () => {
          if (redirectTimer) return;

          redirectTimer = window.setTimeout(() => {
            router.push("/thanks");
          }, 1800);
        };

        observer = new MutationObserver(() => {
          const stage = flodeskRoot.getAttribute("data-ff-stage");
          const successBlock = embedRef.current?.querySelector(
            '[data-ff-el="success"]'
          );
          const successVisible =
            successBlock &&
            window.getComputedStyle(successBlock).display !== "none";

          if (stage === "success" || successVisible) {
            redirectAfterFlodeskSuccess();
          }
        });

        observer.observe(flodeskRoot, {
          attributes: true,
          attributeFilter: ["data-ff-stage"],
          childList: true,
          subtree: true
        });
      } catch {
        if (isMounted) setLoadError(true);
      }
    }

    loadFlodeskEmbed();

    return () => {
      isMounted = false;
      observer?.disconnect();
      if (redirectTimer) window.clearTimeout(redirectTimer);
    };
  }, [router]);

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
          {loadError ? (
            <p className="rounded-md bg-red-50 p-4 text-sm font-semibold text-red-700">
              The booking form could not load. Please refresh the page.
            </p>
          ) : null}
          <div ref={embedRef} className="flodesk-form-shell" />
        </div>
      </div>
    </section>
  );
}
