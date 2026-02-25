export default function ArtistStory() {
  return (
    <section className="mt-32 max-w-4xl mx-auto space-y-12">
      <div className="text-center space-y-4">
        <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-4 border-primary/10">
          <img
            className="w-full h-full object-cover"
            data-alt="Portrait of artist Julian Marc"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSjTSBuzv96e-3WmIVBqHxx7dCvsRyESBOKFWVtAN77n4RcuMK8Sr9hoyZKjJc2ozuYGH-42c2w_uWJMq14I4kdlDlKn9SgGv0RbGgiHSMVnuBpQSqLYOWGr1I_EfVe4hdJwoEm_CUYNQzyXhz9emYYxffKxUikhJ330bgH4PC2XqLuO7up6LeoUWk590faD2tos2NqwQUjd9dKSOTZt6NdBtdW9EF_GC19ChngMqFFiPb-0-q7fjgWMIS6FyFwHNdIVNYcsGoIJCy"
            alt="Julian Marc"
          />
        </div>
        <h2 className="text-3xl font-extrabold tracking-tight">
          Behind the Canvas
        </h2>
        <div className="h-1 w-12 bg-primary mx-auto rounded-full"></div>
      </div>
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="text-xl leading-relaxed text-gray-700 dark:text-gray-300 italic font-light">
          "Ethereal Horizons was born from a morning spent on the coast of
          Biarritz, where the fog and the ocean merged into a single gradient of
          possibility. I wanted to capture the weightlessness of that moment—the
          feeling that the world is both disappearing and beginning anew."
        </p>
        <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-400 mt-6">
          Julian Marc explores the intersection of physical landscapes and
          internal emotional states. Using a palette knife and multiple layers
          of glazing, he creates textures that seem to shift depending on the
          light. This particular piece took four months to complete, as Marc
          waited for each layer of oil to cure perfectly before adding the next
          translucent wash of color.
        </p>
      </div>
    </section>
  );
}
