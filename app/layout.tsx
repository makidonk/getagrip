import type { ReactNode } from "react";
import "../style.css";

/* The App Router root layout loads this stylesheet for every route. */
/* eslint-disable @next/next/no-page-custom-font */
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="sv">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Londrina+Solid:wght@100;300;400;900&family=Source+Serif+4:ital,opsz,wght@0,8..60,200..900;1,8..60,200..900&display=swap" />
      </head>
      <body>
        {children}
        <footer>
          <div className="footerContent">
            <div className="footerCol">
              <h3>Öppettider</h3>
              <p>Mån-fre 07-22<br />Lör-sön 09-20</p>
            </div>
            <div className="footerCol">
              <h3>Hitta hit</h3>
              <p>Kabelvägen 4<br />553 02 Jönköping</p>
            </div>
            <div className="footerCol">
              <h3>Kontakta oss</h3>
              <p>036-12 34 56<br />hej@getagrip.se</p>
            </div>
          </div>
          <p className="footerBottom">Getagrip® Klättergym</p>
        </footer>
      </body>
    </html>
  );
}
