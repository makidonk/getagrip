/* eslint-disable @next/next/no-img-element -- Keep the original image markup and CSS sizing. */
import type { Metadata } from "next";
import ListItem from "../components/ListItem";
import SiteHeader from "../components/SiteHeader";

export const metadata: Metadata = { title: "Kontakt - Getagrip klättergym" };

export default function Page() {
  return (
    <>
      <SiteHeader activePath="/contact" />
      <div className="below-header"></div>
      <div className="page-content">
        <h1>Kontakt</h1>
        <div className="price-container">
          <div className="priceCol">
            <ListItem title="Tveka inte att höra av dig!">
              <p className="contact-links">
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
          <div className="priceCol">
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
          <div className="priceCol">
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
                  className="map"
                />
              </a>
            </ListItem>
          </div>
        </div>
      </div>
    </>
  );
}
