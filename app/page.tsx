"use client";

import Header from "@/components/Header";
import Head from "next/head";
import { useState } from "react";
import { FormEvent } from "react";
import { supabase } from '../lib/supabaseClient';
import { getBestCompanies } from "@/components/serviceComparison";
import ConsentScript from "@/lib/ConsentScript";
import Script from "next/script";
import LocationForm from "@/components/locationSuggestions";
import FeatureSelection from "@/components/featureComponent";
import ServiceComponent from '@/components/serviceComponent';
import SpaceSizeSelection from '@/components/spaceSizeSelection';
import UrgencyTimeSelection from '@/components/urgencyTime';
import ContactInfo from '@/components/contactInfo';
import CommentsSection from '@/components/commentsSection';

export default function Home() {
  const [isServiceSelected, setIsServiceSelected] = useState(false);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);

  const handleFeatureSelect = (feature: string, checked: boolean) => {
    setSelectedFeatures((prev) =>
      checked ? [...prev, feature] : prev.filter((f) => f !== feature)
    );
  };

  const handleServiceSelection = () => {
    setIsServiceSelected(true);
  };

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
    <Head>
      <title>Vertaa kotiturvapalvelun hinnat – Kilpailuta helposti | Turvapalvelut</title>
      <meta name="description" content="Kilpailuta turvapalvelut helposti ja löydä parhaat tarjoukset alueellasi. Säästä aikaa ja rahaa vertailemalla palveluntarjoajia yhdellä lomakkeella." />
      <meta name="keywords" content="turvapalvelu, kotiturva, turvapalvelut, kilpailuta kotiturva, kotiturvatarjous, kotiturva vertailu, halpa kotiturva, koti turvapalvelu" />
      <meta name="robots" content="index, follow" />
      <meta property="og:title" content="Vertaa turvapalvelun hinnat - Kilpailuta helposti | kotiturvapalvelu" />
      <meta property="og:description" content="Löydä paras turvapalvelu alueellasi yhdellä lomakkeella. Kilpailuta ja säästä!" />
      <meta property="og:type" content="website" />
    </Head>
      <ConsentScript />
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-8LRWN45FQ4"
        async
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-8LRWN45FQ4');
        `}
      </Script>

      <div className="flex flex-col min-h-screen items-center p-4 sm:p-8 lg:p-16 gap-8">
        <Header />

        <main className="w-full flex flex-col items-center">
          <div className="flex justify-center mb-6 w-full">
            <ServiceComponent onSelect={handleServiceSelection} />
          </div>

          {isServiceSelected && (
            <div className="w-full max-w-full">
              <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <LocationForm />
                <SpaceSizeSelection />
                <UrgencyTimeSelection />
                <FeatureSelection onSelect={handleFeatureSelect} />
                <ContactInfo />
                <CommentsSection />

                <button
                  type="submit"
                  className="w-full sm:w-auto px-4 py-2 bg-foreground text-background rounded-full hover:bg-[#383838] transition-colors"
                >
                  Kilpailuta hinnat
                </button>
              </form>

              {selectedFeatures.length > 0 && (
                <ul className="mt-4 text-sm text-center">
                  {selectedFeatures.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </main>

        <footer className="flex flex-wrap gap-4 justify-center w-full mt-6"></footer>
      </div>
    </>
  );
}