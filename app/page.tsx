/* eslint-disable @next/next/no-img-element -- Keep the original image markup and CSS sizing. */
import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "./components/SiteHeader";

export const metadata: Metadata = { title: "Startsida - Getagrip klättergym" };

export default function Page() {
  return (
    <>
      {/*
        i detta projektet har jag använt mig av en llm för att skriva de flesta långa texterna,
        och genom att generera svg-illustrationer för yoga-sidan.

        jag har skrivit en del kommentarer i html och en del i css om hur jag har gjort.
      */}
      <SiteHeader activePath="/" />

      {/* heron är en stor bild två svgs över. i css har jag satt bilden till relative och 
      svgerna till absolute så att de ska placeras relativt till bilen men över flödet. 
      */}
      <div className="hero">
        <img
          src="/assets/heroImg.png"
          alt="en kille som klättrar"
          className="startpage-hero-img"
        />
        <div className="scroll">
          <img src="/assets/scroll.svg" alt="scrolla för att se mer" />
        </div>
        <div className="overlay">
          <img src="/assets/getagrip.svg" id="hero-logo" alt="Getagrip" />
        </div>
      </div>
      {/* page-content använder jag för att kunna sätta 
       en gemensam padding runt om och sätta gap mellan alla element */}
      <div className="page-content">
        <div className="slab">
          <p className="text-intro">
            1 400 kvadratmeter vägg mitt i Jönköping. Boulder, rep och yoga
            under samma tak — och ingen som höjer på ögonbrynen för att du
            aldrig har klättrat förut.
          </p>
        </div>

        <div className="textBlock">
          <h1>Ny till klättring?</h1>
          <p>
            Du behöver ingen utrustning, ingen förkunskap och ingen kompis att
            komma med. Kom förbi i träningskläder, så fixar vi skorna och visar
            dig hur väggen funkar. Första gången tar ungefär en timme innan du
            är igång på egen hand.
            <br />
            <br />
            Vi har personal i hallen hela öppettiden. Fråga dem om allt från hur
            du ska stå på en liten fotlist till var kaffet finns.
          </p>
        </div>

        <div className="display">
          <div className="textImg-col">
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <h2>Boulder</h2>
              <p>
                Låga väggar, tjocka mattor och inget rep. Du bestämmer själv när
                du klättrar och när du sitter på mattan och tjafsar om hur ett
                problem ska lösas. Vi skruvar nya leder varje vecka, så väggen
                ser aldrig likadan ut två månader i rad.
              </p>
            </div>
            <img
              src="/assets/bouldering.jpg"
              alt="boulderväggar inne i hallen"
              className="img-small"
            />
          </div>
          <div className="textImg-col">
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <h2>Rep</h2>
              <p>
                Sjutton meter vägg med topprep, autobelay och lead.
                Autobelayerna kan du använda direkt på egen hand — vill du säkra
                en kompis går du vår repkurs på en kväll och får ett kort som
                gäller i hela landet.
              </p>
            </div>
            <img
              src="/assets/rope.jpg"
              alt="repväggar inne i hallen"
              className="img-small"
            />
          </div>
        </div>

        <div className="textBlock">
          <h2>Prova en hel vecka för 249 kr</h2>
          <p>
            Sju dagar obegränsad klättring, skor och kalk ingår, och en
            introduktion med någon ur personalen. Vill du fortsätta efteråt drar
            vi av hela summan från ditt första månadskort.
            <br />
            <br />
            <Link href="/get-started">Läs hur du kommer igång</Link> eller{" "}
            <Link href="/prices">kolla priserna</Link>.
          </p>
        </div>
      </div>
    </>
  );
}
