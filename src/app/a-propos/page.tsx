import Link from "next/link";
import {
  Sun,
  Award,
  Users,
  Target,
  Heart,
  Leaf,
  ArrowRight,
  CheckCircle,
  Linkedin,
  Mail,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "À propos – Meridian Solar Marrakech",
  description:
    "Découvrez Meridian Solar, l'expert en énergie solaire à Marrakech depuis 2013. Notre équipe, nos valeurs et notre engagement pour un Maroc plus vert.",
};

const team = [
  {
    name: "Youssef El Amrani",
    role: "Fondateur & Directeur Général",
    bio: "Ingénieur en génie électrique (École Polytechnique de Paris), 15 ans d'expérience dans le solaire photovoltaïque au Maroc et en Europe.",
    initials: "YA",
    color: "navy",
  },
  {
    name: "Sara Benjelloun",
    role: "Directrice Technique",
    bio: "Ingénieure en systèmes d'énergie renouvelable. Certifiée SunPower et Fronius. Pilote toutes nos études de faisabilité et conceptions.",
    initials: "SB",
    color: "gold",
  },
  {
    name: "Karim Tazi",
    role: "Responsable Commercial",
    bio: "Expert en solutions énergétiques pour l'industrie et l'hôtellerie. Accompagne nos clients dans leur retour sur investissement.",
    initials: "KT",
    color: "navy",
  },
  {
    name: "Nadia Chraibi",
    role: "Chef de Projets",
    bio: "Coordinatrice experte des chantiers d'installation. Garantit la qualité d'exécution et le respect des délais pour chaque projet.",
    initials: "NC",
    color: "gold",
  },
];

const values = [
  {
    icon: Target,
    title: "Excellence",
    description:
      "Nous n'acceptons que le meilleur. Matériaux premium, main-d'œuvre certifiée et normes internationales à chaque installation.",
  },
  {
    icon: Heart,
    title: "Engagement Client",
    description:
      "Votre satisfaction est notre priorité. De la première consultation à la maintenance, nous sommes là pour vous.",
  },
  {
    icon: Leaf,
    title: "Durabilité",
    description:
      "Chaque panneau installé contribue à un Maroc plus vert. Nous agissons pour les générations futures.",
  },
  {
    icon: Award,
    title: "Innovation",
    description:
      "Toujours à la pointe des dernières technologies solaires pour vous offrir les meilleures performances.",
  },
];

const milestones = [
  { year: "2013", event: "Fondation de Meridian Solar à Marrakech" },
  { year: "2015", event: "100ème installation résidentielle" },
  { year: "2017", event: "Premier projet industriel +200 kWc" },
  { year: "2019", event: "Certification IRESEN & partenariat SunPower" },
  { year: "2021", event: "Expansion à Casablanca et Agadir" },
  { year: "2023", event: "500ème projet et 8 MW installés au total" },
  { year: "2024", event: "Lancement division stockage par batteries" },
];

const certifications = [
  "IRESEN – Institut de Recherche en Énergie Solaire",
  "SunPower Certified Dealer",
  "Fronius Service Partner",
  "ISO 9001:2015 Qualité",
  "Membre AMISOLE (Association Marocaine)",
];

