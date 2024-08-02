import FilterInput from "../FilterInput/FilterInput";
import FilterSelect from "../FilterSelect/FilterSelect";

export default function SearchFilters() {
  const handleFilterChange = (name, value) => {
    console.log(name, value);
  };
  return (
    <div className="bg-slate-100 p-8 mb-4">
      <div className="flex gap-2 justify-center mb-4">
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered input-primary w-full max-w-4xl"
        />
        <button className="btn">Search</button>
      </div>
      <div className="grid grid-cols-3">
        <FilterSelect
          label="Location"
          name="location"
          handleFilterChange={handleFilterChange}
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
