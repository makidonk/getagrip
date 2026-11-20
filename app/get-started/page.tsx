/* eslint-disable @next/next/no-img-element -- Keep the original image markup and CSS sizing. */
import type { Metadata } from "next";
import SiteHeader from "../components/SiteHeader";

export const metadata: Metadata = { title: "Kom igång - Getagrip klättergym" };

export default function Page() {
  return (
    <>
      <SiteHeader activePath="/get-started" />
      <div className="relative h-dvh w-full overflow-hidden">
        <img
          src="/assets/komigang.png"
          alt="två tjejer i sele och rep som ska klättra"
          className="size-full object-cover object-center"
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <h2 className="text-[25vw] text-wrap text-coral min-[700px]:text-[15vw] min-[700px]:text-nowrap">Klättring för alla</h2>
        </div>
      </div>

      <div className="flex flex-col gap-[60px] px-5 py-10 min-[700px]:gap-[90px] min-[700px]:px-[30px] min-[700px]:py-[60px]">
        <div className="flex flex-col gap-5 min-[700px]:flex-row min-[700px]:gap-[30px]">
          <div className="flex flex-col gap-5 min-[700px]:grow min-[700px]:gap-[60px]">
            <div className="flex flex-col gap-[15px]">
              <h1>Såhär funkar det!</h1>
              <p>
                Kom förbi när som helst under öppettiderna — du behöver inte
                boka. I receptionen löser du ditt dagspass och lånar skor. Ta
                med träningskläder du kan röra dig i, och gärna en vattenflaska.
              </p>
              <p>
                Innan du börjar får du en kort genomgång av någon ur personalen.
                Vi går igenom hur du faller på mattan utan att slå dig, vad
                färgerna på greppen betyder och vilka regler som gäller i
                hallen. Det tar ungefär tjugo minuter och är gratis.
              </p>
              <p>
                Sen är det bara att klättra. Börja på de lättaste lederna även
                om de ser enkla ut — det är där du lär dig stå på fötterna.
                Personalen finns i hallen hela dagen, så peta på dem så fort du
                kör fast.
              </p>
            </div>
            <div className="flex flex-col gap-[15px]">
              <h2>Ytterligare utveckling</h2>
              <p>
                Vill du klättra med rep och säkra en kompis går du vår repkurs.
                Den är en kväll lång, kostar 450 kr och ger dig ett klätterkort
                som gäller på gym i hela Sverige.
              </p>
            </div>
          </div>
          <div className="min-[700px]:w-[300px]">
            {/* jag använder mig av <span> istället för <p> för man får inte ha p inuti <summary className="flex list-outside items-center justify-between gap-[5px] text-[18px]"> */}
            <div className="flex flex-col gap-[5px]">
              <details name="faq" className="group/faq cursor-pointer rounded-[3px] border border-black p-2 transition-[background-color] duration-[250ms] ease-[ease] [&:hover]:bg-coral-tint open:bg-coral-tint [&>p]:py-[5px] [&>p]:text-[14px] [&::details-content]:h-0 [&::details-content]:overflow-clip [&::details-content]:text-[18px] [&::details-content]:transition-[height] [&::details-content]:duration-[250ms] [&::details-content]:ease-[ease] [&[open]::details-content]:h-auto">
                <summary className="flex list-outside items-center justify-between gap-[5px] text-[18px]">
                  <span>Måste jag kunna något innan jag kommer?</span>
                  <img src="/assets/arrow.svg" className="w-[15px] transition-all duration-[250ms] ease-[ease] group-open/faq:rotate-180" alt="pil" />
                </summary>
                <p>
                  Nej. De flesta som kommer hit första gången har aldrig
                  klättrat. Du får en genomgång av personalen när du kommer, och
                  den räcker för att du ska kunna bouldra på egen hand.
                </p>
              </details>
              <details name="faq" className="group/faq cursor-pointer rounded-[3px] border border-black p-2 transition-[background-color] duration-[250ms] ease-[ease] [&:hover]:bg-coral-tint open:bg-coral-tint [&>p]:py-[5px] [&>p]:text-[14px] [&::details-content]:h-0 [&::details-content]:overflow-clip [&::details-content]:text-[18px] [&::details-content]:transition-[height] [&::details-content]:duration-[250ms] [&::details-content]:ease-[ease] [&[open]::details-content]:h-auto">
                <summary className="flex list-outside items-center justify-between gap-[5px] text-[18px]">
                  <span>Vad ska jag ha på mig?</span>
                  <img src="/assets/arrow.svg" className="w-[15px] transition-all duration-[250ms] ease-[ease] group-open/faq:rotate-180" alt="pil" />
                </summary>
                <p>
                  Vanliga träningskläder som du kan sträcka dig i. Undvik hårda
                  byxor och ta av ringar och armbandsur. Långt hår sätter du
                  upp.
                </p>
              </details>
              <details name="faq" className="group/faq cursor-pointer rounded-[3px] border border-black p-2 transition-[background-color] duration-[250ms] ease-[ease] [&:hover]:bg-coral-tint open:bg-coral-tint [&>p]:py-[5px] [&>p]:text-[14px] [&::details-content]:h-0 [&::details-content]:overflow-clip [&::details-content]:text-[18px] [&::details-content]:transition-[height] [&::details-content]:duration-[250ms] [&::details-content]:ease-[ease] [&[open]::details-content]:h-auto">
                <summary className="flex list-outside items-center justify-between gap-[5px] text-[18px]">
                  <span>Behöver jag egen utrustning?</span>
                  <img src="/assets/arrow.svg" className="w-[15px] transition-all duration-[250ms] ease-[ease] group-open/faq:rotate-180" alt="pil" />
                </summary>
                <p>
                  Nej, du hyr klätterskor för 40 kr och kalk för 15 kr i
                  receptionen. Har du månadskort eller 10-kort ingår både skor
                  och kalk.
                </p>
              </details>
              <details name="faq" className="group/faq cursor-pointer rounded-[3px] border border-black p-2 transition-[background-color] duration-[250ms] ease-[ease] [&:hover]:bg-coral-tint open:bg-coral-tint [&>p]:py-[5px] [&>p]:text-[14px] [&::details-content]:h-0 [&::details-content]:overflow-clip [&::details-content]:text-[18px] [&::details-content]:transition-[height] [&::details-content]:duration-[250ms] [&::details-content]:ease-[ease] [&[open]::details-content]:h-auto">
                <summary className="flex list-outside items-center justify-between gap-[5px] text-[18px]">
                  <span>Måste jag ha med en kompis?</span>
                  <img src="/assets/arrow.svg" className="w-[15px] transition-all duration-[250ms] ease-[ease] group-open/faq:rotate-180" alt="pil" />
                </summary>
                <p>
                  Inte för boulder eller autobelay — det går alldeles utmärkt
                  att komma ensam. Vill du klättra på topprep behöver ni vara
                  två som båda har klätterkort.
                </p>
              </details>
              <details name="faq" className="group/faq cursor-pointer rounded-[3px] border border-black p-2 transition-[background-color] duration-[250ms] ease-[ease] [&:hover]:bg-coral-tint open:bg-coral-tint [&>p]:py-[5px] [&>p]:text-[14px] [&::details-content]:h-0 [&::details-content]:overflow-clip [&::details-content]:text-[18px] [&::details-content]:transition-[height] [&::details-content]:duration-[250ms] [&::details-content]:ease-[ease] [&[open]::details-content]:h-auto">
                <summary className="flex list-outside items-center justify-between gap-[5px] text-[18px]">
                  <span>Hur gammal måste man vara?</span>
                  <img src="/assets/arrow.svg" className="w-[15px] transition-all duration-[250ms] ease-[ease] group-open/faq:rotate-180" alt="pil" />
                </summary>
                <p>
                  Från 14 år klättrar du själv. Är du yngre är du välkommen i
                  sällskap av en vuxen, eller på någon av våra barn- och
                  ungdomsgrupper.
                </p>
              </details>
              <details name="faq" className="group/faq cursor-pointer rounded-[3px] border border-black p-2 transition-[background-color] duration-[250ms] ease-[ease] [&:hover]:bg-coral-tint open:bg-coral-tint [&>p]:py-[5px] [&>p]:text-[14px] [&::details-content]:h-0 [&::details-content]:overflow-clip [&::details-content]:text-[18px] [&::details-content]:transition-[height] [&::details-content]:duration-[250ms] [&::details-content]:ease-[ease] [&[open]::details-content]:h-auto">
                <summary className="flex list-outside items-center justify-between gap-[5px] text-[18px]">
                  <span>Behöver jag boka i förväg?</span>
                  <img src="/assets/arrow.svg" className="w-[15px] transition-all duration-[250ms] ease-[ease] group-open/faq:rotate-180" alt="pil" />
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
