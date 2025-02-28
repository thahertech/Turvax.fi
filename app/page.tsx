"use client";

import Header from "@/components/Header";
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
      <div className="flex flex-row justify-center">
        <ServiceComponent />
      </div>
        <div className="w-full hero-content">
        </div>


  
        <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:w-256">
        <LocationForm />
        <SpaceSizeSelection />
        <UrgencyTimeSelection />
        <FeatureSelection />
        <ContactInfo />
        <CommentsSection />

          <button type="submit" 
          className="w-full mt-4 bg-foreground text-background py-2 rounded-full hover:bg-[#383838] transition-colors sm:col-span-3">
            Kilpailuta hinnat
          </button>
        </form>
      </main>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
    </>
  );
}