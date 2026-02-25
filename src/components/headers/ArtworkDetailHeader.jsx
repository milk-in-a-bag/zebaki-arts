import { Link } from "react-router-dom";

export default function ArtworkDetailHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-primary/10 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md px-6 md:px-12 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-10">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="text-primary">
              <svg
                className="w-8 h-8"
                fill="none"
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clipRule="evenodd"
                  d="M12.0799 24L4 19.2479L9.95537 8.75216L18.04 13.4961L18.0446 4H29.9554L29.96 13.4961L38.0446 8.75216L44 19.2479L35.92 24L44 28.7521L38.0446 39.2479L29.96 34.5039L29.9554 44H18.0446L18.04 34.5039L9.95537 39.2479L4 28.7521L12.0799 24Z"
                  fill="currentColor"
                  fillRule="evenodd"
                ></path>
              </svg>
            </div>
            <span className="text-xl font-extrabold tracking-tighter uppercase">
              ArtGallery
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold tracking-wide uppercase">
            <Link to="/shop" className="hover:text-primary transition-colors">
              Collections
            </Link>
            <a className="hover:text-primary transition-colors" href="#">
              Artists
            </a>
            <a className="hover:text-primary transition-colors" href="#">
              Exhibitions
            </a>
          </nav>
        </div>
        <div className="flex items-center gap-6">
          <div className="hidden lg:flex items-center bg-primary/5 dark:bg-white/5 rounded-full px-4 py-2 border border-primary/10">
            <span className="material-symbols-outlined text-primary text-xl">
              search
            </span>
            <input
              className="bg-transparent border-none focus:ring-0 text-sm w-48 placeholder:text-gray-400"
              placeholder="Search artworks..."
              type="text"
            />
          </div>
          <button className="relative p-2 hover:bg-primary/10 rounded-full transition-colors">
            <span className="material-symbols-outlined text-2xl">
              shopping_bag
            </span>
            <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full"></span>
          </button>
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary/20">
            <img
              className="w-full h-full object-cover"
              data-alt="User profile avatar portrait"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPu0v9ZhAzqTWpd6EGbRa70PH1-7D903ad-x04kKn7___5E8sc6fxxPLyUmexy-4ws-bBGIV9_l6262JTEHSqUUxT-NYHOmMoZsyM8syBrfRh-eczVjHJHqRt_d_YGowXVWF3XL6dQ2mXlMDCnUOBz6MO52CHRWwWRtqZo18CTI44Q47wcCYrs72e_5Uo1mNSnZMXDFC7DULBIY7GgbnfBKXMuqfc6DrtVz1zeTaAqhuHuf_Gw57mUMvcXZwB1LIT0hx38Nybpjpij"
              alt="User"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
