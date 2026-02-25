import { Link } from "react-router-dom";

export default function AboutHeader() {
  return (
    <header className="sticky top-0 z-50 bg-background-light/80 backdrop-blur-md border-b border-blush px-6 md:px-20 py-4">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="text-primary">
            <span className="material-symbols-outlined text-3xl">brush</span>
          </div>
          <h1 className="text-xl font-bold tracking-tight uppercase">
            Elena Rose
          </h1>
        </div>
        <nav className="hidden md:flex items-center gap-10">
          <Link
            to="/shop"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Work
          </Link>
          <Link
            to="/about"
            className="text-sm font-bold border-b-2 border-primary pb-0.5"
          >
            About
          </Link>
          <a
            className="text-sm font-medium hover:text-primary transition-colors"
            href="#"
          >
            Studio
          </a>
          <Link
            to="/contact"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <a
            className="p-2 bg-blush rounded-lg hover:bg-primary/10 transition-colors"
            href="#"
          >
            <span className="material-symbols-outlined text-xl">camera</span>
          </a>
          <button className="md:hidden">
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </div>
    </header>
  );
}
