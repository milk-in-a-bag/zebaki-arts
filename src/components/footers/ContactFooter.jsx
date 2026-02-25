export default function ContactFooter() {
  return (
    <footer className="mt-12 border-t border-primary/10 py-12 px-6 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-primary text-xl">
            palette
          </span>
          <span className="text-sm font-bold tracking-widest uppercase">
            Elena Rose Art © 2024
          </span>
        </div>
        <div className="flex gap-8 text-xs font-bold uppercase tracking-widest text-gray-500">
          <a className="hover:text-primary transition-colors" href="#">
            Privacy Policy
          </a>
          <a className="hover:text-primary transition-colors" href="#">
            Terms of Service
          </a>
          <a className="hover:text-primary transition-colors" href="#">
            Press Kit
          </a>
        </div>
        <div className="flex gap-4">
          <div className="size-2 rounded-full bg-primary/20 animate-pulse"></div>
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">
            Handcrafted in London
          </p>
        </div>
      </div>
    </footer>
  );
}
