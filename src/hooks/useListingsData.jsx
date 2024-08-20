import { createClient } from "@/utils/supabase/component";
import { useState, useEffect } from "react";

export default function useListingsData() {
  const supabase = createClient();
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const { data: listings, error } = await supabase.from("listings").select();
    setData(listings);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return data;
}
