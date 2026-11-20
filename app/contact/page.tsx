/* eslint-disable @next/next/no-img-element -- Keep the original image markup and CSS sizing. */
import type { Metadata } from "next";
import ListItem from "../components/ListItem";
import SiteHeader from "../components/SiteHeader";

export const metadata: Metadata = { title: "Kontakt - Getagrip klättergym" };

export default function Page() {
  return (
    <>
      <SiteHeader activePath="/contact" />
      <div className="pt-[140px] min-[700px]:pt-[70px]"></div>
      <div className="flex flex-col gap-[60px] px-5 py-10 min-[700px]:gap-[90px] min-[700px]:px-[30px] min-[700px]:py-[60px]">
        <h1>Kontakt</h1>
        <div className="list-columns">
          <div className="flex flex-col gap-5">
            <ListItem title="Tveka inte att höra av dig!">
              <p className="[&_a]:text-[20px] [&_a]:underline">
                <a href="tel:+4636123456">036-12 34 56</a>
                <br />
                <a href="mailto:hej@getagrip.se">hej@getagrip.se</a>
              </p>
              <p>
                Det sitter alltid någon i receptionen under öppettiderna. Mejl
                svarar vi på inom en arbetsdag (men oftast innom en timme).
              </p>
            </ListItem>
          </div>
          <div className="flex flex-col gap-5">
            <ListItem
              title="Öppettider"
              rows={[
                { title: "Mån-fre", value: "07-22" },
                { title: "Lördag", value: "09-20" },
                { title: "Söndag och helgdag", value: "09-20" },
              ]}
              divider
            />
            <ListItem
              title="Avvikande dagar"
              rows={[
                { title: "Midsommarafton", value: "Stängt" },
                { title: "Midsommardagen", value: "10-16" },
                { title: "Julafton", value: "Stängt" },
                { title: "Nyårsafton", value: "09-15" },
              ]}
            />
          </div>
          <div className="flex flex-col gap-5">
            <ListItem title="Hitta hit">
              <p>
                Kabelvägen 4, 553 02 Jönköping. Buss 26 stannar vid Hedenstorp,
                tre minuters promenad bort, och det finns gratis parkering på
                baksidan av huset.
              </p>
              <a href="https://www.google.com/maps/search/?api=1&amp;query=Kabelv%C3%A4gen+4+J%C3%B6nk%C3%B6ping">
                <img
                  src="/assets/map.png"
                  alt="Karta till Getagrip, öppnas i Google Maps"
                  className="w-full max-w-[600px]"
                />
              </a>
            </ListItem>
          </div>
        </div>
      </div>
    </>
  );
}
