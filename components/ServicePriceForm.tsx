import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

const ServicePriceForm = () => {
  const [formData, setFormData] = useState({
    serviceType: "",
    company: "",
    price: "",
    contactName: "",
    email: "",
    phone: "",
  });
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post("/api/submit", formData);
      router.push("/success");
    } catch (error) {
      console.error("Submission failed", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 max-w-lg mx-auto border rounded shadow">
      <label className="block mb-2">Service Type:</label>
      <select name="serviceType" value={formData.serviceType} onChange={handleChange} className="w-full p-2 border rounded">
        <option value="">Select...</option>
        <option value="transport">Transport</option>
        <option value="storage">Storage</option>
      </select>
      
      <label className="block mt-4">Company:</label>
      <input type="text" name="company" value={formData.company} onChange={handleChange} className="w-full p-2 border rounded" />
      
      <label className="block mt-4">Price:</label>
      <input type="number" name="price" value={formData.price} onChange={handleChange} className="w-full p-2 border rounded" />
      
      <label className="block mt-4">Contact Name:</label>
      <input type="text" name="contactName" value={formData.contactName} onChange={handleChange} className="w-full p-2 border rounded" />
      
      <label className="block mt-4">Email:</label>
      <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full p-2 border rounded" />
      
      <label className="block mt-4">Phone:</label>
      <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full p-2 border rounded" />
      
      <button type="submit" className="mt-4 w-full bg-blue-500 text-white p-2 rounded">Submit</button>
    </form>
  );
};

export default ServicePriceForm;
