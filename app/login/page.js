"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();
  const [error, setError] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const savedEmail = localStorage.getItem("creatorEmail");

    // Vérification MVP
    if (email === savedEmail) {
      router.push("/dashboard");
    } else {
      setError(true);
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-20 flex flex-col items-center">
      <h1 className="text-center text-sm font-semibold tracking-[0.25em] text-black">
        CONNEXION <span className="mx-4 text-gray-400">|</span> INSCRIPTION
      </h1>

      {/* Erreur */}
      {error && (
        <div className="mt-6 mb-4 bg-red-500 text-white px-4 py-2 rounded-xl">
          Compte introuvable
        </div>
      )}

      <form
        onSubmit={handleLogin}
        className="mt-10 w-full max-w-xl rounded-2xl bg-[#F2F2F2] p-10 shadow-[0_4px_30px_rgba(0,0,0,0.25)]"
      >
        <label className="block text-base font-semibold mb-2">
          Adresse mail
        </label>
        <input
          name="email"
          type="email"
          className="w-full h-12 mb-6 rounded-xl bg-[#D9D9D9] px-4 outline-none"
        />

        <label className="block text-base font-semibold mb-2">
          Mot de passe
        </label>
        <input
          name="password"
          type="password"
          className="w-full h-12 rounded-xl bg-[#D9D9D9] px-4 outline-none"
        />

        <div className="mt-2 text-right text-sm text-black/70 cursor-pointer">
          Mot de passe oublié
        </div>

        <button
          type="submit"
          className="mt-6 w-full rounded-xl bg-[#6A00FF] py-3 text-white font-semibold text-base"
        >
          Connexion
        </button>
      </form>
    </div>
  );
}
