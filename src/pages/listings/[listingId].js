import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const useListingData = (listingId) => {
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
};

export default function DetailPage() {
  const router = useRouter();

  const { listingId } = router.query;

  const listing = useListingData(listingId);

  console.log("listing", listing);
  return (
    <div>
      DetailPage
      <p>Listing id: {listingId}</p>
    </div>
  );
}
