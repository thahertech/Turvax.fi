// import { useState } from "react";
// import Header from "@/components/Header";
// import LocationForm from "@/components/locationSuggestions";
// import { FiInfo } from "react-icons/fi";

// export default function ServiceForm() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     comments: "",
//     spaceSize: "",
//     urgencyTime: "",
//     features: [] as string[],
//   });

//   const handleInputChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
//   ) => {
//     const { name, value, type, checked } = e.target as HTMLInputElement;
  
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: type === "checkbox"
//         ? checked
//           ? [...prevData.features, value]
//           : prevData.features.filter((feature) => feature !== value)
//         : value,
//     }));
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
  
//     const emailData = {
//       subject: "Tarjouspyyntö", 
//       recipientEmail: "thaher.alamir@hotmail.com", 
//       body: `
//         Nimi: ${formData.name}
//         Sähköposti: ${formData.email}
//         Puhelinnumero: ${formData.phone}
//         Tilan koko: ${formData.spaceSize}
//         Ajankohta: ${formData.urgencyTime}
//         Ominaisuudet: ${formData.features.join(", ")}
//         Lisätiedot: ${formData.comments}
//       `,
//     };
  
//     try {
//       const response = await fetch("/api/send-email", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(emailData),
//       });
  
//       if (response.ok) {
//         alert("Email sent successfully!");
//       } else {
//         alert("Failed to send email.");
//       }
//     } catch (error) {
//       console.error("Error sending email:", error);
//       alert("Error sending email.");
//     }
//   };

//   return (
//     <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] overflow-none">
//       <Header />

//       <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
//         <div className="w-full hero-content">
//           <h3>Hälytysjärjestelmien kilpailutus</h3>
//         </div>

//         <h1>Kilpailuta hinta</h1>

//         <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:w-256">
//           <LocationForm />

//           <div className="flex flex-col">
//             <label htmlFor="spaceSize" className="text-sm font-semibold">
//               Tilan koko (m²)
//             </label>
//             <select
//               id="spaceSize"
//               name="spaceSize"
//               value={formData.spaceSize}
//               onChange={handleInputChange}
//               className="mt-2 p-2 border border-gray-300 text-black rounded-lg"
//               required
//             >
//               <option value="small">Alle 50 m²</option>
//               <option value="medium">51-150 m²</option>
//               <option value="large">Yli 150 m²</option>
//             </select>
//           </div>

//           <div className="flex flex-col">
//             <label htmlFor="urgencyTime" className="text-sm font-semibold flex items-center flex-row">
//               Ajankohta
//               <span className="ml-2 cursor-pointer">
//                 <FiInfo title="Palvelun ajankohdan arvio." />
//               </span>
//             </label>
//             <select
//               id="urgencyTime"
//               name="urgencyTime"
//               value={formData.urgencyTime}
//               onChange={handleInputChange}
//               className="mt-2 p-2 border border-gray-300 text-black rounded-lg"
//               required
//             >
//               <option value="3months">3 kk</option>
//               <option value="6months">6 kk</option>
//               <option value="1year">1 vuosi</option>
//               <option value="other">Muu</option>
//             </select>
//           </div>

//           <div className="flex flex-col sm:col-span-2">
//             <label className="text-sm font-semibold flex items-center flex-row">
//               Ominaisuudet
//               <span className="ml-2 cursor-pointer">
//                 <FiInfo title="Select the features that you think are important for your service." />
//               </span>
//             </label>
//             <div className="mt-2">
//               {[
//                 'Liikeilmaisin',
//                 'Etäohjaus',
//                 'Paloturva',
//                 'Vesivuototurva',
//                 'Yökuvaus',
//                 'Älykoti-integraatio'
//               ].map((feature, index) => (
//                 <div key={index} className="flex items-center gap-2 mb-2">
//                   <input
//                     type="checkbox"
//                     id={feature}
//                     name="features"
//                     value={feature}
//                     checked={formData.features.includes(feature)}
//                     onChange={handleInputChange}
//                     className="h-5 w-5"
//                   />
//                   <label htmlFor={feature} className="text-sm">{feature}</label>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div className="text-black flex col-span-3 mt-12">
//             <input
//               type="name"
//               id="name"
//               name="name"
//               placeholder="Nimi"
//               value={formData.name}
//               onChange={handleInputChange}
//               className="mt-2 p-2 w-1/3 text-gray-800 border border-gray-300 rounded-lg"
//             />
//             <input
//               type="email"
//               id="email"
//               name="email"
//               placeholder="Sähköposti"
//               value={formData.email}
//               onChange={handleInputChange}
//               className="mt-2 ml-10 p-2 w-1/3 text-gray-800 border border-gray-300 rounded-lg"
//             />

//             <input
//               type="text"
//               id="phone"
//               name="phone"
//               placeholder="Puhelinnumero"
//               value={formData.phone}
//               onChange={handleInputChange}
//               className="mt-2 p-2 ml-10 w-4/3 text-gray-800 border border-gray-300 rounded-lg"
//             />
//           </div>

//           <div className="flex flex-col text-black col-span-3 mt-12">
//             <label htmlFor="comments" className="text-sm text-white font-semibold">
//               Vapaa Sana
//             </label>
//             <textarea
//               id="comments"
//               name="comments"
//               rows={4}
//               value={formData.comments}
//               onChange={handleInputChange}
//               className="mt-2 p-2 text-gray-800 border border-gray-300 rounded-lg"
//               placeholder="Kirjoita tarkempia tietoja..."
//             ></textarea>
//           </div>

//           <button
//             type="submit"
//             className="w-full mt-4 bg-foreground text-background py-2 rounded-full hover:bg-[#383838] transition-colors sm:col-span-3"
//           >
//             Kilpailuta hinnat
//           </button>
//         </form>
//       </main>

//       <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
//     </div>
//   );
// }