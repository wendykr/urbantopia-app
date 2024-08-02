import Image from "next/image";
import Link from "next/link";

export default function ListingItem({ listing }) {
  return (
    <Link href={`/listings/${listing.id}`}>
      <Image
        src={listing.thumbnail_url}
        width={300}
        height={200}
        alt={listing.title}
      />
      <h3 className="text-lg font-bold">{listing.title}</h3>
      <ul>
        <li>Location: {listing.location}</li>
        <li>Price: ${listing.price}</li>
        <li>Bedrooms: {listing.number_of_bedrooms}</li>
        <li>Bathrooms: {listing.number_of_bathrooms}</li>
        <li>Area: {listing.area}</li>
        <li>Year: {listing.year_built}</li>
      </ul>
    </Link>
  );
}
