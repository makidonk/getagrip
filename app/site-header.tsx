/* eslint-disable @next/next/no-img-element -- Keep the original image markup and CSS sizing. */
import Link from "next/link";

const navigation = [
  { path: "/get-started", label: "Kom igång" },
  { path: "/prices", label: "Priser" },
  { path: "/about", label: "Om oss" },
  { path: "/groups", label: "Grupper&Kurser" },
  { path: "/yoga", label: "Yoga" },
  { path: "/contact", label: "Kontakt" },
];

export default function SiteHeader({ activePath }: { activePath: string }) {
  return (
    <header>
      <Link href="/">
        <img src="/assets/getagrip.svg" id="header-logo" alt="Getagrip" />
      </Link>
      <nav>
        {navigation.map(({ path, label }) => (
          <Link key={path} href={path} className={activePath === path ? "selected" : undefined}>
            {label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
