import type { Metadata } from "next";
import { LegalLayout } from "@/components/legal/LegalLayout";
import { privacyPolicy } from "@/lib/legal/privacy-policy";

export const metadata: Metadata = {
  title: "Privacy Policy | OkayChat",
  description: "How OkayChat collects, uses, and protects your information.",
};

export default function PrivacyPolicyPage() {
  return <LegalLayout {...privacyPolicy} />;
}
