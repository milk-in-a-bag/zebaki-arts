export default function ShopHeader() {
  return (
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
      <div className="space-y-2">
        <h2 className="text-4xl font-black tracking-tight">
          The Collected Works
        </h2>
        <p className="text-primary/60 max-w-md">
          Browse a curated selection of original pieces, high-quality prints,
          and digital explorations by Elena Rose.
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <p className="text-xs font-bold uppercase tracking-widest text-primary/40">
          Filter by category
        </p>
        <div className="flex flex-wrap gap-2">
          <button className="px-5 py-2 rounded-full bg-primary text-white text-sm font-bold shadow-lg shadow-primary/20">
            All Art
          </button>
          <button className="px-5 py-2 rounded-full bg-white dark:bg-white/5 border border-primary/10 hover:border-primary text-sm font-semibold transition-all">
            Paintings
          </button>
          <button className="px-5 py-2 rounded-full bg-white dark:bg-white/5 border border-primary/10 hover:border-primary text-sm font-semibold transition-all">
            Prints
          </button>
          <button className="px-5 py-2 rounded-full bg-white dark:bg-white/5 border border-primary/10 hover:border-primary text-sm font-semibold transition-all">
            Digital Art
          </button>
          <button className="px-5 py-2 rounded-full bg-white dark:bg-white/5 border border-primary/10 hover:border-primary text-sm font-semibold transition-all">
            Sculptures
          </button>
        </div>
      </div>
    </div>
  );
}
