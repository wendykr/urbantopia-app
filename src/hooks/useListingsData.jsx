import { createClient } from "@/utils/supabase/component";
import { useState, useEffect } from "react";

export default function useListingsData(filters) {
  const supabase = createClient();
  const [data, setData] = useState([]);

  const fetchData = async () => {
    let query = supabase
      .from("listings")
      .select()
      .gte("price", filters.min_price ?? 0)
      .lte("price", filters.max_price ?? Infinity)
      .gte("year_built", filters.year ?? 0)
      .gte("area", filters.area ?? 0)
      .gte("number_of_bedrooms", filters.bedrooms ?? 0)
      .gte("number_of_bathrooms", filters.bathrooms ?? 0);

    if (filters.location) {
      query = query.ilike("location", `%${filters.location}%`);
    }

    if (filters.property_type) {
      query = query.ilike("property_type", `%${filters.property_type}%`);
    }

    const { data: listings, error } = await query;
    setData(listings);
  };

  useEffect(() => {
    fetchData();
  }, [filters]);
  return data;
}
