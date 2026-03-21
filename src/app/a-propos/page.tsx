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
    "Meridian Solar, une expertise de plus de 10 ans dans les énergies renouvelables en Europe, mise au service du Maroc.",
};

const values = [
  {
    icon: Target,
    title: "Excellence",
    description:
      "Nous n'acceptons que le meilleur. Matériaux premium, main-d'œuvre qualifiée et normes européennes à chaque installation.",
  },
  {
    icon: Heart,
    title: "Engagement Client",
    description:
      "Votre satisfaction est notre priorité. De la première consultation à la mise en service, nous sommes à vos côtés.",
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
  { year: "France", event: "Directeur au sein de plusieurs entreprises spécialisées dans les économies d'énergie et les énergies renouvelables" },
  { year: "France", event: "Gérant fondateur de sa propre société — installations solaires, pompes à chaleur et solutions d'efficacité énergétique" },
  { year: "2020", event: "Installation au Maroc et création de Meridian Solar à Marrakech" },
  { year: "Aujourd'hui", event: "Une équipe dédiée, des projets réalisés dans tout le Maroc" },
];

const engagements = [
  "Matériaux et équipements aux standards européens",
  "Études techniques personnalisées pour chaque projet",
  "Suivi et maintenance après installation",
  "Transparence totale sur les devis et délais",
  "En cours de certification auprès des organismes reconnus",
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
            Une expertise de plus de 10 ans dans les énergies renouvelables en Europe,
            mise au service des particuliers, entreprises et institutions du Maroc.
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
                Notre Histoire
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                L&apos;Expertise Européenne{" "}
                <span className="gradient-text">au Service du Maroc</span>
              </h2>
              <p className="text-gray-500 leading-relaxed mb-6">
                Hicham Abdeladim, gérant fondateur de Meridian Solar, a consacré plus de
                10 ans à l&apos;industrie des énergies renouvelables en France. D&apos;abord
                directeur au sein de plusieurs entreprises du secteur, il devient ensuite
                chef d&apos;entreprise à la tête de sa propre société spécialisée dans
                l&apos;installation solaire, les pompes à chaleur et les solutions
                d&apos;économie d&apos;énergie.
              </p>
              <p className="text-gray-500 leading-relaxed mb-6">
                En 2020, il s&apos;installe au Maroc avec une conviction forte : le
                potentiel solaire marocain est immense et mérite une approche
                professionnelle à la hauteur des standards européens. C&apos;est dans
                cet esprit qu&apos;est née Meridian Solar — pour transposer les
                meilleures pratiques du marché européen au bénéfice des clients marocains.
              </p>
              <p className="text-gray-500 leading-relaxed mb-8">
                Basée à Marrakech et intervenant sur tout le territoire marocain,
                Meridian Solar s&apos;appuie également sur Shabaka InnovLab, structure
                partenaire d&apos;accompagnement entrepreneurial.
              </p>
              <div className="flex gap-8">
                <div>
                  <div className="text-3xl font-bold gradient-text">10+</div>
                  <div className="text-sm text-gray-500">Ans d&apos;expérience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold gradient-text">Tout</div>
                  <div className="text-sm text-gray-500">Le territoire marocain</div>
                </div>
                <div>
                  <div className="text-3xl font-bold gradient-text">100%</div>
                  <div className="text-sm text-gray-500">Engagement qualité</div>
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div className="bg-gray-50 rounded-3xl p-8">
              <h3 className="font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Award className="w-5 h-5 text-navy-600" />
                Le Parcours de Hicham Abdeladim
              </h3>
              <div className="space-y-4">
                {milestones.map(({ year, event }, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-24 shrink-0">
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

      {/* Founder */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-navy-600 font-semibold text-sm uppercase tracking-widest mb-3 block">
              Le Fondateur
            </span>
            <h2 className="section-title">
              Une Équipe à Votre <span className="gradient-text">Service</span>
            </h2>
            <p className="section-subtitle">
              Derrière Meridian Solar, un gérant fondateur expérimenté et une équipe
              dédiée, passionnée par les énergies renouvelables.
            </p>
          </div>

          <div className="max-w-md mx-auto">
            <div className="card p-8 text-center group hover:-translate-y-1 transition-transform duration-300">
              <div className="w-24 h-24 rounded-2xl flex items-center justify-center mx-auto mb-5 text-3xl font-bold text-white bg-gradient-to-br from-navy-500 to-navy-700">
                HA
              </div>
              <h3 className="font-bold text-gray-900 text-xl mb-1">Hicham Abdeladim</h3>
              <p className="text-navy-600 text-sm font-medium mb-4">Gérant Fondateur</p>
              <p className="text-gray-500 text-sm leading-relaxed mb-5">
                Plus de 10 ans d&apos;expérience dans les énergies renouvelables en France
                (solaire photovoltaïque, pompes à chaleur, efficacité énergétique).
                Ancien directeur et chef d&apos;entreprise, installé au Maroc depuis 2020
                pour y développer Meridian Solar.
              </p>
              <div className="flex justify-center gap-2">
                <button className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-navy-600 transition-colors group/btn">
                  <Linkedin className="w-4 h-4 text-gray-500 group-hover/btn:text-white transition-colors" />
                </button>
                <button className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-navy-600 transition-colors group/btn">
                  <Mail className="w-4 h-4 text-gray-500 group-hover/btn:text-white transition-colors" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Engagements */}
      <section className="py-20 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Nos <span className="text-gold-400">Engagements</span>
            </h2>
            <p className="text-white/70">
              La qualité et la transparence au cœur de chaque projet
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {engagements.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 bg-navy-800/50 border border-navy-700/50 rounded-xl p-4"
              >
                <CheckCircle className="w-5 h-5 text-gold-400 shrink-0" />
                <span className="text-white/80 text-sm">{item}</span>
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
            Travaillons Ensemble pour Votre <span className="gradient-text">Projet Solaire</span>
          </h2>
          <p className="section-subtitle">
            Bénéficiez d&apos;une expertise européenne au service de votre transition
            énergétique. Obtenez votre étude personnalisée gratuite.
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
