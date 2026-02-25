export default function ArtworkCard({ artwork }) {
  return (
    <div className="artwork-card group relative flex flex-col gap-4">
      <div className="relative aspect-4/5 overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
          data-alt={artwork.alt}
          style={{
            backgroundImage: `url('${artwork.image}')`,
          }}
        ></div>
        <div className="quick-view-overlay absolute inset-0 bg-black/40 backdrop-blur-[2px] opacity-0 transition-opacity duration-300 flex items-center justify-center">
          <button className="bg-white text-black px-6 py-3 rounded-full font-bold text-sm shadow-xl hover:bg-primary hover:text-white transition-colors">
            Quick View
          </button>
        </div>
        {artwork.badge && (
          <div className="absolute top-4 left-4">
            <span className="bg-primary text-white text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded">
              {artwork.badge}
            </span>
          </div>
        )}
        {artwork.stock && (
          <div className="absolute bottom-4 left-4">
            <span className="bg-background-dark/80 text-white text-[10px] font-bold px-3 py-1 rounded-full backdrop-blur">
              {artwork.stock}
            </span>
          </div>
        )}
        <button className="absolute top-4 right-4 size-10 bg-white/90 dark:bg-black/50 backdrop-blur rounded-full flex items-center justify-center text-primary/30 hover:text-primary transition-transform active:scale-90">
          <span className="material-symbols-outlined">favorite</span>
        </button>
      </div>
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-bold leading-tight group-hover:text-primary transition-colors">
            {artwork.title}
          </h3>
          <p className="text-sm text-primary/60 font-medium italic">
            {artwork.medium}
          </p>
        </div>
        <p className="text-lg font-black text-primary">{artwork.price}</p>
      </div>
    </div>
  );
}
