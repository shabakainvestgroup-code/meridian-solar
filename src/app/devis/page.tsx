import DevisForm from "@/components/DevisForm";
import { CheckCircle, Phone, Clock, Shield, Sun } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Devis Gratuit – Installation Solaire Marrakech",
  description:
    "Demandez votre devis gratuit pour l'installation de panneaux solaires à Marrakech. Réponse sous 24h, étude personnalisée et sans engagement.",
};

const benefits = [
  "Étude personnalisée et gratuite",
  "Réponse sous 24 heures",
  "Ingénieur spécialisé dédié",
  "Simulation des économies",
  "Calcul du retour sur investissement",
  "Sans engagement de votre part",
];

export default function DevisPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-gradient pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 solar-pattern" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 bg-navy-800/50 border border-navy-600/30 text-white/90 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sun className="w-4 h-4 text-gold-400" />
            Devis gratuit
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Obtenez Votre Étude Solaire{" "}
            <span className="text-gold-400">Gratuitement</span>
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Remplissez le formulaire ci-dessous. Notre expert vous contactera
            sous 24h avec une étude personnalisée et un devis détaillé.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 60L1440 0V60H0Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Left: Benefits */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Ce qui est inclus dans votre devis
              </h2>

              <div className="space-y-3 mb-10">
                {benefits.map((b) => (
                  <div key={b} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-navy-500 shrink-0" />
                    <span className="text-gray-700 text-sm">{b}</span>
                  </div>
                ))}
              </div>

              {/* Info cards */}
              <div className="space-y-4">
                <div className="bg-navy-50 border border-navy-100 rounded-2xl p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-9 h-9 bg-navy-600 rounded-xl flex items-center justify-center">
                      <Clock className="w-5 h-5 text-white" />
                    </div>
                    <h4 className="font-semibold text-gray-900">Réponse rapide</h4>
                  </div>
                  <p className="text-sm text-gray-600">
                    Nous nous engageons à vous répondre dans les{" "}
                    <strong>24 heures</strong> avec une étude complète.
                  </p>
                </div>

                <div className="bg-gold-50 border border-gold-100 rounded-2xl p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-9 h-9 bg-gold-500 rounded-xl flex items-center justify-center">
                      <Shield className="w-5 h-5 text-white" />
                    </div>
                    <h4 className="font-semibold text-gray-900">Sans engagement</h4>
                  </div>
                  <p className="text-sm text-gray-600">
                    Notre devis est entièrement gratuit et sans aucune obligation
                    d&apos;achat de votre part.
                  </p>
                </div>

                <div className="bg-gray-50 border border-gray-100 rounded-2xl p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 bg-gray-800 rounded-xl flex items-center justify-center">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <h4 className="font-semibold text-gray-900">Préférez appeler ?</h4>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">
                    Notre équipe est disponible du Lundi au Samedi, 9h–18h.
                  </p>
                  <a
                    href="tel:+212755054395"
                    className="text-navy-600 font-bold text-lg hover:text-navy-700 transition-colors"
                  >
                    +212 755 054 395
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="lg:col-span-3">
              <div className="bg-white border border-gray-100 rounded-3xl shadow-xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Formulaire de demande de devis
                </h3>
                <p className="text-gray-400 text-sm mb-8">
                  Tous les champs marqués * sont obligatoires
                </p>
                <DevisForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
