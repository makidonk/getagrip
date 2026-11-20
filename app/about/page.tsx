/* eslint-disable @next/next/no-img-element -- Keep the original image markup and CSS sizing. */
import type { Metadata } from "next";
import SiteHeader from "../components/SiteHeader";

export const metadata: Metadata = { title: "Om oss - Getagrip klättergym" };

export default function Page() {
  return (
    <>
      <SiteHeader activePath="/about" />

      <div className="pt-[140px] min-[700px]:pt-[70px]"></div>
      <div className="flex flex-col gap-[60px] px-5 py-10 min-[700px]:gap-[90px] min-[700px]:px-[30px] min-[700px]:py-[60px]">
        <h1 className="flex h-20 items-center gap-5 text-[50px]">
          Om
          <img
            src="/assets/getagrip.svg"
            alt="Getagrip"
            className="h-full"
          />
        </h1>
        <div className="flex flex-col gap-[15px] min-[700px]:grid min-[700px]:grid-cols-[1fr_40%]">
          <div className="flex flex-col gap-5">
            <p className="max-w-[900px] text-[26px]/[1.3]">
              Vi vill att klättring i Jönköping ska vara något man bara gör —
              inte något man först måste bli tillräckligt vältränad för.
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
              kvadratmeter klätteryta, ett eget ledbyggarlag, yogasal och
              ungefär tvåtusen medlemmar — från sjuåringar i barngruppen till
              ett gäng pensionärer som tagit över tisdagsförmiddagarna.
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
            className="w-full self-center"
          />
        </div>

        <div className="flex flex-col gap-[30px] min-[700px]:grid min-[700px]:grid-cols-[1fr_1fr] min-[700px]:gap-5">
          <div className="flex flex-col gap-[15px]">
            <div className="flex flex-col gap-2.5">
              <h2>Bouldering</h2>
              <p>
                Boulder är låga klätterväggar, där man klättar utan rep och
                istället landar på en tjock matta. Vi har ett brett utbud av
                problem i olika grader på väggar i alla möjliga lutningar.
                Lederna byggs om kontinuerligt av erfarna ledbyggare
              </p>
            </div>

            <img
              src="/assets/bouldering.jpg"
              alt="boulderingvägg innomhus"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
          <div className="flex flex-col gap-[15px]">
            <div className="flex flex-col gap-2.5">
              <h2>Repklättring</h2>
              <p>
                På våra repväggar kommer du kunna klättra på topprep, autobelay
                och lead! Våra väggar är toppmoderna och har massor av roliga
                strukturer och lutningar som kommer utmana nybörjare såväl som
                proffs!
              </p>
            </div>

            <img
              src="/assets/rope.jpg"
              alt="repvägg innomhus"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col gap-[15px]">
          <h2>Hitta hit!</h2>
          <p>
            Kabelvägen 4, 553 02 Jönköping. Buss 26 stannar vid Hedenstorp, tre
            minuters promenad bort, och det finns gratis parkering på baksidan
            av huset. Cykelställ under tak står direkt vid entrén.
          </p>

          <img src="/assets/map.png" alt="karta" className="w-full max-w-[600px]" />
        </div>
      </div>
    </>
  );
}
