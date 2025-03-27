import { FiInfo, FiSmartphone, FiShield, FiAlertCircle, FiSettings } from "react-icons/fi";
import { MdSecurity, MdOutlinePlumbing, MdOutlineSmokeFree, MdHome, MdSupportAgent, MdElectricBolt } from "react-icons/md";

interface FeatureSelectionProps {
  onSelect: (feature: string, checked: boolean) => void;
}

export default function FeatureSelection({ onSelect }: FeatureSelectionProps) {
  const features = [
    { name: "valvontakeskus", icon: <MdSecurity /> },
    { name: "huolto", icon: <FiSettings /> },
    { name: "Käyttäjäystävällinen mobiilisovellus", icon: <FiSmartphone /> },
    { name: "Elinikäinen tuotetakuu", icon: <FiShield /> },
    { name: "Älykoti-integraatio", icon: <MdHome /> },
    { name: "Murtohälyttimet", icon: <MdSecurity /> },
    { name: "Palo- ja häkävaroitus", icon: <MdOutlineSmokeFree /> },
    { name: "Vesivuotovaroitus", icon: <MdOutlinePlumbing /> },
    { name: "Turvajärjestelmien asennus", icon: <FiSettings /> },
    { name: "Etähallinta", icon: <MdElectricBolt /> },
    { name: "Valvontapalvelut", icon: <MdSecurity /> },
    { name: "Hälytysjärjestelmät", icon: <FiAlertCircle /> },
    { name: "24/7 tuki", icon: <MdSupportAgent /> },
    { name: "24h hälytysvalvonta", icon: <MdSecurity /> },
  ];

  const handleFeatureChange = (feature: string, event: React.ChangeEvent<HTMLInputElement>) => {
    onSelect(feature, event.target.checked);
  };

  return (
    <div className="w-full mx-auto">
    <label className="text-sm font-semibold flex items-center flex-row">
      Ominaisuudet
      <span className="ml-2 cursor-pointer">
        <FiInfo title="Valitse palvelullesi tärkeät ominaisuudet." />
      </span>
    </label>
    
    <div className="mt-2 grid grid-cols-3 w-[1000px] gap-3">
      {features.map(({ name, icon }, index) => (
        <div key={index} className="flex items-center justify-center gap-20 mb-2 p-3 border w-[300px] rounded-lg hover:bg-gray-100 transition">
          <input
            type="checkbox"
            id={name}
            name="features"
            value={name}
            className="h-5 w-5"
            onChange={(e) => handleFeatureChange(name, e)}
          />
          <label htmlFor={name} className="text-sm flex items-center gap-2">
            {icon}
            {name}
          </label>
        </div>
      ))}
    </div>
  </div>
  );
}