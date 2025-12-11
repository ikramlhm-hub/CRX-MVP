"use client";

import Image from "next/image";

const products = [
  {
    id: 1,
    name: "VESTE",
    price: "30.00 €",
    img: "/icons/model1.png",
    desc: "Veste streetwear légère et résistante."
  },
  {
    id: 2,
    name: "ENSEMBLE",
    price: "75.00 €",
    img: "/icons/model2.png",
    desc: "Ensemble moderne, confortable et stylé."
  },
  {
    id: 3,
    name: "DEBARDEUR",
    price: "45.00 €",
    img: "/icons/model3.png",
    desc: "Débardeur minimaliste en coton premium."
  },
];

export default function Spotlight() {
  return (
    <section className="w-full bg-white pt-12">

      {/* Titre + flèches */}
      <div className="flex items-center justify-between px-20 pb-4">
        <h2 className="font-poppins font-black text-[40px] leading-[100%] text-black">
          SPOTLIGHT DU MOMENT – KREATEUR
        </h2>

        <div className="flex items-center gap-6">
          <Image src="/icons/arrow-left.png" width={50} height={50} alt="left" />
          <Image src="/icons/arrow-right.png" width={50} height={50} alt="right" />
        </div>
      </div>

      {/* 3 images collées */}
      <div className="flex w-full h-[100vh]">
        {products.map((p) => (
          <div key={p.id} className="relative flex-1 h-full overflow-hidden">

            <Image
              src={p.img}
              alt={p.name}
              fill
              className="object-cover object-center scale-105"
            />

            {/* OVERLAY TEXTE */}
            <div className="absolute bottom-14 right-0 w-full p-6  from-black/80 to-transparent text-white text-right">

              <h3 className="font-poppins text-lg font-bold">{p.name}</h3>

              {/* ➜ DESCRIPTION QUI MANQUAIT */}
              <p className="font-poppins text-[12px] text-white/90 leading-tight mt-1">
                {p.desc}
              </p>

              <p className="font-semibold mt-2">{p.price}</p>

              <button className="mt-3 flex items-center justify-center gap-2 bg-[#FFFFFF] px-6 py-2 text-sm font-semibold rounded text-black ml-auto">
                <Image src="/icons/cart.jpg" width={20} height={20} alt="cart" />
                Ajouter au panier
              </button>

            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
