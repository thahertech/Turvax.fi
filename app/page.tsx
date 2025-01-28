import Image from "next/image";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
          <Header />

      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h2>
          Kilpailuta hinta
        </h2>
        {/* <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        /> */}
       
       <form className="flex flex-col gap-6 sm:w-64">
  {/* Location */}
  <div className="flex flex-col">
    <label htmlFor="location" className="text-sm font-semibold">
      Sijainti
    </label>
    <input
      type="text"
      id="location"
      name="location"
      className="mt-2 p-2 border border-gray-300 rounded-lg"
      placeholder="Esim. Helsinki, Tampere"
      required
    />
  </div>

  {/* Size of Space */}
  <div className="flex flex-col color-black">
    <label htmlFor="spaceSize" className="text-sm font-semibold">
      Tilan koko (m²)
    </label>
    <select
      id="spaceSize"
      name="spaceSize"
      className="mt-2 p-2 border border-gray-300 rounded-lg"
      required
    >
      <option value="small">Alle 50 m²</option>
      <option value="medium">51-150 m²</option>
      <option value="large">Yli 150 m²</option>
    </select>
  </div>

  {/* Features */}
  <div className="flex flex-col">
    <label className="text-sm font-semibold">Halutut ominaisuudet</label>
    <div className="mt-2">
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          id="motionDetection"
          name="features"
          value="motionDetection"
          className="h-5 w-5"
        />
        <label htmlFor="motionDetection" className="text-sm">Liikeilmaisin</label>
      </div>
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          id="remoteControl"
          name="features"
          value="remoteControl"
          className="h-5 w-5"
        />
        <label htmlFor="remoteControl" className="text-sm">Etäohjaus</label>
      </div>
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          id="nightVision"
          name="features"
          value="nightVision"
          className="h-5 w-5"
        />
        <label htmlFor="nightVision" className="text-sm">Yökuvaus</label>
      </div>
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          id="smartHomeIntegration"
          name="features"
          value="smartHomeIntegration"
          className="h-5 w-5"
        />
        <label htmlFor="smartHomeIntegration" className="text-sm">Älykoti-integraatio</label>
      </div>
    </div>
  </div>

 

  {/* Submit Button */}
  <button
    type="submit"
    className="w-full mt-4 bg-foreground text-background py-2 rounded-full hover:bg-[#383838] transition-colors"
  >
    Kilpailuta hinnat
  </button>
</form>
      
      </main>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
     
      </footer>
    </div>
  );
}