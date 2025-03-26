import { useState } from "react";
import { motion } from "framer-motion";

interface ServiceComponentProps {
  onSelect: () => void;
}

export default function ServiceSelection({ onSelect }: ServiceComponentProps) {
  const services = ["Murto", "Paloturva", "Vesivahinko"];
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [step, setStep] = useState(1);

  const handleServiceSelect = (service: string) => {
    setSelectedService(service);
    setTimeout(() => setStep(2), 500);
    onSelect();
  };

  return (
    <div className="w-full flex justify-center">
      {step === 1 && (
        <motion.div
          initial={{ opacity: 1, x: 0 }}
          animate={selectedService ? { x: -200, opacity: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="w-full"
        >
          <label className="text-xl font-semibold flex items-center">
            Mistä palvelusta olet kiinnostunut?
          </label>
          <div className="mt-2 flex gap-2 flex-wrap justify-center">
            {services.map((service) => (
              <button
                key={service}
                onClick={() => handleServiceSelect(service)}
                className={`px-4 py-2 rounded-[10px] text-sm border-2 transition-all duration-200 
                  ${
                    selectedService === service
                      ? "bg-blue-500 text-white border-blue-500"
                      : "bg-white text-gray-700 border-gray-300 hover:border-blue-400"
                  }`}
              >
                {service}
              </button>
            ))}
          </div>
        </motion.div>
      )}

      {step === 2 && (
        <motion.div
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full"
        >
          <label className="text-xl font-semibold flex items-center">
            Minkä kokoinen tila tarvitsee suojauksen?
          </label>
          <div className="mt-2 flex gap-2 flex-wrap justify-center">
            <button className="px-4 py-2 rounded-[10px] text-sm border-2 bg-white text-gray-700 hover:border-blue-400">
              Pieni (alle 50m²)
            </button>
            <button className="px-4 py-2 rounded-[10px] text-sm border-2 bg-white text-gray-700 hover:border-blue-400">
              Keskikokoinen (50-200m²)
            </button>
            <button className="px-4 py-2 rounded-[10px] text-sm border-2 bg-white text-gray-700 hover:border-blue-400">
              Suuri (yli 200m²)
            </button>
          </div>
        </motion.div>
      )}
            {step === 3 && (
        <motion.div
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full"
        >
          <label className="text-xl font-semibold flex items-center">
            Missä tila sijaitsee? 
          </label>
          <div className="mt-2 flex gap-2 flex-wrap justify-center">
            <button className="px-4 py-2 rounded-[10px] text-sm border-2 bg-white text-gray-700 hover:border-blue-400">
              Pieni (alle 50m²)
            </button>
            <button className="px-4 py-2 rounded-[10px] text-sm border-2 bg-white text-gray-700 hover:border-blue-400">
              Keskikokoinen (50-200m²)
            </button>
            <button className="px-4 py-2 rounded-[10px] text-sm border-2 bg-white text-gray-700 hover:border-blue-400">
              Suuri (yli 200m²)
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
}