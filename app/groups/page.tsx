/* eslint-disable @next/next/no-img-element -- Keep the original image markup and CSS sizing. */
import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../components/SiteHeader";

export const metadata: Metadata = {
  title: "Grupper & kurser - Getagrip klättergym",
};

export default function Page() {
  return (
    <>
      <SiteHeader activePath="/groups" />

      {/* hero bild likt startsidan fast som inte tar upp hela heighten */}
      <div className="relative h-[50dvh] w-full overflow-hidden">
        <img
          src="/assets/grupper-hero.png"
          alt="klättrare på en matta framför en klättervägg"
          className="size-full object-cover object-center"
        />
        <h1 className="absolute inset-x-[30px] bottom-[25px] text-white">
          Topprep, träningsgrupp, barnkalas eller after work?
        </h1>
      </div>

      <div className="flex flex-col gap-[60px] px-5 py-10 min-[700px]:gap-[90px] min-[700px]:px-[30px] min-[700px]:py-[60px]">
        <p className="max-w-[900px] text-[26px]/[1.3]">
          Vill du klättra med samma gäng varje vecka, lära dig säkra med rep
          eller fira födelsedag på väggen? Här finns allt vi har utöver vanlig
          klättring. Anmäl dig direkt under den aktivitet du är sugen på.
        </p>

        <div className="flex flex-col gap-5">
          <h2>Våra träningsgrupper</h2>
          <div className="grid grid-cols-[1fr] gap-5 min-[700px]:grid-cols-[repeat(auto-fill,minmax(320px,1fr))]">
            <div className="group/activity flex flex-col gap-3 rounded-[3px] transition-[background-color] duration-[250ms] ease-[ease] [&:hover]:bg-coral-tint focus-within:bg-coral-tint min-[700px]:p-[15px] [&_h3]:font-body [&_h3]:text-[26px] [&_h4]:mt-2.5 [&_h4]:font-body [&_h4]:text-[22px] [&_img]:aspect-[4/3] [&_img]:w-full [&_img]:object-cover">
              <h3>Vuxengrupp - intro</h3>
              <img
                src="/assets/vuxengrupp.jpg"
                alt="Vuxengruppen står mot en klättervägg och några klättrar"
              />
              <p>
                För dig som är ny eller har klättrat några gånger och vill komma
                igång på riktigt. Vi går igenom fotteknik, hur du vilar på
                väggen och hur du läser ett problem.
              </p>
              <p>
                Gruppen är max tolv personer och ses två gånger i veckan med
                samma ledare hela terminen.
              </p>
              <p className="font-medium">
                Tisdagar 19.15
                <br />
                Söndagar 15.00
                <br />
                <br />
                Pris 1 700 kr/termin
              </p>
              <h4>Anmälan</h4>
              <form className="flex flex-col gap-2.5 [&_label]:flex [&_label]:flex-col [&_label]:gap-1 [&_label]:font-body [&_label]:text-[15px] [&_:is(input,select)]:rounded-none [&_:is(input,select)]:border [&_:is(input,select)]:border-black [&_:is(input,select)]:bg-transparent [&_:is(input,select)]:p-2 [&_:is(input,select)]:font-body [&_:is(input,select)]:text-[16px]">
                <label>
                  Förnamn
                  <input type="text" name="fornamn" required />
                </label>
                <label>
                  Efternamn
                  <input type="text" name="efternamn" required />
                </label>
                <label>
                  E-post
                  <input type="email" name="epost" required />
                </label>
                <button type="submit">Skicka anmälan</button>
              </form>
            </div>
            <div className="group/activity flex flex-col gap-3 rounded-[3px] transition-[background-color] duration-[250ms] ease-[ease] [&:hover]:bg-coral-tint focus-within:bg-coral-tint min-[700px]:p-[15px] [&_h3]:font-body [&_h3]:text-[26px] [&_h4]:mt-2.5 [&_h4]:font-body [&_h4]:text-[22px] [&_img]:aspect-[4/3] [&_img]:w-full [&_img]:object-cover">
              <h3>Barngrupp - intro</h3>
              <img
                src="/assets/child.jpg"
                alt="En liten tjej står på grepp på väggen"
              />
              <p>
                För barn 7-12 år. Vi klättrar både boulder och topprep, leker
                och lär oss säkerhet på ett sätt som känns roligt.
              </p>
              <p>Föräldrar behöver inte vara med under passet.</p>
              <p className="font-medium">
                Onsdagar 17.00
                <br />
                Lördagar 10.00
                <br />
                <br />
                Pris 1 400 kr/termin
              </p>
              <h4>Anmälan</h4>
              <form className="flex flex-col gap-2.5 [&_label]:flex [&_label]:flex-col [&_label]:gap-1 [&_label]:font-body [&_label]:text-[15px] [&_:is(input,select)]:rounded-none [&_:is(input,select)]:border [&_:is(input,select)]:border-black [&_:is(input,select)]:bg-transparent [&_:is(input,select)]:p-2 [&_:is(input,select)]:font-body [&_:is(input,select)]:text-[16px]">
                <label>
                  Barnets namn
                  <input type="text" name="barn" required />
                </label>
                <label>
                  Barnets ålder
                  <input type="number" name="alder" required />
                </label>
                <label>
                  Förälderns e-post
                  <input type="email" name="epost" required />
                </label>
                <button type="submit">Skicka anmälan</button>
              </form>
            </div>
            <div className="group/activity flex flex-col gap-3 rounded-[3px] transition-[background-color] duration-[250ms] ease-[ease] [&:hover]:bg-coral-tint focus-within:bg-coral-tint min-[700px]:p-[15px] [&_h3]:font-body [&_h3]:text-[26px] [&_h4]:mt-2.5 [&_h4]:font-body [&_h4]:text-[22px] [&_img]:aspect-[4/3] [&_img]:w-full [&_img]:object-cover">
              <h3>Ungdomsgrupp</h3>
              <img
                src="/assets/ungdomsgrupp.jpg"
                alt="En tonårstjej hänger upponer"
              />
              <p>
                För dig som är 13-17 år och vill träna mer än en gång i veckan.
                Teknik, styrka och utomhusklättring på våren.
              </p>
              <p className="font-medium">
                Torsdagar 18.00
                <br />
                Lördagar 13.00
                <br />
                <br />
                Pris 1 400 kr/termin
              </p>
              <p className="mt-2.5 italic [&_a]:underline">
                Fullt den här terminen. <Link href="/contact">Hör av dig</Link>{" "}
                så sätter vi upp dig på väntelistan.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <h2>Kurser</h2>
          <div className="grid grid-cols-[1fr] gap-5 min-[700px]:grid-cols-[repeat(auto-fill,minmax(320px,1fr))]">
            <div className="group/activity flex flex-col gap-3 rounded-[3px] transition-[background-color] duration-[250ms] ease-[ease] [&:hover]:bg-coral-tint focus-within:bg-coral-tint min-[700px]:p-[15px] [&_h3]:font-body [&_h3]:text-[26px] [&_h4]:mt-2.5 [&_h4]:font-body [&_h4]:text-[22px] [&_img]:aspect-[4/3] [&_img]:w-full [&_img]:object-cover">
              <h3>Repkurs</h3>
              <img src="/assets/repkurs.jpg" alt="två tjejer hänger i rep" />
              <p>
                Lär dig knyta in dig, säkra med repbroms och kolla din kompis
                innan hen lämnar marken. Kursen avslutas med ett prov som ger
                dig ett klätterkort som gäller på gym i hela Sverige.
              </p>
              <p className="font-medium">
                En kväll, 18-21
                <br />
                Varannan torsdag
                <br />
                <br />
                Pris 450 kr
              </p>
              <h4>Anmälan</h4>
              <form className="flex flex-col gap-2.5 [&_label]:flex [&_label]:flex-col [&_label]:gap-1 [&_label]:font-body [&_label]:text-[15px] [&_:is(input,select)]:rounded-none [&_:is(input,select)]:border [&_:is(input,select)]:border-black [&_:is(input,select)]:bg-transparent [&_:is(input,select)]:p-2 [&_:is(input,select)]:font-body [&_:is(input,select)]:text-[16px]">
                <label>
                  Förnamn
                  <input type="text" name="fornamn" required />
                </label>
                <label>
                  Efternamn
                  <input type="text" name="efternamn" required />
                </label>
                <label>
                  E-post
                  <input type="email" name="epost" required />
                </label>
                <label>
                  Datum
                  <select name="datum">
                    <option>15 oktober</option>
                    <option>29 oktober</option>
                    <option>12 november</option>
                  </select>
                </label>
                <button type="submit">Skicka anmälan</button>
              </form>
            </div>
            <div className="group/activity flex flex-col gap-3 rounded-[3px] transition-[background-color] duration-[250ms] ease-[ease] [&:hover]:bg-coral-tint focus-within:bg-coral-tint min-[700px]:p-[15px] [&_h3]:font-body [&_h3]:text-[26px] [&_h4]:mt-2.5 [&_h4]:font-body [&_h4]:text-[22px] [&_img]:aspect-[4/3] [&_img]:w-full [&_img]:object-cover">
              <h3>Leadkurs</h3>
              <img
                src="/assets/leadkurs.jpg"
                alt="En klättrare säkrar en annan klättrare"
              />
              <p>
                För dig som redan har klätterkort och vill ta med repet upp
                själv. Vi går igenom klippning, fall och hur du säkrar mjukt när
                din kompis ramlar.
              </p>
              <p className="font-medium">
                Två kvällar, 18-21
                <br />
                Måndag och onsdag samma vecka
                <br />
                <br />
                Pris 900 kr
              </p>
              <h4>Anmälan</h4>
              <form className="flex flex-col gap-2.5 [&_label]:flex [&_label]:flex-col [&_label]:gap-1 [&_label]:font-body [&_label]:text-[15px] [&_:is(input,select)]:rounded-none [&_:is(input,select)]:border [&_:is(input,select)]:border-black [&_:is(input,select)]:bg-transparent [&_:is(input,select)]:p-2 [&_:is(input,select)]:font-body [&_:is(input,select)]:text-[16px]">
                <label>
                  Förnamn
                  <input type="text" name="fornamn" required />
                </label>
                <label>
                  Efternamn
                  <input type="text" name="efternamn" required />
                </label>
                <label>
                  E-post
                  <input type="email" name="epost" required />
                </label>
                <label>
                  Datum
                  <select name="datum">
                    <option>2 och 4 november</option>
                    <option>7 och 9 december</option>
                  </select>
                </label>
                <button type="submit">Skicka anmälan</button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[15px]">
          <h2>Kalas och after work</h2>
          <div className="grid grid-cols-[1fr] gap-5 min-[700px]:grid-cols-[repeat(auto-fill,minmax(320px,1fr))]">
            <div className="group/activity flex flex-col gap-3 rounded-[3px] transition-[background-color] duration-[250ms] ease-[ease] [&:hover]:bg-coral-tint focus-within:bg-coral-tint min-[700px]:p-[15px] [&_h3]:font-body [&_h3]:text-[26px] [&_h4]:mt-2.5 [&_h4]:font-body [&_h4]:text-[22px] [&_img]:aspect-[4/3] [&_img]:w-full [&_img]:object-cover">
              <h3>Barnkalas</h3>
              <img src="/assets/barnkalas.jpg" alt="kalasfirande" />
              <p>
                Två timmar med egen instruktör, skor och selar, och ett
                färdigdekorerat rum där ni kan äta tårta efteråt. Passar barn
                från sex år.
              </p>
              <p className="font-medium">
                Lördagar och söndagar
                <br />
                Upp till 12 barn
                <br />
                <br />
                Från 300 kr/barn
              </p>
              <h4>Anmälan</h4>
              <form className="flex flex-col gap-2.5 [&_label]:flex [&_label]:flex-col [&_label]:gap-1 [&_label]:font-body [&_label]:text-[15px] [&_:is(input,select)]:rounded-none [&_:is(input,select)]:border [&_:is(input,select)]:border-black [&_:is(input,select)]:bg-transparent [&_:is(input,select)]:p-2 [&_:is(input,select)]:font-body [&_:is(input,select)]:text-[16px]">
                <label>
                  Ditt namn
                  <input type="text" name="namn" required />
                </label>
                <label>
                  E-post
                  <input type="email" name="epost" required />
                </label>
                <label>
                  Antal barn
                  <input type="number" name="antal" required />
                </label>
                <label>
                  Önskat datum
                  <input type="date" name="datum" required />
                </label>
                <button type="submit">Skicka förfrågan</button>
              </form>
            </div>
            <div className="group/activity flex flex-col gap-3 rounded-[3px] transition-[background-color] duration-[250ms] ease-[ease] [&:hover]:bg-coral-tint focus-within:bg-coral-tint min-[700px]:p-[15px] [&_h3]:font-body [&_h3]:text-[26px] [&_h4]:mt-2.5 [&_h4]:font-body [&_h4]:text-[22px] [&_img]:aspect-[4/3] [&_img]:w-full [&_img]:object-cover">
              <h3>After work och företag</h3>
              <img
                src="/assets/afterwork.jpg"
                alt="kollegor bouldrar tillsammans"
              />
              <p>
                Ta med jobbet eller kompisgänget en kväll. En instruktör visar
                hur väggen funkar och sedan klättrar ni så länge ni orkar.
              </p>
              <p className="font-medium">
                Vardagar efter 16
                <br />
                6-20 personer
                <br />
                <br />
                Från 250 kr/person
              </p>
              <h4>Anmälan</h4>
              <form className="flex flex-col gap-2.5 [&_label]:flex [&_label]:flex-col [&_label]:gap-1 [&_label]:font-body [&_label]:text-[15px] [&_:is(input,select)]:rounded-none [&_:is(input,select)]:border [&_:is(input,select)]:border-black [&_:is(input,select)]:bg-transparent [&_:is(input,select)]:p-2 [&_:is(input,select)]:font-body [&_:is(input,select)]:text-[16px]">
                <label>
                  Ditt namn
                  <input type="text" name="namn" required />
                </label>
                <label>
                  E-post
                  <input type="email" name="epost" required />
                </label>
                <label>
                  Antal personer
                  <input type="number" name="antal" required />
                </label>
                <label>
                  Önskat datum
                  <input type="date" name="datum" required />
                </label>
                <button type="submit">Skicka förfrågan</button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex w-fit items-center justify-center self-center rounded-[30px] bg-coral p-5">
          <p className="max-w-[900px] text-[26px]/[1.3]">
            Letar du efter något lugnare?{" "}
            <Link href="/yoga">Kolla våra yogaklasser</Link>.
          </p>
        </div>
      </div>
    </>
  );
}
