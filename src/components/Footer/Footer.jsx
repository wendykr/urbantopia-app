export default function Footer() {
  return (
    <footer className="text-center bg-slate-700 text-white py-4">
      <p>
        &copy; 2024{" "}
        <a
          className="underline hover:no-underline"
          href="https://github.com/wendykr/"
        >
          Vendula Krajíčková
        </a>
      </p>
      <p>
        Praktický projekt z kurzu{" "}
        <a
          className="underline hover:no-underline"
          href="https://skillmea.cz/online-kurzy/nextjs-zaklady"
        >
          Základy Next.js
        </a>
      </p>
    </footer>
  );
}
