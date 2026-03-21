import Link from "next/link";
import { MapPin, Zap, TrendingDown, Calendar, ArrowRight, Sun, Award } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Réalisations – Projets Solaires Marrakech",
  description:
    "Découvrez nos réalisations : installations solaires résidentielles, commerciales et industrielles à Marrakech et au Maroc.",
};

const projects = [
  {
    title: "Villa Privée – Palmeraie",
    category: "Résidentiel",
    location: "Palmeraie, Marrakech",
    power: "15 kWc",
    saving: "95%",
    year: "2024",
    description:
      "Installation complète sur une villa de luxe. Système hybride avec stockage batterie 20 kWh permettant une autonomie totale.",
    color: "navy",
    gradient: "from-navy-600 to-navy-800",
  },
  {
    title: "Hôtel Riad Tizwa",
    category: "Commercial",
    location: "Medina, Marrakech",
    power: "60 kWc",
    saving: "78%",
    year: "2024",
    description:
      "Couverture complète des besoins en eau chaude sanitaire et climatisation d'un riad 5 étoiles. ROI atteint en 3 ans.",
    color: "gold",
    gradient: "from-gold-500 to-gold-700",
  },
  {
    title: "Exploitation Agricole",
    category: "Agriculture",
    location: "Chichaoua, Marrakech",
    power: "30 kWc",
    saving: "100%",
    year: "2023",
    description:
      "Système de pompage solaire pour irrigation de 50 hectares. Remplacement total du groupe électrogène diesel.",
    color: "navy",
    gradient: "from-navy-500 to-teal-700",
  },
  {
    title: "Centre Commercial Al Mazar",
    category: "Industriel",
    location: "Guéliz, Marrakech",
    power: "250 kWc",
    saving: "65%",
    year: "2023",
    description:
      "Grande installation en toiture pour l'un des centres commerciaux phares de Marrakech. Économie de 2,4 millions de DH/an.",
    color: "gold",
    gradient: "from-amber-500 to-orange-600",
  },
  {
    title: "École Primaire Publique",
    category: "Public",
    location: "Sidi Youssef Ben Ali",
    power: "10 kWc",
    saving: "90%",
    year: "2023",
    description:
      "Projet RSE offert à l'école primaire de Sidi Youssef Ben Ali. Alimentation en électricité propre pour 400 élèves.",
    color: "navy",
    gradient: "from-navy-700 to-green-600",
  },
  {
    title: "Résidence Universitaire",
    category: "Résidentiel",
    location: "Guéliz, Marrakech",
    power: "80 kWc",
    saving: "72%",
    year: "2022",
    description:
      "Installation sur une résidence universitaire privée de 120 studios. Système connecté au réseau ONEE avec injection surplus.",
    color: "gold",
    gradient: "from-yellow-500 to-gold-600",
  },
];

const categories = ["Tous", "Résidentiel", "Commercial", "Industriel", "Agriculture", "Public"];

const achievements = [
  { value: "500+", label: "Projets réalisés" },
  { value: "8 MW", label: "Puissance installée" },
  { value: "15M DH", label: "Économies générées/an" },
  { value: "4 500 T", label: "CO₂ évité/an" },
];

export default function RealisationsPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-gradient pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 solar-pattern" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 bg-navy-800/50 border border-navy-600/30 text-white/90 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Award className="w-4 h-4 text-gold-400" />
            Nos réalisations
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Des Projets Qui Parlent{" "}
            <span className="text-gold-400">d&apos;Eux-Mêmes</span>
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Plus de 500 installations réussies à Marrakech et dans tout le
            Maroc. Découvrez nos projets phares et les économies réalisées.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 60L1440 0V60H0Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map(({ value, label }) => (
              <div
                key={label}
                className="text-center p-6 bg-gradient-to-br from-navy-50 to-white rounded-2xl border border-navy-100"
              >
                <div className="text-3xl lg:text-4xl font-bold gradient-text mb-2">
                  {value}
                </div>
                <div className="text-sm text-gray-500">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter + Projects */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter (visual only) */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {categories.map((cat, i) => (
              <button
                key={cat}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  i === 0
                    ? "bg-navy-600 text-white shadow-md"
                    : "bg-white text-gray-600 border border-gray-200 hover:border-navy-400 hover:text-navy-600"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map(
              ({ title, category, location, power, saving, year, description, gradient }) => (
                <div
                  key={title}
                  className="card group hover:-translate-y-2 transition-all duration-300"
                >
                  {/* Visual header */}
                  <div
                    className={`h-40 bg-gradient-to-br ${gradient} relative overflow-hidden flex items-end p-5`}
                  >
                    <div className="absolute inset-0 solar-pattern opacity-30" />
                    <div className="absolute top-4 right-4">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                        <Sun className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    {/* Stats overlaid */}
                    <div className="relative z-10 flex gap-3">
                      <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-1.5">
                        <div className="text-white font-bold text-sm">{power}</div>
                        <div className="text-white/70 text-xs">Puissance</div>
                      </div>
                      <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-1.5">
                        <div className="text-white font-bold text-sm">{saving}</div>
                        <div className="text-white/70 text-xs">Économies</div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-semibold text-navy-600 bg-navy-50 px-3 py-1 rounded-full">
                        {category}
                      </span>
                      <span className="text-xs text-gray-400 flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {year}
                      </span>
                    </div>

                    <h3 className="font-bold text-gray-900 text-lg mb-2">{title}</h3>

                    <p className="text-gray-500 text-sm leading-relaxed mb-4">
                      {description}
                    </p>

                    <div className="flex items-center gap-1.5 text-gray-400 text-sm">
                      <MapPin className="w-4 h-4 text-navy-500" />
                      {location}
                    </div>

                    <div className="mt-4 pt-4 border-t border-gray-100 grid grid-cols-2 gap-4">
                      <div className="flex items-center gap-2">
                        <Zap className="w-4 h-4 text-gold-500" />
                        <div>
                          <div className="text-xs text-gray-400">Puissance</div>
                          <div className="text-sm font-semibold text-gray-800">{power}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <TrendingDown className="w-4 h-4 text-navy-500" />
                        <div>
                          <div className="text-xs text-gray-400">Économies</div>
                          <div className="text-sm font-semibold text-gray-800">{saving}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="section-title">
            Votre Projet Sera Notre{" "}
            <span className="gradient-text">Prochaine Réussite</span>
          </h2>
          <p className="section-subtitle">
            Rejoignez nos centaines de clients satisfaits. Obtenez une étude
            personnalisée et gratuite pour votre projet.
          </p>
          <Link href="/devis" className="btn-primary inline-flex">
            Démarrer mon projet
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
