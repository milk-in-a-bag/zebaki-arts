import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="px-6 md:px-20 py-12 md:py-24">
      <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="aspect-4/5 bg-cream rounded-2xl overflow-hidden shadow-xl shadow-primary/5">
            <img
              className="w-full h-full object-cover grayscale-20 sepia-10"
              data-alt="Elegant portrait of female artist Elena Rose"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5yeko-l3H95ty2T0_8Bi_tq5f6y-XoQYdvBClQgoJV4oPWyuiSQaT8apUbvtfb1jaH9zOV_w75lG9rMrip2yuss7yLiB3NEM2h6SdT-bh517MxV7c74NekXa_pqpau19tJqk-sqHQDkcKCu7gJo6XWhUiuSDAXIOKpKWAHB9BW0xcVICbXgWZpinHNyp-qZlhn_9KtcDC-AfqVtaLCBgRX0NfZ1qJJ144StQ2_Rbn3xVb7hhRs_IlhOMglnvy74NhQNJ_kbmvk7sX"
              alt="Elena Rose portrait"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 bg-primary text-white p-8 rounded-2xl hidden md:block">
            <p className="text-sm uppercase tracking-widest font-bold">
              Est. 2012
            </p>
            <p className="text-2xl italic font-serif-accent">The Visionary</p>
          </div>
        </div>
        <div className="space-y-8">
          <div>
            <span className="text-primary font-bold uppercase tracking-[0.2em] text-sm mb-4 block">
              About the Artist
            </span>
            <h2 className="text-5xl md:text-7xl font-light leading-tight">
              Capturing the{" "}
              <span className="italic font-normal text-primary font-serif-accent">
                essence
              </span>{" "}
              of light.
            </h2>
          </div>
          <p className="text-lg text-soft-taupe leading-relaxed">
            Based in the heart of London, Elena Rose is a contemporary visionary
            whose work explores the delicate intersection of human emotion and
            the organic rhythms of nature.
          </p>
          <div className="pt-4">
            <Link to="/shop">
              <button className="bg-primary text-white px-8 py-4 rounded-full font-bold text-sm tracking-widest uppercase hover:opacity-90 transition-all flex items-center gap-3">
                Explore Portfolio
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
