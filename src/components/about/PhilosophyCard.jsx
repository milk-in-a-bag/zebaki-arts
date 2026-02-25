export default function PhilosophyCard() {
  return (
    <section className="px-6 md:px-20 -mt-16 relative z-10">
      <div className="max-w-[1000px] mx-auto bg-white border border-blush p-12 md:p-20 rounded-3xl shadow-2xl shadow-primary/5 flex flex-col md:flex-row gap-12 items-center">
        <div className="md:w-1/3">
          <div className="aspect-square bg-blush rounded-2xl flex items-center justify-center">
            <span className="material-symbols-outlined text-primary text-7xl">
              lightbulb
            </span>
          </div>
        </div>
        <div className="md:w-2/3 space-y-6">
          <h3 className="text-3xl font-bold italic font-serif-accent">
            "Beauty in Imperfection"
          </h3>
          <p className="text-xl text-soft-taupe leading-relaxed">
            My philosophy is rooted in Wabi-sabi—the appreciation of beauty that
            is imperfect, impermanent, and incomplete. I believe that art should
            not just be seen, but felt. It should provide a sanctuary for the
            soul in a loud world.
          </p>
          <div className="flex items-center gap-4 pt-4">
            <div className="h-px w-12 bg-primary"></div>
            <span className="text-xs uppercase tracking-widest font-bold text-primary">
              Philosophy of Creation
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
