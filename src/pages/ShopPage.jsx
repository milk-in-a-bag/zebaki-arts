import ShopHeader from "../components/headers/ShopHeader";
import ShopFooter from "../components/footers/ShopFooter";
import ShopPageHeader from "../components/shop/ShopHeader";
import ShopControls from "../components/shop/ShopControls";
import ArtworkGrid from "../components/shop/ArtworkGrid";

export default function ShopPage() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-background-dark dark:text-background-light font-display">
      <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
        <ShopHeader />
        <main className="flex-1 max-w-7xl mx-auto w-full px-6 py-10">
          <ShopPageHeader />
          <ShopControls />
          <ArtworkGrid />
        </main>
        <ShopFooter />
      </div>
    </div>
  );
}
