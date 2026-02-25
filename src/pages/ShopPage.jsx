import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-primary/10 px-6 lg:px-20 py-4 flex items-center justify-between">
      <div className="flex items-center gap-12">
        <div className="flex items-center gap-2">
          <div className="size-8 bg-primary rounded-lg flex items-center justify-center text-white">
            <span className="material-symbols-outlined">palette</span>
          </div>
          <h1 className="text-xl font-bold tracking-tight text-primary uppercase">
            Elena Rose
          </h1>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <Link
            to="/shop"
            className="text-sm font-semibold hover:text-primary transition-colors"
          >
            Gallery
          </Link>
          <Link to="/shop" className="text-sm font-semibold text-primary">
            Shop
          </Link>
          <Link
            to="/about"
            className="text-sm font-semibold hover:text-primary transition-colors"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-sm font-semibold hover:text-primary transition-colors"
          >
            Contact
          </Link>
        </nav>
      </div>
      <div className="flex items-center gap-4">
        <div className="hidden sm:flex items-center bg-primary/5 dark:bg-white/5 rounded-full px-4 py-2 border border-primary/10">
          <span className="material-symbols-outlined text-primary text-sm mr-2">
            search
          </span>
          <input
            className="bg-transparent border-none focus:ring-0 text-sm w-32 lg:w-48 placeholder:text-primary/40"
            placeholder="Search collection..."
            type="text"
          />
        </div>
        <button className="relative p-2 hover:bg-primary/10 rounded-full transition-colors">
          <span className="material-symbols-outlined">shopping_bag</span>
          <span className="absolute top-1 right-1 size-4 bg-primary text-white text-[10px] flex items-center justify-center rounded-full font-bold">
            2
          </span>
        </button>
        <div
          className="size-10 rounded-full bg-cover bg-center border-2 border-primary/20"
          data-alt="Artist profile portrait silhouette"
          style={{
            backgroundImage:
              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCxJuV-imz-ZqH1ZqUPRapNEYVhwhP5aEZ5mpHtH_zyrEC6TsVpxw1R9xuhAUX_VYfB3XrTAVaLiu2goAKj5vPVeMI95EXHnxQrYoZdl-A12SsGNNNC9u50y3F1iv5pbOGkX6R1Mzs9IqPhQoAKAmidTPq5w0L_KblN_n5_BfJT_ZX9mUSiKnbKd1HOU3hTSK4xMq61ldWKCf-aHEs6bjiDSAtJB09ekipLJWggi5Uerq1h7D9DTkHjr-D3BXFstlo4kCML2-nu1xtV')",
          }}
        ></div>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-white dark:bg-black/20 mt-20 border-t border-primary/10">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-2 space-y-6">
          <div className="flex items-center gap-2">
            <div className="size-6 bg-primary rounded flex items-center justify-center text-white">
              <span className="material-symbols-outlined text-sm">palette</span>
            </div>
            <h1 className="text-lg font-bold tracking-tight text-primary uppercase">
              Elena Rose
            </h1>
          </div>
          <p className="text-primary/60 max-w-sm">
            Join the private list for early access to new collections,
            behind-the-scenes insights, and exhibition invites.
          </p>
          <div className="flex max-w-sm">
            <input
              className="flex-1 bg-primary/5 dark:bg-white/5 border-primary/10 rounded-l-lg focus:ring-primary focus:border-primary text-sm px-4"
              placeholder="Your email address"
              type="email"
            />
            <button className="bg-primary text-white px-6 py-2 rounded-r-lg font-bold text-sm uppercase transition-opacity hover:opacity-90">
              Join
            </button>
          </div>
        </div>
        <div className="space-y-4">
          <h4 className="text-xs font-black uppercase tracking-widest text-primary/40">
            Navigation
          </h4>
          <ul className="space-y-2 text-sm font-semibold">
            <li>
              <Link to="/shop" className="hover:text-primary transition-colors">
                Private Gallery
              </Link>
            </li>
            <li>
              <a className="hover:text-primary transition-colors" href="#">
                Exhibitions
              </a>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-primary transition-colors"
              >
                Commission a Piece
              </Link>
            </li>
            <li>
              <a className="hover:text-primary transition-colors" href="#">
                Returns & Shipping
              </a>
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <h4 className="text-xs font-black uppercase tracking-widest text-primary/40">
            Social
          </h4>
          <ul className="space-y-2 text-sm font-semibold">
            <li>
              <a className="hover:text-primary transition-colors" href="#">
                Instagram
              </a>
            </li>
            <li>
              <a className="hover:text-primary transition-colors" href="#">
                Behance
              </a>
            </li>
            <li>
              <a className="hover:text-primary transition-colors" href="#">
                LinkedIn
              </a>
            </li>
            <li>
              <a className="hover:text-primary transition-colors" href="#">
                X / Twitter
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 py-8 border-t border-primary/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] font-bold text-primary/30 uppercase tracking-[0.2em]">
        <p>© 2024 ELENA ROSE ART. ALL RIGHTS RESERVED.</p>
        <div className="flex gap-8">
          <a className="hover:text-primary" href="#">
            Privacy Policy
          </a>
          <a className="hover:text-primary" href="#">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}

