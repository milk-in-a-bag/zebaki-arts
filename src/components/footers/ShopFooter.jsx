import { Link } from "react-router-dom";

export default function ShopFooter() {
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
