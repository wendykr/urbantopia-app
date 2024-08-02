import { useState, useEffect } from "react";

export default function useListingData(listingId) {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    const response = await fetch("/listings.json");
    const responseData = await response.json();
    setData(
      responseData.filter((listing) => listing.id === Number(listingId))?.[0]
    );
  };

  useEffect(() => {
    fetchData();
  }, [listingId]);

  return data;
}
