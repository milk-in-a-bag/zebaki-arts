import { Link } from "react-router-dom";

export default function CTASection() {
  return (
    <section className="bg-blush py-24 px-6 md:px-20 text-center">
      <div className="max-w-[600px] mx-auto space-y-8">
        <h2 className="text-4xl font-light">
          Interested in a{" "}
          <span className="italic font-serif-accent">commission</span>?
        </h2>
        <p className="text-soft-taupe text-lg">
          I am currently accepting select commissions for private collectors and
          commercial spaces.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center pt-4">
          <Link to="/contact">
            <button className="bg-primary text-white px-10 py-4 rounded-full font-bold text-sm tracking-widest uppercase hover:opacity-90 transition-all">
              Get in Touch
            </button>
          </Link>
          <Link to="/shop">
            <button className="bg-white text-primary border border-primary/20 px-10 py-4 rounded-full font-bold text-sm tracking-widest uppercase hover:bg-white/50 transition-all">
              View Collections
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
