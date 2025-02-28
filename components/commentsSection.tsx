const CommentsSection = () => {
    return (
      <div className="flex flex-col text-black col-span-3 mt-12">
        <label htmlFor="comments" className="text-sm font-semibold">
          Vapaa Sana
        </label>
        <textarea id="comments" name="comments" rows={4} className="mt-2 p-2 text-gray-800 border border-gray-300 rounded-lg" placeholder="Kirjoita tarkempia tietoja..."></textarea>
      </div>
    );
  };
  
  export default CommentsSection;