export default function ShopPage() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-[#211114] dark:text-[#f8f6f6] font-display">
      <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
        <Header />
        <main className="flex-1 max-w-7xl mx-auto w-full px-6 py-10">
          {/* Header & Category Filters */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="space-y-2">
              <h2 className="text-4xl font-black tracking-tight">
                The Collected Works
              </h2>
              <p className="text-primary/60 max-w-md">
                Browse a curated selection of original pieces, high-quality
                prints, and digital explorations by Elena Rose.
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
          {/* Sort and Controls */}
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
          {/* Artwork Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {/* Artwork Item 1 */}
            <div className="artwork-card group relative flex flex-col gap-4">
              <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  data-alt="Vibrant abstract oil painting with blue and gold swirls"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDb5O-PaN7sv4T4z3n98B5wsZISQbttpV8Xh-HSu2CsOj3hFh0sVCDP4_8C_s-MCPUm3WMj72ySlqvTgYCx9RIANvx1PmwQV2kHf44KNywBNjwYuJ4DzZIivpyBeNkCSwS7LgR2vjieaEtNSBPgFh5pzSh4odYM8_zxNEvFtmusejxHnuBKT7zwZCcECUWToNJ6CsHDaL4dufaE8QoL2n_kOIVq2z7RfBaTCiVbXYADUNZ0wHaxMuVYRjjmki5NkeFhSBOCi3d_bWkN')",
                  }}
                ></div>
                <div className="quick-view-overlay absolute inset-0 bg-black/40 backdrop-blur-[2px] opacity-0 transition-opacity duration-300 flex items-center justify-center">
                  <button className="bg-white text-black px-6 py-3 rounded-full font-bold text-sm shadow-xl hover:bg-primary hover:text-white transition-colors">
                    Quick View
                  </button>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-white text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded">
                    New Release
                  </span>
                </div>
                <button className="absolute top-4 right-4 size-10 bg-white/90 dark:bg-black/50 backdrop-blur rounded-full flex items-center justify-center text-primary transition-transform active:scale-90">
                  <span className="material-symbols-outlined">favorite</span>
                </button>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-bold leading-tight group-hover:text-primary transition-colors">
                    Ephemeral Horizons
                  </h3>
                  <p className="text-sm text-primary/60 font-medium italic">
                    Oil on Canvas, 2024
                  </p>
                </div>
                <p className="text-lg font-black text-primary">$1,200</p>
              </div>
            </div>
            {/* Artwork Item 2 */}
            <div className="artwork-card group relative flex flex-col gap-4">
              <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  data-alt="Minimalist geometric marble sculpture on pedestal"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDlehNyzEw4RdnQkj2Ipqui2NIpC-HRiwfo4AlXo9v4XoZogf_hOrYyVQ9tCJ5Y9meCE9sss3BT_1j2zB1JkHEUidsrc-soW5CVELpjbQaiMCiCfDJjGeTP2L98OQxlduJe0I-MAtAP0r6dPYzmgHZuMLuSHPPQ_nByTDFSjqpCHg7INd6QfUtVSGtEN9HmbIWWosJeplbuJOhKZ0H2aNwU5umhOa93LabcJhl_XGBjeViGfyl1y1Vcxm8MytOK0oyA4J7WwDWbHPx9')",
                  }}
                ></div>
                <div className="quick-view-overlay absolute inset-0 bg-black/40 backdrop-blur-[2px] opacity-0 transition-opacity duration-300 flex items-center justify-center">
                  <button className="bg-white text-black px-6 py-3 rounded-full font-bold text-sm shadow-xl hover:bg-primary hover:text-white transition-colors">
                    Quick View
                  </button>
                </div>
                <button className="absolute top-4 right-4 size-10 bg-white/90 dark:bg-black/50 backdrop-blur rounded-full flex items-center justify-center text-primary/30 hover:text-primary transition-transform active:scale-90">
                  <span className="material-symbols-outlined">favorite</span>
                </button>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-bold leading-tight group-hover:text-primary transition-colors">
                    Stone Whispers
                  </h3>
                  <p className="text-sm text-primary/60 font-medium italic">
                    Marble Sculpture
                  </p>
                </div>
                <p className="text-lg font-black text-primary">$2,400</p>
              </div>
            </div>
            {/* Artwork Item 3 */}
            <div className="artwork-card group relative flex flex-col gap-4">
              <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  data-alt="Cyberpunk style digital art city scape"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB2DhlO8KZhlHvpr_qoswi5z6L4uNY5C4A83zIBWqAl0YXiI_JYyk2yxWCPj9gqgzFYGJlL-rr0yfaPSupkqJwEHsFmI0pc9010NzkKZplceZuiEqjW5UQFymkD0dMLwg1RwITxIcTkejKoK4Zc-ms_cX7N-OTaYbIS7aBWYdot0Ed_r_zy8la3u5qma-qKXIXyM_BmMYcPpE6cYEM6Km1k5UtZHgoe14_nwnWSgwcubHnSGRw8gl-VZ69hmxOET9eiZ0qyDjqccc3m')",
                  }}
                ></div>
                <div className="quick-view-overlay absolute inset-0 bg-black/40 backdrop-blur-[2px] opacity-0 transition-opacity duration-300 flex items-center justify-center">
                  <button className="bg-white text-black px-6 py-3 rounded-full font-bold text-sm shadow-xl hover:bg-primary hover:text-white transition-colors">
                    Quick View
                  </button>
                </div>
                <button className="absolute top-4 right-4 size-10 bg-white/90 dark:bg-black/50 backdrop-blur rounded-full flex items-center justify-center text-primary/30 hover:text-primary transition-transform active:scale-90">
                  <span className="material-symbols-outlined">favorite</span>
                </button>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-bold leading-tight group-hover:text-primary transition-colors">
                    Digital Dream #04
                  </h3>
                  <p className="text-sm text-primary/60 font-medium italic">
                    Digital Illustration
                  </p>
                </div>
                <p className="text-lg font-black text-primary">$450</p>
              </div>
            </div>
            {/* Artwork Item 4 */}
            <div className="artwork-card group relative flex flex-col gap-4">
              <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  data-alt="Textured acrylic painting with warm sunset tones"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD6InrvP5PZQvP7RX-wOPzE-utur3izYYm8ZSVFJaNS-FesRlr7XFW2Q2dV832QsdEPr7eEoX7L1cF3-rZfeSX6J2Q4nQb1gXh4kThWWG_oUoH55EFT0pihWXGxE-bdsXr5P4mmu31UB3l2t8U6FEdPKOYuDO2YI34Y1SUtJ-7VLJucLJOeqb0YszXPmdZ29ce65SOiU5MFcOTbCRBhtbjyXh8ZdeTlJTOMELOa6PAYPhFteBfRSjOdU88KHyFwWb-FACyOyKl9nAHu')",
                  }}
                ></div>
                <div className="quick-view-overlay absolute inset-0 bg-black/40 backdrop-blur-[2px] opacity-0 transition-opacity duration-300 flex items-center justify-center">
                  <button className="bg-white text-black px-6 py-3 rounded-full font-bold text-sm shadow-xl hover:bg-primary hover:text-white transition-colors">
                    Quick View
                  </button>
                </div>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-background-dark/80 text-white text-[10px] font-bold px-3 py-1 rounded-full backdrop-blur">
                    Only 1 Left
                  </span>
                </div>
                <button className="absolute top-4 right-4 size-10 bg-white/90 dark:bg-black/50 backdrop-blur rounded-full flex items-center justify-center text-primary/30 hover:text-primary transition-transform active:scale-90">
                  <span className="material-symbols-outlined">favorite</span>
                </button>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-bold leading-tight group-hover:text-primary transition-colors">
                    Midnight Silence
                  </h3>
                  <p className="text-sm text-primary/60 font-medium italic">
                    Acrylic on Linen
                  </p>
                </div>
                <p className="text-lg font-black text-primary">$980</p>
              </div>
            </div>
            {/* Artwork Item 5 */}
            <div className="artwork-card group relative flex flex-col gap-4">
              <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  data-alt="Abstract watercolor with soft pastel colors"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAXMI5UORTIVUEDUZsVDMr0LVpkbMTXdfzVDGmF38yA1NhedKEX_HWlnpF4iOYr1zEIGW4cGhrVaNbTInFV0tPnKbbdAy7cxUWYyEX3StRTNgGlJDeJVEvU5ijhCzLutdJGO1Kjkk3ik0swRg9WY9T86Rpwjw6qRAppxPeMYjWsVHlhBrAr0O_WSSCenVh2mVSImwHa6ytR3WBjRp7YQG4Yjy9W-igUKxU4xfGV8yKjDwB0gJqrsoKLITdIwJ9dt5DSFE3kiHHL5slM')",
                  }}
                ></div>
                <div className="quick-view-overlay absolute inset-0 bg-black/40 backdrop-blur-[2px] opacity-0 transition-opacity duration-300 flex items-center justify-center">
                  <button className="bg-white text-black px-6 py-3 rounded-full font-bold text-sm shadow-xl hover:bg-primary hover:text-white transition-colors">
                    Quick View
                  </button>
                </div>
                <button className="absolute top-4 right-4 size-10 bg-white/90 dark:bg-black/50 backdrop-blur rounded-full flex items-center justify-center text-primary/30 hover:text-primary transition-transform active:scale-90">
                  <span className="material-symbols-outlined">favorite</span>
                </button>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-bold leading-tight group-hover:text-primary transition-colors">
                    Prism Flow
                  </h3>
                  <p className="text-sm text-primary/60 font-medium italic">
                    Watercolor Print
                  </p>
                </div>
                <p className="text-lg font-black text-primary">$180</p>
              </div>
            </div>
            {/* Artwork Item 6 */}
            <div className="artwork-card group relative flex flex-col gap-4">
              <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  data-alt="Monochromatic charcoal sketch of a human form"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAMpmxItLl95ktjRXxKipX63ofghEjDm1DZniVxoy0dyzNJCkmnAASdi8zre0x6Wn7DWzk9RjCUZrhncNiLvWd-ea4Mrl4XP0j5KhDs-N4M5oGFvXabiK8niqDHEoxljbhfC2H5PhGRA4KgUNj4ZQW08LoTzQYzeTFQpO_p2Syej1T6wqVSFzYi8mlteQUB5IszthP4ChePA_Lx2nmoF0kPOPfuWMcIYI2fdbrBNtRl26zVNPeH_KSz_jgfRwKUM_ufBsqxL87bgh7i')",
                  }}
                ></div>
                <div className="quick-view-overlay absolute inset-0 bg-black/40 backdrop-blur-[2px] opacity-0 transition-opacity duration-300 flex items-center justify-center">
                  <button className="bg-white text-black px-6 py-3 rounded-full font-bold text-sm shadow-xl hover:bg-primary hover:text-white transition-colors">
                    Quick View
                  </button>
                </div>
                <button className="absolute top-4 right-4 size-10 bg-white/90 dark:bg-black/50 backdrop-blur rounded-full flex items-center justify-center text-primary/30 hover:text-primary transition-transform active:scale-90">
                  <span className="material-symbols-outlined">favorite</span>
                </button>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-bold leading-tight group-hover:text-primary transition-colors">
                    Shadow Study
                  </h3>
                  <p className="text-sm text-primary/60 font-medium italic">
                    Charcoal on Paper
                  </p>
                </div>
                <p className="text-lg font-black text-primary">$650</p>
              </div>
            </div>
            {/* Artwork Item 7 */}
            <div className="artwork-card group relative flex flex-col gap-4">
              <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  data-alt="High gloss neon colored wall sculpture"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCGYnEc-wJEmtcwnjVEk14YkAep5o88GR72XTKVPJ2Rsl5faADRYMYHCu7G2wKNBy3h_4QBHEyvfMKgRKpqd95yVrIz8X1kJr6XReJEfzE_MQsnU_7ZzlyYuebwW2ejVynIMPq7j84drcXbIcvio7Ih9tGsEyQ5yOt4cg-ab1XG3N5R5TucPB8PSS5P2NX8Iv4fk34XShcqkau12ozBOIv0TR-ybMCJg8EGxdyog_Q14SZxGtR6o4gvJbWibJAiovQuMVw11wXKIoY3')",
                  }}
                ></div>
                <div className="quick-view-overlay absolute inset-0 bg-black/40 backdrop-blur-[2px] opacity-0 transition-opacity duration-300 flex items-center justify-center">
                  <button className="bg-white text-black px-6 py-3 rounded-full font-bold text-sm shadow-xl hover:bg-primary hover:text-white transition-colors">
                    Quick View
                  </button>
                </div>
                <button className="absolute top-4 right-4 size-10 bg-white/90 dark:bg-black/50 backdrop-blur rounded-full flex items-center justify-center text-primary/30 hover:text-primary transition-transform active:scale-90">
                  <span className="material-symbols-outlined">favorite</span>
                </button>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-bold leading-tight group-hover:text-primary transition-colors">
                    Neon Pulse
                  </h3>
                  <p className="text-sm text-primary/60 font-medium italic">
                    Mixed Media Sculpture
                  </p>
                </div>
                <p className="text-lg font-black text-primary">$3,200</p>
              </div>
            </div>
            {/* Artwork Item 8 */}
            <div className="artwork-card group relative flex flex-col gap-4">
              <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  data-alt="Surrealist digital painting of a floating forest"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB_pNi75br3Qsl6PvD2y1pv-WcGaE3za_45zoeMuexxSIPUIYOel8Jsuu747pxrNWYpqakuHG2ASw1uLUJTYe8gsYvwOaeXDklPMUddJSceViIYpK2e_0E55vOybz51AUrbu-EGiZ00mP1sRQUMPmfkBNTptTOZizHLqEPBoVNHB-lIzh0YPq4snZyHXJQTHi5p7O5ufePwaGRZl1GFpWfQ43b1nwQoYw0-mhBLkqVNcWu7p7SQ6sjwV740pw-IfyDZ-iiXjAzgPfUD')",
                  }}
                ></div>
                <div className="quick-view-overlay absolute inset-0 bg-black/40 backdrop-blur-[2px] opacity-0 transition-opacity duration-300 flex items-center justify-center">
                  <button className="bg-white text-black px-6 py-3 rounded-full font-bold text-sm shadow-xl hover:bg-primary hover:text-white transition-colors">
                    Quick View
                  </button>
                </div>
                <button className="absolute top-4 right-4 size-10 bg-white/90 dark:bg-black/50 backdrop-blur rounded-full flex items-center justify-center text-primary/30 hover:text-primary transition-transform active:scale-90">
                  <span className="material-symbols-outlined">favorite</span>
                </button>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-bold leading-tight group-hover:text-primary transition-colors">
                    Ascension
                  </h3>
                  <p className="text-sm text-primary/60 font-medium italic">
                    Limited Edition Print
                  </p>
                </div>
                <p className="text-lg font-black text-primary">$295</p>
              </div>
            </div>
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
        </main>
        <Footer />
      </div>
    </div>
  );
}
