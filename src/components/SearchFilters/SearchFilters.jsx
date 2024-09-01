import useOptionValues from "@/hooks/useOptionValues";
import FilterInput from "../FilterInput/FilterInput";
import FilterSelect from "../FilterSelect/FilterSelect";

export default function SearchFilters({ setFilters }) {
  const { locations, types } = useOptionValues();
  const handleFilterChange = (name, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  return (
    <div className="bg-slate-100 p-8">
      <div className="m-auto xl:max-w-6xl">
        <div className="flex gap-2 justify-center mb-4 flex-col md:flex-row">
          <input
            type="text"
            placeholder="What are you looking for?"
            className="input input-bordered w-full max-w-4xl"
            onChange={(event) =>
              handleFilterChange("search", event.target.value)
            }
            inputMode="text"
          />
          <button className="btn bg-slate-700 hover:bg-slate-600 text-white">
            Search
          </button>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 justify-items-center">
          <FilterSelect
            label="Location"
            name="location"
            handleFilterChange={handleFilterChange}
            options={locations}
            placeholder="Select location"
          />
          <FilterInput
            type="number"
            label="Year"
            name="year"
            handleFilterChange={handleFilterChange}
            placeholder="Enter Year"
            inputMode="number"
          />
          <FilterInput
            type="number"
            label="Max Price"
            name="max_price"
            handleFilterChange={handleFilterChange}
            placeholder="Enter Max Price"
            inputMode="number"
          />
          <FilterSelect
            label="Property type"
            name="property_type"
            handleFilterChange={handleFilterChange}
            options={types}
            placeholder="Select type"
          />
          <FilterInput
            type="number"
            label="Bathrooms"
            name="bathrooms"
            handleFilterChange={handleFilterChange}
            placeholder="Count of Bathrooms"
            inputMode="number"
          />
          <FilterInput
            type="number"
            label="Min Price"
            name="min_price"
            handleFilterChange={handleFilterChange}
            placeholder="Enter Min Price"
            inputMode="number"
          />
          <FilterInput
            type="number"
            label="Area"
            name="area"
            handleFilterChange={handleFilterChange}
            placeholder="Enter Area"
            inputMode="number"
          />
          <FilterInput
            type="number"
            label="Bedrooms"
            name="bedrooms"
            handleFilterChange={handleFilterChange}
            placeholder="Count of Bedrooms"
            inputMode="number"
          />
        </div>
      </div>
    </div>
  );
}
