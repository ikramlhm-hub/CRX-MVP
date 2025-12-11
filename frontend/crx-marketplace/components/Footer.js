import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-[#F5F5F5] py-16">
      {/* 3 colonnes */}
      <div className="mx-auto flex max-w-6xl flex-col gap-16 px-6 md:flex-row md:justify-between">

        {/* AIDE & SUPPORT */}
        <div>
          <h3 className="text-sm font-semibold tracking-wide">
            AIDE & SUPPORT
          </h3>
          <ul className="mt-4 space-y-2 text-sm leading-relaxed">
            <li>Service client & contact</li>
            <li>FAQ</li>
            <li>Livraison & expédition</li>
            <li>Conditions générales & mentions légales</li>
            <li>Politique de confidentialité</li>
          </ul>
        </div>

        {/* A PROPOS */}
        <div>
          <h3 className="text-sm font-semibold tracking-wide">A PROPOS</h3>
          <ul className="mt-4 space-y-2 text-sm leading-relaxed">
            <li>Qui sommes-nous</li>
            <li>Devenir vendeurs partenaire</li>
          </ul>
        </div>

        {/* RESEAUX */}
        <div className="md:text-right">
          <h3 className="text-sm font-semibold tracking-wide">
            TROUVEZ-NOUS ICI
          </h3>

          <div className="mt-4 flex items-center gap-4 md:justify-end">
            <a href="#" aria-label="Instagram">
              <Image
                src="/icons/instagram.png"
                alt="Instagram"
                width={32}
                height={32}
              />
            </a>
            <a href="#" aria-label="LinkedIn">
              <Image
                src="/icons/linkedin.png"
                alt="LinkedIn"
                width={32}
                height={32}
              />
            </a>
            <a href="#" aria-label="Facebook">
              <Image
                src="/icons/facebook.png"
                alt="Facebook"
                width={32}
                height={32}
              />
            </a>
          </div>
        </div>
      </div>

      {/* Ligne mentions */}
      <div className="mt-14 text-center text-xs text-black/60">
        © 2024 CRX Marketplace — Mentions légales | Politique de confidentialité | CGV
      </div>
    </footer>
  );
}
