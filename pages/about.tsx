import Header from "@/components/Header";
import React from "react";
import '../app/globals.css';

const About = () => {
  return (
<div>

<div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] overflow-none">

    <Header/>
    <main className="flex flex-col items-center justify-center min-h-screen px-4">
      <h1 className="text-4xl font-bold mb-6">Tietoa Meistä</h1>
      <p className="text-lg text-center max-w-2xl">
        Tämä on meidän sivuston tietosivu. Kerromme täällä yrityksemme tarinan, palveluista, 
        ja visiosta tarjota parhaat ratkaisut kodin turvallisuuspalveluihin.
      </p>
    </main>
    </div>
    </div>
  );
};

export default About;