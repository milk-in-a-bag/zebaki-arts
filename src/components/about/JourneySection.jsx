export default function JourneySection() {
  return (
    <section className="bg-cream py-24 px-6 md:px-20">
      <div className="max-w-[800px] mx-auto text-center space-y-12">
        <h2 className="text-3xl font-bold tracking-tight">The Journey</h2>
        <div className="space-y-6 text-lg leading-relaxed text-soft-taupe text-justify md:text-center">
          <p>
            My path into the world of contemporary art began with a fascination
            for the interplay between light and shadow. From early sketches in
            charcoal to expansive oil canvases, my journey has been one of
            constant evolution, seeking to capture the ephemeral beauty of the
            natural world through a soft, feminine lens.
          </p>
          <p>
            Having studied in Florence and later refining my craft in the misty
            landscapes of the English countryside, I developed a unique style
            that blends classical techniques with modern abstraction. Every
            stroke is a dialogue with the canvas, a moment frozen in time.
          </p>
        </div>
        <div className="pt-8 border-t border-blush flex justify-center gap-12">
          <div className="text-center">
            <p className="text-3xl font-bold text-primary">15+</p>
            <p className="text-xs uppercase tracking-widest text-soft-taupe">
              Exhibitions
            </p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-primary">200+</p>
            <p className="text-xs uppercase tracking-widest text-soft-taupe">
              Artworks
            </p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-primary">12</p>
            <p className="text-xs uppercase tracking-widest text-soft-taupe">
              Awards
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
