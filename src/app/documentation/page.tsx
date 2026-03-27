import { Download, FileText, AlertCircle, BookOpen } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";
import DownloadCGVButton from "@/components/DownloadCGVButton";

export const metadata: Metadata = {
  title: "Documentation – Meridian Solar",
  description:
    "Téléchargez nos documents : CGV, guides d'installation, fiches techniques et documentation produit.",
};

const documents = [
  {
    title: "Conditions Générales de Vente (CGV)",
    description:
      "Termes et conditions applicables à toute commande de produits ou services chez Meridian Solar.",
    category: "Légal",
    format: "PDF",
    size: "245 KB",
    icon: FileText,
    downloadUrl: "/api/documents/cgv-pdf",
    color: "from-red-500 to-red-600",
  },
  {
    title: "Guide Installation Solaire",
    description:
      "Guide complet pour l'installation de panneaux solaires résidentiels. Étapes, consignes de sécurité et maintenance.",
    category: "Guide",
    format: "PDF",
    size: "1.2 MB",
    icon: BookOpen,
    downloadUrl: "#",
    color: "from-orange-500 to-orange-600",
  },
  {
    title: "Fiche Technique Panneaux 400W",
    description:
      "Spécifications techniques complètes des panneaux solaires 400W utilisés dans nos installations.",
    category: "Technique",
    format: "PDF",
    size: "512 KB",
    icon: FileText,
    downloadUrl: "#",
    color: "from-yellow-500 to-yellow-600",
  },
  {
    title: "Catalogue Produits 2026",
    description:
      "Catalogue complet de nos produits, services et solutions d'énergie renouvelable.",
    category: "Catalogue",
    format: "PDF",
    size: "3.1 MB",
    icon: BookOpen,
    downloadUrl: "#",
    color: "from-green-500 to-green-600",
  },
  {
    title: "Manuel Onduleur Hybride",
    description:
      "Documentation technique pour onduleurs hybrides. Installation, configuration et dépannage.",
    category: "Technique",
    format: "PDF",
    size: "2.4 MB",
    icon: FileText,
    downloadUrl: "#",
    color: "from-blue-500 to-blue-600",
  },
  {
    title: "Garantie Produits",
    description:
      "Conditions de garantie détaillées pour tous nos produits (panneaux, onduleurs, batteries).",
    category: "Légal",
    format: "PDF",
    size: "156 KB",
    icon: FileText,
    downloadUrl: "#",
    color: "from-purple-500 to-purple-600",
  },
];

export default function DocumentationPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-gradient pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 solar-pattern" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-navy-800/50 border border-navy-600/30 text-white/90 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Download className="w-4 h-4 text-gold-400" />
            Centre de ressources
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Documentation <span className="text-gold-400">Meridian Solar</span>
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Téléchargez tous les documents nécessaires : conditions générales,
            guides d'installation, fiches techniques et manuels produit.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 60L1440 0V60H0Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Documents Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ressources <span className="gradient-text">Téléchargeables</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Tous les documents au format PDF, prêts à télécharger et consulter.
            </p>
          </div>

          {/* Info Banner */}
          <div className="flex items-start gap-4 bg-navy-50 border border-navy-200 rounded-2xl p-6 mb-12">
            <AlertCircle className="w-6 h-6 text-navy-600 shrink-0 mt-0.5" />
            <div>
              <h3 className="font-bold text-gray-900 mb-1">
                Documents importants
              </h3>
              <p className="text-gray-600 text-sm">
                Veuillez lire attentivement les conditions générales et les
                garanties produits avant de passer commande.
              </p>
            </div>
          </div>

          {/* Documents Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {documents.map((doc) => {
              const Icon = doc.icon;
              return (
                <div
                  key={doc.title}
                  className="card overflow-hidden hover:-translate-y-1 transition-transform duration-300 flex flex-col"
                >
                  {/* Header */}
                  <div
                    className={`bg-gradient-to-br ${doc.color} h-24 flex items-center justify-center relative overflow-hidden`}
                  >
                    <div className="absolute inset-0 opacity-20" />
                    <Icon className="w-10 h-10 text-white relative z-10" />
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-1">
                    <div className="mb-auto">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-xs font-bold text-white bg-gray-400 px-2.5 py-1 rounded">
                          {doc.category}
                        </span>
                        <span className="text-xs font-medium text-gray-500">
                          {doc.format}
                        </span>
                      </div>

                      <h3 className="font-bold text-gray-900 mb-2 text-base leading-tight">
                        {doc.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">
                        {doc.description}
                      </p>
                    </div>

                    {/* Footer */}
                    <div className="border-t border-gray-100 pt-4 flex items-center justify-between">
                      <span className="text-xs text-gray-500">{doc.size}</span>
                      {doc.title === "Conditions Générales de Vente (CGV)" ? (
                        <DownloadCGVButton />
                      ) : (
                        <a
                          href={doc.downloadUrl}
                          className="inline-flex items-center gap-2 bg-navy-600 hover:bg-navy-700 text-white font-medium text-sm px-4 py-2 rounded-lg transition-colors"
                        >
                          <Download className="w-4 h-4" />
                          Télécharger
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-12">
            Parcourir par <span className="gradient-text">Catégorie</span>
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Documents Légaux", count: 2, icon: "⚖️" },
              { name: "Guides & Tutoriels", count: 2, icon: "📚" },
              { name: "Fiches Techniques", count: 3, icon: "🔧" },
              { name: "Manuels Produit", count: 1, icon: "📖" },
              { name: "Certificats", count: 1, icon: "🏅" },
              { name: "Autres Ressources", count: 2, icon: "📋" },
            ].map((cat) => (
              <button
                key={cat.name}
                className="card p-6 text-center hover:-translate-y-1 transition-transform duration-300 group"
              >
                <div className="text-4xl mb-3">{cat.icon}</div>
                <h3 className="font-bold text-gray-900 mb-1">{cat.name}</h3>
                <p className="text-gray-500 text-sm">
                  {cat.count} document{cat.count > 1 ? "s" : ""}
                </p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-12">
            Questions <span className="gradient-text">Fréquentes</span>
          </h2>

          <div className="space-y-6">
            {[
              {
                q: "Puis-je modifier les CGV ?",
                a: "Non, les CGV s'appliquent telles que définies par Meridian Solar. Toute dérogation doit faire l'objet d'un accord écrit explicite.",
              },
              {
                q: "Quelle est la durée de la garantie produits ?",
                a: "Tous nos produits sont garantis 48 mois à partir de la date de livraison. Consultez le document de garantie pour les conditions détaillées.",
              },
              {
                q: "Comment installer les panneaux ?",
                a: "Notre équipe gère entièrement l'installation. Consultez le guide installation pour comprendre le processus ou contactez-nous pour une étude personnalisée.",
              },
              {
                q: "Puis-je télécharger les fiches techniques des produits ?",
                a: "Oui, toutes les fiches techniques sont disponibles dans cette section. Si vous ne trouvez pas un produit spécifique, contactez-nous.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:border-navy-300 transition-colors"
              >
                <h3 className="font-bold text-gray-900 mb-2">{item.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Besoin d'aide avec la <span className="text-gold-400">documentation</span> ?
          </h2>
          <p className="text-white/70 text-lg mb-8 max-w-lg mx-auto">
            Notre équipe est disponible pour répondre à vos questions et vous aider
            à comprendre nos documents.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary inline-flex">
              Nous contacter
            </Link>
            <a
              href="tel:+212755054395"
              className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white font-semibold px-6 py-3 rounded-xl transition-colors border border-white/30"
            >
              Appeler le support
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
