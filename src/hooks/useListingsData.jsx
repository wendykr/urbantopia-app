import { createClient } from "@/utils/supabase/component";
import { useState, useEffect } from "react";

export default function useListingsData(filters) {
  const supabase = createClient();
  const [data, setData] = useState([]);

  console.log("filters: ", filters);

  const fetchData = async () => {
    const { data: listings, error } = await supabase
      .from("listings")
      .select()
      .gte("price", filters.min_price ?? 0)
      .lte("price", filters.max_price ?? Infinity)
      .gte("year_built", filters.year ?? 0)
      .gte("area", filters.area ?? 0)
      .gte("number_of_bedrooms", filters.bedrooms ?? 0)
      .gte("number_of_bathrooms", filters.bathrooms ?? 0)
      .eq("location", filters.location ?? "x")
      .eq("property_type", filters.type ?? "x");
    setData(listings);
  };

  useEffect(() => {
    fetchData();
  }, [filters]);
  return data;
}
