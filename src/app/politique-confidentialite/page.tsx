import { Shield } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de Confidentialité – Meridian Solar",
  description:
    "Politique de confidentialité et protection des données personnelles de Meridian Solar.",
};

export default function PolitiqueConfidentialitePage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-gradient pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 solar-pattern" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-navy-800/50 border border-navy-600/30 text-white/90 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Shield className="w-4 h-4 text-gold-400" />
            Votre confidentialité
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Politique de <span className="text-gold-400">Confidentialité</span>
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Protection de vos données personnelles — Meridian Solar s'engage à
            respecter votre vie privée.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 60L1440 0V60H0Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Info banner */}
          <div className="flex items-start gap-4 bg-navy-50 border border-navy-200 rounded-2xl p-6 mb-12">
            <Shield className="w-6 h-6 text-navy-600 shrink-0 mt-0.5" />
            <div>
              <h3 className="font-bold text-gray-900 mb-1">
                Vos données sont précieuses
              </h3>
              <p className="text-gray-600 text-sm">
                Meridian Solar respecte la confidentialité de vos données
                personnelles conformément à la législation marocaine applicable.
              </p>
            </div>
          </div>

          {/* Sections */}
          <div className="space-y-10">
            {/* Section 1 */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                1. Responsable de traitement
              </h2>
              <p className="text-gray-600 leading-relaxed">
                <strong>MERIDIAN SOLAR SARL</strong> est responsable du traitement
                de vos données personnelles. Pour toute question concernant vos
                données, vous pouvez nous contacter à :{" "}
                <strong>contact@meridiansolar.ma</strong> ou par téléphone au{" "}
                <strong>+212 755 054 395</strong>.
              </p>
            </div>

            {/* Section 2 */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                2. Données collectées
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Nous collectons les données suivantes lorsque vous :
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="text-navy-600 font-bold mt-1">•</span>
                  <span>
                    Remplissez un formulaire de contact ou de devis : nom, prénom,
                    email, téléphone, ville, détails du projet
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-navy-600 font-bold mt-1">•</span>
                  <span>
                    Nous contactez par email : votre adresse email et le contenu de
                    vos messages
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-navy-600 font-bold mt-1">•</span>
                  <span>
                    Accédez à notre site : données techniques (adresse IP, type de
                    navigateur, pages visitées)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-navy-600 font-bold mt-1">•</span>
                  <span>
                    Passez une commande : informations de facturation et de livraison
                  </span>
                </li>
              </ul>
            </div>

            {/* Section 3 */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                3. Finalité du traitement
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Vos données sont utilisées pour :
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="text-navy-600 font-bold mt-1">•</span>
                  <span>Répondre à vos demandes de devis et d'informations</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-navy-600 font-bold mt-1">•</span>
                  <span>
                    Vous contacter concernant votre demande ou commande
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-navy-600 font-bold mt-1">•</span>
                  <span>
                    Exécuter et gérer votre contrat de service ou de fourniture
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-navy-600 font-bold mt-1">•</span>
                  <span>
                    Améliorer nos services et votre expérience utilisateur
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-navy-600 font-bold mt-1">•</span>
                  <span>
                    Respecter nos obligations légales et réglementaires
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-navy-600 font-bold mt-1">•</span>
                  <span>
                    Prévenir et détecter les fraudes ou abus
                  </span>
                </li>
              </ul>
            </div>

            {/* Section 4 */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                4. Base légale du traitement
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Nous traitons vos données sur la base :
              </p>
              <ul className="space-y-3 text-gray-600 mt-3">
                <li className="flex items-start gap-3">
                  <span className="text-navy-600 font-bold mt-1">•</span>
                  <span>
                    De votre consentement explicit (formulaires de contact/devis)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-navy-600 font-bold mt-1">•</span>
                  <span>
                    De l'exécution d'un contrat avec vous
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-navy-600 font-bold mt-1">•</span>
                  <span>
                    De nos obligations légales marocaines
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-navy-600 font-bold mt-1">•</span>
                  <span>
                    De nos intérêts légitimes (sécurité, fraude, améliorations)
                  </span>
                </li>
              </ul>
            </div>

            {/* Section 5 */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                5. Partage de vos données
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Vos données personnelles ne sont pas vendues à des tiers. Nous les
                partageons uniquement avec :
              </p>
              <ul className="space-y-3 text-gray-600 mt-3">
                <li className="flex items-start gap-3">
                  <span className="text-navy-600 font-bold mt-1">•</span>
                  <span>
                    Nos prestataires techniques (hébergement, email) sous contrat de
                    confidentialité
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-navy-600 font-bold mt-1">•</span>
                  <span>
                    Les autorités légales, si obligation légale ou ordre judiciaire
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-navy-600 font-bold mt-1">•</span>
                  <span>
                    Nos partenaires commerciaux (avec votre consentement explicite)
                  </span>
                </li>
              </ul>
            </div>

            {/* Section 6 */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                6. Durée de conservation
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Vos données sont conservées pour :
              </p>
              <ul className="space-y-3 text-gray-600 mt-3">
                <li className="flex items-start gap-3">
                  <span className="text-navy-600 font-bold mt-1">•</span>
                  <span>
                    <strong>Demandes de devis :</strong> 2 ans après la demande
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-navy-600 font-bold mt-1">•</span>
                  <span>
                    <strong>Commandes/contrats :</strong> durée du contrat + 5 ans
                    (prescriptions légales)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-navy-600 font-bold mt-1">•</span>
                  <span>
                    <strong>Données techniques (logs) :</strong> maximum 13 mois
                  </span>
                </li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-4">
                Après cette période, vos données sont supprimées ou anonymisées.
              </p>
            </div>

            {/* Section 7 */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                7. Vos droits
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Vous avez les droits suivants sur vos données personnelles :
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="text-navy-600 font-bold mt-1">•</span>
                  <span>
                    <strong>Droit d'accès :</strong> demander une copie de vos
                    données
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-navy-600 font-bold mt-1">•</span>
                  <span>
                    <strong>Droit de rectification :</strong> corriger vos données
                    incorrectes
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-navy-600 font-bold mt-1">•</span>
                  <span>
                    <strong>Droit à l'effacement :</strong> demander la suppression
                    de vos données
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-navy-600 font-bold mt-1">•</span>
                  <span>
                    <strong>Droit de limitation :</strong> limiter le traitement de
                    vos données
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-navy-600 font-bold mt-1">•</span>
                  <span>
                    <strong>Droit à la portabilité :</strong> récupérer vos données
                    dans un format standard
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-navy-600 font-bold mt-1">•</span>
                  <span>
                    <strong>Droit d'opposition :</strong> vous opposer au traitement
                  </span>
                </li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-4">
                Pour exercer ces droits, contactez-nous à{" "}
                <strong>contact@meridiansolar.ma</strong>.
              </p>
            </div>

            {/* Section 8 */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                8. Sécurité des données
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Meridian Solar met en place des mesures de sécurité appropriées pour
                protéger vos données :
              </p>
              <ul className="space-y-3 text-gray-600 mt-3">
                <li className="flex items-start gap-3">
                  <span className="text-navy-600 font-bold mt-1">•</span>
                  <span>Chiffrement SSL/TLS pour les transmissions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-navy-600 font-bold mt-1">•</span>
                  <span>Accès contrôlé aux données (authentification)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-navy-600 font-bold mt-1">•</span>
                  <span>Serveurs sécurisés et sauvegardés régulièrement</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-navy-600 font-bold mt-1">•</span>
                  <span>
                    Conformité aux standards de sécurité informatique
                  </span>
                </li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-4">
                Bien que nous nous efforcions de protéger vos données, aucune
                transmission sur Internet n'est entièrement sécurisée.
              </p>
            </div>

            {/* Section 9 */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                9. Cookies et technologies similaires
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Notre site utilise des cookies pour :
              </p>
              <ul className="space-y-3 text-gray-600 mt-3">
                <li className="flex items-start gap-3">
                  <span className="text-navy-600 font-bold mt-1">•</span>
                  <span>
                    <strong>Cookies essentiels :</strong> fonctionnement du site
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-navy-600 font-bold mt-1">•</span>
                  <span>
                    <strong>Cookies analytiques :</strong> comprendre comment vous
                    utilisez le site (Google Analytics)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-navy-600 font-bold mt-1">•</span>
                  <span>
                    <strong>Cookies de préférences :</strong> mémoriser vos
                    préférences
                  </span>
                </li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-4">
                Vous pouvez désactiver les cookies via les paramètres de votre
                navigateur, mais certains cookies essentiels sont nécessaires au
                fonctionnement.
              </p>
            </div>

            {/* Section 10 */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                10. Modifications de cette politique
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Meridian Solar peut modifier cette politique de confidentialité à
                tout moment. Les modifications seront publiées sur cette page avec une
                date de mise à jour. Votre utilisation continue du site après les
                modifications constitue votre acceptation des nouvelles conditions.
              </p>
            </div>

            {/* Section 11 */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                11. Nous contacter
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Pour toute question sur cette politique de confidentialité ou vos
                données personnelles, veuillez nous contacter :
              </p>
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <div className="space-y-3 text-gray-600">
                  <p>
                    <strong>Email :</strong>{" "}
                    <a
                      href="mailto:contact@meridiansolar.ma"
                      className="text-navy-600 hover:text-navy-700"
                    >
                      contact@meridiansolar.ma
                    </a>
                  </p>
                  <p>
                    <strong>Téléphone :</strong>{" "}
                    <a
                      href="tel:+212755054395"
                      className="text-navy-600 hover:text-navy-700"
                    >
                      +212 755 054 395
                    </a>
                  </p>
                  <p>
                    <strong>Adresse :</strong> Bd Moulay Rachid, Business Center
                    Guéliz, Étage 1, Bureau 8, Marrakech 40000, Maroc
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <hr className="my-12 border-gray-200" />

          {/* Last updated */}
          <p className="text-center text-gray-500 text-sm">
            <strong>Dernière mise à jour :</strong> 26 Mars 2026
          </p>
        </div>
      </section>
    </>
  );
}
