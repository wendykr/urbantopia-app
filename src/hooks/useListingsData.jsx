import { useState, useEffect } from "react";

export default function useListingsData() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = await fetch("/listings.json");
    const data = await response.json();
    setData(data);
  };

  useEffect(() => {
    fetchData();
  });
  return data;
}
