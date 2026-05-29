"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { LockKeyhole } from "lucide-react";

type FormState = {
  fullName: string;
  email: string;
  whatsapp: string;
  businessName: string;
  url: string;
  message: string;
};

type Errors = Partial<Record<keyof FormState, string>>;

const initialState: FormState = {
  fullName: "",
  email: "",
  whatsapp: "",
  businessName: "",
  url: "",
  message: ""
};

export default function CTAForm() {
  const router = useRouter();
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Errors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  function updateField(field: keyof FormState, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
    if (errors[field]) {
      setErrors((current) => ({ ...current, [field]: undefined }));
    }
  }

  function validate() {
    const nextErrors: Errors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!form.fullName.trim()) nextErrors.fullName = "Full Name is required.";
    if (!form.email.trim()) {
      nextErrors.email = "Active Email is required.";
    } else if (!emailPattern.test(form.email)) {
      nextErrors.email = "Please enter a valid email address.";
    }
    if (!form.whatsapp.trim()) {
      nextErrors.whatsapp = "WhatsApp Number is required.";
    }
    if (!form.businessName.trim()) {
      nextErrors.businessName = "Business Name is required.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    window.setTimeout(() => {
      router.push("/thank-you");
    }, 450);
  }

  return (
    <section id="book-call" className="scroll-mt-6 px-5 pb-20 sm:pb-24">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div className="lg:sticky lg:top-8">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-brand-blue">
            Book the call
          </p>
          <h2 className="text-3xl font-bold leading-tight text-brand-ink sm:text-4xl">
            1:1 Consultation
          </h2>
          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            Customized Strategy for Your Business
          </p>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Fill the form and book your free consultation today.
          </p>
          <div className="mt-7 flex items-center gap-3 rounded-lg border border-brand-line bg-white p-4 text-sm font-semibold text-slate-600 shadow-sm">
            <LockKeyhole
              className="shrink-0 text-brand-blue"
              size={19}
              aria-hidden="true"
            />
            We respect your privacy. No spam.
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          noValidate
          className="rounded-lg border border-brand-line bg-white p-5 shadow-soft sm:p-7"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <Field
              label="Full Name"
              id="fullName"
              value={form.fullName}
              placeholder="Enter your full name"
              error={errors.fullName}
              required
              onChange={(value) => updateField("fullName", value)}
            />
            <Field
              label="Active Email"
              id="email"
              type="email"
              value={form.email}
              placeholder="you@example.com"
              error={errors.email}
              required
              onChange={(value) => updateField("email", value)}
            />
            <Field
              label="WhatsApp Number"
              id="whatsapp"
              value={form.whatsapp}
              placeholder="+977 98XXXXXXXX"
              error={errors.whatsapp}
              required
              onChange={(value) => updateField("whatsapp", value)}
            />
            <Field
              label="Business Name"
              id="businessName"
              value={form.businessName}
              placeholder="Your business name"
              error={errors.businessName}
              required
              onChange={(value) => updateField("businessName", value)}
            />
            <div className="sm:col-span-2">
              <Field
                label="Website / Facebook URL"
                id="url"
                type="url"
                value={form.url}
                placeholder="https://yourwebsite.com or Facebook page"
                error={errors.url}
                onChange={(value) => updateField("url", value)}
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-bold text-brand-ink"
              >
                Anything you want to say
              </label>
              <textarea
                id="message"
                value={form.message}
                onChange={(event) => updateField("message", event.target.value)}
                placeholder="Tell us what you want to improve."
                rows={5}
                className="w-full resize-y rounded-md border border-slate-300 bg-white px-4 py-3 text-base text-brand-ink outline-none transition placeholder:text-slate-400 focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/10"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-7 inline-flex min-h-14 w-full items-center justify-center rounded-md bg-brand-blue px-6 text-base font-bold text-white shadow-soft transition hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-brand-blue/25 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isSubmitting ? "Booking..." : "Book Free Consultation"}
          </button>
          <p className="mt-4 text-center text-sm font-medium text-slate-500">
            We respect your privacy. No spam.
          </p>
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  id,
  value,
  placeholder,
  error,
  required = false,
  type = "text",
  onChange
}: {
  label: string;
  id: string;
  value: string;
  placeholder: string;
  error?: string;
  required?: boolean;
  type?: string;
  onChange: (value: string) => void;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-bold text-brand-ink">
        {label}
        {required ? <span className="text-brand-blue"> *</span> : null}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        required={required}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        placeholder={placeholder}
        onChange={(event) => onChange(event.target.value)}
        className="h-12 w-full rounded-md border border-slate-300 bg-white px-4 text-base text-brand-ink outline-none transition placeholder:text-slate-400 focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/10"
      />
      {error ? (
        <p id={`${id}-error`} className="mt-2 text-sm font-semibold text-red-600">
          {error}
        </p>
      ) : null}
    </div>
  );
}