export default function AProposPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-gradient pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 solar-pattern" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 bg-navy-800/50 border border-navy-600/30 text-white/90 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sun className="w-4 h-4 text-gold-400" />
            Notre histoire
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Qui Sommes-Nous ?
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Depuis 2013, Meridian Solar accompagne les particuliers, entreprises
            et institutions de Marrakech vers une énergie propre, économique et
            durable.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 60L1440 0V60H0Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-navy-600 font-semibold text-sm uppercase tracking-widest mb-3 block">
                Notre Mission
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Rendre l&apos;Énergie Solaire{" "}
                <span className="gradient-text">Accessible à Tous</span>
              </h2>
              <p className="text-gray-500 leading-relaxed mb-6">
                Né à Marrakech, Meridian Solar est parti d&apos;un constat simple :
                le Maroc est l&apos;un des pays les mieux exposés au soleil au monde,
                pourtant trop peu de foyers et d&apos;entreprises exploitent ce
                formidable potentiel.
              </p>
              <p className="text-gray-500 leading-relaxed mb-8">
                Notre fondateur, Youssef El Amrani, a créé Meridian Solar avec
                la conviction que l&apos;énergie propre doit être accessible à
                tous — pas seulement aux grandes entreprises. Aujourd&apos;hui, notre
                équipe de 35 professionnels certifiés partage cette même passion
                et ce même engagement.
              </p>
              <div className="flex gap-8">
                <div>
                  <div className="text-3xl font-bold gradient-text">35</div>
                  <div className="text-sm text-gray-500">Professionnels</div>
                </div>
                <div>
                  <div className="text-3xl font-bold gradient-text">10+</div>
                  <div className="text-sm text-gray-500">Ans d&apos;expérience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold gradient-text">3</div>
                  <div className="text-sm text-gray-500">Villes au Maroc</div>
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div className="bg-gray-50 rounded-3xl p-8">
              <h3 className="font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Award className="w-5 h-5 text-navy-600" />
                Notre Parcours
              </h3>
              <div className="space-y-4">
                {milestones.map(({ year, event }) => (
                  <div key={year} className="flex items-start gap-4">
                    <div className="w-14 shrink-0">
                      <span className="text-sm font-bold text-navy-600">{year}</span>
                    </div>
                    <div className="flex-1 flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-navy-500 mt-1.5 shrink-0" />
                      <span className="text-sm text-gray-600">{event}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-navy-600 font-semibold text-sm uppercase tracking-widest mb-3 block">
              Nos Valeurs
            </span>
            <h2 className="section-title">
              Ce Qui Nous <span className="gradient-text">Guide</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="card p-6 text-center group hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="w-14 h-14 bg-navy-50 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-navy-600 transition-colors">
                  <Icon className="w-7 h-7 text-navy-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-navy-600 font-semibold text-sm uppercase tracking-widest mb-3 block">
              L&apos;Équipe
            </span>
            <h2 className="section-title">
              Des Experts à Votre <span className="gradient-text">Service</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map(({ name, role, bio, initials, color }) => (
              <div
                key={name}
                className="card p-6 text-center group hover:-translate-y-1 transition-transform duration-300"
              >
                <div
                  className={`w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white ${
                    color === "navy"
                      ? "bg-gradient-to-br from-navy-500 to-navy-700"
                      : "bg-gradient-to-br from-gold-500 to-gold-700"
                  }`}
                >
                  {initials}
                </div>
                <h3 className="font-bold text-gray-900 mb-1">{name}</h3>
                <p className="text-navy-600 text-xs font-medium mb-3">{role}</p>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{bio}</p>
                <div className="flex justify-center gap-2">
                  <button className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-navy-600 transition-colors group/btn">
                    <Linkedin className="w-4 h-4 text-gray-500 group-hover/btn:text-white transition-colors" />
                  </button>
                  <button className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-navy-600 transition-colors group/btn">
                    <Mail className="w-4 h-4 text-gray-500 group-hover/btn:text-white transition-colors" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Nos <span className="text-gold-400">Certifications</span>
            </h2>
            <p className="text-white/70">
              La garantie d&apos;une expertise reconnue aux niveaux national et international
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {certifications.map((cert) => (
              <div
                key={cert}
                className="flex items-center gap-3 bg-navy-800/50 border border-navy-700/50 rounded-xl p-4"
              >
                <CheckCircle className="w-5 h-5 text-gold-400 shrink-0" />
                <span className="text-white/80 text-sm">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-6">
            <Users className="w-12 h-12 text-navy-600" />
          </div>
          <h2 className="section-title">
            Rejoignez la Famille <span className="gradient-text">Meridian Solar</span>
          </h2>
          <p className="section-subtitle">
            500+ clients nous font confiance. Devenez l&apos;un d&apos;eux et
            profitez d&apos;une énergie propre, économique et durable.
          </p>
          <Link href="/devis" className="btn-primary inline-flex">
            Obtenir mon devis gratuit
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
