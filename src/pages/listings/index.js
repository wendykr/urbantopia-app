import Header from "@/components/Header/Header";
import ListingItem from "@/components/ListingItem/ListingItem";
import SearchFilters from "@/components/SearchFilters/SearchFilters";

const items = [1, 2, 3, 4, 5];

export default function SearchPage() {
  return (
    <div>
      <Header />
      <SearchFilters />
      <div class="grid grid-cols-3 gap-4 px-8">
        {items.map((item) => {
          return <ListingItem key={item} />;
        })}
      </div>
    </div>
  );
}
