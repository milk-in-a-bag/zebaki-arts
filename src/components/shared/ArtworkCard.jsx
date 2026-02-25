export default function ArtworkCard({ title, medium, price, image, alt }) {
  return (
    <div className="group cursor-pointer">
      <div className="aspect-[3/4] overflow-hidden rounded-xl mb-6 relative">
        <img
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          data-alt={alt}
          src={image}
          alt={title}
        />
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <button className="bg-white text-[#1b0e10] px-6 py-3 rounded-lg font-bold">
            Quick View
          </button>
        </div>
      </div>
      <div className="flex justify-between items-start">
        <div>
          <h4 className="text-xl font-bold mb-1">{title}</h4>
          <p className="text-sm text-[#1b0e10]/50 italic">{medium}</p>
        </div>
        <span className="text-primary font-bold">{price}</span>
      </div>
    </div>
  );
}
