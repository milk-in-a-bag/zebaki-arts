import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-primary/10 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md px-6 md:px-12 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-10">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="text-primary">
              <svg
                className="w-8 h-8"
                fill="none"
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clipRule="evenodd"
                  d="M12.0799 24L4 19.2479L9.95537 8.75216L18.04 13.4961L18.0446 4H29.9554L29.96 13.4961L38.0446 8.75216L44 19.2479L35.92 24L44 28.7521L38.0446 39.2479L29.96 34.5039L29.9554 44H18.0446L18.04 34.5039L9.95537 39.2479L4 28.7521L12.0799 24Z"
                  fill="currentColor"
                  fillRule="evenodd"
                ></path>
              </svg>
            </div>
            <span className="text-xl font-extrabold tracking-tighter uppercase">
              ArtGallery
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold tracking-wide uppercase">
            <Link to="/shop" className="hover:text-primary transition-colors">
              Collections
            </Link>
            <a className="hover:text-primary transition-colors" href="#">
              Artists
            </a>
            <a className="hover:text-primary transition-colors" href="#">
              Exhibitions
            </a>
          </nav>
        </div>
        <div className="flex items-center gap-6">
          <div className="hidden lg:flex items-center bg-primary/5 dark:bg-white/5 rounded-full px-4 py-2 border border-primary/10">
            <span className="material-symbols-outlined text-primary text-xl">
              search
            </span>
            <input
              className="bg-transparent border-none focus:ring-0 text-sm w-48 placeholder:text-gray-400"
              placeholder="Search artworks..."
              type="text"
            />
          </div>
          <button className="relative p-2 hover:bg-primary/10 rounded-full transition-colors">
            <span className="material-symbols-outlined text-2xl">
              shopping_bag
            </span>
            <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full"></span>
          </button>
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary/20">
            <img
              className="w-full h-full object-cover"
              data-alt="User profile avatar portrait"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPu0v9ZhAzqTWpd6EGbRa70PH1-7D903ad-x04kKn7___5E8sc6fxxPLyUmexy-4ws-bBGIV9_l6262JTEHSqUUxT-NYHOmMoZsyM8syBrfRh-eczVjHJHqRt_d_YGowXVWF3XL6dQ2mXlMDCnUOBz6MO52CHRWwWRtqZo18CTI44Q47wcCYrs72e_5Uo1mNSnZMXDFC7DULBIY7GgbnfBKXMuqfc6DrtVz1zeTaAqhuHuf_Gw57mUMvcXZwB1LIT0hx38Nybpjpij"
              alt="User"
            />
          </div>
        </div>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="mt-32 py-12 border-t border-primary/10 bg-white dark:bg-neutral-900/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-8 text-sm">
        <div className="flex items-center gap-2">
          <div className="text-primary w-6 h-6">
            <svg
              fill="currentColor"
              viewBox="0 0 48 48"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12.0799 24L4 19.2479L9.95537 8.75216L18.04 13.4961L18.0446 4H29.9554L29.96 13.4961L38.0446 8.75216L44 19.2479L35.92 24L44 28.7521L38.0446 39.2479L29.96 34.5039L29.9554 44H18.0446L18.04 34.5039L9.95537 39.2479L4 28.7521L12.0799 24Z"></path>
            </svg>
          </div>
          <span className="font-extrabold uppercase tracking-tighter">
            ArtGallery
          </span>
        </div>
        <div className="flex gap-12 text-gray-500 font-medium">
          <a className="hover:text-primary transition-colors" href="#">
            Privacy Policy
          </a>
          <a className="hover:text-primary transition-colors" href="#">
            Shipping & Returns
          </a>
          <a className="hover:text-primary transition-colors" href="#">
            Terms of Service
          </a>
        </div>
        <p className="text-gray-400">
          © 2024 ArtGallery Intl. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default function ArtworkDetailPage() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-[#1b0e10] dark:text-white transition-colors duration-300">
      <Header />
      <main className="max-w-7xl mx-auto px-6 md:px-12 py-8">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary/60 mb-8">
          <Link to="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <span className="material-symbols-outlined text-[10px]">
            chevron_right
          </span>
          <Link to="/shop" className="hover:text-primary transition-colors">
            Paintings
          </Link>
          <span className="material-symbols-outlined text-[10px]">
            chevron_right
          </span>
          <span className="text-primary">Contemporary</span>
        </nav>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left: Media Gallery (60% Desktop) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="relative group overflow-hidden rounded-xl bg-white dark:bg-neutral-900 border border-primary/5 shadow-2xl">
              <div className="aspect-[4/5] w-full zoom-container overflow-hidden cursor-zoom-in">
                <img
                  className="w-full h-full object-cover transition-transform duration-700 ease-out"
                  data-alt="Abstract oil painting with vibrant pinks and deep blues"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAdEdzA6XePcWCzfvnyW3tMZNFolBkoFDYxqU-eNwzHxaJuZ1-ig7vuYRc4MSC8l3hnFoEslIcLq_n8EjgWY_GuFaig6JXlLN5YqckP8cRCIbh_yovaG0DEEIodmDZhNzP6nO8VMYaMoViW0-QJKngHlRrmKp_vjr-PAHQqZ1SOJ7JqKVi8cKW7BSHgRJAW7bP6ThdkA5qTaSxQfwhHRrin_V7_W7pCMbWidwkuKPWXhM9CmfP6QQN8jl-RzE20bOOAtip9j6tjxr8N"
                  alt="Ethereal Horizons"
                />
              </div>
              <button className="absolute bottom-6 right-6 bg-white/90 dark:bg-black/90 p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="material-symbols-outlined">fullscreen</span>
              </button>
            </div>
            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-4">
              <button className="aspect-square rounded-lg border-2 border-primary overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  data-alt="Detailed view of canvas texture"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUQuWCDLLsDSNiBcQ2IMQsMdL1HJpd9lO8uOkMAoXwSdfureiM2rbxabEKonbXf5t1eHCs8dUp6VnnsbqXeObN6ROCojvPPYSA9ztq447yw7Xq2jtIpr2d7Ig9FJgw5t5R30GqyU5EOzNhhmCN4IocWoOxId8X8UmCupBmgufGjq84Qu0fcQpZLIKXwIDRUkLpidR9ULyuV6hYiWF9FcnJo8tOleEu8HcWkGxQd7pFrOrAnEuB2n3igoGKm_c61neD0NPPy1zTCj66"
                  alt="Detail 1"
                />
              </button>
              <button className="aspect-square rounded-lg border-2 border-transparent hover:border-primary/30 overflow-hidden transition-colors">
                <img
                  className="w-full h-full object-cover"
                  data-alt="Alternative angle of the artwork"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuANUj6-aeWfUWm8HTmVg79in3xKFWOJxSejnHWEhmTlA006PAQjpklPoeSlHAg6YRkhBirYxMUFTvtnGVN5Yivvu_tTzZOq3Pg_p2IIGj4pfxmjFuXY7bZQxthN8AjYQ9FOsUOpPCX0zawvwZhnh82R0N9iZ93ObqJS0phHfR31vd4eI6xhdMPcxHqKqYxgAYNxqnAncNojRM_e8X2xf9JOb7BXnj-7lo4FeyyXs1E7RAHp1pTQONJZJI_LXKdoT1-LGCkkD5IVSbVW"
                  alt="Detail 2"
                />
              </button>
              <button className="aspect-square rounded-lg border-2 border-transparent hover:border-primary/30 overflow-hidden transition-colors">
                <img
                  className="w-full h-full object-cover"
                  data-alt="Side profile of the painting frame"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBR5djXp_2KyfWsljASaWyItbd1guPlPx7oRT_2BbPyNwI71lDxFsVWB-SMA7BaaS1VlL8wVWEi2o42SKU61nT4aFjgIi_v_gbxSiZfSBEmTxeq5OY9n7kKOPFR1Ie10vxDcpEQ0v-haSX7i6RA9Sft8OrwX6Pp5qcZUWtTF4oDjnRv_a5QTlu70IxmWpp6b6Hcf4d65briLwXoeZjUkDfZyy56qZxH95GPLp0SuXDpxwu7MnZbE7FLrSmfR8lXStkR9oIPULgXoRez"
                  alt="Detail 3"
                />
              </button>
              <button className="aspect-square rounded-lg border-2 border-transparent hover:border-primary/30 bg-primary/10 flex items-center justify-center transition-colors">
                <span className="material-symbols-outlined text-primary">
                  play_circle
                </span>
              </button>
            </div>
          </div>
          {/* Right: Details Sidebar (40% Desktop) */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-32 space-y-8">
              <div>
                <h1 className="text-5xl font-black leading-none tracking-tight mb-2">
                  Ethereal Horizons
                </h1>
                <p className="text-xl font-medium text-primary/80">
                  Julian Marc, 2023
                </p>
              </div>
              <div className="flex items-center gap-4 py-6 border-y border-primary/10">
                <span className="text-4xl font-bold">$4,200</span>
                <div className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 text-xs font-bold rounded uppercase tracking-widest">
                  Available
                </div>
              </div>
              <div className="space-y-4">
                <button className="w-full bg-primary hover:bg-primary/90 text-white py-5 rounded-xl font-bold text-lg transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-3">
                  <span className="material-symbols-outlined">payments</span>
                  Purchase Artwork
                </button>
                <button className="w-full border border-primary/30 hover:bg-primary/5 py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-3">
                  <span className="material-symbols-outlined">favorite</span>
                  Add to Wishlist
                </button>
              </div>
              {/* Specifications Table */}
              <div className="space-y-6 pt-4">
                <h3 className="text-xs font-bold uppercase tracking-widest text-primary/60">
                  Technical Details
                </h3>
                <dl className="grid grid-cols-2 gap-y-4 text-sm">
                  <dt className="text-gray-500 font-medium">Medium</dt>
                  <dd className="font-bold">Oil on Canvas</dd>
                  <dt className="text-gray-500 font-medium">Dimensions</dt>
                  <dd className="font-bold">120 x 150 cm</dd>
                  <dt className="text-gray-500 font-medium">Framing</dt>
                  <dd className="font-bold">Unframed (Gallery Wrap)</dd>
                  <dt className="text-gray-500 font-medium">Certificate</dt>
                  <dd className="font-bold">Signed & Authenticated</dd>
                </dl>
              </div>
              {/* Trust Badges */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-white dark:bg-white/5 border border-primary/5">
                  <span className="material-symbols-outlined text-primary">
                    local_shipping
                  </span>
                  <span className="text-[10px] font-bold uppercase leading-tight">
                    Secure Global Shipping
                  </span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-white dark:bg-white/5 border border-primary/5">
                  <span className="material-symbols-outlined text-primary">
                    verified
                  </span>
                  <span className="text-[10px] font-bold uppercase leading-tight">
                    Lifetime Authenticity
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Section: Artist Story */}
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
              Biarritz, where the fog and the ocean merged into a single
              gradient of possibility. I wanted to capture the weightlessness of
              that moment—the feeling that the world is both disappearing and
              beginning anew."
            </p>
            <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-400 mt-6">
              Julian Marc explores the intersection of physical landscapes and
              internal emotional states. Using a palette knife and multiple
              layers of glazing, he creates textures that seem to shift
              depending on the light. This particular piece took four months to
              complete, as Marc waited for each layer of oil to cure perfectly
              before adding the next translucent wash of color.
            </p>
          </div>
        </section>
        {/* Section: Related Artworks */}
        <section className="mt-32 space-y-10">
          <div className="flex items-end justify-between">
            <div>
              <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-primary/60 mb-2">
                Curated Selection
              </h2>
              <h3 className="text-3xl font-black">Related Artworks</h3>
            </div>
            <Link
              to="/shop"
              className="text-sm font-bold border-b-2 border-primary pb-1 hover:text-primary transition-colors"
            >
              View Artist's Collection
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Related Card 1 */}
            <div className="group cursor-pointer">
              <div className="aspect-[4/5] overflow-hidden rounded-xl mb-4 relative">
                <img
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  data-alt="Abstract painting with indigo swirls"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDbktkp28qTGLd5rw4KwTyORL699nTlcYGPUqP-otedV2OAmqFoKJl5gzm-vsaLiJuvs6oI_YVrvYAnNcZPLfQr1YiNmViaq0luNU_Mexhg1LUt-irNCSIaVeM39nt1JNHRRtpLUkxjPjA-LyVSN7EqGCVWF9aqvEVFkuCdnSCEJnSYQRM2qo8EU-55LjB8iXhXBM9uE6z0UDkikoNj77xS5u1ymM7hIj6q3Fpstaga6SEdTIOjeBPmeXGa3bEa6naYt6t2NSJLHuBk"
                  alt="Indigo Mist"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="bg-white text-black px-6 py-2 rounded-full font-bold text-sm">
                    Quick View
                  </span>
                </div>
              </div>
              <h4 className="font-bold text-lg">Indigo Mist</h4>
              <div className="flex justify-between items-center mt-1">
                <p className="text-sm text-gray-500">Julian Marc</p>
                <p className="font-bold text-primary">$3,800</p>
              </div>
            </div>
            {/* Related Card 2 */}
            <div className="group cursor-pointer">
              <div className="aspect-[4/5] overflow-hidden rounded-xl mb-4 relative">
                <img
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  data-alt="Minimalist abstract art with gold leaf"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAOROohZGcJeiZ1G_Y8RaqzIE2hjCRPAqQsr7aYuycHuc7Rqoumh0KbXs8QJuIyT4kZuo96wiZuDHbyinb9xLbrEcBGzpOqAN8HSEwlWsjkFf4QRqx1CceUrD4W8qpbW0ei0BWBU0uOEh82V52AIOAcxvvPp7o3finY9SGhA6NQPNLJBfK50LlRfQ3-hRV1wYnVUV-1ljjz-OIg1vu-Ye-gI3bOzVrZUw3mAMWUh4ySgT3HnlfeqoTzB0FWlTW-wsMfDzehFv5Xwcqh"
                  alt="Golden Silence"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="bg-white text-black px-6 py-2 rounded-full font-bold text-sm">
                    Quick View
                  </span>
                </div>
              </div>
              <h4 className="font-bold text-lg">Golden Silence</h4>
              <div className="flex justify-between items-center mt-1">
                <p className="text-sm text-gray-500">Julian Marc</p>
                <p className="font-bold text-primary">$5,100</p>
              </div>
            </div>
            {/* Related Card 3 */}
            <div className="group cursor-pointer">
              <div className="aspect-[4/5] overflow-hidden rounded-xl mb-4 relative">
                <img
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  data-alt="Deep red and black textured canvas"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDIMfbVRJObKLRuNfQGZBJK1IqpPUBVW5cNo6Kg_5iIey8xkYeYO-NyoN8As7l1F6ROTyUzqV0GOVpHWCTO9ADPdrg-7ftx6X8IJhK68bnpU4PYwL4IMR2bX5GsApQIl09afQQXXNDWp-78_0aa8PftBo8fqKPfnEPeLqWv6A2PG6fBmB2ItcX4L3-lr2jxCyw0LwccbVMsmTyQ4dR14JgXZ_5WR2FgSCMnlsCunmMJ7OUZTM8j_k5VHY3NyZ2sy9lKm93vpKttKfm"
                  alt="Crimson Drift"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="bg-white text-black px-6 py-2 rounded-full font-bold text-sm">
                    Quick View
                  </span>
                </div>
              </div>
              <h4 className="font-bold text-lg">Crimson Drift</h4>
              <div className="flex justify-between items-center mt-1">
                <p className="text-sm text-gray-500">Julian Marc</p>
                <p className="font-bold text-primary">$2,950</p>
              </div>
            </div>
            {/* Related Card 4 */}
            <div className="group cursor-pointer">
              <div className="aspect-[4/5] overflow-hidden rounded-xl mb-4 relative">
                <img
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  data-alt="Colorful modern geometric abstraction"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCn9l0KTYaUIG1DRbv8gSir9EYQ_eKQODbXQQQhkawPmJsqE2uAIj_gyiIpuXcyrC9813mufoBM6wOvoOjw0Uzg_d08FKNXL9DlkISM2L8KCkVIBb6h7Lt5Go7Ew3eOhYpwwwpjKEemj8KPjKQqMW3ZAXnydKjyDWab2dvb0LxXAc_Xi3RUKu0bnnmEIaR77OD-CMFzcVjHirZxLl2E4h1yEPLpxJLOBvbEJohAxKyXYOn6Du_PFIcmzk98GqU38-C7DAQYrp41L2oS"
                  alt="Fractured Light"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="bg-white text-black px-6 py-2 rounded-full font-bold text-sm">
                    Quick View
                  </span>
                </div>
              </div>
              <h4 className="font-bold text-lg">Fractured Light</h4>
              <div className="flex justify-between items-center mt-1">
                <p className="text-sm text-gray-500">Julian Marc</p>
                <p className="font-bold text-primary">$4,500</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
