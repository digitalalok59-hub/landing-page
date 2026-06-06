"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Is the consultation really free?",
    answer:
      "Yes, the consultation is free. The goal is to understand your business and give you clear direction before you spend more on marketing."
  },
  {
    question: "Who is this consultation for?",
    answer:
      "It is for Nepal-based business owners who want more leads, customers, and sales from digital marketing but are not sure what to fix first."
  },
  {
    question: "What will I get inside the consultation call?",
    answer:
      "We will review your current digital marketing situation, discuss your goals, and share a simple customized growth plan for your business."
  },
  {
    question: "How long will the consultation call be?",
    answer:
      "The call is planned for about 1 hour so there is enough time to understand your business and discuss practical next steps."
  },
  {
    question: "Do I need to have a website before booking the call?",
    answer:
      "No. You can book the call even if you only have a Facebook page, Instagram page, or are just starting to take digital marketing seriously."
  },
  {
    question: "What happens after I fill up the form?",
    answer:
      "After submitting the form, you will be redirected to the thank you page. We will then contact you with the next steps for your appointment."
  },
  {
    question: "Will you help me create a marketing plan for my business?",
    answer:
      "Yes. The purpose of the call is to help you understand what is not working and what plan can help your business attract better customers."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="border-y border-brand-line bg-white px-5 py-16 sm:py-20">
      <div className="mx-auto max-w-4xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-brand-blue">
            FAQ
          </p>
          <h2 className="text-3xl font-bold leading-tight text-brand-ink sm:text-4xl">
            Questions business owners usually ask
          </h2>
        </div>

        <div className="mt-10 space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className="rounded-lg border border-brand-line bg-white shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-base font-bold text-brand-ink"
                  aria-expanded={isOpen}
                >
                  {faq.question}
                  <ChevronDown
                    className={`shrink-0 text-brand-blue transition ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                    size={20}
                  />
                </button>
                {isOpen ? (
                  <p className="border-t border-brand-line px-5 py-4 text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
                    {faq.answer}
                  </p>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
