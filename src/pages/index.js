import { Inter } from "next/font/google";
import Listings from "../pages/listings";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return <Listings />;
}
