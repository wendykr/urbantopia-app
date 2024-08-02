import { useState } from "react";

import Header from "@/components/Header/Header";
import ListingItem from "@/components/ListingItem/ListingItem";
import SearchFilters from "@/components/SearchFilters/SearchFilters";
import useListingsData from "@/hooks/useListingsData";

export default function SearchPage() {
  const [filters, setFilters] = useState({});
  const listings = useListingsData(filters);

  return (
    <div>
      <Header />
      <SearchFilters setFilters={setFilters} />
      <div className="grid grid-cols-3 gap-4 px-8">
        {listings.map((listing) => {
          return <ListingItem key={listing.id} listing={listing} />;
        })}
      </div>
    </div>
  );
}
