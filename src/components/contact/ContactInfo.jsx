export default function ContactInfo() {
  return (
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
  );
}
