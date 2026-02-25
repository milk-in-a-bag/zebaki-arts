export default function ContactForm() {
  return (
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
            <span className="material-symbols-outlined text-sm">send</span>
          </button>
          <p className="text-center text-xs text-gray-500 font-medium">
            I typically respond within 2-3 business days.
          </p>
        </form>
      </div>
    </div>
  );
}
