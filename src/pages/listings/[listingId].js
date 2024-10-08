import Image from "next/image";
import InquiryForm from "@/components/InquiryForm/InquiryForm";
import { createClient } from "@/utils/supabase/static-props";

export default function DetailPage({ listing }) {
  if (!listing) {
    return <div>Loading ...</div>;
  }

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-8 md:px-20 lg:px-[160px] py-8 justify-items-center md:justify-items-end m-auto xl:max-w-6xl">
        <div>
          <h1 className="text-4xl mb-2 font-bold">{listing.title}</h1>
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
          alt={listing.title}
          width={400}
          height={400}
        ></Image>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 my-11 px-8 justify-items-center m-auto xl:max-w-6xl">
        {listing.gallery_urls.map((imageUrl, index) => {
          return (
            <Image
              key={index}
              src={imageUrl}
              alt={listing.description}
              width={300}
              height={300}
              sizes="33vw"
            />
          );
        })}
      </div>
      <div className="bg-slate-100 w-full m-0 py-8">
        <InquiryForm listingId={listing.id} />
      </div>
    </div>
  );
}

export async function getStaticProps(context) {
  const supabase = createClient();
  const listingId = context.params.listingId;

  const { data: listings, error } = await supabase
    .from("listings")
    .select()
    .eq("id", listingId);

  const listing = listings?.[0];

  if (!listing || error) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      listing,
    },
    revalidate: 60 * 60 * 24,
  };
}

export async function getStaticPaths() {
  const supabase = createClient();
  const { data: listings, errror } = await supabase
    .from("listings")
    .select("id");

  const paths = listings.map((listing) => ({
    params: { listingId: listing.id.toString() },
  }));
  return {
    paths: paths,
    fallback: true,
  };
}
