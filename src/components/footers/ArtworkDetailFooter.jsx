export default function ArtworkDetailFooter() {
  return (
    <footer className="mt-32 py-12 border-t border-primary/10 bg-white dark:bg-neutral-900/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-8 text-sm">
        <div className="flex items-center gap-2">
          <div className="text-primary w-6 h-6">
            <svg
              fill="currentColor"
              viewBox="0 0 48 48"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12.0799 24L4 19.2479L9.95537 8.75216L18.04 13.4961L18.0446 4H29.9554L29.96 13.4961L38.0446 8.75216L44 19.2479L35.92 24L44 28.7521L38.0446 39.2479L29.96 34.5039L29.9554 44H18.0446L18.04 34.5039L9.95537 39.2479L4 28.7521L12.0799 24Z"></path>
            </svg>
          </div>
          <span className="font-extrabold uppercase tracking-tighter">
            ArtGallery
          </span>
        </div>
        <div className="flex gap-12 text-gray-500 font-medium">
          <a className="hover:text-primary transition-colors" href="#">
            Privacy Policy
          </a>
          <a className="hover:text-primary transition-colors" href="#">
            Shipping & Returns
          </a>
          <a className="hover:text-primary transition-colors" href="#">
            Terms of Service
          </a>
        </div>
        <p className="text-gray-400">
          © 2024 ArtGallery Intl. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
