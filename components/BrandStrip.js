"use client";

const logos = [
  "/icons/marques/marque1.png",
  "/icons/marques/marque2.avif",
  "/icons/marques/marque3.png",
  "/icons/marques/marque4.webp",
  "/icons/marques/marque5.jpeg",
];

export default function BrandsStrip() {
  return (
    <section className="w-full bg-white py-10">
      <div className="overflow-hidden relative">
        <div className="flex whitespace-nowrap animate-marquee">
          
          {/* Bande A */}
          {logos.map((src, i) => (
            <img
              key={`a-${i}`}
              src={src}
              className="h-20 w-auto mx-16 inline-block object-contain"
              alt="logo"
            />
          ))}

          {/* Bande B — identique, pour le loop */}
          {logos.map((src, i) => (
            <img
              key={`b-${i}`}
              src={src}
              className="h-20 w-auto mx-16 inline-block object-contain"
              alt="logo"
            />
          ))}

        </div>
      </div>
    </section>
  );
}
