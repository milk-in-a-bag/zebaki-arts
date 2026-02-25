import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-background-light border-t border-primary/10 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <span className="material-symbols-outlined text-primary text-2xl">
                filter_vintage
              </span>
              <h2 className="text-lg font-bold tracking-tight">
                Elena Rose Art
              </h2>
            </div>
            <p className="text-sm text-[#1b0e10]/60 leading-relaxed max-w-xs">
              Creating timeless oil paintings that evoke the quiet beauty of
              nature and the human spirit from her sun-drenched studio in
              Provence.
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-6 text-sm uppercase tracking-widest">
              Navigation
            </h3>
            <ul className="space-y-4 text-sm text-[#1b0e10]/70">
              <li>
                <Link
                  to="/shop"
                  className="hover:text-primary transition-colors"
                >
                  Original Artworks
                </Link>
              </li>
              <li>
                <a className="hover:text-primary transition-colors" href="#">
                  Limited Edition Prints
                </a>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-primary transition-colors"
                >
                  Commission Inquiry
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-primary transition-colors"
                >
                  Artist Biography
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-6 text-sm uppercase tracking-widest">
              Connect
            </h3>
            <ul className="space-y-4 text-sm text-[#1b0e10]/70">
              <li>
                <a className="hover:text-primary transition-colors" href="#">
                  Instagram
                </a>
              </li>
              <li>
                <a className="hover:text-primary transition-colors" href="#">
                  Pinterest
                </a>
              </li>
              <li>
                <a className="hover:text-primary transition-colors" href="#">
                  Facebook
                </a>
              </li>
              <li>
                <a className="hover:text-primary transition-colors" href="#">
                  TikTok
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-6 text-sm uppercase tracking-widest">
              Support
            </h3>
            <ul className="space-y-4 text-sm text-[#1b0e10]/70">
              <li>
                <a className="hover:text-primary transition-colors" href="#">
                  Shipping & Returns
                </a>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-primary transition-colors"
                >
                  Contact Studio
                </Link>
              </li>
              <li>
                <a className="hover:text-primary transition-colors" href="#">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a className="hover:text-primary transition-colors" href="#">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-primary/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-[#1b0e10]/40 font-medium tracking-wider uppercase">
            © 2024 Elena Rose Fine Art. All Rights Reserved.
          </p>
          <div className="flex gap-8">
            <span className="material-symbols-outlined text-xl text-primary/40 cursor-pointer hover:text-primary transition-colors">
              share
            </span>
            <span className="material-symbols-outlined text-xl text-primary/40 cursor-pointer hover:text-primary transition-colors">
              favorite
            </span>
            <span className="material-symbols-outlined text-xl text-primary/40 cursor-pointer hover:text-primary transition-colors">
              shopping_bag
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
