import { FiInfo } from "react-icons/fi";

export default function FeatureSelection() {
  const features = [
    "24/7 valvontakeskus",
    "Ilmainen huolto",
    "Käyttäjäystävällinen mobiilisovellus",
    "Elinikäinen tuotetakuu",
    "Älykoti-integraatio",
    "Murtohälyttimet",
    "Palo- ja häkävaroitus",
    "Vesivuotovaroitus",
    "Turvajärjestelmien asennus",
    "Etähallinta",
    "Valvontapalvelut",
    "Hälytysjärjestelmät",
    "24/7 tuki",
    "24h hälytysvalvonta",
  ];

  return (
    <div>
      <label className="text-sm font-semibold flex items-center flex-row">
        Ominaisuudet
        <span className="ml-2 cursor-pointer">
          <FiInfo title="Valitse palvelullesi tärkeät ominaisuudet." />
        </span>
      </label>
      <div className="mt-2 ">
        {features.map((feature, index) => (
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
  );
}