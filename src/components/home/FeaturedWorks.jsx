import { Link } from "react-router-dom";

const artworks = [
  {
    id: 1,
    title: "Ephemeral Blooms",
    medium: 'Oil on Canvas, 24" x 36"',
    price: "$1,450",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBGa1AzjywYpm9s--oK9ydTGqEt8dxd0Cut5UwRDq8d5kAXoBWprGkEYQBbimSzsrpo_N_YFhXsx3aO7zll1aaK_J-8d0whUYvba5onCe0xeO3lfN9DjpUeNi24v_oRbLFkRd7WbjC2OuyjbOjkCCdnoRL5zi9UfnoA-Zy_k4KmtrzB2S-noMxfB9A7D6ZYxWnmd4jwzTh2gj2WMPKtC9tybnMnsWLBSp059vIaYTA6XJ8o2m9sCWR4b40_YFeYLpniAhIJzEppMnUD",
    alt: "Abstract oil painting with soft pinks and creams",
  },
  {
    id: 2,
    title: "Golden Hour Hush",
    medium: 'Oil on Canvas, 30" x 40"',
    price: "$2,200",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCVKdXMwZYZlhg1b1ss_iOhL4KcF5JXo4xrKnAic0pqt_RAje3jOElTE70VPOv8FRj2ACAMh03dsRaFb2Rz09x3PFttg7UrT6srp9oZgSBH6oz8N6f_dfCK-anDH4N9zF2_1cP5XeGIQQeakBqfXkb_TPDG8se_a_jxJQrEnd77C-A9K6-SvVP7Tz33xIb5OdjU1WhG7EY6ByCG5VL80JSiS-Bh7Js3sz0ONZJxojOpWnof72A4cd8JHKuL-goE5v-6eZP3N9DRobBo",
    alt: "Landscape painting with sunset colors",
  },
  {
    id: 3,
    title: "Whispering Petals",
    medium: 'Oil on Wood Panel, 12" x 12"',
    price: "$680",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDs9Kx1f4wjdHElOzzdedlLrp-oAAWeOtLZqaAXl1PCMDsIqpWFIivw4BbUowtYrg6pm8wlK9fp5rNypHSQV7eex4mWVF5k9B2oXv3v7af2tXgBgDyk45Q1rShAY7wdCFg4yDqItMt6UBTPmkGw7ROAWqfpcl_UOGkPRFslguy6WHrChYSnA8eAd7PyWG_vdHAQGnCh9VrSSCEgEKMURyVVzRvSKjw7dgR_rXG-soldlazipnrVvGZzkGj9EAPdst4dnbKIpaKCl6ww",
    alt: "Botanical study in oil with rich textures",
  },
];

export default function FeaturedWorks() {
  return (
    <section className="py-24 bg-white dark:bg-[#1a0d0f]/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-4xl font-black mb-4">Featured Pieces</h2>
            <p className="text-[#1b0e10]/60">
              Hand-selected works currently available for acquisition.
            </p>
          </div>
          <Link
            to="/shop"
            className="text-sm font-bold border-b-2 border-primary pb-1 hover:text-primary transition-colors"
          >
            View All Works
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {artworks.map((artwork) => (
            <div key={artwork.id} className="group cursor-pointer">
              <div className="aspect-[3/4] overflow-hidden rounded-xl mb-6 relative">
                <img
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  data-alt={artwork.alt}
                  src={artwork.image}
                  alt={artwork.title}
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button className="bg-white text-[#1b0e10] px-6 py-3 rounded-lg font-bold">
                    Quick View
                  </button>
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-xl font-bold mb-1">{artwork.title}</h4>
                  <p className="text-sm text-[#1b0e10]/50 italic">
                    {artwork.medium}
                  </p>
                </div>
                <span className="text-primary font-bold">{artwork.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
