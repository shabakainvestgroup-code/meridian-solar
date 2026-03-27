import { NextResponse } from "next/server";
import PDFDocument from "pdfkit";

export async function GET() {
  try {
    return new Promise((resolve) => {
      const doc = new PDFDocument({
        size: "A4",
        margin: 40,
        bufferPages: true,
      });

      const chunks: Buffer[] = [];

      doc.on("data", (chunk: Buffer) => {
        chunks.push(chunk);
      });

      doc.on("error", (error: Error) => {
        console.error("PDF Error:", error);
        resolve(
          NextResponse.json(
            { error: "Erreur lors de la génération du PDF" },
            { status: 500 }
          )
        );
      });

      doc.on("end", () => {
        const pdfBuffer = Buffer.concat(chunks);

        resolve(
          new NextResponse(pdfBuffer, {
            headers: {
              "Content-Disposition":
                'attachment; filename="Meridian_Solar_CGV.pdf"',
              "Content-Type": "application/pdf",
              "Content-Length": pdfBuffer.length.toString(),
            },
          })
        );
      });

      // Header
      doc.fontSize(18).font("Helvetica-Bold").text("CONDITIONS GÉNÉRALES", {
        align: "center",
      });
      doc.fontSize(14).font("Helvetica-Bold").text("DE VENTE ET DE SERVICES", {
        align: "center",
        marginBottom: 5,
      });
      doc.fontSize(13).font("Helvetica-Bold").text("MERIDIAN SOLAR SARL", {
        align: "center",
        marginBottom: 20,
      });

      doc.fontSize(9).font("Helvetica").text(
        `Dernière mise à jour: ${new Date().toLocaleDateString("fr-FR")}`,
        { align: "center", marginBottom: 25 }
      );

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
        doc
          .fontSize(11)
          .font("Helvetica-Bold")
          .text(section.title, { marginBottom: 6 });
        doc
          .fontSize(9)
          .font("Helvetica")
          .text(section.content, { align: "left", marginBottom: 12 });
      });

      // Footer
      doc.fontSize(8).font("Helvetica").moveDown(2);
      doc
        .fontSize(8)
        .font("Helvetica-Bold")
        .text("Pour toute question concernant ces conditions générales:", {
          marginBottom: 3,
        });
      doc.fontSize(8).text("Email: contact@meridiansolar.ma");
      doc.fontSize(8).text("Téléphone: +212 755 054 395");
      doc
        .fontSize(8)
        .text(
          "Adresse: Bd Moulay Rachid, Business Center Guéliz, Étage 1, Bureau 8, Marrakech 40000, Maroc"
        );

      doc.end();
    });
  } catch (error) {
    console.error("Erreur génération PDF:", error);
    return NextResponse.json(
      { error: "Erreur lors de la génération du PDF" },
      { status: 500 }
    );
  }
}
