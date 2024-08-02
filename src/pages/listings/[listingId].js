import { useRouter } from "next/router";

export default function DetailPage() {
  const router = useRouter();

  const { listingId } = router.query;

  console.log("listingId", listingId);
  return <div>DetailPage</div>;
}
