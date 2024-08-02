import { useState, useEffect } from "react";

import Header from "@/components/Header/Header";
import ListingItem from "@/components/ListingItem/ListingItem";
import SearchFilters from "@/components/SearchFilters/SearchFilters";

const useListingsData = (filters) => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = await fetch("/listings.json");
    const data = await response.json();
    setData(data);
  };

  useEffect(() => {
    fetchData();
  });
  return data;
};

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
