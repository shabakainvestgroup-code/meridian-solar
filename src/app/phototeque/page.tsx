import { Image as ImageIcon, ArrowRight } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Photothèque – Nos Réalisations Meridian Solar",
  description:
    "Découvrez nos installations solaires en images. Projets résidentiels, commerciaux et industriels au Maroc.",
};

const galleries = [
  {
    title: "Installations Résidentielles",
    description: "Villas et maisons particulières équipées de panneaux solaires",
    count: 12,
    image: "🏠",
    color: "from-blue-500 to-blue-600",
  },
  {
    title: "Projets Commerciaux",
    description: "Bureaux, magasins et petits commerces",
    count: 8,
    image: "🏢",
    color: "from-purple-500 to-purple-600",
  },
  {
    title: "Installations Industrielles",
    description: "Usines et grandes installations de production",
    count: 6,
    image: "🏭",
    color: "from-orange-500 to-orange-600",
  },
  {
    title: "Systèmes Hybrides",
    description: "Combinaisons solaires + pompes à chaleur + efficacité énergétique",
    count: 10,
    image: "⚡",
    color: "from-yellow-500 to-yellow-600",
  },
  {
    title: "Pompage Solaire Agricole",
    description: "Installations pour irrigation et pompages agricoles",
    count: 7,
    image: "🌾",
    color: "from-green-500 to-green-600",
  },
  {
    title: "Avant / Après",
    description: "Comparaison visuelle de nos réalisations",
    count: 15,
    image: "🔄",
    color: "from-red-500 to-red-600",
  },
];

export default function PhototequeePage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-gradient pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 solar-pattern" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-navy-800/50 border border-navy-600/30 text-white/90 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <ImageIcon className="w-4 h-4 text-gold-400" />
            Nos réalisations
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Photothèque Meridian <span className="text-gold-400">Solar</span>
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Explorez nos installations solaires dans tout le Maroc. Des projets
            résidentiels aux installations industrielles de grande envergure.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 60L1440 0V60H0Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Gallery Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Catégories de <span className="gradient-text">Projets</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Sélectionnez une catégorie pour découvrir nos réalisations les plus
              récentes et les plus impressionnantes.
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleries.map((gallery) => (
              <div
                key={gallery.title}
                className="card overflow-hidden group hover:-translate-y-1 transition-transform duration-300 cursor-pointer"
              >
                <div
                  className={`bg-gradient-to-br ${gallery.color} h-48 flex items-center justify-center text-6xl relative overflow-hidden`}
                >
                  <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity" />
                  <span className="relative z-10 text-5xl">{gallery.image}</span>
                </div>

                <div className="p-6">
                  <h3 className="font-bold text-gray-900 mb-2 text-lg">
                    {gallery.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {gallery.description}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-xs font-semibold text-navy-600 bg-navy-50 px-3 py-1 rounded-full">
                      {gallery.count} photos
                    </span>
                    <button className="flex items-center gap-2 text-navy-600 hover:text-navy-700 font-medium text-sm group/btn">
                      Voir
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon Message */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-3xl p-12 border border-gray-200">
            <ImageIcon className="w-16 h-16 text-navy-600 mx-auto mb-6" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Galerie en cours de remplissage
            </h2>
            <p className="text-gray-600 text-lg mb-8 max-w-lg mx-auto">
              Nous organisons actuellement nos photos de projets. Les images
              détaillées de nos installations seront disponibles très prochainement.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/realisations" className="btn-primary inline-flex">
                Voir nos réalisations
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/devis" className="btn-secondary inline-flex">
                Demander un devis
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-navy-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Intéressé par une visite de site ?
          </h2>
          <p className="text-white/70 text-lg mb-8">
            Nous pouvons vous montrer une installation similaire à votre projet.
            Contactez-nous pour organiser une visite.
          </p>
          <a
            href="tel:+212755054395"
            className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-white font-semibold px-8 py-4 rounded-xl transition-colors text-lg"
          >
            Nous appeler
          </a>
        </div>
      </section>
    </>
  );
}
