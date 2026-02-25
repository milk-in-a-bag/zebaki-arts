import { Link } from "react-router-dom";

const relatedArtworks = [
  {
    id: 1,
    title: "Indigo Mist",
    artist: "Julian Marc",
    price: "$3,800",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDbktkp28qTGLd5rw4KwTyORL699nTlcYGPUqP-otedV2OAmqFoKJl5gzm-vsaLiJuvs6oI_YVrvYAnNcZPLfQr1YiNmViaq0luNU_Mexhg1LUt-irNCSIaVeM39nt1JNHRRtpLUkxjPjA-LyVSN7EqGCVWF9aqvEVFkuCdnSCEJnSYQRM2qo8EU-55LjB8iXhXBM9uE6z0UDkikoNj77xS5u1ymM7hIj6q3Fpstaga6SEdTIOjeBPmeXGa3bEa6naYt6t2NSJLHuBk",
    alt: "Abstract painting with indigo swirls",
  },
  {
    id: 2,
    title: "Golden Silence",
    artist: "Julian Marc",
    price: "$5,100",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAOROohZGcJeiZ1G_Y8RaqzIE2hjCRPAqQsr7aYuycHuc7Rqoumh0KbXs8QJuIyT4kZuo96wiZuDHbyinb9xLbrEcBGzpOqAN8HSEwlWsjkFf4QRqx1CceUrD4W8qpbW0ei0BWBU0uOEh82V52AIOAcxvvPp7o3finY9SGhA6NQPNLJBfK50LlRfQ3-hRV1wYnVUV-1ljjz-OIg1vu-Ye-gI3bOzVrZUw3mAMWUh4ySgT3HnlfeqoTzB0FWlTW-wsMfDzehFv5Xwcqh",
    alt: "Minimalist abstract art with gold leaf",
  },
  {
    id: 3,
    title: "Crimson Drift",
    artist: "Julian Marc",
    price: "$2,950",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCDIMfbVRJObKLRuNfQGZBJK1IqpPUBVW5cNo6Kg_5iIey8xkYeYO-NyoN8As7l1F6ROTyUzqV0GOVpHWCTO9ADPdrg-7ftx6X8IJhK68bnpU4PYwL4IMR2bX5GsApQIl09afQQXXNDWp-78_0aa8PftBo8fqKPfnEPeLqWv6A2PG6fBmB2ItcX4L3-lr2jxCyw0LwccbVMsmTyQ4dR14JgXZ_5WR2FgSCMnlsCunmMJ7OUZTM8j_k5VHY3NyZ2sy9lKm93vpKttKfm",
    alt: "Deep red and black textured canvas",
  },
  {
    id: 4,
    title: "Fractured Light",
    artist: "Julian Marc",
    price: "$4,500",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCn9l0KTYaUIG1DRbv8gSir9EYQ_eKQODbXQQQhkawPmJsqE2uAIj_gyiIpuXcyrC9813mufoBM6wOvoOjw0Uzg_d08FKNXL9DlkISM2L8KCkVIBb6h7Lt5Go7Ew3eOhYpwwwpjKEemj8KPjKQqMW3ZAXnydKjyDWab2dvb0LxXAc_Xi3RUKu0bnnmEIaR77OD-CMFzcVjHirZxLl2E4h1yEPLpxJLOBvbEJohAxKyXYOn6Du_PFIcmzk98GqU38-C7DAQYrp41L2oS",
    alt: "Colorful modern geometric abstraction",
  },
];

export default function RelatedArtworks() {
  return (
    <section className="mt-32 space-y-10">
      <div className="flex items-end justify-between">
        <div>
          <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-primary/60 mb-2">
            Curated Selection
          </h2>
          <h3 className="text-3xl font-black">Related Artworks</h3>
        </div>
        <Link
          to="/shop"
          className="text-sm font-bold border-b-2 border-primary pb-1 hover:text-primary transition-colors"
        >
          View Artist's Collection
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {relatedArtworks.map((artwork) => (
          <div key={artwork.id} className="group cursor-pointer">
            <div className="aspect-4/5 overflow-hidden rounded-xl mb-4 relative">
              <img
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                data-alt={artwork.alt}
                src={artwork.image}
                alt={artwork.title}
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="bg-white text-black px-6 py-2 rounded-full font-bold text-sm">
                  Quick View
                </span>
              </div>
            </div>
            <h4 className="font-bold text-lg">{artwork.title}</h4>
            <div className="flex justify-between items-center mt-1">
              <p className="text-sm text-gray-500">{artwork.artist}</p>
              <p className="font-bold text-primary">{artwork.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
