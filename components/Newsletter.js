export default function Newsletter() {
  return (
    <section className="w-full bg-black py-24">
      <div className="mx-auto max-w-5xl bg-white rounded-2xl px-8 py-20">

        {/* TITRE */}
        <h2 className="text-center text-2xl font-bold md:text-3xl">
          Rejoins notre newsletters
        </h2>

        {/* SOUS-TEXTE */}
        <p className="mt-6 text-center text-sm md:text-base text-black/80 leading-relaxed">
          Soit parmis les premiers à être au courant des dernières sorties<br />
          de nos partenaires!
        </p>

        {/* INPUT + BUTTON */}
        <div className="mt-10 flex w-full justify-center">
          <div className="flex w-full max-w-xl">

            {/* INPUT */}
            <input
              type="email"
              placeholder="Ecris ton addresse mail ici"
              className="
                h-12
                w-full
                bg-[#D9D9D9]
                px-5
                text-sm
                placeholder:text-black/50
                rounded-l-md
                outline-none
              "
            />

            {/* BOUTON */}
            <button
              className="
                h-12
                bg-[#5506DB]
                text-white
                px-8
                text-sm
                font-semibold
                rounded-r-md
                whitespace-nowrap
              "
            >
              Rejoins-nous
            </button>

          </div>
        </div>

      </div>
    </section>
  );
}
