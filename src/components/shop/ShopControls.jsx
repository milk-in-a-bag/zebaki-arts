export default function ShopControls() {
  return (
    <div className="flex items-center justify-between mb-8 border-b border-primary/10 pb-4">
      <p className="text-sm font-medium text-primary/60">
        Showing 24 of 142 results
      </p>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold uppercase tracking-widest text-primary/40">
            Sort By
          </span>
          <select className="bg-transparent border-none text-sm font-bold focus:ring-0 cursor-pointer text-primary">
            <option>Newest Arrivals</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Most Popular</option>
          </select>
        </div>
        <div className="h-4 w-px bg-primary/20"></div>
        <button className="flex items-center gap-2 text-sm font-bold text-primary hover:opacity-80">
          <span className="material-symbols-outlined text-lg">tune</span>
          Advanced
        </button>
      </div>
    </div>
  );
}
