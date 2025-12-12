"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function DashboardPage() {
  const [email, setEmail] = useState("");

  // Charger l’email du localStorage
  useEffect(() => {
    const loadEmail = () => {
      const saved = localStorage.getItem("creatorEmail");
      if (saved) setEmail(saved);
    };
    loadEmail();
  }, []);

  return (
    <div className="min-h-screen bg-[#E5E5E5]">

      {/* BARRE CREATOR TOP */}
      <div className="w-full border-b border-black/10 bg-white">
        <div className="flex gap-10 px-6 md:px-20 py-4 text-sm font-semibold">
          
          <Link href="/create-shop">
            <span className="cursor-pointer hover:opacity-70">
              INFORMATIONS BOUTIQUE
            </span>
          </Link>

          <Link href="/vendor-info">
            <span className="cursor-pointer hover:opacity-70">
              INFORMATIONS VENDEUR
            </span>
          </Link>

          <Link href="/dashboard">
            <span className="cursor-pointer hover:opacity-70 font-bold border-b-2 border-black pb-1 text-[#AA6BFF]">
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

      {/* CONTENU */}
      <div className="px-6 md:px-20 py-10">

        {/* Titre */}
        <h1 className="text-xl md:text-2xl font-poppins font-bold mb-8">
          Historique de commandes
        </h1>

        <div className="flex flex-col lg:flex-row gap-10">

          {/* -------------------- TABLEAU DES COMMANDES -------------------- */}
          <div className="flex-1 bg-white rounded-xl shadow-md p-6">

            {/* Header du tableau */}
            <div className="font-semibold text-sm text-black flex gap-10 mb-6 border-b pb-3">
              <span>Produit</span>
              <span>Paiement</span>
              <span>Livraison</span>
              <span>Status</span>
            </div>

            {/* Zone des commandes */}
            <div className="h-[350px] bg-[#F0F0F0] rounded-xl flex items-center justify-center text-black/40 text-sm">
              Aucune commande pour le moment
            </div>
          </div>

          {/* -------------------- MINI-CARDS À DROITE -------------------- */}
          <div className="w-full lg:w-[280px] flex flex-col gap-6">

            {/* Card 1 */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center justify-between mb-2">
                <div className="h-6 w-6 rounded-md bg-[#AA6BFF] opacity-40"></div>
              </div>
              <div className="text-3xl font-bold">5</div>
              <div className="text-sm text-black/70 mt-1">
                Commandes en attente de paiement
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center justify-between mb-2">
                <div className="h-6 w-6 rounded-md bg-[#AA6BFF] opacity-40"></div>
              </div>
              <div className="text-3xl font-bold">5</div>
              <div className="text-sm text-black/70 mt-1">
                Commandes en cours de livraison
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
