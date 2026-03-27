"use client";

import { Download } from "lucide-react";
import { jsPDF } from "jspdf";

export default function DownloadCGVButton() {
  const handleDownload = () => {
    const doc = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4",
    });

    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    const margin = 15;
    const lineHeight = 5;
    let yPosition = margin;

    // Styles
    const titleFontSize = 16;
    const subtitleFontSize = 14;
    const headingFontSize = 12;
    const bodyFontSize = 9;
    const maxLineWidth = pageWidth - 2 * margin;

    // Helper function to add text with wrapping
    const addWrappedText = (
      text: string,
      fontSize: number,
      isBold: boolean = false
    ) => {
      doc.setFontSize(fontSize);
      doc.setFont("helvetica", isBold ? "bold" : "normal");

      const lines = doc.splitTextToSize(text, maxLineWidth);
      lines.forEach((line) => {
        if (yPosition + lineHeight > pageHeight - margin) {
          doc.addPage();
          yPosition = margin;
        }
        doc.text(line, margin, yPosition);
        yPosition += lineHeight;
      });
    };

    // Title
    addWrappedText("CONDITIONS GÉNÉRALES", titleFontSize, true);
    addWrappedText("DE VENTE ET DE SERVICES", subtitleFontSize, true);
    addWrappedText("MERIDIAN SOLAR SARL", subtitleFontSize, true);

    yPosition += 5;
    addWrappedText(
      `Dernière mise à jour: ${new Date().toLocaleDateString("fr-FR")}`,
      bodyFontSize
    );

    yPosition += 8;

    // Sections
    const sections = [
      {
        title: "1. CHAMP D'APPLICATION",
        content:
          "Les présentes Conditions Générales de Vente et de Services sont applicables à toute commande et demande de Produits ou Services effectuée par le Client auprès de MERIDIAN SOLAR SARL.",
      },
      {
        title: "2. DÉFINITIONS",
        content:
          "MERIDIAN SOLAR ou Vendeur: MERIDIAN SOLAR SARL, société au capital social de 100.000 Dirhams, dont le siège social est situé à Marrakech, Maroc.\n\nClient ou Acheteur: toute personne morale de droit public ou de droit privé ayant conclu un contrat avec MERIDIAN SOLAR.",
      },
      {
        title: "3. COMMANDES, MODIFICATION OU ANNULATION",
        content:
          "Les commandes de produits ou de services ne deviennent définitives qu'après acceptation par MERIDIAN SOLAR SARL. Toute modification ne devient définitive qu'après acceptation et confirmation écrites. L'annulation partielle ou totale d'une commande n'est pas autorisée.",
      },
      {
        title: "4. TRANSPORT",
        content:
          "Le transport des fournitures est assuré pour le compte, aux frais et risques du client.",
      },
      {
        title: "5. MARCHANDISES",
        content:
          "Toute marchandise du catalogue est vendue en emballage complet sauf spécification contraire. Notre responsabilité est limitée au bon fonctionnement de nos articles et installations.",
      },
      {
        title: "6. RETOUR",
        content:
          "Aucun retour n'est accepté, sauf erreur de commande signalée dans les 8 jours suivant la réception. Le retour doit satisfaire: délai d'1 mois max, emballage d'origine en bon état, produit en quantité standard, produit standard géré en stock.",
      },
      {
        title: "8. PAIEMENT",
        content:
          "8.1 En cas de changement de coordonnées bancaires, une lettre recommandée sera adressée.\n\n8.2 Le départ des marchandises est subordonné au paiement préalable. Des délais peuvent être accordés, sans excéder 90 jours fin de mois.\n\n8.3 Les réclamations ne dispensent pas de régler les factures.\n\n8.4 En cas de retard, des pénalités seront appliquées au taux de 3 fois le taux légal.",
      },
      {
        title: "9. RÉSERVE DE PROPRIÉTÉ",
        content:
          "MERIDIAN SOLAR se réserve l'entière propriété des marchandises vendues jusqu'à complet paiement du prix et de ses accessoires.",
      },
      {
        title: "21. GARANTIE PRODUITS LIVRÉS",
        content:
          "Les Produits sont garantis 48 mois à partir de la date de livraison contre tout défaut de matière, conception ou fabrication. La garantie ne s'applique pas aux éléments consommables, défauts d'utilisation non conforme, modifications par tiers, ou usure normale.",
      },
    ];

    sections.forEach((section) => {
      // Section title
      yPosition += 2;
      addWrappedText(section.title, headingFontSize, true);
      yPosition += 3;

      // Section content
      addWrappedText(section.content, bodyFontSize);
      yPosition += 3;
    });

    // Footer
    yPosition += 5;
    addWrappedText("Pour toute question concernant ces conditions générales:", bodyFontSize, true);
    addWrappedText("Email: contact@meridiansolar.ma", bodyFontSize);
    addWrappedText("Téléphone: +212 755 054 395", bodyFontSize);
    addWrappedText(
      "Adresse: Bd Moulay Rachid, Business Center Guéliz, Étage 1, Bureau 8, Marrakech 40000, Maroc",
      bodyFontSize
    );

    // Save the PDF
    doc.save("Meridian_Solar_CGV.pdf");
  };

  return (
    <button
      onClick={handleDownload}
      className="inline-flex items-center gap-2 bg-navy-600 hover:bg-navy-700 text-white font-medium text-sm px-4 py-2 rounded-lg transition-colors"
    >
      <Download className="w-4 h-4" />
      Télécharger
    </button>
  );
}
