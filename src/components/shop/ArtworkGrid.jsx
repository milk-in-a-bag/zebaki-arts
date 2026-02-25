import ArtworkCard from "./ArtworkCard";

const artworks = [
  {
    id: 1,
    title: "Ephemeral Horizons",
    medium: "Oil on Canvas, 2024",
    price: "$1,200",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDb5O-PaN7sv4T4z3n98B5wsZISQbttpV8Xh-HSu2CsOj3hFh0sVCDP4_8C_s-MCPUm3WMj72ySlqvTgYCx9RIANvx1PmwQV2kHf44KNywBNjwYuJ4DzZIivpyBeNkCSwS7LgR2vjieaEtNSBPgFh5pzSh4odYM8_zxNEvFtmusejxHnuBKT7zwZCcECUWToNJ6CsHDaL4dufaE8QoL2n_kOIVq2z7RfBaTCiVbXYADUNZ0wHaxMuVYRjjmki5NkeFhSBOCi3d_bWkN",
    alt: "Vibrant abstract oil painting with blue and gold swirls",
    badge: "New Release",
  },
  {
    id: 2,
    title: "Stone Whispers",
    medium: "Marble Sculpture",
    price: "$2,400",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDlehNyzEw4RdnQkj2Ipqui2NIpC-HRiwfo4AlXo9v4XoZogf_hOrYyVQ9tCJ5Y9meCE9sss3BT_1j2zB1JkHEUidsrc-soW5CVELpjbQaiMCiCfDJjGeTP2L98OQxlduJe0I-MAtAP0r6dPYzmgHZuMLuSHPPQ_nByTDFSjqpCHg7INd6QfUtVSGtEN9HmbIWWosJeplbuJOhKZ0H2aNwU5umhOa93LabcJhl_XGBjeViGfyl1y1Vcxm8MytOK0oyA4J7WwDWbHPx9",
    alt: "Minimalist geometric marble sculpture on pedestal",
  },
  {
    id: 3,
    title: "Digital Dream #04",
    medium: "Digital Illustration",
    price: "$450",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB2DhlO8KZhlHvpr_qoswi5z6L4uNY5C4A83zIBWqAl0YXiI_JYyk2yxWCPj9gqgzFYGJlL-rr0yfaPSupkqJwEHsFmI0pc9010NzkKZplceZuiEqjW5UQFymkD0dMLwg1RwITxIcTkejKoK4Zc-ms_cX7N-OTaYbIS7aBWYdot0Ed_r_zy8la3u5qma-qKXIXyM_BmMYcPpE6cYEM6Km1k5UtZHgoe14_nwnWSgwcubHnSGRw8gl-VZ69hmxOET9eiZ0qyDjqccc3m",
    alt: "Cyberpunk style digital art city scape",
  },
  {
    id: 4,
    title: "Midnight Silence",
    medium: "Acrylic on Linen",
    price: "$980",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD6InrvP5PZQvP7RX-wOPzE-utur3izYYm8ZSVFJaNS-FesRlr7XFW2Q2dV832QsdEPr7eEoX7L1cF3-rZfeSX6J2Q4nQb1gXh4kThWWG_oUoH55EFT0pihWXGxE-bdsXr5P4mmu31UB3l2t8U6FEdPKOYuDO2YI34Y1SUtJ-7VLJucLJOeqb0YszXPmdZ29ce65SOiU5MFcOTbCRBhtbjyXh8ZdeTlJTOMELOa6PAYPhFteBfRSjOdU88KHyFwWb-FACyOyKl9nAHu",
    alt: "Textured acrylic painting with warm sunset tones",
    stock: "Only 1 Left",
  },
  {
    id: 5,
    title: "Prism Flow",
    medium: "Watercolor Print",
    price: "$180",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAXMI5UORTIVUEDUZsVDMr0LVpkbMTXdfzVDGmF38yA1NhedKEX_HWlnpF4iOYr1zEIGW4cGhrVaNbTInFV0tPnKbbdAy7cxUWYyEX3StRTNgGlJDeJVEvU5ijhCzLutdJGO1Kjkk3ik0swRg9WY9T86Rpwjw6qRAppxPeMYjWsVHlhBrAr0O_WSSCenVh2mVSImwHa6ytR3WBjRp7YQG4Yjy9W-igUKxU4xfGV8yKjDwB0gJqrsoKLITdIwJ9dt5DSFE3kiHHL5slM",
    alt: "Abstract watercolor with soft pastel colors",
  },
  {
    id: 6,
    title: "Shadow Study",
    medium: "Charcoal on Paper",
    price: "$650",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAMpmxItLl95ktjRXxKipX63ofghEjDm1DZniVxoy0dyzNJCkmnAASdi8zre0x6Wn7DWzk9RjCUZrhncNiLvWd-ea4Mrl4XP0j5KhDs-N4M5oGFvXabiK8niqDHEoxljbhfC2H5PhGRA4KgUNj4ZQW08LoTzQYzeTFQpO_p2Syej1T6wqVSFzYi8mlteQUB5IszthP4ChePA_Lx2nmoF0kPOPfuWMcIYI2fdbrBNtRl26zVNPeH_KSz_jgfRwKUM_ufBsqxL87bgh7i",
    alt: "Monochromatic charcoal sketch of a human form",
  },
  {
    id: 7,
    title: "Neon Pulse",
    medium: "Mixed Media Sculpture",
    price: "$3,200",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCGYnEc-wJEmtcwnjVEk14YkAep5o88GR72XTKVPJ2Rsl5faADRYMYHCu7G2wKNBy3h_4QBHEyvfMKgRKpqd95yVrIz8X1kJr6XReJEfzE_MQsnU_7ZzlyYuebwW2ejVynIMPq7j84drcXbIcvio7Ih9tGsEyQ5yOt4cg-ab1XG3N5R5TucPB8PSS5P2NX8Iv4fk34XShcqkau12ozBOIv0TR-ybMCJg8EGxdyog_Q14SZxGtR6o4gvJbWibJAiovQuMVw11wXKIoY3",
    alt: "High gloss neon colored wall sculpture",
  },
  {
    id: 8,
    title: "Ascension",
    medium: "Limited Edition Print",
    price: "$295",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB_pNi75br3Qsl6PvD2y1pv-WcGaE3za_45zoeMuexxSIPUIYOel8Jsuu747pxrNWYpqakuHG2ASw1uLUJTYe8gsYvwOaeXDklPMUddJSceViIYpK2e_0E55vOybz51AUrbu-EGiZ00mP1sRQUMPmfkBNTptTOZizHLqEPBoVNHB-lIzh0YPq4snZyHXJQTHi5p7O5ufePwaGRZl1GFpWfQ43b1nwQoYw0-mhBLkqVNcWu7p7SQ6sjwV740pw-IfyDZ-iiXjAzgPfUD",
    alt: "Surrealist digital painting of a floating forest",
  },
];

export default function ArtworkGrid() {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {artworks.map((artwork) => (
          <ArtworkCard key={artwork.id} artwork={artwork} />
        ))}
      </div>
      {/* Load More */}
      <div className="mt-20 flex flex-col items-center gap-6">
        <button className="group flex items-center gap-3 px-8 py-4 bg-primary text-white rounded-full font-black text-sm uppercase tracking-[0.2em] transition-all hover:pr-10 hover:shadow-2xl shadow-primary/30 active:scale-95">
          Explore More Works
          <span className="material-symbols-outlined transition-transform group-hover:translate-x-2">
            arrow_forward
          </span>
        </button>
        <p className="text-xs font-bold text-primary/40 uppercase tracking-widest">
          End of curated list
        </p>
      </div>
    </>
  );
}
