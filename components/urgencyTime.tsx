import { FiInfo } from 'react-icons/fi';

const UrgencyTimeSelection = () => {
  return (
    <div className="flex flex-col">
      <label htmlFor="urgencyTime" className="text-sm font-semibold flex items-center flex-row">
        Ajankohta
        <span className="ml-2 cursor-pointer">
          <FiInfo title="Palvelun ajankohdan arvio." />
        </span>
      </label>
      <select id="urgencyTime" name="urgencyTime" className="mt-2 p-2 border border-gray-300 text-black rounded-lg" required>
        <option value="3months">3 kk</option>
        <option value="6months">6 kk</option>
        <option value="1year">1 vuosi</option>
        <option value="other">Muu</option>
      </select>
    </div>
  );
};

export default UrgencyTimeSelection;