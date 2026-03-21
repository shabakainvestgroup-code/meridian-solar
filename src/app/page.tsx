import Link from "next/link";
import {
  Sun,
  Zap,
  Shield,
  Award,
  TrendingDown,
  CheckCircle,
  ArrowRight,
  Star,
  Users,
  Home,
  Factory,
  Droplets,
  ChevronRight,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accueil – Meridian Solar Marrakech",
  description:
    "Meridian Solar, expert en installation de panneaux solaires à Marrakech. Réduisez votre facture d'électricité jusqu'à 90% avec nos solutions solaires sur mesure.",
};

const stats = [
  { value: "500+", label: "Installations réalisées", icon: Sun },
  { value: "90%", label: "Économies sur facture", icon: TrendingDown },
  { value: "10 ans", label: "D'expérience", icon: Award },
  { value: "100%", label: "Clients satisfaits", icon: Users },
];

const services = [
  {
    icon: Home,
    title: "Résidentiel",
    description:
      "Installations solaires pour maisons et villas. Optimisez votre consommation et revendez l'excédent.",
    color: "navy",
  },
  {
    icon: Factory,
    title: "Industriel & Commercial",
    description:
      "Solutions grande puissance pour entreprises, hôtels, centres commerciaux et unités industrielles.",
    color: "gold",
  },
  {
    icon: Droplets,
    title: "Pompage Solaire",
    description:
      "Systèmes de pompage alimentés par l'énergie solaire pour l'agriculture et l'eau potable.",
    color: "navy",
  },
  {
    icon: Zap,
    title: "Systèmes Hybrides",
    description:
      "Combinaison solaire + réseau + batterie pour une autonomie maximale et zéro coupure.",
    color: "gold",
  },
];

const advantages = [
  "Matériaux certifiés de haute qualité",
  "Équipe d'ingénieurs spécialisés",
  "Garantie 25 ans sur les panneaux",
  "Maintenance et SAV inclus",
  "Devis gratuit sous 24h",
  "Financement flexible disponible",
];

