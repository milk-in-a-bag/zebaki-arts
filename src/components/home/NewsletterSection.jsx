export default function NewsletterSection() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto bg-[#1b0e10] text-white rounded-3xl p-10 md:p-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[100px]"></div>
        <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-4">Join the Studio List</h2>
            <p className="text-white/70 text-lg">
              Be the first to see new collections, behind-the-scenes studio
              updates, and exclusive exhibition invitations.
            </p>
          </div>
          <div className="w-full md:w-auto flex flex-col sm:flex-row gap-3">
            <input
              className="bg-white/10 border border-white/20 rounded-lg px-6 py-4 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-primary min-w-[300px]"
              placeholder="Your email address"
              type="email"
            />
            <button className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-bold transition-all">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
