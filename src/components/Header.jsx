import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-primary/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined text-primary text-3xl">
            filter_vintage
          </span>
          <h1 className="text-xl font-bold tracking-tight">Elena Rose Art</h1>
        </div>
        <nav className="hidden md:flex items-center gap-10 text-sm font-medium tracking-wide">
          <Link to="/shop" className="hover:text-primary transition-colors">
            Gallery
          </Link>
          <Link to="/about" className="hover:text-primary transition-colors">
            About
          </Link>
          <a className="hover:text-primary transition-colors" href="#">
            Studio
          </a>
          <Link to="/contact" className="hover:text-primary transition-colors">
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-6">
          <button className="hidden sm:block bg-primary text-white px-6 py-2.5 rounded-lg text-sm font-bold hover:bg-primary/90 transition-all shadow-sm">
            Shop Collection
          </button>
          <div
            className="size-10 rounded-full border-2 border-primary/20 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBwpcruoKqnmZiW4j_ppLZTtfPglF_r0dAZ8AuK3TaLPFPyictgkPIvHHAOcgY1-M2KJGvSvKkbqGTNDt51D92Q1mPoU1vmJIlrovBtQqwMgPVvpuZnpjzr4G57DqpH8DdCcym-1bXb9t3ygaOO1Lv62MSy394NJ_NHpBjLVwc5uChlPwNTxCOx_TQC3qr3qU_cUbhy5SXTvj86EL-xfPSu0z-VIqJxiNPqbvSbEDPCauXrVFXbG-UOmN8LOvlGpVQSz8dTNFFqQFxU')",
            }}
          ></div>
        </div>
      </div>
    </header>
  );
}
