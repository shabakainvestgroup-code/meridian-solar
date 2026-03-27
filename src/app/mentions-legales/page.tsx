import { AlertCircle } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions Légales – Meridian Solar",
  description: "Mentions légales de Meridian Solar SARL.",
};

export default function MentionsLegalesPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-gradient pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 solar-pattern" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-navy-800/50 border border-navy-600/30 text-white/90 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <AlertCircle className="w-4 h-4 text-gold-400" />
            Informations légales
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Mentions <span className="text-gold-400">Légales</span>
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Informations légales relatives à Meridian Solar SARL
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 60L1440 0V60H0Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-32 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-24 h-24 bg-navy-100 rounded-full flex items-center justify-center mx-auto mb-8">
            <AlertCircle className="w-12 h-12 text-navy-600" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Bientôt disponible
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            La page des mentions légales est en cours de rédaction. Elle sera
            disponible très prochainement.
          </p>
          <p className="text-gray-500 text-sm">
            En attendant, n'hésitez pas à nous contacter pour toute question.
          </p>
          <a
            href="tel:+212755054395"
            className="inline-flex items-center gap-2 mt-8 bg-navy-600 hover:bg-navy-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
          >
            Nous contacter
          </a>
        </div>
      </section>
    </>
  );
}
