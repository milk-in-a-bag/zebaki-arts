import { Link } from "react-router-dom";

export default function Breadcrumbs() {
  return (
    <nav className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary/60 mb-8">
      <Link to="/" className="hover:text-primary transition-colors">
        Home
      </Link>
      <span className="material-symbols-outlined text-[10px]">
        chevron_right
      </span>
      <Link to="/shop" className="hover:text-primary transition-colors">
        Paintings
      </Link>
      <span className="material-symbols-outlined text-[10px]">
        chevron_right
      </span>
      <span className="text-primary">Contemporary</span>
    </nav>
  );
}
