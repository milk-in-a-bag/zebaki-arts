import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[85vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAcsZseR8Ui2HJR663J1z6rYs1hxu13h5gu-Bm__qwxDpezvmdkpYcEBhQ7vDzOfxxe4mkSpztOr6Gng_HI_uDSRsGGReguDsU2skC_FeOmq8zIzli_ZQKLcJcGE70dtlVv_18DUZ93G1SpOWdu_8En4b5A5FOPlpeqlAKh-t1bOp6PXT9p9TAa8AQan4BpOF3jgvCy_sayn9s1bakD_kA042biGnKLtGM9JRKtwXifI6VS078f4H5nq-ADENMQ-m6dzjU9XdDGP2A-')",
          }}
        ></div>
        <div className="absolute inset-0 hero-gradient"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full mt-20">
        <div className="max-w-2xl">
          <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
            Original Fine Art
          </span>
          <h2 className="text-5xl md:text-7xl font-black leading-tight mb-6 text-[#1b0e10]">
            Capturing the Soul of the Natural World
          </h2>
          <p className="text-lg md:text-xl text-[#1b0e10]/80 mb-10 leading-relaxed font-light">
            Experience the evocative oil paintings of Elena Rose, where light
            meets emotion in every delicate brushstroke.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/shop">
              <button className="bg-primary text-white px-8 py-4 rounded-lg text-base font-bold hover:scale-[1.02] transition-transform">
                View Gallery
              </button>
            </Link>
            <Link to="/about">
              <button className="bg-white/50 backdrop-blur-sm border border-primary/20 text-[#1b0e10] px-8 py-4 rounded-lg text-base font-bold hover:bg-white/80 transition-all">
                Read My Story
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
