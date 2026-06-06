import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Thank You",
  description:
    "Your free 1:1 digital marketing consultation request has been received."
};

export default function ThankYouPage() {
  redirect("/thanks");
}
