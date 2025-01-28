import React from "react";
import Header from "@/components/Header";
import '../app/globals.css';
import Head from "next/head";

export default function Yrityksille() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Header />

      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start max-w-xl">
        <h2 className="text-2xl font-semibold">Tietoa Yrityksille</h2>
        
        <section className="text-lg leading-relaxed">
          <h3 className="text-xl font-semibold mt-4">Palvelumme yrityksille</h3>
          <p className="mt-2">
            Tarjoamme kattavia turvaratkaisuja yrityksille, jotka auttavat suojaamaan toimitilat, varastot ja muut liiketoimintasi tärkeät paikat.
            Meidän ratkaisumme ovat suunniteltu erityisesti yritysasiakkaille, jotka arvostavat luotettavaa ja helppokäyttöistä turvajärjestelmää.
          </p>
        </section>

        <section className="text-lg leading-relaxed mt-8">
          <h3 className="text-xl font-semibold mt-4">Miksi valita meidät?</h3>
          <ul className="list-disc pl-5 mt-2">
            <li>Edistykselliset turvatekniikat kuten liikeilmaisimet ja etäohjaus.</li>
            <li>Yökuvaus ja paloturva takaavat, että yrityksesi on turvassa 24/7.</li>
            <li>Helppokäyttöinen hallintapaneeli ja asiakastuki aina valmiina auttamaan.</li>
            <li>Joustavat palveluvaihtoehdot, jotka räätälöidään yrityksesi tarpeiden mukaan.</li>
          </ul>
        </section>

        <section className="text-lg leading-relaxed mt-8">
          <h3 className="text-xl font-semibold mt-4">Miten voimme auttaa sinua?</h3>
          <p className="mt-2">
            Olemme erikoistuneet tarjoamaan räätälöityjä turvaratkaisuja yrityksille kaikenkokoisille asiakkaille.
            Meidän tiimimme on valmis auttamaan sinua valitsemaan oikeanlaisen järjestelmän yrityksesi tarpeisiin.
          </p>
          <p className="mt-2">
            Jos olet kiinnostunut palveluistamme tai tarvitset lisätietoja, älä epäröi ottaa yhteyttä. Autamme mielellämme!
          </p>
        </section>
      </main>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <p className="text-sm text-gray-500">&copy; 2025 Yrityksille. Kaikki oikeudet pidätetään.</p>
      </footer>
    </div>
  );
}