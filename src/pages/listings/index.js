import { useState } from "react";
import ListingItem from "@/components/ListingItem/ListingItem";
import SearchFilters from "@/components/SearchFilters/SearchFilters";
import useListingsData from "@/hooks/useListingsData";

export default function SearchPage() {
  const [filters, setFilters] = useState({});
  const listings = useListingsData(filters);

  return (
    <div>
      <SearchFilters setFilters={setFilters} />
      {listings && listings.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-11 px-8 py-8 justify-items-center m-auto xl:max-w-6xl">
          {listings.map((listing) => (
            <ListingItem key={listing.id} listing={listing} />
          ))}
        </div>
      ) : (
        <div className="flex flex-row justify-center items-center m-auto xl:max-w-6xl">
          <h3 className="text-center text-xl">No listings found.</h3>
        </div>
      )}
    </div>
  );
}
