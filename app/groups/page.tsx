/* eslint-disable @next/next/no-img-element -- Keep the original image markup and CSS sizing. */
import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../components/site-header";

export const metadata: Metadata = { title: "Grupper & kurser - Getagrip klättergym" };

export default function Page() {
  return (
    <>
      <SiteHeader activePath="/groups" />

      {/* hero bild likt startsidan fast som inte tar upp hela heighten */}
      <div className="hero-small">
        <img
          src="/assets/grupper-hero.png"
          alt="klättrare på en matta framför en klättervägg"
          className="hero-img"
        />
        <h1 className="heroCaption">
          Topprep, träningsgrupp, barnkalas eller after work?
        </h1>
      </div>

      <div className="page-content">
        <p className="text-intro">
          Vill du klättra med samma gäng varje vecka, lära dig säkra med rep eller
          fira födelsedag på väggen? Här finns allt vi har utöver vanlig
          klättring. Anmäl dig direkt under den aktivitet du är sugen på.
        </p>

        <div className="cardsDisplay">
          <h2>Våra träningsgrupper</h2>
          <div className="cardGrid">
            <div className="activityCard">
              <h3>Vuxengrupp - intro</h3>
              <img
                src="/assets/vuxengrupp.jpg"
                alt="Vuxengruppen står mot en klättervägg och några klättrar"
              />
              <p>
                För dig som är ny eller har klättrat några gånger och vill komma
                igång på riktigt. Vi går igenom fotteknik, hur du vilar på väggen
                och hur du läser ett problem.
              </p>
              <p>
                Gruppen är max tolv personer och ses två gånger i veckan med samma
                ledare hela terminen.
              </p>
              <p className="card-info">
                Tisdagar 19.15<br />Söndagar 15.00<br /><br />Pris 1 700 kr/termin
              </p>
              <h4>Anmälan</h4>
              <form className="signupForm">
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
            <div className="activityCard">
              <h3>Barngrupp - intro</h3>
              <img
                src="/assets/child.jpg"
                alt="En liten tjej står på grepp på väggen"
              />
              <p>
                För barn 7-12 år. Vi klättrar både boulder och topprep, leker och
                lär oss säkerhet på ett sätt som känns roligt.
              </p>
              <p>Föräldrar behöver inte vara med under passet.</p>
              <p className="card-info">
                Onsdagar 17.00<br />Lördagar 10.00<br /><br />Pris 1 400 kr/termin
              </p>
              <h4>Anmälan</h4>
              <form className="signupForm">
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
            <div className="activityCard">
              <h3>Ungdomsgrupp</h3>
              <img
                src="/assets/ungdomsgrupp.jpg"
                alt="En tonårstjej hänger upponer"
              />
              <p>
                För dig som är 13-17 år och vill träna mer än en gång i veckan.
                Teknik, styrka och utomhusklättring på våren.
              </p>
              <p className="card-info">
                Torsdagar 18.00<br />Lördagar 13.00<br /><br />Pris 1 400
                kr/termin
              </p>
              <p className="card-full">
                Fullt den här terminen.{" "}
                <Link href="/contact">Hör av dig</Link> så sätter vi upp dig på
                väntelistan.
              </p>
            </div>
          </div>
        </div>
        <div className="cardsDisplay">
          <h2>Kurser</h2>
          <div className="cardGrid">
            <div className="activityCard">
              <h3>Repkurs</h3>
              <img src="/assets/repkurs.jpg" alt="två tjejer hänger i rep" />
              <p>
                Lär dig knyta in dig, säkra med repbroms och kolla din kompis
                innan hen lämnar marken. Kursen avslutas med ett prov som ger dig
                ett klätterkort som gäller på gym i hela Sverige.
              </p>
              <p className="card-info">
                En kväll, 18-21<br />Varannan torsdag<br /><br />Pris 450 kr
              </p>
              <h4>Anmälan</h4>
              <form className="signupForm">
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
            <div className="activityCard">
              <h3>Leadkurs</h3>
              <img
                src="/assets/leadkurs.jpg"
                alt="En klättrare säkrar en annan klättrare"
              />
              <p>
                För dig som redan har klätterkort och vill ta med repet upp själv.
                Vi går igenom klippning, fall och hur du säkrar mjukt när din
                kompis ramlar.
              </p>
              <p className="card-info">
                Två kvällar, 18-21<br />Måndag och onsdag samma vecka<br /><br />Pris
                900 kr
              </p>
              <h4>Anmälan</h4>
              <form className="signupForm">
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
        <div className="textBlock">
          <h2>Kalas och after work</h2>
          <div className="cardGrid">
            <div className="activityCard">
              <h3>Barnkalas</h3>
              <img src="/assets/barnkalas.jpg" alt="kalasfirande" />
              <p>
                Två timmar med egen instruktör, skor och selar, och ett
                färdigdekorerat rum där ni kan äta tårta efteråt. Passar barn från
                sex år.
              </p>
              <p className="card-info">
                Lördagar och söndagar<br />Upp till 12 barn<br /><br />Från 300
                kr/barn
              </p>
              <h4>Anmälan</h4>
              <form className="signupForm">
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
            <div className="activityCard">
              <h3>After work och företag</h3>
              <img
                src="/assets/afterwork.jpg"
                alt="kollegor bouldrar tillsammans"
              />
              <p>
                Ta med jobbet eller kompisgänget en kväll. En instruktör visar hur
                väggen funkar och sedan klättrar ni så länge ni orkar.
              </p>
              <p className="card-info">
                Vardagar efter 16<br />6-20 personer<br /><br />Från 250 kr/person
              </p>
              <h4>Anmälan</h4>
              <form className="signupForm">
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
        <div className="slab">
          <p className="text-intro">
            Letar du efter något lugnare?{" "}
            <Link href="/yoga">Kolla våra yogaklasser</Link>.
          </p>
        </div>
      </div>
    </>
  );
}
