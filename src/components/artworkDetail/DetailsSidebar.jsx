export default function DetailsSidebar() {
  return (
    <div className="lg:col-span-5">
      <div className="lg:sticky lg:top-32 space-y-8">
        <div>
          <h1 className="text-5xl font-black leading-none tracking-tight mb-2">
            Ethereal Horizons
          </h1>
          <p className="text-xl font-medium text-primary/80">
            Julian Marc, 2023
          </p>
        </div>
        <div className="flex items-center gap-4 py-6 border-y border-primary/10">
          <span className="text-4xl font-bold">$4,200</span>
          <div className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 text-xs font-bold rounded uppercase tracking-widest">
            Available
          </div>
        </div>
        <div className="space-y-4">
          <button className="w-full bg-primary hover:bg-primary/90 text-white py-5 rounded-xl font-bold text-lg transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-3">
            <span className="material-symbols-outlined">payments</span>
            Purchase Artwork
          </button>
          <button className="w-full border border-primary/30 hover:bg-primary/5 py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-3">
            <span className="material-symbols-outlined">favorite</span>
            Add to Wishlist
          </button>
        </div>
        {/* Specifications Table */}
        <div className="space-y-6 pt-4">
          <h3 className="text-xs font-bold uppercase tracking-widest text-primary/60">
            Technical Details
          </h3>
          <dl className="grid grid-cols-2 gap-y-4 text-sm">
            <dt className="text-gray-500 font-medium">Medium</dt>
            <dd className="font-bold">Oil on Canvas</dd>
            <dt className="text-gray-500 font-medium">Dimensions</dt>
            <dd className="font-bold">120 x 150 cm</dd>
            <dt className="text-gray-500 font-medium">Framing</dt>
            <dd className="font-bold">Unframed (Gallery Wrap)</dd>
            <dt className="text-gray-500 font-medium">Certificate</dt>
            <dd className="font-bold">Signed & Authenticated</dd>
          </dl>
        </div>
        {/* Trust Badges */}
        <div className="grid grid-cols-2 gap-4 pt-4">
          <div className="flex items-center gap-3 p-3 rounded-lg bg-white dark:bg-white/5 border border-primary/5">
            <span className="material-symbols-outlined text-primary">
              local_shipping
            </span>
            <span className="text-[10px] font-bold uppercase leading-tight">
              Secure Global Shipping
            </span>
          </div>
          <div className="flex items-center gap-3 p-3 rounded-lg bg-white dark:bg-white/5 border border-primary/5">
            <span className="material-symbols-outlined text-primary">
              verified
            </span>
            <span className="text-[10px] font-bold uppercase leading-tight">
              Lifetime Authenticity
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
