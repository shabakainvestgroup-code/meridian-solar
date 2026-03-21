import Link from "next/link";
import {
  Home,
  Factory,
  Droplets,
  Zap,
  Wrench,
  Battery,
  ArrowRight,
  CheckCircle,
  Sun,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services – Installation Solaire Marrakech",
  description:
    "Découvrez nos services : panneaux solaires résidentiels, industriels, pompage solaire, systèmes hybrides et maintenance à Marrakech.",
};

const services = [
  {
    icon: Home,
    title: "Panneaux Solaires Résidentiels",
    description:
      "Transformez votre maison en source d'énergie propre. Nos systèmes photovoltaïques pour villas et appartements sont conçus pour maximiser votre production et minimiser votre facture d'électricité.",
    features: [
      "Audit énergétique gratuit",
      "Dimensionnement sur mesure",
      "Panneaux monocristallins haute performance",
      "Onduleurs certifiés européens",
      "Intégration au réseau ONEE",
      "Monitoring en temps réel via application",
    ],
    badge: "Populaire",
    color: "navy",
  },
  {
    icon: Factory,
    title: "Installations Industrielles & Commerciales",
    description:
      "Solutions grande puissance pour hôtels, usines, centres commerciaux et exploitations agricoles. Réduisez massivement vos coûts opérationnels et votre empreinte carbone.",
    features: [
      "Projets de 10 kWc à plusieurs MW",
      "Étude de faisabilité détaillée",
      "Montage clé en main",
      "Optimisation de la demande",
      "Certificats verts disponibles",
      "Reporting de performance mensuel",
    ],
    badge: "Grande puissance",
    color: "gold",
  },
  {
    icon: Droplets,
    title: "Pompage Solaire",
    description:
      "Alimentez vos pompes sans réseau électrique ni groupe électrogène. Idéal pour l'irrigation agricole, l'adduction d'eau potable et les piscines.",
    features: [
      "Pompes immergées et de surface",
      "Systèmes avec et sans batterie",
      "Débits de 1 à 200 m³/h",
      "Hauteur manométrique jusqu'à 500 m",
      "Contrôleur MPPT intégré",
      "Installation robuste et durable",
    ],
    badge: "Agriculture",
    color: "navy",
  },
  {
    icon: Zap,
    title: "Systèmes Hybrides & Off-Grid",
    description:
      "Combinez solaire, réseau et batterie pour une autonomie totale. Plus jamais de coupures d'électricité. Idéal pour les zones isolées ou les bâtiments exigeants.",
    features: [
      "Batteries LiFePO4 longue durée",
      "Gestion intelligente de l'énergie",
      "Onduleurs hybrides multifonctions",
      "Autonomie de 8 à 72 heures",
      "Compatible générateur diesel",
      "Extension capacité facile",
    ],
    badge: "Zéro coupure",
    color: "gold",
  },
  {
    icon: Wrench,
    title: "Maintenance & SAV",
    description:
      "Nous assurons le suivi et la maintenance de votre installation pour des performances optimales sur toute sa durée de vie. Contrats de maintenance flexibles.",
    features: [
      "Contrôle annuel des panneaux",
      "Nettoyage professionnel",
      "Diagnostic électrique complet",
      "Remplacement pièces défectueuses",
      "Hotline technique 6j/7",
      "Rapport de performance détaillé",
    ],
    badge: "Après-vente",
    color: "navy",
  },
  {
    icon: Battery,
    title: "Stockage par Batteries",
    description:
      "Stockez l'énergie produite le jour pour la consommer la nuit. Nos solutions de stockage par batteries garantissent une indépendance énergétique maximale.",
    features: [
      "Batteries lithium et AGM",
      "Capacité 5 à 100 kWh",
      "BMS intégré sécurisé",
      "Durée de vie 10-15 ans",
      "Monitoring intelligent",
      "Compatible toutes marques",
    ],
    badge: "Autonomie",
    color: "gold",
  },
];

const process = [
  {
    step: "01",
    title: "Audit & Analyse",
    description:
      "Visite gratuite sur site pour analyser vos consommations, l'orientation de votre toit et dimensionner le système idéal.",
  },
  {
    step: "02",
    title: "Devis Personnalisé",
    description:
      "Présentation d'une étude technique et financière détaillée avec retour sur investissement calculé précisément.",
  },
  {
    step: "03",
    title: "Installation",
    description:
      "Notre équipe certifiée réalise l'installation en 1 à 3 jours selon la taille du projet, avec toutes les démarches administratives.",
  },
  {
    step: "04",
    title: "Mise en service",
    description:
      "Test complet du système, formation de l'utilisation de l'application de monitoring et remise de tous les documents.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-gradient pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 solar-pattern" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 bg-navy-800/50 border border-navy-600/30 text-white/90 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sun className="w-4 h-4 text-gold-400" />
            Nos solutions solaires
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Des Services Solaires{" "}
            <span className="text-gold-400">Complets</span>
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            De l&apos;étude à la maintenance, Meridian Solar vous accompagne à
            chaque étape de votre transition énergétique.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 60L1440 0V60H0Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map(({ icon: Icon, title, description, features, badge, color }) => (
              <div
                key={title}
                className="card group hover:-translate-y-2 transition-all duration-300"
              >
                <div
                  className={`h-2 ${
                    color === "navy"
                      ? "bg-gradient-to-r from-navy-600 to-navy-400"
                      : "bg-gradient-to-r from-gold-600 to-gold-400"
                  }`}
                />
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                        color === "navy"
                          ? "bg-navy-100 group-hover:bg-navy-600"
                          : "bg-gold-100 group-hover:bg-gold-500"
                      } transition-colors`}
                    >
                      <Icon
                        className={`w-6 h-6 transition-colors ${
                          color === "navy"
                            ? "text-navy-600 group-hover:text-white"
                            : "text-gold-600 group-hover:text-white"
                        }`}
                      />
                    </div>
                    <span
                      className={`text-xs font-semibold px-3 py-1 rounded-full ${
                        color === "navy"
                          ? "bg-navy-100 text-navy-700"
                          : "bg-gold-100 text-gold-700"
                      }`}
                    >
                      {badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-5">
                    {description}
                  </p>

                  <ul className="space-y-2">
                    {features.map((f) => (
                      <li key={f} className="flex items-center gap-2">
                        <CheckCircle
                          className={`w-4 h-4 shrink-0 ${
                            color === "navy" ? "text-navy-500" : "text-gold-500"
                          }`}
                        />
                        <span className="text-sm text-gray-600">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-navy-600 font-semibold text-sm uppercase tracking-widest mb-3 block">
              Notre Processus
            </span>
            <h2 className="section-title">
              Installation en <span className="gradient-text">4 Étapes</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8 relative">
            {/* Connector line */}
            <div className="hidden md:block absolute top-8 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-navy-200 via-gold-200 to-navy-200" />

            {process.map(({ step, title, description }) => (
              <div key={step} className="relative text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-navy-600 to-navy-800 rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-lg shadow-navy-200 relative z-10">
                  <span className="text-2xl font-bold text-white">{step}</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="section-title">
            Quel Service Vous Convient ?
          </h2>
          <p className="section-subtitle">
            Contactez-nous pour une consultation gratuite. Nos experts vous
            guideront vers la solution idéale.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/devis" className="btn-primary">
              Demander un devis
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/contact" className="btn-outline">
              Nous contacter
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
