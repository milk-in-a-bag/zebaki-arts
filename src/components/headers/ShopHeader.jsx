import { Link } from "react-router-dom";

export default function ShopHeader() {
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
