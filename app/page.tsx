"use client";

import Header from "@/components/Header";
import LocationForm from "@/components/locationSuggestions";
import { FiInfo } from "react-icons/fi";
import { FormEvent } from "react";
import { supabase } from '../lib/supabaseClient';
import { getBestCompanies } from "@/components/serviceComparison";
import ConsentScript from "@/lib/ConsentScript";
import Script from "next/script";

export default function Home() {
  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const data = Object.fromEntries(formData.entries());

    try {
      const spaceSize = String(data.spaceSize);
      
      const checkedFeatures = Array.from(
        document.querySelectorAll('input[name="features"]:checked')
      ).map((checkbox) => (checkbox as HTMLInputElement).value);

      const { data: savedRequest, error } = await supabase
        .from('requests')
        .insert([{
          name: data.name,
          email: data.email,
          phone: data.phone,
          spacesize: spaceSize,
          urgencytime: data.urgencyTime,
          features: checkedFeatures,
          comments: data.comments || '',
          location: data.location
        }])
        .select();

        console.log(savedRequest);
      if (error) {
        console.error("Error saving request: ", error);
        return;
      }

      const savedRequestData = savedRequest[0];

      const criteria = {
        location: savedRequestData.location,
        spaceSize: savedRequestData.spaceSize,
        houseType: savedRequestData.houseType,
        urgency: savedRequestData.urgencyTime,
        features: savedRequestData.features,
      };

      const selectedProviders = await getBestCompanies(criteria);

      if (!selectedProviders || selectedProviders.length === 0) {
        console.log("No suitable service providers found.");
        return;
      }

     
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <>
  <ConsentScript />

      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-8LRWN45FQ4"
        async
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
      >
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-8LRWN45FQ4');
        `}
      </Script>

    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] overflow-none">
      <Header />
  
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="w-full hero-content">
          <h3>Hälytysjärjestelmien kilpailutus</h3>
        </div>

        <h1>Kilpailuta hinta</h1>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:w-256">
          <LocationForm />

          <div className="flex flex-col">
            <label htmlFor="spaceSize" className="text-sm font-semibold">
              Tilan koko (m²)
            </label>
            <select id="spaceSize" name="spaceSize" className="mt-2 p-2 border border-gray-300 text-black rounded-lg" required>
              <option value="small">Alle 50 m²</option>
              <option value="medium">51-150 m²</option>
              <option value="large">Yli 150 m²</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label htmlFor="urgencyTime" className="text-sm font-semibold flex items-center flex-row">
              Ajankohta
              <span className="ml-2 cursor-pointer">
                <FiInfo title="Palvelun ajankohdan arvio." />
              </span>
            </label>
            <select id="urgencyTime" name="urgencyTime" className="mt-2 p-2 border border-gray-300 text-black rounded-lg" required>
              <option value="3months">3 kk</option>
              <option value="6months">6 kk</option>
              <option value="1year">1 vuosi</option>
              <option value="other">Muu</option>
            </select>
          </div>

                    <div className="flex flex-col sm:col-span-2">
            <label className="text-sm font-semibold flex items-center flex-row">
              Ominaisuudet
              <span className="ml-2 cursor-pointer">
                <FiInfo title="Select the features that you think are important for your service." />
              </span>
            </label>
            <div className="mt-2">
              {[
                'Liikeilmaisin', 
                'Etäohjaus', 
                'Paloturva', 
                'Vesivuototurva', 
                'Yökuvaus', 
                'Älykoti-integraatio'
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-2 mb-2">
                  <input
                    type="checkbox"
                    id={feature}
                    name="features"
                    value={feature}
                    className="h-5 w-5"
                  />
                  <label htmlFor={feature} className="text-sm">{feature}</label>
                </div>
              ))}
            </div>
          </div>


          <div className="text-black flex col-span-3 mt-12">
            <input type="text" id="name" name="name" placeholder="Nimi" className="mt-2 p-2 w-1/3 text-gray-800 border border-gray-300 rounded-lg" required />
            <input type="email" id="email" name="email" placeholder="Sähköposti" className="mt-2 ml-10 p-2 w-1/3 text-gray-800 border border-gray-300 rounded-lg" required />
            <input type="text" id="phone" name="phone" placeholder="Puhelinnumero" className="mt-2 p-2 ml-10 w-4/3 text-gray-800 border border-gray-300 rounded-lg" />
          </div>

          <div className="flex flex-col text-black col-span-3 mt-12">
            <label htmlFor="comments" className="text-sm font-semibold">
              Vapaa Sana
            </label>
            <textarea id="comments" name="comments" rows={4} className="mt-2 p-2 text-gray-800 border border-gray-300 rounded-lg" placeholder="Kirjoita tarkempia tietoja..."></textarea>
          </div>

          <button type="submit" className="w-full mt-4 bg-foreground text-background py-2 rounded-full hover:bg-[#383838] transition-colors sm:col-span-3">
            Kilpailuta hinnat
          </button>
        </form>
      </main>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
    </>
  );
}