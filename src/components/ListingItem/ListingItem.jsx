import Image from "next/image";

export default function ListingItem() {
  return (
    <div>
      <Image
        src="/images/apartment.webp"
        width={300}
        height={200}
        alt="Apartment"
      />
      <h3 className="text-lg font-bold">Apartment</h3>
      <ul>
        <li>Location: Springfield</li>
        <li>Price: $1000</li>
        <li>Bedrooms: 3</li>
        <li>Bathrooms: 2</li>
        <li>Area: 1000 sqft</li>
        <li>Year: 2021</li>
      </ul>
    </div>
  );
}
