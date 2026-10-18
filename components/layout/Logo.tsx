import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

/** OkayChat wordmark: "Okay" in ink, "Chat" in brand green — text fallback for the logo artwork. */
export function Wordmark({ className }: { className?: string }) {
  return (
    <span className={cn("font-heading text-xl font-bold tracking-tight", className)}>
      <span className="text-text">Okay</span>
      <span className="text-brand-green">Chat</span>
    </span>
  );
}

/** Header logo — OkayChat.in wordmark with the smile, swapped for the dark-mode artwork. */
export function Logo({ className, iconClassName }: { className?: string; iconClassName?: string }) {
  return (
    <Link href="/" aria-label="OkayChat home" className={cn("group flex shrink-0 items-center", className)}>
      <span className={cn("relative inline-block h-9 transition-transform duration-300 group-hover:scale-[1.03]", iconClassName)}>
        <Image
          src="/brand/okaychat-wordmark-light.png"
          alt="OkayChat"
          width={800}
          height={172}
          priority
          className="h-full w-auto dark:hidden"
        />
        <Image
          src="/brand/okaychat-wordmark-dark.png"
          alt="OkayChat"
          width={800}
          height={172}
          priority
          className="hidden h-full w-auto dark:block"
        />
      </span>
    </Link>
  );
}

/** Full OkayChat lockup (wordmark, smile and optional tagline), swapped for the dark-mode artwork. */
export function BrandLockup({ className, tagline = true }: { className?: string; tagline?: boolean }) {
  const art = tagline
    ? { name: "logo", width: 1200, height: 257, alt: "OkayChat — Simple Business Conversations" }
    : { name: "wordmark", width: 800, height: 172, alt: "OkayChat" };
  return (
    <span className={cn("relative inline-block", className)}>
      <Image
        src={`/brand/okaychat-${art.name}-light.png`}
        alt={art.alt}
        width={art.width}
        height={art.height}
        className="h-full w-auto dark:hidden"
      />
      <Image
        src={`/brand/okaychat-${art.name}-dark.png`}
        alt={art.alt}
        width={art.width}
        height={art.height}
        className="hidden h-full w-auto dark:block"
      />
    </span>
  );
}
