import Header from "@/components/Header";


export default function Home() {
  return (
    <div>
{/* <Image 
  src={heroImg}
  width={1440}
  objectFit="cover" 
  alt="bg-image"
  className="max-w-full relative w-full h-auto -z-10"
/> */}
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] overflow-none">
    <Header/>

          <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <div className="w-full hero-content border">
  <h3>

  </h3>
</div>
      
  <h1>Kilpailuta hinta</h1>
  
  <form className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:w-256">
  {/* Location */}
  <div className="flex flex-col">
    <label htmlFor="location" className="text-sm font-semibold">
      Sijainti
    </label>
    <input
      type="text"
      id="location"
      name="location"
      className="mt-2 p-2 border border-gray-300 text-black rounded-lg"
      placeholder="Esim. Helsinki, Tampere"
      required
    />
  </div>

  {/* Size of Space */}
  <div className="flex flex-col">
    <label htmlFor="spaceSize" className="text-sm font-semibold">
      Tilan koko (m²)
    </label>
    <select
      id="spaceSize"
      name="spaceSize"
      className="mt-2 p-2 border border-gray-300 text-black rounded-lg"
      required
    >
      <option value="small">Alle 50 m²</option>
      <option value="medium">51-150 m²</option>
      <option value="large">Yli 150 m²</option>
    </select>
  </div>

  {/* Type of House */}
  <div className="flex flex-col">
    <label htmlFor="houseType" className="text-sm font-semibold">
      Talotyyppi
    </label>
    <select
      id="houseType"
      name="houseType"
      className="mt-2 p-2 border border-gray-300 text-black rounded-lg"
      required
    >
      <option value="apartment">Kerrostalo</option>
      <option value="detached">Omakotitalo</option>
      <option value="rowhouse">Rivitalo</option>
      <option value="cottage">Mökki</option>
      <option value="commercial">Toimitila</option>
      <option value="other">Muu</option>
    </select>
  </div>

  {/* Ajankohta of service */}
  <div className="flex flex-col">
    <label htmlFor="urgencyTime" className="text-sm font-semibold">
      Ajankohta
    </label>
    <select
      id="urgencyTime"
      name="urgencyTime"
      className="mt-2 p-2 border border-gray-300 text-black rounded-lg"
      required
    >
      <option value="3months">3 kk</option>
      <option value="6months">6 kk</option>
      <option value="1year">1 vuosi</option>
      <option value="other">Muu</option>
    </select>
  </div>

    {/* Ajankohta of service */}
    <div className="flex flex-col">
    <label htmlFor="urgencyTime" className="text-sm font-semibold">
      Ajankohta
    </label>
    <select
      id="urgencyTime"
      name="urgencyTime"
      className="mt-2 p-2 border border-gray-300 text-black rounded-lg"
      required
    >
      <option value="3months">3 kk</option>
      <option value="6months">6 kk</option>
      <option value="1year">1 vuosi</option>
      <option value="other">Muu</option>
    </select>
  </div>

    {/* Ajankohta of service */}
    <div className="flex flex-col">
    <label htmlFor="urgencyTime" className="text-sm font-semibold">
      Ajankohta
    </label>
    <select
      id="urgencyTime"
      name="urgencyTime"
      className="mt-2 p-2 border border-gray-300 text-black rounded-lg"
      required
    >
      <option value="3months">3 kk</option>
      <option value="6months">6 kk</option>
      <option value="1year">1 vuosi</option>
      <option value="other">Muu</option>
    </select>
  </div>

  {/* Features */}
  <div className="flex flex-col sm:col-span-2">
    <label className="text-sm font-semibold">Oma arvio</label>
    <div className="mt-2">
      <div className="flex items-center gap-2 mb-2">
        <input
          type="checkbox"
          id="motionDetection"
          name="features"
          value="motionDetection"
          className="h-5 w-5"
        />
        <label htmlFor="motionDetection" className="text-sm">Liikeilmaisin</label>
      </div>
      <div className="flex items-center gap-2 mb-2">
        <input
          type="checkbox"
          id="remoteControl"
          name="features"
          value="remoteControl"
          className="h-5 w-5"
        />
        <label htmlFor="remoteControl" className="text-sm">Etäohjaus</label>
      </div>
      <div className="flex items-center gap-2 mb-2">
        <input
          type="checkbox"
          id="fireSafety"
          name="features"
          value="fireSafety"
          className="h-5 w-5"
        />
        <label htmlFor="fireSafety" className="text-sm">Paloturva</label>
      </div>
      <div className="flex items-center gap-2 mb-2">
        <input
          type="checkbox"
          id="waterLeakProtection"
          name="features"
          value="waterLeakProtection"
          className="h-5 w-5"
        />
        <label htmlFor="waterLeakProtection" className="text-sm">Vesivuototurva</label>
      </div>
      <div className="flex items-center gap-2 mb-2">
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

  {/* Features */}
  <div className="flex flex-col sm:col-span-2">
    <label className="text-sm font-semibold">Halutut ominaisuudet</label>
    <div className="mt-2">
      <div className="flex items-center gap-2 mb-2">
        <input
          type="checkbox"
          id="motionDetection"
          name="features"
          value="motionDetection"
          className="h-5 w-5"
        />
        <label htmlFor="motionDetection" className="text-sm">Liikeilmaisin</label>
      </div>
      <div className="flex items-center gap-2 mb-2">
        <input
          type="checkbox"
          id="remoteControl"
          name="features"
          value="remoteControl"
          className="h-5 w-5"
        />
        <label htmlFor="remoteControl" className="text-sm">Etäohjaus</label>
      </div>
      <div className="flex items-center gap-2 mb-2">
        <input
          type="checkbox"
          id="fireSafety"
          name="features"
          value="fireSafety"
          className="h-5 w-5"
        />
        <label htmlFor="fireSafety" className="text-sm">Paloturva</label>
      </div>
      <div className="flex items-center gap-2 mb-2">
        <input
          type="checkbox"
          id="waterLeakProtection"
          name="features"
          value="waterLeakProtection"
          className="h-5 w-5"
        />
        <label htmlFor="waterLeakProtection" className="text-sm">Vesivuototurva</label>
      </div>
      <div className="flex items-center gap-2 mb-2">
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


<div className="text-black flex col-span-3  mt-12">
    <input
      type="text"
      id="email"
      name="email"
      placeholder="Sähköposti"
      className="mt-2 p-2 w-1/3 text-gray-800 border border-gray-300 rounded-lg "

    />

    <input
      type="text"
      id="numero"
      name="numero"
      placeholder="Puhelinnumero"
      className="mt-2 p-2 ml-10 w-4/3 text-gray-800 border border-gray-300 rounded-lg"

    />

  </div>



  {/* Vapaa Sana */}
  <div className="flex flex-col text-black col-span-3 mt-12">
    <label htmlFor="comments" className="text-sm text-black font-semibold">
      Vapaa Sana
    </label>
    <textarea
      id="comments"
      name="comments"
      rows={4}
      className="mt-2 p-2 text-gray-800 border border-gray-300 rounded-lg"
      placeholder="Kirjoita tarkempia tietoja..."
    ></textarea>
  </div>
</form>

    {/* Submit Button */}
    <button
      type="submit"
      className="w-full mt-4 bg-foreground text-background py-2 rounded-full hover:bg-[#383838] transition-colors sm:col-span-2"
    >
      Kilpailuta hinnat
    </button>

</main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
     
      </footer>
    </div>
    </div>
  );
}