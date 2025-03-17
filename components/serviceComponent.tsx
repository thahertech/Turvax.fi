import { useState } from "react";
import { FiInfo } from "react-icons/fi";

interface ServiceComponentProps {
  onSelect: () => void;  // Add the onSelect prop to the component
}

export default function ServiceSelection({ onSelect }: ServiceComponentProps) {
  const services = ["Murto", "Paloturva", "Vesivahinko"];
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const toggleService = (service: string) => {
    setSelectedServices((prev: string[]) => {
      const newSelectedServices = prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service];

      // Call onSelect after updating the state
      onSelect();

      return newSelectedServices;
    });
  };

  return (
    <div>
      <label className="text-xl font-semibold flex items-center">
        Mistä palvelusta olet kiinnostunut?
        {/* <span className="ml-2 cursor-pointer">
          <FiInfo title="Valintojen perusteella voit valita ominaisuudet kilpailutukselle" />
        </span> */}
      </label>
      <div className="mt-2 flex gap-2 flex-wrap justify-center m-auto">
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