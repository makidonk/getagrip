/* eslint-disable @next/next/no-img-element -- Keep the original image markup and CSS sizing. */
import type { Metadata } from "next";
import SiteHeader from "../site-header";

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
            <div className="priceBox">
              <h2>Tveka inte att höra av dig!</h2>
              <p className="contact-links">
                <a href="tel:+4636123456">036-12 34 56</a><br />
                <a href="mailto:hej@getagrip.se">hej@getagrip.se</a>
              </p>
              <p>
                Det sitter alltid någon i receptionen under öppettiderna. Mejl
                svarar vi på inom en arbetsdag (men oftast innom en timme).
              </p>
            </div>
          </div>
          <div className="priceCol">
            <div className="priceBox">
              <h2>Öppettider</h2>
              <ul className="priceList">
                <li className="pricelist-item">
                  <p>Mån-fre</p>
                  <p className="value">07-22</p>
                </li>
                <li className="pricelist-item">
                  <p>Lördag</p>
                  <p className="value">09-20</p>
                </li>
                <li className="pricelist-item">
                  <p>Söndag och helgdag</p>
                  <p className="value">09-20</p>
                </li>
              </ul>
              <div className="line"></div>
            </div>
            <div className="priceBox">
              <h2>Avvikande dagar</h2>
              <ul className="priceList">
                <li className="pricelist-item">
                  <p>Midsommarafton</p>
                  <p className="value">Stängt</p>
                </li>
                <li className="pricelist-item">
                  <p>Midsommardagen</p>
                  <p className="value">10-16</p>
                </li>
                <li className="pricelist-item">
                  <p>Julafton</p>
                  <p className="value">Stängt</p>
                </li>
                <li className="pricelist-item">
                  <p>Nyårsafton</p>
                  <p className="value">09-15</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="priceCol">
            <div className="priceBox">
              <h2>Hitta hit</h2>
              <p>
                Kabelvägen 4, 553 02 Jönköping. Buss 26 stannar vid Hedenstorp,
                tre minuters promenad bort, och det finns gratis parkering på
                baksidan av huset.
              </p>
              <a
                href="https://www.google.com/maps/search/?api=1&amp;query=Kabelv%C3%A4gen+4+J%C3%B6nk%C3%B6ping"
              >
                <img
                  src="/assets/map.png"
                  alt="Karta till Getagrip, öppnas i Google Maps"
                  className="map"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
