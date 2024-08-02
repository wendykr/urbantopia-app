import FilterInput from "../FilterInput/FilterInput";
import FilterSelect from "../FilterSelect/FilterSelect";

export default function SearchFilters() {
  return (
    <div>
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered input-primary w-full max-w-xs"
        />
        <button className="btn">Button</button>
      </div>
      <div className="grid grid-cols-3">
        <FilterSelect label="Location" />
        <FilterInput label="Year" />
        <FilterInput label="Max Price" />
        <FilterSelect label="Property type" />
        <FilterInput label="Bathrooms" />
        <FilterInput label="Min Price" />
        <FilterInput label="Area" />
        <FilterInput label="Bedrooms" />
      </div>
    </div>
  );
}
