import { Link } from "react-router-dom";

export default function ContactHeader() {
  return (
    <header className="w-full border-b border-primary/10 px-6 md:px-20 py-6 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="text-primary">
            <span className="material-symbols-outlined text-3xl">palette</span>
          </div>
          <h1 className="text-xl font-extrabold tracking-tight uppercase">
            Elena Rose Art
          </h1>
        </div>
        <nav className="hidden md:flex items-center gap-10">
          <Link
            to="/shop"
            className="text-sm font-semibold hover:text-primary transition-colors"
          >
            Gallery
          </Link>
          <Link
            to="/about"
            className="text-sm font-semibold hover:text-primary transition-colors"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-sm font-semibold hover:text-primary transition-colors border-b-2 border-primary pb-1"
          >
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <button className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all">
            <span className="material-symbols-outlined text-[20px]">
              shopping_bag
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
