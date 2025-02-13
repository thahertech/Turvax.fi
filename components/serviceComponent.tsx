import { useState } from "react";
import { FiInfo } from "react-icons/fi";

export default function ServiceSelection() {
  const services = ["Murto", "Paloturva", "Vesivahinko"];
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const toggleService = (service: string) => {
    setSelectedServices((prev: string[]) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  return (
    <div>
      <label className="text-xl font-semibold flex items-center">
        Mistä palvelusta olet kiinnostunut?
        <span className="ml-2 cursor-pointer">
          <FiInfo title="Valintojen perusteella voit valita ominaisuudet kilpailutukselle" />
        </span>
      </label>
      <div className="mt-2 flex gap-2 flex-wrap">
        {services.map((service) => (
          <button
            key={service}
            onClick={() => toggleService(service)}
            className={`px-4 py-2 rounded-[10px] text-sm border-2 transition-all duration-200 
              ${
                selectedServices.includes(service)
                  ? "bg-blue-500 text-white border-blue-500"
                  : "bg-white text-gray-700 border-gray-300 hover:border-blue-400"
              }`}
          >
            {service}
          </button>
        ))}
      </div>
    </div>
  );
}