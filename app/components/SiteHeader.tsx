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
    <header className="fixed inset-x-[5px] top-[5px] z-10 flex flex-col items-center justify-between gap-2.5 rounded-[40px] bg-sun p-[15px] shadow-[0_0_10px_#c29e1147] min-[700px]:flex-row min-[700px]:px-[30px] min-[700px]:py-2.5">
      <Link href="/">
        <img src="/assets/getagrip.svg" id="header-logo" className="h-fit" alt="Getagrip" />
      </Link>
      <nav className="flex flex-wrap justify-center gap-2.5 text-[24px]">
        {navigation.map(({ path, label }) => (
          <Link key={path} href={path} className={activePath === path ? "font-black" : undefined}>
            {label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
