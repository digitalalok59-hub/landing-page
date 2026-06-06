"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const FLODESK_SUBMIT_URL =
  "https://form.flodesk.com/forms/6a1d84f9bd894dbe346975ec/submit";

export default function FlodeskSuccessRedirect() {
  const router = useRouter();

  useEffect(() => {
    let hasRedirected = false;
    const flodeskRequests = new WeakSet<XMLHttpRequest>();
    const originalOpen = XMLHttpRequest.prototype.open;
    const originalSend = XMLHttpRequest.prototype.send;

    XMLHttpRequest.prototype.open = function patchedOpen(
      method: string,
      url: string | URL,
      async?: boolean,
      username?: string | null,
      password?: string | null
    ) {
      if (typeof url === "string" && url.includes(FLODESK_SUBMIT_URL)) {
        flodeskRequests.add(this);
      }

      if (typeof async === "boolean") {
        return originalOpen.call(this, method, url, async, username, password);
      }

      return originalOpen.call(this, method, url, true);
    };

    XMLHttpRequest.prototype.send = function patchedSend(...args) {
      if (flodeskRequests.has(this)) {
        this.addEventListener("load", () => {
          if (hasRedirected || this.status < 200 || this.status >= 300) return;

          hasRedirected = true;
          window.setTimeout(() => {
            router.push("/thanks");
          }, 1800);
        });
      }

      return originalSend.apply(this, args);
    };

    return () => {
      XMLHttpRequest.prototype.open = originalOpen;
      XMLHttpRequest.prototype.send = originalSend;
    };
  }, [router]);

  return null;
}
