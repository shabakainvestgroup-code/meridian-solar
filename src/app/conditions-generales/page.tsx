import { CheckCircle, FileText, AlertCircle } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conditions Générales – Meridian Solar",
  description:
    "Conditions générales de vente et de services de Meridian Solar. Lisez nos CGV avant de passer commande.",
};

export default function ConditionsGeneralesPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-gradient pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 solar-pattern" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-navy-800/50 border border-navy-600/30 text-white/90 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <FileText className="w-4 h-4 text-gold-400" />
            Documents légaux
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Conditions Générales de{" "}
            <span className="text-gold-400">Vente et Services</span>
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Meridian Solar SARL — Applicables à toute commande et demande de
            produits ou services.
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
            <AlertCircle className="w-6 h-6 text-navy-600 shrink-0 mt-0.5" />
            <div>
              <h3 className="font-bold text-gray-900 mb-1">À lire attentivement</h3>
              <p className="text-gray-600 text-sm">
                Toute commande de produits ou services auprès de Meridian Solar
                emporte acceptation expresse de ces conditions générales.
              </p>
            </div>
          </div>

          {/* Sections */}
          <div className="space-y-10">
            {/* Section 1 */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                1. Champ d'application
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Les présentes Conditions Générales de Vente et de Services sont
                applicables à toute commande et demande de Produits ou Services
                effectuée par le Client auprès de MERIDIAN SOLAR SARL, à toute
                proposition commerciale établie par MERIDIAN SOLAR SARL et à toute
                commande du Client. Toute commande de Produits et Services adressée
                à MERIDIAN SOLAR SARL emporte l'acceptation expresse et sans réserve
                par le Client des présentes Conditions Générales de Vente et de
                Services et renonciation de sa part à l'application de ses propres
                conditions générales d'achat, d'intervention ou de sous-traitance.
              </p>
            </div>

            {/* Section 2 */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                2. Définitions
              </h2>
              <div className="space-y-3 text-gray-600">
                <p>
                  <strong>MERIDIAN SOLAR</strong> ou <strong>Vendeur</strong> :
                  MERIDIAN SOLAR SARL, société anonyme au capital social de 100.000
                  Dirhams, dont le siège social est situé à Marrakech, enregistrée
                  au Registre du Commerce.
                </p>
                <p>
                  <strong>Client</strong> ou <strong>Acheteur</strong> : toute
                  personne morale de droit public ou de droit privé ayant conclu un
                  contrat avec MERIDIAN SOLAR pour l'achat de Produits et la
                  réalisation des Services.
                </p>
              </div>
            </div>

            {/* Section 3 */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                3. Commandes, modification ou annulation
              </h2>
              <div className="space-y-3 text-gray-600">
                <p>
                  Les commandes de produits ou de services ne deviennent définitives
                  qu'après acceptation d'une bonne commande par MERIDIAN SOLAR SARL.
                </p>
                <p>
                  Toute modification de commande ne devient définitive qu'après
                  acceptation et confirmation écrites par MERIDIAN SOLAR SARL et sous
                  réserve d'un accord sur les éventuels impacts sur les prix et
                  délais.
                </p>
                <p>
                  L'annulation partielle ou totale d'une commande n'est pas autorisée.
                  En cas d'annulation par le client, MERIDIAN SOLAR SARL conservera
                  ou pourra exiger l'intégralité des montants facturés ou restant à
                  facturer.
                </p>
              </div>
            </div>

            {/* Section 4 */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Transport</h2>
              <p className="text-gray-600 leading-relaxed">
                Le transport des fournitures peut être assuré au mieux par le vendeur
                mais toujours pour le compte, aux frais et risques du client.
              </p>
            </div>

            {/* Section 5 */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                5. Marchandises
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Toute marchandise du catalogue est vendue en emballage complet sauf
                spécification contraire. Notre responsabilité est limitée au bon
                fonctionnement de nos articles et de nos installations. Les
                explications sur catalogue sont à titre indicatif.
              </p>
            </div>

            {/* Section 6 */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Retour</h2>
              <div className="space-y-3 text-gray-600">
                <p>
                  Aucun retour n'est accepté, sauf cas d'une erreur de commande
                  signalée dans les huit jours suivant la réception.
                </p>
                <p>
                  Le retour doit satisfaire les conditions suivantes :
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Délai n'excédant pas 1 mois après la date de livraison</li>
                  <li>Emballage d'origine et en bon état permettant la revente</li>
                  <li>Produit en quantité d'emballage standard</li>
                  <li>Produit standard géré en stock chez MERIDIAN SOLAR</li>
                </ul>
                <p className="mt-3">
                  Les ports aller et retour et une participation aux frais de 20%
                  minimum seront déduits des marchandises.
                </p>
              </div>
            </div>

            {/* Section 8 */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Paiement</h2>
              <div className="space-y-4 text-gray-600">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    8.1 Sécurité des coordonnées bancaires
                  </h4>
                  <p>
                    En cas de changement exceptionnel de coordonnées bancaires, une
                    lettre recommandée sera adressée au client. Il appartiendra au
                    client de vérifier les coordonnées avant paiement.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    8.2 Termes de paiement
                  </h4>
                  <p>
                    En l'absence de convention contraire, le départ des marchandises
                    est subordonné à leur paiement préalable. Des délais peuvent être
                    accordés, sans excéder 90 jours fin de mois.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    8.3 Retard de paiement
                  </h4>
                  <p>
                    Les réclamations concernant les produits ne dispensent pas le
                    client de régler les factures à leur échéance. MERIDIAN SOLAR se
                    réserve le droit de demander toute garantie de paiement
                    supplémentaire ou de refuser toute commande en cas de retard.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    8.4 Pénalités de retard
                  </h4>
                  <p>
                    En cas de non-respect des délais de paiement convenus, des
                    pénalités de retard seront appliquées au taux de 3 fois le taux
                    d'intérêt légal en vigueur.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 9 */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                9. Réserve de propriété
              </h2>
              <p className="text-gray-600 leading-relaxed">
                MERIDIAN SOLAR se réserve l'entière propriété des marchandises
                vendues jusqu'à complet paiement du prix et de ses accessoires. La
                charge des risques sera transférée à l'acheteur dès signature du bon
                de livraison. L'acheteur devra prendre les assurances nécessaires et
                permettre l'identification du matériel concerné.
              </p>
            </div>

            {/* Section 10 */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Offre</h2>
              <p className="text-gray-600 leading-relaxed">
                Nos offres s'entendent à des prix départ distributeur, port en sus.
                Ils sont calculés sur les bases des cours officiels des devises, taux
                de fret, droits de douane et taxes en vigueur le jour de la remise de
                l'offre. Ils sont révisables sans préavis à la hausse ou à la baisse.
              </p>
            </div>

            {/* Section 13 */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Prix</h2>
              <p className="text-gray-600 leading-relaxed">
                Les prix de vente sont ceux du tarif en vigueur à la date de
                livraison. Ils s'entendent port dû, emballage standard. Les prix
                s'entendent en Dirhams et H.T.
              </p>
            </div>

            {/* Section 17 */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">17. Délais</h2>
              <p className="text-gray-600 leading-relaxed mb-3">
                Nos délais de livraison sont fournis à titre indicatif ; leur
                inobservation ne peut donner lieu ni à pénalités ni à des dommages et
                intérêts. MERIDIAN SOLAR est dégagée de tout engagement relatif aux
                délais de livraison en cas de :
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li>Non-paiement des commandes en cours</li>
                <li>Demandes de renseignements non fournies par le Client</li>
                <li>
                  Force majeure (grèves, incendies, tempêtes, inondations,
                  épidémies, etc.)
                </li>
              </ul>
            </div>

            {/* Section 21 */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                21. Garantie Produits Livrés
              </h2>
              <div className="space-y-3 text-gray-600">
                <p>
                  Le Vendeur garantit à l'Acheteur que les Produits fournis seront
                  livrés sans défaut de matière, de conception ou de fabrication pour
                  une durée de <strong>48 mois</strong> à compter de la date de
                  livraison.
                </p>
                <p>
                  Si un défaut est constaté durant cette période, le Vendeur corrigera
                  le défaut soit en réparant, soit en livrant une pièce réparée ou
                  remplacée.
                </p>
                <p className="font-semibold text-gray-900">
                  La garantie ne s'applique pas à :
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Les éléments consommables ou non réutilisables</li>
                  <li>Les défauts provenant d'une utilisation non conforme</li>
                  <li>Les combinaisons avec des produits tiers</li>
                  <li>Les modifications réalisées par des tiers</li>
                  <li>L'usure normale</li>
                </ul>
              </div>
            </div>

            {/* Section 20 */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                20. Force majeure
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Les cas de force majeure et événements imprévisibles (tremblements de
                terre, guerres, grèves, épidémies, pandémies, pénuries, interruption
                des transports, incendies, inondations, etc.) entraînent la suspension
                des obligations de la partie qui subit l'événement.
              </p>
            </div>

            {/* Section 14 */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                14. Contestations et loi applicable
              </h2>
              <p className="text-gray-600 leading-relaxed">
                En cas de contestations relatives à l'interprétation ou l'exécution
                du contrat, les tribunaux de Marrakech sont compétents. Les présentes
                conditions générales sont régies par la loi marocaine.
              </p>
            </div>
          </div>

          {/* Divider */}
          <hr className="my-12 border-gray-200" />

          {/* CTA */}
          <div className="bg-navy-900 rounded-3xl p-8 text-center">
            <CheckCircle className="w-12 h-12 text-gold-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-3">
              Vous avez des questions ?
            </h3>
            <p className="text-white/70 mb-6 max-w-md mx-auto">
              Notre équipe est disponible pour clarifier toute question sur nos
              conditions générales.
            </p>
            <a
              href="tel:+212755054395"
              className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
            >
              Nous contacter
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
