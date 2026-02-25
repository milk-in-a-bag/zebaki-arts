const studioImages = [
  {
    id: 1,
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBIbivUquksk2by86tIczTcuBYv9cw2eAfOnqfC2bZHP2DvcO2_Ktd5VoTR3zSDM8Y2Mm27LtAIIej06sRR82IkMGVID4OBboBZ7Nz8zvnpimaFPwaKGeiwua7JipfKBG9694M_LQQ7QSK8UPOAAGeCSOhiX8OiblwanmAfaksIzeI2RS1aWbWuBGFTV1ddRaiC3wStx1kHlKd4Ti7l5G60O4B6rGzqHQlW8sjr2AocEyYvuAw4De_7A8jlrJGjeSKHiTRR87IPPP2b",
    alt: "Artist studio with large canvas and natural light",
    caption: "The Morning Light",
    colSpan: "col-span-2 row-span-2",
    aspectRatio: "aspect-4/3",
  },
  {
    id: 2,
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuC8Fz9XQvzh6oD45dV-iu9BncxPhYPnL2lL7oi3fj5kQtnvfP-kqa6xilst-jX_YeLbgy5rwA2tUUBDP3HBP6GBy1LYRe4Vg4N3CfbcVvyWC7sCJgqw45eFce69CWyvbAKqkfFqgQt4-o_8FmP__OaycYX731-6oP3wI9DHDJneMkVLDvXsbHYzaXwHqv23-1TYMmJZ3jCRJAy7cWWmTywPydf5P8uJaexDf-RnNeJZJnG53XJTWZypei1j4r-tXQ34BZZQTWu-xM_3",
    alt: "Close up of paint palettes and brushes",
    icon: "palette",
    colSpan: "col-span-1",
    aspectRatio: "aspect-square",
  },
  {
    id: 3,
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBIXx41bhfOWLyxs6CMZcYsGfB_6wVCha5rI9Bfj23Y9mOQLBGMWwNaJ1Ly62MDR9nIQrA369VGkqeEbi2P_ygDqALxOvSBTbewya9Ls_7rvTIN3l6uFymQ1YMY9XuqOD7c2kykyIPUlXy1FpeAvxiWWg25lKUYSL3Xr0E4OEi-ZbqfMKwWGNycwn90uwkCi_rVZ69XBGcEsCBSiMQ6dlgXDWoZ0OkUse859M0r6M3bHq3A6oG-FEyE0OnTz9Q4dfo-whZjqqZZCiqb",
    alt: "Hand mixing oil paints",
    colSpan: "col-span-1",
    aspectRatio: "aspect-square",
  },
  {
    id: 4,
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAlVycZSZPwlLD0iCF6e65DizdN1Um4V1dbDzmlW5Ou1eb2xlgprgqRGAivdKe96IwrGQNYDZ1XrFmki6Ijqf9Cp9Rg-hZVirIETXXDUXvoPVy_Yd4KcuMHUjnU0FlUxFMzeq3XZmzZAre9pgiOOUV-zkxavmIFh_UsqBdPxPlz02j5dxxxW7RLREye28Ta8VWovxG3x4nd0aIlTIcEe9WzeY_izsOVv-9JpxpGR7SmQq1snar7Rndx9YJKEOKdAF5-GQ-E3_PrXZx8",
    alt: "Raw pigments and art supplies on a desk",
    quote: "Every pigment tells a story of the earth from which it came.",
    colSpan: "col-span-2",
    aspectRatio: "aspect-2/1",
  },
];

export default function StudioLifeSection() {
  return (
    <section className="py-24 px-6 md:px-20 overflow-hidden">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4">
            <span className="text-primary font-bold uppercase tracking-[0.2em] text-sm">
              BTS
            </span>
            <h2 className="text-4xl font-light">
              Studio Life &{" "}
              <span className="italic font-serif-accent">Process</span>
            </h2>
          </div>
          <p className="max-w-[400px] text-soft-taupe">
            A glimpse into the sanctuary where raw pigments transform into
            emotional landscapes.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {studioImages.map((image) => (
            <div key={image.id} className={image.colSpan}>
              <div
                className={`group relative overflow-hidden rounded-2xl ${image.aspectRatio}`}
              >
                <img
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  data-alt={image.alt}
                  src={image.src}
                  alt={image.alt}
                />
                {image.caption && (
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                    <p className="text-white text-xl font-bold font-serif-accent italic">
                      {image.caption}
                    </p>
                  </div>
                )}
                {image.icon && (
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white material-symbols-outlined text-4xl">
                      {image.icon}
                    </span>
                  </div>
                )}
                {image.quote && (
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-center p-6 opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="text-white text-lg">"{image.quote}"</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
