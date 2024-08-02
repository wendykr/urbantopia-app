import { useRouter } from "next/router";
import useListingData from "@/hooks/useListingData";
import Image from "next/image";

export default function DetailPage() {
  const router = useRouter();

  const { listingId } = router.query;

  const listing = useListingData(listingId);

  if (!listing) {
    return <div>Loading ...</div>;
  }

  return (
    <div>
      <div className="grid grid-cols-2 gap-4 px-8 mb-4">
        <div>
          <h1 className="text-4xl mb-2">{listing.title}</h1>
          <p className="mb-2">{listing.description}</p>
          <ul className="list-disc pl-8">
            <li>Location: {listing.location}</li>
            <li>Price: ${listing.price}</li>
            <li>Bedrooms: {listing.number_of_bedrooms}</li>
            <li>Bathrooms: {listing.number_of_bathrooms}</li>
            <li>Area: {listing.area}</li>
            <li>Year: {listing.year_built}</li>
          </ul>
        </div>
        <Image
          src={listing.thumbnail_url}
          width={300}
          height={300}
          alt={listing.title}
        ></Image>
      </div>

      <div className="grid grid-cols-3 gap-4 px-8">
        {listing.gallery_urls.map((imageUrl, index) => {
          return (
            <Image
              key={index}
              src={imageUrl}
              width={300}
              height={300}
              alt={listing.description}
            />
          );
        })}
      </div>
    </div>
  );
}