const testimonials = [
  {
    name: "Ahmed Bennani",
    role: "Gérant, Hôtel Riad Tizwa",
    content:
      "Meridian Solar a transformé notre hôtel. Nos charges énergétiques ont baissé de 75% en seulement 6 mois. Un investissement excellent avec un ROI rapide.",
    rating: 5,
  },
  {
    name: "Fatima Ezzahra",
    role: "Propriétaire résidentielle",
    content:
      "L'installation s'est faite en 2 jours, très proprement. L'équipe est professionnelle et le suivi après-vente irréprochable. Je recommande vivement.",
    rating: 5,
  },
  {
    name: "Hassan Moukrim",
    role: "Directeur, Ferme agricole",
    content:
      "Le système de pompage solaire est parfait pour notre exploitation. Plus de problèmes de coupures et une économie considérable sur le gazole.",
    rating: 5,
  },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="hero-gradient min-h-screen flex items-center relative overflow-hidden">
        {/* Solar pattern overlay */}
        <div className="absolute inset-0 solar-pattern" />
        {/* Decorative circles */}
        <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-amber-500/10 blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-navy-400/5 blur-3xl" />

        {/* Animated sun */}
        <div className="absolute right-10 top-1/2 -translate-y-1/2 hidden lg:block animate-float">
          <div className="relative">
            <div className="w-72 h-72 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 opacity-20 blur-2xl absolute inset-0" />
            <div className="w-56 h-56 rounded-full border-4 border-gold-400/30 flex items-center justify-center relative">
              <div className="w-40 h-40 rounded-full border-4 border-gold-400/40 flex items-center justify-center">
                <Sun className="w-20 h-20 text-gold-400" strokeWidth={1.5} />
              </div>
            </div>
            {/* Rays */}
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-8 bg-gold-400/40 rounded-full"
                style={{
                  top: "50%",
                  left: "50%",
                  transformOrigin: "0 -110px",
                  transform: `rotate(${i * 45}deg) translateX(-50%) translateY(-110px)`,
                }}
              />
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-navy-800/50 border border-navy-600/30 text-white/90 px-4 py-2 rounded-full text-sm font-medium mb-8 backdrop-blur-sm">
              <Zap className="w-4 h-4 text-gold-400" fill="currentColor" />
              Leader en énergie solaire au Maroc
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              L&apos;Énergie Solaire{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-300">
                Pour Tous
              </span>
              {" "}au Maroc
            </h1>

            <p className="text-lg text-white/80 mb-10 leading-relaxed">
              Passez à l&apos;énergie propre et réduisez vos factures jusqu&apos;à{" "}
              <strong className="text-gold-400">90%</strong>. Meridian Solar
              conçoit et installe vos panneaux solaires avec une expertise
              reconnue à Marrakech et dans tout le Maroc.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link href="/devis" className="btn-gold text-base px-10 py-4">
                Devis Gratuit en 24h
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/services" className="btn-outline border-white text-white hover:bg-white hover:text-navy-800 text-base px-10 py-4">
                Nos Services
              </Link>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-4">
              {["IRESEN Certifié", "Garantie 25 ans", "Installation rapide"].map(
                (badge) => (
                  <div
                    key={badge}
                    className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2"
                  >
                    <CheckCircle className="w-4 h-4 text-gold-400" />
                    <span className="text-white text-sm">{badge}</span>
                  </div>
                )
              )}
            </div>
          </div>
        </div>

        {/* Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0 80L60 72C120 64 240 48 360 42.7C480 37.3 600 42.7 720 48C840 53.3 960 58.7 1080 56C1200 53.3 1320 42.7 1380 37.3L1440 32V80H1380C1320 80 1200 80 1080 80C960 80 840 80 720 80C600 80 480 80 360 80C240 80 120 80 60 80H0Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      {/* STATS */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map(({ value, label, icon: Icon }) => (
              <div key={label} className="text-center group">
                <div className="w-14 h-14 bg-navy-50 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-navy-600 transition-colors">
                  <Icon className="w-7 h-7 text-navy-600 group-hover:text-white transition-colors" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-1">
                  {value}
                </div>
                <div className="text-sm text-gray-500">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-navy-600 font-semibold text-sm uppercase tracking-widest mb-3 block">
              Nos Solutions
            </span>
            <h2 className="section-title">
              Des Services Solaires{" "}
              <span className="gradient-text">Adaptés à Vos Besoins</span>
            </h2>
            <p className="section-subtitle">
              De l&apos;installation résidentielle aux projets industriels, nous
              couvrons tous vos besoins en énergie solaire.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map(({ icon: Icon, title, description, color }) => (
              <div
                key={title}
                className="card p-6 group hover:-translate-y-1 transition-transform duration-300"
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-colors ${
                    color === "navy"
                      ? "bg-navy-100 group-hover:bg-navy-600"
                      : "bg-gold-100 group-hover:bg-gold-500"
                  }`}
                >
                  <Icon
                    className={`w-6 h-6 transition-colors ${
                      color === "navy"
                        ? "text-navy-600 group-hover:text-white"
                        : "text-gold-600 group-hover:text-white"
                    }`}
                  />
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  {description}
                </p>
                <Link
                  href="/services"
                  className="text-navy-600 text-sm font-medium hover:text-navy-700 inline-flex items-center gap-1 group/link"
                >
                  En savoir plus
                  <ChevronRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Visual */}
            <div className="relative">
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-navy-600 to-navy-800 aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 solar-pattern" />
                <div className="relative z-10 flex items-center justify-center h-full">
                  <div className="text-center p-8">
                    <div className="w-32 h-32 bg-gold-400/20 rounded-full flex items-center justify-center mx-auto mb-6 animate-float">
                      <Sun className="w-16 h-16 text-gold-300" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      15 ans de garantie
                    </h3>
                    <p className="text-white/70">Sur toutes nos installations</p>

                    <div className="mt-8 grid grid-cols-2 gap-4">
                      {[
                        { v: "15 kWh", l: "Production / jour" },
                        { v: "450 kg", l: "CO₂ évité / an" },
                        { v: "30%", l: "ROI moyen" },
                        { v: "3 ans", l: "Retour invest." },
                      ].map(({ v, l }) => (
                        <div key={l} className="bg-white/10 rounded-xl p-3">
                          <div className="text-gold-400 font-bold text-lg">{v}</div>
                          <div className="text-white/70 text-xs">{l}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              {/* Decorative */}
              <div className="absolute -top-8 -left-8 w-32 h-32 bg-gold-200 rounded-full opacity-30 blur-2xl" />
              <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-navy-200 rounded-full opacity-40 blur-3xl" />
            </div>

            {/* Content */}
            <div>
              <span className="text-navy-600 font-semibold text-sm uppercase tracking-widest mb-3 block">
                Pourquoi nous choisir
              </span>
              <h2 className="section-title text-left mb-6">
                L&apos;Excellence Solaire{" "}
                <span className="gradient-text">À Votre Service</span>
              </h2>
              <p className="text-gray-500 leading-relaxed mb-8">
                Depuis plus de 10 ans, Meridian Solar accompagne les habitants
                de Marrakech vers une autonomie énergétique totale. Notre équipe
                d&apos;experts certifiés garantit des installations performantes,
                durables et adaptées à votre budget.
              </p>

              <div className="grid sm:grid-cols-2 gap-3 mb-10">
                {advantages.map((adv) => (
                  <div key={adv} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-navy-500 shrink-0" />
                    <span className="text-sm text-gray-700">{adv}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/devis" className="btn-primary">
                  Obtenir mon devis
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link href="/a-propos" className="btn-outline">
                  En savoir plus
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-navy-600 font-semibold text-sm uppercase tracking-widest mb-3 block">
              Témoignages
            </span>
            <h2 className="section-title">
              Ce Que Disent Nos{" "}
              <span className="gradient-text">Clients</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map(({ name, role, content, rating }) => (
              <div key={name} className="card p-6 hover:-translate-y-1 transition-transform duration-300">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-amber-500"
                      fill="currentColor"
                    />
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 italic">
                  &ldquo;{content}&rdquo;
                </p>
                <div className="flex items-center gap-3 border-t border-gray-100 pt-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-navy-500 to-navy-700 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">{name}</div>
                    <div className="text-gray-400 text-xs">{role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 solar-pattern" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Prêt à Passer à l&apos;Énergie{" "}
            <span className="text-gold-400">Solaire ?</span>
          </h2>
          <p className="text-white/80 text-lg mb-10">
            Rejoignez les 500+ familles et entreprises qui économisent grâce à
            Meridian Solar. Obtenez votre étude personnalisée gratuite.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/devis" className="btn-gold text-base px-10 py-4">
              Demander un devis gratuit
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/contact" className="border-2 border-white/50 text-white font-semibold px-10 py-4 rounded-full hover:bg-white hover:text-navy-800 transition-all duration-300 inline-flex items-center gap-2">
              <Shield className="w-5 h-5" />
              Nous contacter
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
