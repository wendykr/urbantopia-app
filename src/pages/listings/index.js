import { useState, useEffect } from "react";

import Header from "@/components/Header/Header";
import ListingItem from "@/components/ListingItem/ListingItem";
import SearchFilters from "@/components/SearchFilters/SearchFilters";

const items = [1, 2, 3, 4, 5];

const useListingsData = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = await fetch("/listings.json");
    const data = await response.json();
    console.log(data);
  };

  useEffect(() => {
    fetchData();
  });
  return data;
};

export default function SearchPage() {
  const listings = useListingsData();

  console.log("listings", listings);
  return (
    <div>
      <Header />
      <SearchFilters />
      <div className="grid grid-cols-3 gap-4 px-8">
        {items.map((item) => {
          return <ListingItem key={item} />;
        })}
      </div>
    </div>
  );
}
