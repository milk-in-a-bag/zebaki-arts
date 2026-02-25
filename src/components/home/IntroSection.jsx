import { Link } from "react-router-dom";

export default function IntroSection() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
            <img
              className="w-full h-full object-cover"
              data-alt="Elena Rose working in her light-filled studio"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAdLp41y0NXVpiQlAasAsjwDVM4EouR1Ogmxj9xlaOpCVHhGsDIzoUXP61dJQkejAjpISaYPjXY60p2DUe2vo9XtHXZc7U2PGGAn1zXaYo7ZYd76DgNwLcFJfFs0dlNbDNkt1GvlW1Ub-W0_yyHvP1ONiElH-iUxu_vXoBtCE70oXmIFRlV2k4AtvJ__pDZbOqCWIW_Ea_RlhiQU-Vi0fUKL1cthhJ8dTJdXLaxN5UmneQzzbfMFhBrYPRHHj0xZ5oHFg0zxfxzuZvN"
              alt="Elena Rose in her studio"
            />
          </div>
          <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-primary/10 rounded-full blur-3xl -z-10"></div>
        </div>
        <div>
          <h3 className="text-3xl font-bold mb-6">
            The Vision Behind the Canvas
          </h3>
          <p className="text-lg text-[#1b0e10]/70 mb-6 leading-relaxed">
            My work explores the delicate balance between strength and
            vulnerability, drawing inspiration from the golden hour and the
            quiet whispers of the garden.
          </p>
          <p className="text-lg text-[#1b0e10]/70 mb-8 leading-relaxed">
            Every piece is a journey through color and light, designed to bring
            warmth and sophisticated elegance into your living space. I believe
            art should be a portal to a moment of stillness.
          </p>
          <Link
            to="/about"
            className="flex items-center gap-4 text-primary font-bold cursor-pointer group"
          >
            <span className="tracking-wide">Explore the Creative Process</span>
            <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">
              arrow_forward
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
