import { createClient } from "@/utils/supabase/component";
import { useState, useEffect } from "react";

export default function useListingData(listingId) {
  const supabase = createClient();
  const [data, setData] = useState(null);

  console.log("data", data);

  const fetchData = async () => {
    if (!listingId) return;

    const { data } = await supabase
      .from("listings")
      .select()
      .eq("id", listingId);

    setData(data?.[0] ?? null);
  };

  useEffect(() => {
    fetchData();
  }, [listingId]);

  return data;
}
