import React from "react";
import Header from "@/components/Header";
import '../app/globals.css';
import Head from "next/head";

export default function Faq() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Header />

      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start max-w-xl">
        <h2 className="text-2xl font-semibold">Usein Kysytyt Kysymykset (FAQ)</h2>

        {/* FAQ Section */}
        <section className="text-lg leading-relaxed mt-8">
          <h3 className="text-xl font-semibold mt-4">Mikä on palvelunne tarkoitus?</h3>
          <p className="mt-2">
            Tarjoamme turvallisia ja luotettavia turvaratkaisuja yrityksille, jotka suojaavat toimitilat, varastot ja muut tärkeät liiketoimintapaikat.
            Ratkaisumme auttavat yrityksiä varmistamaan 24/7 suojauksen.
          </p>
        </section>

        <section className="text-lg leading-relaxed mt-8">
          <h3 className="text-xl font-semibold mt-4">Miten palvelu toimii?</h3>
          <p className="mt-2">
            Palvelumme tarjoaa yrityksille laajan valikoiman turvatekniikoita, kuten liikeilmaisimia, etäohjausta, paloturvaa ja yökuvausta.
            Kaikki nämä toiminnot voidaan helposti hallita hallintapaneelissamme.
          </p>
        </section>

        <section className="text-lg leading-relaxed mt-8">
          <h3 className="text-xl font-semibold mt-4">Miten voin ottaa yhteyttä tukeen?</h3>
          <p className="mt-2">
            Voit ottaa yhteyttä asiakastukeemme sähköpostitse tai puhelimitse. Meillä on myös live-chat käytettävissä verkkosivustollamme.
          </p>
        </section>

        <section className="text-lg leading-relaxed mt-8">
          <h3 className="text-xl font-semibold mt-4">Kuinka voin räätälöidä palvelun tarpeitani varten?</h3>
          <p className="mt-2">
            Me tarjoamme joustavia palveluvaihtoehtoja, jotka räätälöidään yrityksesi erityistarpeiden mukaan. Ota yhteyttä, niin keskustelemme tarpeistasi tarkemmin.
          </p>
        </section>

        <section className="text-lg leading-relaxed mt-8">
          <h3 className="text-xl font-semibold mt-4">Onko palvelu saatavilla kaikkialla Suomessa?</h3>
          <p className="mt-2">
            Kyllä, palvelumme on saatavilla kaikkialla Suomessa. Meillä on paikallisia tiimejä, jotka voivat palvella asiakkaita eri puolilla maata.
          </p>
        </section>
      </main>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <p className="text-sm text-gray-500">&copy; 2025 Yrityksille. Kaikki oikeudet pidätetään.</p>
      </footer>
    </div>
  );
}