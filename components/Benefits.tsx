import { CalendarCheck, ClipboardList, Mail, PhoneCall, Send } from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    title: "Step 1",
    copy: "Fill up the form"
  },
  {
    icon: Mail,
    title: "Step 2",
    copy: "Receive an email with the appointment link"
  },
  {
    icon: CalendarCheck,
    title: "Step 3",
    copy: "Fill the appointment form"
  },
  {
    icon: PhoneCall,
    title: "Step 4",
    copy: "Join the 1:1 consultation call"
  },
  {
    icon: Send,
    title: "Step 5",
    copy: "Get your customized digital marketing plan for FREE"
  }
];

export default function Benefits() {
  return (
    <section className="px-5 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-brand-blue">
            Consultation process
          </p>
          <h2 className="text-3xl font-bold leading-tight text-brand-ink sm:text-4xl">
            How The Free Consultation Works
          </h2>
          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            Simple steps, no confusion. You fill the form, book the appointment,
            and get a clear plan for your business.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
            <div
              key={step.title}
              className="rounded-lg border border-brand-line bg-white p-5 shadow-sm"
            >
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-md bg-brand-soft text-brand-blue">
                <Icon aria-hidden="true" size={22} />
              </div>
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-brand-blue">
                {step.title}
              </p>
              <p className="mt-3 text-base font-semibold leading-7 text-brand-ink">
                {step.copy}
              </p>
            </div>
          )})}
        </div>
      </div>
    </section>
  );
}
