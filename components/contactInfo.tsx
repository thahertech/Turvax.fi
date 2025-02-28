const ContactInfo = () => {
    return (
      <div className="text-black flex col-span-3 mt-12">
        <input type="text" id="name" name="name" placeholder="Nimi" className="mt-2 p-2 w-1/3 text-gray-800 border border-gray-300 rounded-lg" required />
        <input type="email" id="email" name="email" placeholder="Sähköposti" className="mt-2 ml-10 p-2 w-1/3 text-gray-800 border border-gray-300 rounded-lg" required />
        <input type="text" id="phone" name="phone" placeholder="Puhelinnumero" className="mt-2 p-2 ml-10 w-4/3 text-gray-800 border border-gray-300 rounded-lg" />
      </div>
    );
  };
  
  export default ContactInfo;