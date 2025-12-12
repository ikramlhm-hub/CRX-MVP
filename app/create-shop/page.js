"use client";

import { useState } from "react";

export default function CreateShopPage() {
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    console.log("Données envoyées :", data);

    // 🔥 MVP : on stocke uniquement l’email du créateur
    localStorage.setItem("creatorEmail", data.email);

    setSuccess(true);
  };

  return (
    <div className="min-h-screen px-6 py-16 md:px-20">

      {/* Notification de succès */}
      {success && (
        <div className="mb-10 w-full bg-green-500 text-white p-4 rounded-xl font-semibold text-center">
          Demande envoyée
        </div>
      )}

      {/* TITRE */}
      <h1 className="font-poppins text-xl font-semibold mb-10">
        INFORMATIONS BOUTIQUE
      </h1>

      {/* FORMULAIRE */}
      <form onSubmit={handleSubmit}>

        {/* --- CARD BOUTIQUE --- */}
        <div className="bg-white shadow-[0_4px_30px_rgba(0,0,0,0.25)] rounded-2xl p-10 mb-16">

          {/* Nom boutique */}
          <label className="block font-semibold text-base mb-2">
            Nom de la boutique
          </label>
          <input 
            name="shopName"
            className="w-full h-12 bg-[#D9D9D9] rounded-xl mb-6 px-4 outline-none"
          />

          {/* Style boutique */}
          <label className="block font-semibold text-base mb-2">
            Style de la boutique
          </label>
          <select 
            name="shopStyle"
            className="w-full h-12 bg-[#D9D9D9] rounded-xl mb-6 px-4 outline-none"
          >
            <option value="">Sélectionner...</option>
            <option>Casual</option>
            <option>Streetwear</option>
            <option>Elegant</option>
            <option>Bohème</option>
          </select>

          {/* Description */}
          <label className="block font-semibold text-base mb-2">
            Description de la boutique
          </label>
          <textarea 
            name="shopDescription"
            rows="4"
            className="w-full bg-[#D9D9D9] rounded-xl mb-6 px-4 py-3 outline-none"
          />

          {/* Adresse */}
          <label className="block font-semibold text-base mb-2">
            Adresse de la boutique
          </label>
          <div className="flex gap-4 mb-6">
            <input 
              name="shopAddress"
              className="flex-1 h-12 bg-[#D9D9D9] rounded-xl px-4 outline-none" 
              placeholder="Adresse" 
            />
            <input 
              name="shopPostal"
              className="w-32 h-12 bg-[#D9D9D9] rounded-xl px-4 outline-none" 
              placeholder="Code postal" 
            />
            <input 
              name="shopCountry"
              className="w-40 h-12 bg-[#D9D9D9] rounded-xl px-4 outline-none" 
              placeholder="Pays" 
            />
          </div>

          {/* Liens */}
          <label className="block font-semibold text-base mb-2">
            Liens de la boutique (site web, Instagram…)
          </label>
          <input 
            name="link1"
            className="w-full h-12 bg-[#D9D9D9] rounded-xl mb-4 px-4 outline-none"
          />
          <input 
            name="link2"
            className="w-full h-12 bg-[#D9D9D9] rounded-xl mb-4 px-4 outline-none"
          />

          <div className="text-center text-2xl font-bold cursor-pointer">+</div>

          {/* Méthodes livraison */}
          <div className="mt-8">
            <label className="flex items-start gap-3 mb-3">
              <input type="checkbox" name="delivery" className="mt-1" />
              <div>
                <span className="font-semibold">Livraison</span> <br />
                <span className="text-sm text-black/60">
                  Possibilité pour les clients…
                </span>
              </div>
            </label>

            <label className="flex items-start gap-3">
              <input type="checkbox" name="pickup" className="mt-1" />
              <div>
                <span className="font-semibold">Retrait en magasin</span> <br />
                <span className="text-sm text-black/60">
                  Possibilité pour les clients…
                </span>
              </div>
            </label>
          </div>

        </div>

        {/* PARTIE VENDEUR */}
        <h1 className="font-poppins text-xl font-semibold mb-10">
          INFORMATIONS VENDEUR
        </h1>

        <div className="bg-white shadow-[0_4px_30px_rgba(0,0,0,0.25)] rounded-2xl p-10">

          <div className="grid grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block font-semibold">Prénom</label>
              <input 
                name="firstName"
                className="w-full h-12 bg-[#D9D9D9] rounded-xl px-4 outline-none" 
              />
            </div>

            <div>
              <label className="block font-semibold">Nom</label>
              <input 
                name="lastName"
                className="w-full h-12 bg-[#D9D9D9] rounded-xl px-4 outline-none" 
              />
            </div>
          </div>

          {/* Date de naissance */}
          <label className="block font-semibold mb-2">Date de naissance</label>
          <div className="flex items-center gap-4 mb-6">
            <input 
              name="birthDay"
              placeholder="Jour" 
              className="w-20 h-12 bg-[#D9D9D9] rounded-xl px-4 outline-none" 
            />
            <input 
              name="birthMonth"
              placeholder="Mois" 
              className="w-20 h-12 bg-[#D9D9D9] rounded-xl px-4 outline-none" 
            />
            <input 
              name="birthYear"
              placeholder="Année" 
              className="w-28 h-12 bg-[#D9D9D9] rounded-xl px-4 outline-none" 
            />
          </div>

          {/* Adresse */}
          <label className="block font-semibold mb-2">Adresse</label>
          <div className="grid grid-cols-4 gap-4 mb-6">
            <input 
              name="address"
              className="col-span-2 h-12 bg-[#D9D9D9] rounded-xl px-4 outline-none" 
              placeholder="Adresse" 
            />
            <input 
              name="postal"
              className="h-12 bg-[#D9D9D9] rounded-xl px-4 outline-none" 
              placeholder="Code postal" 
            />
            <input 
              name="country"
              className="h-12 bg-[#D9D9D9] rounded-xl px-4 outline-none" 
              placeholder="Pays" 
            />
          </div>

          {/* Contact */}
          <label className="block font-semibold mb-2">Contact</label>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <input 
              name="email"
              placeholder="Adresse mail"
              className="h-12 bg-[#D9D9D9] rounded-xl px-4 outline-none" 
            />
            <input 
              name="phone"
              placeholder="Téléphone"
              className="h-12 bg-[#D9D9D9] rounded-xl px-4 outline-none" 
            />
          </div>

          {/* Banque */}
          <label className="block font-semibold mb-2">Informations bancaires</label>
          <input 
            name="bankHolder"
            placeholder="Nom complet du titulaire"
            className="w-full h-12 bg-[#D9D9D9] rounded-xl mb-4 px-4 outline-none" 
          />
          <input 
            name="bankName"
            placeholder="Nom de la banque"
            className="w-full h-12 bg-[#D9D9D9] rounded-xl mb-4 px-4 outline-none" 
          />
          <input 
            name="iban"
            placeholder="IBAN"
            className="w-full h-12 bg-[#D9D9D9] rounded-xl mb-4 px-4 outline-none" 
          />
          <input 
            name="swift"
            placeholder="SWIFT / BIC"
            className="w-full h-12 bg-[#D9D9D9] rounded-xl mb-4 px-4 outline-none" 
          />

        </div>

        {/* Conditions */}
        <label className="flex items-start gap-3 mt-8">
          <input type="checkbox" required className="mt-1" />
          <span className="text-sm">
            J’ai lu les conditions d’utilisation et la politique de confidentialité.
          </span>
        </label>

        {/* Bouton final */}
        <div className="text-center mt-10">
          <button 
            type="submit"
            className="bg-[#6A00FF] text-white font-semibold text-base px-10 py-3 rounded-xl"
          >
            Envoyer ma demande
          </button>
        </div>

      </form>

    </div>
  );
}
