/* eslint-disable @next/next/no-img-element -- Keep the original image markup and CSS sizing. */
import type { Metadata } from "next";
import SiteHeader from "../site-header";

export const metadata: Metadata = { title: "Om oss - Getagrip klättergym" };

export default function Page() {
  return (
    <>
      <SiteHeader activePath="/about" />

      <div className="below-header"></div>
      <div className="page-content">
        <h1 className="about-title">
          Om
          <img src="/assets/getagrip.svg" alt="Getagrip" className="about-logo" />
        </h1>
        <div className="textImg">
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <p className="text-intro">
              Vi vill att klättring i Jönköping ska vara något man bara gör — inte
              något man först måste bli tillräckligt vältränad för.
            </p>
            <p>
              Getagrip startades 2019 av Nora och Mikael, som tröttnade på att
              köra till Göteborg varje helg för att komma åt en vettig vägg. De
              hittade en gammal plåtverkstad på Kabelvägen, lånade pengar av
              alldeles för många släktingar och skruvade upp de första lederna
              själva. Hallen öppnade med fyrtio problem och en kaffebryggare.
            </p>
            <p>
              Sedan dess har vi byggt ut två gånger. Idag har vi 1 400
              kvadratmeter klätteryta, ett eget ledbyggarlag, yogasal och ungefär
              tvåtusen medlemmar — från sjuåringar i barngruppen till ett gäng
              pensionärer som tagit över tisdagsförmiddagarna.
            </p>
            <p>
              Det vi bryr oss mest om är hur det känns att komma in genom dörren
              första gången. Därför har vi alltid personal ute i hallen, och
              därför lägger vi lika mycket krut på de lättaste lederna som på de
              svåraste.
            </p>
          </div>

          <img
            src="/assets/omoss.png"
            alt="Bild på grundarna av Getagrip utomhus"
            className="about-img"
          />
        </div>

        <div className="display">
          <div className="textImg-col">
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <h2>Bouldering</h2>
              <p>
                Boulder är låga klätterväggar, där man klättar utan rep och
                istället landar på en tjock matta. Vi har ett brett utbud av
                problem i olika grader på väggar i alla möjliga lutningar. Lederna
                byggs om kontinuerligt av erfarna ledbyggare
              </p>
            </div>

            <img
              src="/assets/bouldering.jpg"
              alt="boulderingvägg innomhus"
              className="img-small"
            />
          </div>
          <div className="textImg-col">
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <h2>Repklättring</h2>
              <p>
                På våra repväggar kommer du kunna klättra på topprep, autobelay
                och lead! Våra väggar är toppmoderna och har massor av roliga
                strukturer och lutningar som kommer utmana nybörjare såväl som
                proffs!
              </p>
            </div>

            <img src="/assets/rope.jpg" alt="repvägg innomhus" className="img-small" />
          </div>
        </div>

        <div className="textImg-col">
          <h2>Hitta hit!</h2>
          <p>
            Kabelvägen 4, 553 02 Jönköping. Buss 26 stannar vid Hedenstorp, tre
            minuters promenad bort, och det finns gratis parkering på baksidan av
            huset. Cykelställ under tak står direkt vid entrén.
          </p>

          <img src="/assets/map.png" alt="karta" className="map" />
        </div>
      </div>
    </>
  );
}
