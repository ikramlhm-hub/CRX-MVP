"use client";

import Image from "next/image";

const categories = ["Vestes", "Pullovers", "Jupes", "Pantalons"];

const articles = [
  {
    id: 1,
    img: "/icons/articles/article1.png",
    title: "KREATEUR",
    description: "",
  },
  {
    id: 2,
    img: "/icons/articles/article2.png",
    title: "KREATEUR",
    description: "",
  },
  {
    id: 3,
    img: "/icons/articles/article3.png",
    title: "KREATEUR",
    description: "",
  },
  {
    id: 4,
    img: "/icons/articles/article4.png",
    title: "KREATEUR",
    description: "",
  },
  {
    id: 5,
    img: "/icons/articles/article5.png",
    title: "KREATEUR",
    description: "",
  },
  {
    id: 6,
    img: "/icons/articles/article6.png",
    title: "KREATEUR",
    description: "",
  },
];

export default function Articles() {
  return (
    <section className="w-full bg-white py-16">

      {/* -------------------- FILTRES -------------------- */}
      <div className="mb-16 flex items-center justify-between px-6 md:px-12 lg:px-20">
        
        {/* Boutons Catégories */}
        <div className="flex flex-wrap gap-6">
          {categories.map((cat) => (
            <button
              key={cat}
              className="font-poppins bg-black text-white px-10 py-2 text-sm rounded-md font-semibold shadow-sm"
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Voir plus */}
        <button className="font-poppins bg-[#5506DB] text-white px-10 py-2 text-sm rounded-md font-semibold shadow-md hover:opacity-90 transition">
          Voir plus
        </button>
      </div>

      {/* -------------------- GRILLE ARTICLES -------------------- */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 px-6 md:px-12 lg:px-20">

        {articles.map((article) => (
          <div key={article.id} className="flex flex-col">

            {/* IMAGE AVEC OVERLAY */}
            <div className="relative w-full aspect-square rounded-md overflow-hidden">
              <Image
                src={article.img}
                alt={article.title}
                fill
                className="object-cover"
              />

              {/* Overlay texte */}
              <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/90 to-transparent text-white">
                <h3 className="font-poppins text-lg font-semibold">
                  {article.title}
                </h3>

                <p className="font-poppins text-sm mt-1 leading-relaxed">
                  {article.description}
                </p>

                <p className="font-poppins text-lg font-bold mt-2">
                  {article.price}
                </p>
              </div>
            </div>

            {/* Bouton */}
            <button className="font-poppins w-[217px] mt-4 flex items-center justify-center gap-2 bg-[#5506DB] px-5 py-2 text-sm font-semibold text-white rounded-md shadow-md">
              Voir la vitrine
            </button>

          </div>
        ))}
      </div>

    </section>
  );
}
