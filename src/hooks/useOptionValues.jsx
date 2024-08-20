import { createClient } from "@/utils/supabase/component";
import { useState, useEffect } from "react";

export default function useOptionValues() {
  const supabase = createClient();
  const [data, setData] = useState({ locations: [], types: [] });

  const fetchData = async () => {
    const { data: option, error } = await supabase
      .from("listings")
      .select("location, property_type");

    const locations = option.map((listings) => listings.location);
    const types = option.map((listings) => listings.property_type);

    setData({ locations, types });
  };

  useEffect(() => {
    fetchData();
  }, []);
  return data;
}
