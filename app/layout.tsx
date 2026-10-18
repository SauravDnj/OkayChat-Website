import type { Metadata } from "next";
import { Space_Grotesk, Urbanist } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/ui/ScrollProgress";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-urbanist",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.okaychat.in"),
  title: "OkayChat | Customer Engagement, WhatsApp, CRM & AI Automation Platform",
  description:
    "OkayChat brings WhatsApp, multi-channel communication, CRM, chatbots, automation, payments, interactive experiences, dynamic content, and AI together in one customer engagement platform.",
  keywords: [
    "WhatsApp business automation",
    "WhatsApp CRM",
    "WhatsApp chatbot",
    "customer engagement platform",
    "chatbot automation",
    "business automation platform",
    "conversational CRM",
    "WhatsApp automation",
    "WhatsApp Mini-App",
    "AI customer engagement",
  ],
  applicationName: "OkayChat",
  openGraph: {
    type: "website",
    siteName: "OkayChat",
    title: "OkayChat — Simple Business Conversations.",
    description:
      "Automate. Engage. Grow. OkayChat brings customer conversations, CRM, chatbots, automation, interactive experiences, payments, dynamic content, analytics, and AI together in one connected platform.",
    images: [{ url: "/brand/okaychat-og.png", width: 1200, height: 630, alt: "OkayChat — Simple Business Conversations" }],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      data-scroll-behavior="smooth"
      className={`${spaceGrotesk.variable} ${urbanist.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg text-text">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <ScrollProgress />
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
