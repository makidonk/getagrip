/* eslint-disable @next/next/no-img-element -- Keep the original image markup and CSS sizing. */
import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../components/site-header";

export const metadata: Metadata = { title: "Yoga - Getagrip klättergym" };

export default function Page() {
  return (
    <>
      <SiteHeader activePath="/yoga" />
      <div className="hero-small">
        <img
          src="/assets/yoga-hero.png"
          alt="Yogaklass i yogasalen på Getagrip"
          className="hero-img"
        />
        <h1 className="heroCaption">Yoga för klättrare - och alla andra</h1>
      </div>
      <div className="page-content">
        <p className="text-intro">
          Klättring bygger starka fingrar och stela höfter. I yogasalen på
          övervåningen jobbar vi med det andra. Klasserna ingår i månadskort,
          10-kort och prova-på-veckan, annars kostar en klass 90 kr.
        </p>
        <div className="cardsDisplay">
          <h2>Veckans klasser</h2>
          <div className="cardGrid">
            <div className="activityCard">
              <div className="class-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="-6 -6 76 76">
                  <circle cx="32" cy="15" r="6.5" fill="currentColor" />
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M32 30 L32 41" strokeWidth="14" />
                    <path
                      d="M29 42 Q28 50 28 57 M35 42 Q36 50 36 57"
                      strokeWidth="9"
                    />
                    <path
                      d="M30 29 Q14 26 17 6 M34 29 Q50 26 47 6"
                      strokeWidth="8"
                    />
                  </g>
                </svg>
              </div>
              <h3>Morgonflow</h3>

              <p>
                Vakna upp kroppen med mjuka, flytande rörelser och lugn andning.
                Vi värmer upp leder och muskler steg för steg, så att du går
                därifrån pigg men inte slut. Passar alla, även dig som aldrig
                provat yoga.
              </p>
              <p className="card-info">
                Måndagar 07.00<br />Onsdagar 07.00<br /><br />Ingår i kortet,
                annars 90 kr (betalas på plats)
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
                  Tillfälle
                  <select name="tillfalle">
                    <option>Måndag 07.00</option>
                    <option>Onsdag 07.00</option>
                  </select>
                </label>
                <button type="submit">Boka plats</button>
              </form>
            </div>

            <div className="activityCard">
              <div className="class-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="-6 -6 76 76"
                  aria-hidden="true"
                >
                  <circle cx="14" cy="50" r="6.5" fill="currentColor" />
                  <path
                    d="M24 51 C23 35 44 28 53 43 C57 50 55 57 47 57 L29 57 C26 57 24 55 24 51 Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <h3>Yin</h3>

              <p>
                Här stannar du länge i varje position, ofta flera minuter, och
                låter tyngdkraften göra jobbet. Fokus ligger på att släppa
                spänningar djupt i bindväv och leder. Perfekt efter en tung
                klätterdag eller när huvudet behöver vila.
              </p>
              <p className="card-info">
                Tisdagar 18.30<br />Torsdagar 18.30<br /><br />Ingår i kortet,
                annars 90 kr (betalas på plats)
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
                  Tillfälle
                  <select name="tillfalle">
                    <option>Tisdag 18.30</option>
                    <option>Torsdag 18.30</option>
                  </select>
                </label>
                <button type="submit">Boka plats</button>
              </form>
            </div>
            <div className="activityCard">
              <div className="class-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="-6 -6 76 76"
                  aria-hidden="true"
                >
                  <circle cx="32" cy="14" r="6.5" fill="currentColor" />
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M32 29 L32 39" strokeWidth="14" />
                    <path d="M8 29 Q32 23 56 29" strokeWidth="8" />
                    <path
                      d="M30 41 L16 56 M34 41 Q46 41 47 56"
                      strokeWidth="9"
                    />
                  </g>
                </svg>
              </div>
              <h3>Vinyasa</h3>

              <p>
                Ett mer dynamiskt flöde där varje rörelse följer andningen. Du
                bygger styrka och balans samtidigt som du blir rörligare, och
                passet har ett tydligt tempo utan att bli stressigt. Bra om du har
                gått några pass förut och vill ta nästa steg.
              </p>
              <p className="card-info">
                Tisdagar 07.00<br />Torsdagar 07.00<br /><br />Ingår i kortet,
                annars 90 kr (betalas på plats)
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
                  Tillfälle
                  <select name="tillfalle">
                    <option>Tisdag 07.00</option>
                    <option>Torsdag 07.00</option>
                  </select>
                </label>
                <button type="submit">Boka plats</button>
              </form>
            </div>
            <div className="activityCard">
              <div className="class-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="-6 -6 76 76"
                  aria-hidden="true"
                >
                  <circle cx="11" cy="30" r="6.5" fill="currentColor" />
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M23 37 L55 49" strokeWidth="12" />
                    <path d="M25 39 L24 55" strokeWidth="8" />
                  </g>
                </svg>
              </div>
              <h3>Power yoga</h3>
              <p>
                Yogans svar på ett gympass. Högt tempo, tuffa positioner och
                mycket styrka i bål, axlar och ben. Räkna med att bli svettig. Du
                bör känna till grundpositionerna innan du hoppar på.
              </p>
              <p className="card-info">
                Fredagar 17.30<br />Lördagar 12.00<br /><br />Ingår i kortet,
                annars 90 kr (betalas på plats)
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
                  Tillfälle
                  <select name="tillfalle">
                    <option>Fredag 17.30</option>
                    <option>Lördag 12.00</option>
                  </select>
                </label>
                <button type="submit">Boka plats</button>
              </form>
            </div>
            <div className="activityCard">
              <div className="class-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="-6 -6 76 76"
                  aria-hidden="true"
                >
                  <circle cx="32" cy="22" r="6" fill="currentColor" />
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M32 34 L32 43" strokeWidth="14" />
                    <path d="M28 32 Q8 18 32 3 Q56 18 36 32" strokeWidth="7" />
                    <path d="M31 45 L31 60" strokeWidth="9" />
                    <path d="M34 45 L45 50 L35 54" strokeWidth="8" />
                  </g>
                </svg>
              </div>
              <h3>Ashtanga</h3>
              <p>
                En klassisk, krävande stil där du går igenom samma fasta serie
                positioner varje gång. Upprepningen gör att du ser tydliga
                framsteg över tid, men serien tar tid att lära sig. För dig med
                yogaerfarenhet som vill ha en utmaning och struktur.
              </p>
              <p className="card-info">
                Söndagar 10.00<br /><br />Ingår i kortet, annars 90 kr (betalas på
                plats)
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
                  Tillfälle
                  <select name="tillfalle">
                    <option>Söndag 10.00</option>
                  </select>
                </label>
                <button type="submit">Boka plats</button>
              </form>
            </div>
          </div>
        </div>

        <div className="slab">
          <p className="text-intro">
            Hellre upp på väggen?{" "}
            <Link href="/groups">Se våra grupper och kurser</Link>.
          </p>
        </div>
      </div>
    </>
  );
}
