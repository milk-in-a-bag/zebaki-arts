export default function TestimonialsSection() {
  return (
    <section className="py-24 px-6 bg-primary/5">
      <div className="max-w-4xl mx-auto text-center">
        <span className="material-symbols-outlined text-primary text-4xl mb-6">
          format_quote
        </span>
        <div className="relative overflow-hidden">
          <div className="transition-all duration-500">
            <p className="text-2xl md:text-3xl font-light italic leading-relaxed text-[#1b0e10] mb-8">
              "Elena's work transformed our living room into a sanctuary. The
              way she captures light is truly magical; it feels like the
              painting breathes with the room as the day changes."
            </p>
            <h5 className="text-lg font-bold">— Sarah J., Private Collector</h5>
          </div>
        </div>
        <div className="flex justify-center gap-3 mt-10">
          <div className="w-2 h-2 rounded-full bg-primary"></div>
          <div className="w-2 h-2 rounded-full bg-primary/20"></div>
          <div className="w-2 h-2 rounded-full bg-primary/20"></div>
        </div>
      </div>
    </section>
  );
}
