import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="w-full border-b border-primary/10 px-6 md:px-20 py-6 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="text-primary">
            <span className="material-symbols-outlined text-3xl">palette</span>
          </div>
          <h1 className="text-xl font-extrabold tracking-tight uppercase">
            Elena Rose Art
          </h1>
        </div>
        <nav className="hidden md:flex items-center gap-10">
          <Link
            to="/shop"
            className="text-sm font-semibold hover:text-primary transition-colors"
          >
            Gallery
          </Link>
          <Link
            to="/about"
            className="text-sm font-semibold hover:text-primary transition-colors"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-sm font-semibold hover:text-primary transition-colors border-b-2 border-primary pb-1"
          >
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <button className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all">
            <span className="material-symbols-outlined text-[20px]">
              shopping_bag
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}

function Footer() {
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

export default function ContactPage() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-[#1b0e10] dark:text-white transition-colors duration-300">
      <Header />
      <main className="max-w-7xl mx-auto px-6 md:px-20 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left Column: Info & Socials */}
          <div className="lg:col-span-5 flex flex-col gap-12">
            <div className="space-y-6">
              <h2 className="text-5xl md:text-6xl font-black tracking-tighter leading-none">
                Let's bring your <br />
                <span className="text-primary italic">vision</span> to life.
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 font-light leading-relaxed max-w-md">
                Currently accepting a limited number of custom commissions and
                creative collaborations for late 2024.
              </p>
            </div>
            <div className="flex flex-col gap-8">
              <div className="flex items-start gap-4">
                <div className="size-12 rounded-full bg-primary/5 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">mail</span>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-primary/60 mb-1">
                    Direct Email
                  </p>
                  <a
                    className="text-xl font-medium hover:underline decoration-primary underline-offset-4"
                    href="mailto:elena@thorneart.com"
                  >
                    elena@thorneart.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="size-12 rounded-full bg-primary/5 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">location_on</span>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-primary/60 mb-1">
                    Based In
                  </p>
                  <p className="text-xl font-medium">London, United Kingdom</p>
                </div>
              </div>
            </div>
            <div className="pt-8 border-t border-primary/10">
              <p className="text-xs font-bold uppercase tracking-widest text-primary/60 mb-6">
                Connect with me
              </p>
              <div className="flex gap-4">
                <a
                  className="size-12 flex items-center justify-center rounded-lg bg-white dark:bg-white/5 shadow-sm hover:shadow-md hover:bg-primary hover:text-white transition-all group"
                  href="#"
                >
                  <span className="material-symbols-outlined">camera</span>
                </a>
                <a
                  className="size-12 flex items-center justify-center rounded-lg bg-white dark:bg-white/5 shadow-sm hover:shadow-md hover:bg-primary hover:text-white transition-all group"
                  href="#"
                >
                  <span className="material-symbols-outlined">brush</span>
                </a>
                <a
                  className="size-12 flex items-center justify-center rounded-lg bg-white dark:bg-white/5 shadow-sm hover:shadow-md hover:bg-primary hover:text-white transition-all group"
                  href="#"
                >
                  <span className="material-symbols-outlined">share</span>
                </a>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl">
              <img
                alt="Abstract art painting on canvas"
                className="w-full h-64 object-cover"
                data-alt="Close up of vibrant abstract oil paint strokes"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuACQeGZx-fP0sfJNcx3Jt1ClUiuftW6j9Qw1yDIASDVdWU3ST6BaoEXGyT9yeM9Qtx4bADVYfL8PhHMyUDBsSMYCFHbR74gZXpGsKvgTEDOD47Ubf4gIvSbkAYsQpDItzCHAxFrBaUobTR6X9YVI6RQuxG9tK6C6qIcXAoBk2a4Qo9Zur5wz5IgN9owqbCQ69h4aDwuCcYFC04mxNv-fqzZMqhUEkOKUVg0AaF0UltD8hNFEDctqTUahGuLSP_0AqJWTxfM1qaF0jI1"
              />
            </div>
          </div>
          {/* Right Column: Form */}
          <div className="lg:col-span-7 bg-white dark:bg-white/5 p-8 md:p-12 rounded-3xl shadow-xl border border-primary/5">
            <div className="flex flex-col gap-8">
              {/* Inquiry Type Toggle */}
              <div className="flex p-1 bg-background-light dark:bg-background-dark/50 rounded-xl w-fit">
                <button
                  className="px-6 py-2.5 rounded-lg text-sm font-bold transition-all bg-white dark:bg-white/10 shadow-sm text-primary"
                  id="general-btn"
                >
                  General Inquiry
                </button>
                <button
                  className="px-6 py-2.5 rounded-lg text-sm font-bold text-gray-500 hover:text-primary transition-all"
                  id="commission-btn"
                >
                  Commission Request
                </button>
              </div>
              <form className="flex flex-col gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <label className="flex flex-col gap-2">
                    <span className="text-sm font-bold text-gray-700 dark:text-gray-300">
                      Your Name
                    </span>
                    <input
                      className="w-full rounded-xl border-gray-200 dark:border-white/10 bg-transparent p-4 text-base focus:ring-1 focus:ring-primary focus:border-primary transition-all"
                      placeholder="e.g. Julianne Smith"
                      type="text"
                    />
                  </label>
                  <label className="flex flex-col gap-2">
                    <span className="text-sm font-bold text-gray-700 dark:text-gray-300">
                      Email Address
                    </span>
                    <input
                      className="w-full rounded-xl border-gray-200 dark:border-white/10 bg-transparent p-4 text-base focus:ring-1 focus:ring-primary focus:border-primary transition-all"
                      placeholder="name@example.com"
                      type="email"
                    />
                  </label>
                </div>
                {/* Commission Specific Fields */}
                <div className="flex flex-col gap-6" id="commission-fields">
                  <label className="flex flex-col gap-2">
                    <span className="text-sm font-bold text-gray-700 dark:text-gray-300">
                      Project Budget Range
                    </span>
                    <select className="w-full rounded-xl border-gray-200 dark:border-white/10 bg-transparent p-4 text-base focus:ring-1 focus:ring-primary focus:border-primary transition-all">
                      <option>$500 - $1,000</option>
                      <option>$1,000 - $2,500</option>
                      <option>$2,500 - $5,000</option>
                      <option>$5,000+</option>
                    </select>
                  </label>
                  <label className="flex flex-col gap-2">
                    <span className="text-sm font-bold text-gray-700 dark:text-gray-300">
                      Preferred Medium
                    </span>
                    <div className="flex flex-wrap gap-3 mt-1">
                      <label className="inline-flex items-center cursor-pointer">
                        <input
                          className="hidden peer"
                          name="medium"
                          type="checkbox"
                          value="oil"
                        />
                        <span className="px-4 py-2 rounded-full border border-gray-200 dark:border-white/10 peer-checked:bg-primary/10 peer-checked:border-primary peer-checked:text-primary transition-all text-xs font-bold">
                          Oil Painting
                        </span>
                      </label>
                      <label className="inline-flex items-center cursor-pointer">
                        <input
                          className="hidden peer"
                          name="medium"
                          type="checkbox"
                          value="digital"
                        />
                        <span className="px-4 py-2 rounded-full border border-gray-200 dark:border-white/10 peer-checked:bg-primary/10 peer-checked:border-primary peer-checked:text-primary transition-all text-xs font-bold">
                          Digital Art
                        </span>
                      </label>
                      <label className="inline-flex items-center cursor-pointer">
                        <input
                          className="hidden peer"
                          name="medium"
                          type="checkbox"
                          value="watercolor"
                        />
                        <span className="px-4 py-2 rounded-full border border-gray-200 dark:border-white/10 peer-checked:bg-primary/10 peer-checked:border-primary peer-checked:text-primary transition-all text-xs font-bold">
                          Watercolor
                        </span>
                      </label>
                    </div>
                  </label>
                </div>
                <label className="flex flex-col gap-2">
                  <span className="text-sm font-bold text-gray-700 dark:text-gray-300">
                    Tell me about your idea
                  </span>
                  <textarea
                    className="w-full rounded-xl border-gray-200 dark:border-white/10 bg-transparent p-4 text-base focus:ring-1 focus:ring-primary focus:border-primary transition-all resize-none"
                    placeholder="Share as many details as possible..."
                    rows="5"
                  ></textarea>
                </label>
                <button
                  className="mt-4 w-full md:w-fit px-12 py-5 bg-primary text-white font-black rounded-xl hover:shadow-2xl hover:scale-[1.02] transition-all flex items-center justify-center gap-3"
                  type="submit"
                >
                  Send Message
                  <span className="material-symbols-outlined text-sm">
                    send
                  </span>
                </button>
                <p className="text-center text-xs text-gray-500 font-medium">
                  I typically respond within 2-3 business days.
                </p>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
