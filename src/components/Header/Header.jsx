import Link from "next/link";

export default function Header() {
  return (
    <Link
      href={`/listings`}
      className="block text-center bg-slate-700 text-white py-4 text-3xl"
    >
      Urbantopia
    </Link>
  );
}
