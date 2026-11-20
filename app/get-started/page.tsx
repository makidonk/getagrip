/* eslint-disable @next/next/no-img-element -- Keep the original image markup and CSS sizing. */
import type { Metadata } from "next";
import SiteHeader from "../components/site-header";

export const metadata: Metadata = { title: "Kom igång - Getagrip klättergym" };

export default function Page() {
  return (
    <>
      <SiteHeader activePath="/get-started" />
      <div className="hero">
        <img
          src="/assets/komigang.png"
          alt="två tjejer i sele och rep som ska klättra"
          className="hero-img komigang"
        />
        <div className="overlay">
          <h2 className="hero-title">Klättring för alla</h2>
        </div>
      </div>

      <div className="page-content">
        <div className="splitPage">
          <div className="left">
            <div className="textBlock">
              <h1>Såhär funkar det!</h1>
              <p>
                Kom förbi när som helst under öppettiderna — du behöver inte boka.
                I receptionen löser du ditt dagspass och lånar skor. Ta med
                träningskläder du kan röra dig i, och gärna en vattenflaska.
              </p>
              <p>
                Innan du börjar får du en kort genomgång av någon ur personalen.
                Vi går igenom hur du faller på mattan utan att slå dig, vad
                färgerna på greppen betyder och vilka regler som gäller i hallen.
                Det tar ungefär tjugo minuter och är gratis.
              </p>
              <p>
                Sen är det bara att klättra. Börja på de lättaste lederna även om
                de ser enkla ut — det är där du lär dig stå på fötterna.
                Personalen finns i hallen hela dagen, så peta på dem så fort du
                kör fast.
              </p>
            </div>
            <div className="textBlock">
              <h2>Ytterligare utveckling</h2>
              <p>
                Vill du klättra med rep och säkra en kompis går du vår repkurs.
                Den är en kväll lång, kostar 450 kr och ger dig ett klätterkort
                som gäller på gym i hela Sverige.
              </p>
            </div>
          </div>
          <div className="right">
            {/* jag använder mig av <span> istället för <p> för man får inte ha p inuti <summary> */}
            <div className="accordion">
              <details name="faq">
                <summary>
                  <span>Måste jag kunna något innan jag kommer?</span>
                  <img src="/assets/arrow.svg" className="arrow" alt="pil" />
                </summary>
                <p>
                  Nej. De flesta som kommer hit första gången har aldrig klättrat.
                  Du får en genomgång av personalen när du kommer, och den räcker
                  för att du ska kunna bouldra på egen hand.
                </p>
              </details>
              <details name="faq">
                <summary>
                  <span>Vad ska jag ha på mig?</span>
                  <img src="/assets/arrow.svg" className="arrow" alt="pil" />
                </summary>
                <p>
                  Vanliga träningskläder som du kan sträcka dig i. Undvik hårda
                  byxor och ta av ringar och armbandsur. Långt hår sätter du upp.
                </p>
              </details>
              <details name="faq">
                <summary>
                  <span>Behöver jag egen utrustning?</span>
                  <img src="/assets/arrow.svg" className="arrow" alt="pil" />
                </summary>
                <p>
                  Nej, du hyr klätterskor för 40 kr och kalk för 15 kr i
                  receptionen. Har du månadskort eller 10-kort ingår både skor och
                  kalk.
                </p>
              </details>
              <details name="faq">
                <summary>
                  <span>Måste jag ha med en kompis?</span>
                  <img src="/assets/arrow.svg" className="arrow" alt="pil" />
                </summary>
                <p>
                  Inte för boulder eller autobelay — det går alldeles utmärkt att
                  komma ensam. Vill du klättra på topprep behöver ni vara två som
                  båda har klätterkort.
                </p>
              </details>
              <details name="faq">
                <summary>
                  <span>Hur gammal måste man vara?</span>
                  <img src="/assets/arrow.svg" className="arrow" alt="pil" />
                </summary>
                <p>
                  Från 14 år klättrar du själv. Är du yngre är du välkommen i
                  sällskap av en vuxen, eller på någon av våra barn- och
                  ungdomsgrupper.
                </p>
              </details>
              <details name="faq">
                <summary>
                  <span>Behöver jag boka i förväg?</span>
                  <img src="/assets/arrow.svg" className="arrow" alt="pil" />
                </summary>
                <p>
                  Nej, du kan bara dyka upp. Kurser och yogaklasser bokar du
                  däremot i förväg eftersom platserna är begränsade.
                </p>
              </details>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
