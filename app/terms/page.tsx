import type { Metadata } from "next";
import { LegalLayout } from "@/components/legal/LegalLayout";
import { termsOfService } from "@/lib/legal/terms";

export const metadata: Metadata = {
  title: "Terms of Service | OkayChat",
  description: "The terms governing your use of the OkayChat platform.",
};

export default function TermsPage() {
  return <LegalLayout {...termsOfService} />;
}
