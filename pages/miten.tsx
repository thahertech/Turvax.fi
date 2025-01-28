import React, { useEffect } from "react";
import Header from "@/components/Header";
import "../app/globals.css";

export default function HowItWorks() {
  useEffect(() => {
    // Create a 3D effect based on mouse movement
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX: mouseX, clientY: mouseY } = e;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      // Calculate the movement distance from the center
      const moveX = (mouseX - centerX) * 0.05;
      const moveY = (mouseY - centerY) * 0.05;

      // Apply parallax effect to the background
      const bg = document.getElementById("bg");
      if (bg) {
        bg.style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`;
      }
    };

    // Add mouse move listener
    window.addEventListener("mousemove", handleMouseMove);

    // Clean up the event listener
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] overflow-none">
              <Header />

    <div className="relative min-h-screen bg-black overflow-hidden text-white">

      {/* 3D Background for Parallax Effect */}
      <div
        id="bg"
        className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-red-700 via-gray-800 to-black opacity-70"
        style={{
          transition: "transform 0.1s ease-out",
          transformStyle: "preserve-3d",
        }}
      />
      
      <main className="relative z-10 flex flex-col gap-8 row-start-2 items-center sm:items-start max-w-screen-lg mx-auto p-8 sm:p-20">
        <h2 className="text-3xl font-semibold text-center">Miten Se Toimii?</h2>
        <p className="text-lg text-center max-w-3xl mt-4 leading-relaxed">
          Palvelumme on suunniteltu yksinkertaiseksi ja helppokäyttöiseksi. Seuraavassa on vaiheittainen ohje, joka näyttää, kuinka voit hyödyntää palveluamme.
        </p>

        {/* Step-by-Step Visual Layout */}
        <section className="flex flex-col sm:flex-row items-center justify-between mt-10 gap-16 sm:gap-20">
          {/* Step 1 */}
          <div className="flex flex-col items-center sm:items-start">
            <div className="bg-blue-500 text-white p-6 rounded-full mb-4 shadow-lg">
              <span className="material-icons text-4xl">account_circle</span>
            </div>
            <h3 className="text-xl font-semibold">1. Rekisteröidy</h3>
            <p className="text-center mt-2 text-lg max-w-xs">
              Luo tili palveluun ja täytä tarvittavat tiedot. Rekisteröinti vie vain muutaman minuutin.
            </p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center sm:items-start">
            <div className="bg-green-500 text-white p-6 rounded-full mb-4 shadow-lg">
              <span className="material-icons text-4xl">search</span>
            </div>
            <h3 className="text-xl font-semibold">2. Hae Tarpeet</h3>
            <p className="text-center mt-2 text-lg max-w-xs">
              Etsi ja valitse palvelu tai tuote, joka vastaa tarpeitasi. Voit suodattaa hakutuloksia, jotta löydät täydellisen ratkaisun.
            </p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center sm:items-start">
            <div className="bg-yellow-500 text-white p-6 rounded-full mb-4 shadow-lg">
              <span className="material-icons text-4xl">settings</span>
            </div>
            <h3 className="text-xl font-semibold">3. Räätälöi Ratkaisu</h3>
            <p className="text-center mt-2 text-lg max-w-xs">
              Valitse räätälöintivaihtoehdot ja mukauta palvelu juuri sinulle sopivaksi.
            </p>
          </div>
        </section>

        <section className="flex flex-col sm:flex-row items-center justify-between mt-10 gap-16 sm:gap-20">
          {/* Step 4 */}
          <div className="flex flex-col items-center sm:items-start">
            <div className="bg-red-500 text-white p-6 rounded-full mb-4 shadow-lg">
              <span className="material-icons text-4xl">check_circle</span>
            </div>
            <h3 className="text-xl font-semibold">4. Hyödynnä Palvelu</h3>
            <p className="text-center mt-2 text-lg max-w-xs">
              Käytä palveluamme ja nauti sen tarjoamista eduista. Meidän tiimimme on aina tukenasi, jos tarvitset apua.
            </p>
          </div>

          {/* Step 5 */}
          <div className="flex flex-col items-center sm:items-start">
            <div className="bg-blue-500 text-white p-6 rounded-full mb-4 shadow-lg">
              <span className="material-icons text-4xl">feedback</span>
            </div>
            <h3 className="text-xl font-semibold">5. Anna Palautetta</h3>
            <p className="text-center mt-2 text-lg max-w-xs">
              Jatkuvan parantamisen vuoksi, kerro meille kokemuksistasi ja ideoistasi. Tämä auttaa meitä tarjoamaan entistä parempaa palvelua.
            </p>
          </div>
        </section>
      </main>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <p className="text-sm text-gray-500">&copy; 2025 Palvelu. Kaikki oikeudet pidätetään.</p>
      </footer>
    </div>
        </div>
  );
}