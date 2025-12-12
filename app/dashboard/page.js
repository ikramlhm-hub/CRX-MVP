"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function DashboardPage() {
  const [email, setEmail] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("creatorEmail");
    if (saved) {
      Promise.resolve().then(() => setEmail(saved));
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#F3F3F3] overflow-x-hidden">

      <div className="w-full border-b border-black/10 bg-white">
        <div className="flex gap-10 px-4 sm:px-6 md:px-20 py-4 text-sm font-semibold overflow-x-auto whitespace-nowrap">
          <Link href="/create-shop">
            <span className="cursor-pointer hover:opacity-70">INFORMATIONS BOUTIQUE</span>
          </Link>

          <Link href="/vendor-info">
            <span className="cursor-pointer hover:opacity-70">INFORMATIONS VENDEUR</span>
          </Link>

          <Link href="/dashboard">
            <span className="cursor-pointer hover:opacity-70 font-bold text-[#AA6BFF] border-b-2 border-[#AA6BFF] pb-1">
              DASHBOARD
            </span>
          </Link>

          <Link href="/messages">
            <span className="relative cursor-pointer hover:opacity-70">
              MESSAGERIE
              <span className="absolute -top-2 -right-3 bg-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                2
              </span>
            </span>
          </Link>
        </div>
      </div>

      <div className="px-4 sm:px-6 md:px-20 py-10">

        <h1 className="text-2xl font-poppins font-bold mb-6">Commandes</h1>

        <div className="bg-white rounded-xl shadow-md overflow-x-auto">
          <div className="min-w-[900px]">

            <div className="grid grid-cols-6 font-semibold text-sm px-6 py-4 border-b items-center">
              <span>Nom du client</span>
              <span>Paiement</span>
              <span>Livraison</span>
              <span>Status</span>
              <span>Date d'achat</span>

              <div className="flex items-center gap-2 justify-end pr-4">
                <Image src="/icons/tri.png" alt="tri" width={18} height={18} />
                <span className="text-xs text-black/60">Tri</span>
              </div>
            </div>

            <div className="max-h-[330px] overflow-y-auto">
              <div className="grid grid-cols-6 px-6 py-4 border-b text-sm items-center">
                <span>LEE Sanghyeok</span>
                <div className="text-green-600 font-medium">
                  60€ <br />
                  <span className="text-xs text-black/60">Payé</span>
                </div>
                <span className="bg-gray-300 text-black/70 px-3 py-1 rounded-md text-xs w-fit">Non-envoyé</span>
                <span className="bg-gray-400 text-white px-3 py-1 rounded-md text-xs w-fit">En cours</span>
                <span>10/12/2025</span>
                <button className="text-[#6A00FF] font-medium underline">Modifier</button>
              </div>

              <div className="grid grid-cols-6 px-6 py-4 border-b text-sm items-center">
                <span>AHN Wangho</span>
                <div className="text-green-600 font-medium">
                  60€ <br />
                  <span className="text-xs text-black/60">Payé</span>
                </div>
                <span className="bg-green-400 text-white px-3 py-1 rounded-md text-xs w-fit">Envoyé</span>
                <span className="bg-green-600 text-white px-3 py-1 rounded-md text-xs w-fit">Complété</span>
                <span>10/11/2025</span>
                <button className="text-[#6A00FF] font-medium underline">Modifier</button>
              </div>

              <div className="grid grid-cols-6 px-6 py-4 border-b text-sm items-center">
                <span>PARK Dohyeon</span>
                <div className="text-green-600 font-medium">
                  60€ <br />
                  <span className="text-xs text-black/60">Payé</span>
                </div>
                <span className="bg-gray-300 text-black/70 px-3 py-1 rounded-md text-xs w-fit">Non-envoyé</span>
                <span className="bg-red-600 text-white px-3 py-1 rounded-md text-xs w-fit">Annulé</span>
                <span>04/10/2025</span>
                <button className="text-[#6A00FF] font-medium underline">Modifier</button>
              </div>
            </div>

          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6 mt-10 w-full">
          <div className="flex-1 bg-white rounded-xl shadow-md p-6 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-3">
              <Image src="/icons/piece.png" width={28} height={28} alt="paiement" />
              <span className="text-2xl font-bold">2</span>
            </div>
            <div className="text-black/60 text-sm">Commandes en attente de paiement</div>
          </div>

          <div className="flex-1 bg-white rounded-xl shadow-md p-6 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-3">
              <Image src="/icons/camion.png" width={28} height={28} alt="livraison" />
              <span className="text-2xl font-bold">1</span>
            </div>
            <div className="text-black/60 text-sm">Commandes en cours de livraison</div>
          </div>

          <div className="flex-1 bg-white rounded-xl shadow-md p-6 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-3">
              <Image src="/icons/retour.png" width={28} height={28} alt="retour" />
              <span className="text-2xl font-bold">1</span>
            </div>
            <div className="text-black/60 text-sm">Commandes annulées</div>
          </div>
        </div>

        <h2 className="text-xl font-poppins font-bold mt-16 mb-6">Performance</h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-md p-6 flex items-center justify-center">
            <Image src="/icons/graph.png" alt="graph" width={600} height={350} className="rounded-lg w-full h-auto" />
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 flex flex-col">
            <h3 className="font-semibold mb-4 text-lg">Article le plus vu</h3>
            <div className="w-full h-[220px] rounded-lg overflow-hidden mb-4">
              <Image src="/icons/articles/article1.png" width={300} height={220} className="w-full h-full object-cover object-top" alt="article-vu" />
            </div>
            <div className="font-semibold">Veste IELO</div>
            <div className="text-sm text-black/60 mb-4">55€</div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 flex flex-col">
            <h3 className="font-semibold mb-4 text-lg">Article le plus vendu</h3>
            <div className="w-full h-[220px] rounded-lg overflow-hidden mb-4">
              <Image src="/icons/articles/article1.png" width={300} height={220} className="w-full h-full object-cover object-top" alt="article-vendu" />
            </div>
            <div className="font-semibold">Veste IELO</div>
            <div className="text-sm text-black/60 mb-4">55€</div>
          </div>
        </div>

        <h2 className="text-xl font-poppins font-bold mt-16 mb-6">Catalogue</h2>

        <div className="bg-white rounded-xl shadow-md p-6 overflow-x-auto">
          <div className="min-w-[900px]">
            <div className="grid grid-cols-6 font-semibold text-sm pb-4 border-b">
              <span>Nom de l’article</span>
              <span>Catégorie</span>
              <span>Prix</span>
              <span>En stock</span>
              <span>Disponibilité</span>
              <span className="text-right pr-4">Action</span>
            </div>

            <div className="max-h-[350px] overflow-y-scroll mt-2">
              {[...Array(7)].map((_, i) => (
                <div key={i} className="grid grid-cols-6 py-4 text-sm items-center border-b">
                  <span>Veste IELO</span>
                  <span>Vestes</span>
                  <span className="font-semibold">55€</span>
                  <span>20</span>
                  <span className="bg-green-500 text-white px-3 py-1 rounded-md text-xs w-fit">Visible</span>
                  <span className="text-right pr-4 text-[#6A00FF] font-medium underline cursor-pointer">
                    Modifier
                  </span>
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-6">
              <button className="flex items-center gap-2 text-black/70 text-sm hover:opacity-70">
                <span className="text-xl">＋</span> Ajouter un article
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
