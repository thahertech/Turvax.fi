const SpaceSizeSelection = () => {
    return (
      <div className="flex flex-col">
        <label htmlFor="spaceSize" className="text-sm font-semibold">
          Tilan koko (m²)
        </label>
        <select id="spaceSize" name="spaceSize" className="mt-2 p-2 border border-gray-300 text-black rounded-lg" required>
          <option value="small">Alle 50 m²</option>
          <option value="medium">51-150 m²</option>
          <option value="large">Yli 150 m²</option>
        </select>
      </div>
    );
  };
  
  export default SpaceSizeSelection;