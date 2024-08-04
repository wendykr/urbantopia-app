import FilterInput from "../FilterInput/FilterInput";
import FilterSelect from "../FilterSelect/FilterSelect";

export default function SearchFilters({ setFilters }) {
  const handleFilterChange = (name, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  return (
    <div className="bg-slate-100 p-8">
      <div className="flex gap-2 justify-center mb-4">
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-4xl"
          onChange={(event) => handleFilterChange("search", event.target.value)}
        />
        <button className="btn bg-slate-700 hover:bg-slate-600 text-white">Search</button>
      </div>
      <div className="grid grid-cols-3 justify-items-center">
        <FilterSelect
          label="Location"
          name="location"
          handleFilterChange={handleFilterChange}
          options={["Springfield", "Shelbyville", "Capital City"]}
          placeholder="Select location"
        />
        <FilterInput
          label="Year"
          name="year"
          handleFilterChange={handleFilterChange}
        />
        <FilterInput
          label="Max Price"
          name="max_price"
          handleFilterChange={handleFilterChange}
        />
        <FilterSelect
          label="Property type"
          name="property_type"
          handleFilterChange={handleFilterChange}
          options={["Apartment", "House", "Condo"]}
          placeholder="Select type"
        />
        <FilterInput
          label="Bathrooms"
          name="bathrooms"
          handleFilterChange={handleFilterChange}
        />
        <FilterInput
          label="Min Price"
          name="min_price"
          handleFilterChange={handleFilterChange}
        />
        <FilterInput
          label="Area"
          name="area"
          handleFilterChange={handleFilterChange}
        />
        <FilterInput
          label="Bedrooms"
          name="bedrooms"
          handleFilterChange={handleFilterChange}
        />
      </div>
    </div>
  );
}
