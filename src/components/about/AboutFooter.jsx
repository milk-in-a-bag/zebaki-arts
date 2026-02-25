import { Link } from "react-router-dom";

export default function AboutFooter() {
  return (
    <footer className="bg-background-dark text-white/60 py-16 px-6 md:px-20">
      <div className="max-w-[1200px] mx-auto grid md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2 space-y-6">
          <div className="flex items-center gap-3 text-white">
            <span className="material-symbols-outlined text-2xl text-primary">
              brush
            </span>
            <h4 className="text-lg font-bold tracking-tight uppercase">
              Elena Rose
            </h4>
          </div>
          <p className="max-w-[300px] text-sm leading-relaxed">
            A contemporary art studio dedicated to finding the extraordinary
            within the ordinary.
          </p>
        </div>
        <div>
          <h5 className="text-white font-bold text-sm uppercase tracking-widest mb-6">
            Explore
          </h5>
          <ul className="space-y-4 text-sm">
            <li>
              <Link to="/shop" className="hover:text-primary transition-colors">
                The Gallery
              </Link>
            </li>
            <li>
              <a className="hover:text-primary transition-colors" href="#">
                Current Projects
              </a>
            </li>
            <li>
              <a className="hover:text-primary transition-colors" href="#">
                Exhibition Archive
              </a>
            </li>
            <li>
              <a className="hover:text-primary transition-colors" href="#">
                Studio Journal
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="text-white font-bold text-sm uppercase tracking-widest mb-6">
            Social
          </h5>
          <ul className="space-y-4 text-sm">
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
                LinkedIn
              </a>
            </li>
            <li>
              <a className="hover:text-primary transition-colors" href="#">
                Vimeo
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between gap-6 text-xs uppercase tracking-widest">
        <p>© 2024 Elena Rose. All Rights Reserved.</p>
        <div className="flex gap-8">
          <a className="hover:text-white transition-colors" href="#">
            Privacy Policy
          </a>
          <a className="hover:text-white transition-colors" href="#">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}
