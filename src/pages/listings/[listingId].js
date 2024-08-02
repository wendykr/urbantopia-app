import { useRouter } from "next/router";
import useListingData from "@/hooks/useListingData";

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
