import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const CONTACT_EMAIL = process.env.CONTACT_EMAIL || "contact@meridiansolar.ma";
const FROM_EMAIL = process.env.FROM_EMAIL || "noreply@meridiansolar.ma";

type DevisBody = {
  type?: string;
  nom?: string;
  prenom?: string;
  email: string;
  telephone?: string;
  ville?: string;
  typeInstallation?: string;
  puissanceSouhaitee?: string;
  typeBatiment?: string;
  factureMensuelle?: string;
  message?: string;
  sujet?: string;
};

function buildDevisHtml(data: DevisBody): string {
  const fullName = [data.prenom, data.nom].filter(Boolean).join(" ") || "Non renseigné";
  return `
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8" />
  <style>
    body { font-family: Arial, sans-serif; background: #f4f4f4; margin: 0; padding: 20px; }
    .container { max-width: 600px; margin: 0 auto; background: white; border-radius: 12px; overflow: hidden; }
    .header { background: linear-gradient(135deg, #065f46, #059669); padding: 32px 24px; text-align: center; }
    .header h1 { color: white; margin: 0; font-size: 22px; }
    .header p { color: #a7f3d0; margin: 8px 0 0; font-size: 14px; }
    .badge { display: inline-block; background: #f59e0b; color: white; padding: 4px 12px; border-radius: 20px; font-size: 12px; font-weight: bold; margin-bottom: 12px; }
    .content { padding: 28px 24px; }
    .section { margin-bottom: 24px; }
    .section-title { font-size: 14px; font-weight: bold; color: #059669; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 12px; padding-bottom: 8px; border-bottom: 2px solid #d1fae5; }
    .row { display: flex; margin-bottom: 8px; }
    .label { width: 200px; font-size: 13px; color: #6b7280; shrink: 0; }
    .value { font-size: 13px; color: #111827; font-weight: 500; }
    .message-box { background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 8px; padding: 12px; font-size: 13px; color: #374151; line-height: 1.6; }
    .footer { background: #f9fafb; padding: 16px 24px; text-align: center; font-size: 12px; color: #9ca3af; border-top: 1px solid #e5e7eb; }
    .highlight { color: #059669; font-weight: bold; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <div class="badge">☀️ NOUVEAU DEVIS</div>
      <h1>Demande de devis solaire</h1>
      <p>Reçue le ${new Date().toLocaleDateString("fr-MA", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}</p>
    </div>

    <div class="content">
      <div class="section">
        <div class="section-title">👤 Informations du client</div>
        <div class="row"><span class="label">Nom complet</span><span class="value highlight">${fullName}</span></div>
        <div class="row"><span class="label">Email</span><span class="value"><a href="mailto:${data.email}">${data.email}</a></span></div>
        <div class="row"><span class="label">Téléphone</span><span class="value">${data.telephone || "—"}</span></div>
        <div class="row"><span class="label">Ville</span><span class="value">${data.ville || "—"}</span></div>
      </div>

      <div class="section">
        <div class="section-title">⚡ Détails du projet</div>
        <div class="row"><span class="label">Type d'installation</span><span class="value">${data.typeInstallation || "—"}</span></div>
        <div class="row"><span class="label">Type de bâtiment</span><span class="value">${data.typeBatiment || "—"}</span></div>
        <div class="row"><span class="label">Puissance souhaitée</span><span class="value">${data.puissanceSouhaitee || "Non précisé"}</span></div>
        <div class="row"><span class="label">Facture mensuelle</span><span class="value">${data.factureMensuelle || "—"}</span></div>
      </div>

      ${
        data.message
          ? `<div class="section">
        <div class="section-title">💬 Message</div>
        <div class="message-box">${data.message.replace(/\n/g, "<br>")}</div>
      </div>`
          : ""
      }
    </div>

    <div class="footer">
      <p>Message reçu via le site <strong>meridiansolar.ma</strong></p>
      <p>Répondez directement à cet email ou appelez le client sur <strong>${data.telephone || "numéro non fourni"}</strong></p>
    </div>
  </div>
</body>
</html>
  `;
}

function buildContactHtml(data: DevisBody): string {
  return `
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8" />
  <style>
    body { font-family: Arial, sans-serif; background: #f4f4f4; margin: 0; padding: 20px; }
    .container { max-width: 600px; margin: 0 auto; background: white; border-radius: 12px; overflow: hidden; }
    .header { background: linear-gradient(135deg, #065f46, #059669); padding: 32px 24px; text-align: center; }
    .header h1 { color: white; margin: 0; font-size: 22px; }
    .header p { color: #a7f3d0; margin: 8px 0 0; font-size: 14px; }
    .badge { display: inline-block; background: #f59e0b; color: white; padding: 4px 12px; border-radius: 20px; font-size: 12px; font-weight: bold; margin-bottom: 12px; }
    .content { padding: 28px 24px; }
    .row { margin-bottom: 10px; }
    .label { font-size: 12px; color: #6b7280; text-transform: uppercase; font-weight: bold; margin-bottom: 3px; }
    .value { font-size: 14px; color: #111827; }
    .message-box { background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 8px; padding: 14px; font-size: 14px; color: #374151; line-height: 1.7; margin-top: 4px; }
    .footer { background: #f9fafb; padding: 16px 24px; text-align: center; font-size: 12px; color: #9ca3af; border-top: 1px solid #e5e7eb; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <div class="badge">📩 CONTACT</div>
      <h1>Nouveau message de contact</h1>
      <p>${new Date().toLocaleDateString("fr-MA", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}</p>
    </div>
    <div class="content">
      <div class="row"><div class="label">Nom</div><div class="value">${data.nom || "—"}</div></div>
      <div class="row"><div class="label">Email</div><div class="value"><a href="mailto:${data.email}">${data.email}</a></div></div>
      <div class="row"><div class="label">Sujet</div><div class="value">${data.sujet || "—"}</div></div>
      <div class="row">
        <div class="label">Message</div>
        <div class="message-box">${(data.message || "").replace(/\n/g, "<br>")}</div>
      </div>
    </div>
    <div class="footer">
      <p>Message reçu via le site <strong>meridiansolar.ma</strong></p>
    </div>
  </div>
</body>
</html>
  `;
}

function buildConfirmationHtml(name: string, isDevis: boolean): string {
  return `
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8" />
  <style>
    body { font-family: Arial, sans-serif; background: #f4f4f4; margin: 0; padding: 20px; }
    .container { max-width: 560px; margin: 0 auto; background: white; border-radius: 16px; overflow: hidden; }
    .header { background: linear-gradient(135deg, #065f46, #059669); padding: 40px 28px; text-align: center; }
    .logo { font-size: 28px; font-weight: bold; color: white; }
    .logo span { color: #f59e0b; }
    .icon { font-size: 48px; margin-bottom: 8px; }
    .content { padding: 32px 28px; }
    h2 { color: #111827; font-size: 20px; margin-bottom: 8px; }
    p { color: #4b5563; font-size: 14px; line-height: 1.7; }
    .highlight { color: #059669; font-weight: bold; }
    .cta { display: inline-block; background: linear-gradient(to right, #059669, #10b981); color: white; padding: 12px 24px; border-radius: 30px; text-decoration: none; font-weight: bold; font-size: 14px; margin-top: 16px; }
    .footer { background: #f9fafb; padding: 16px 28px; text-align: center; font-size: 12px; color: #9ca3af; border-top: 1px solid #f0f0f0; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <div class="logo">Meridian <span>Solar</span></div>
      <p style="color:#a7f3d0; margin:4px 0 0; font-size:13px;">Marrakech • Maroc</p>
    </div>
    <div class="content">
      <div class="icon">✅</div>
      <h2>Bonjour ${name},</h2>
      <p>Nous avons bien reçu votre ${isDevis ? "demande de devis" : "message"} et nous vous remercions de votre intérêt.</p>
      ${
        isDevis
          ? `<p>Notre équipe d'experts va analyser votre projet et vous contactera dans les <span class="highlight">24 heures</span> avec une étude personnalisée et un devis détaillé — le tout <strong>gratuitement</strong>.</p>`
          : `<p>Nous ferons tout notre possible pour vous répondre dans les meilleurs délais, généralement sous <span class="highlight">24 heures ouvrées</span>.</p>`
      }
      <p>Si vous avez une urgence, vous pouvez nous joindre directement au :</p>
      <p><strong>📞 +212 755 054 395</strong> (Lun–Sam, 9h–18h)</p>
      <a href="https://meridiansolar.ma" class="cta">☀️ Visiter notre site</a>
    </div>
    <div class="footer">
      <p>© ${new Date().getFullYear()} Meridian Solar — Bd Moulay Rachid, Business Center Guéliz, Et. 1 Bureau 8, Marrakech 40000</p>
      <p>Vous recevez cet email car vous avez contacté Meridian Solar via notre site web.</p>
    </div>
  </div>
</body>
</html>
  `;
}

export async function POST(req: Request) {
  try {
    const body: DevisBody = await req.json();

    if (!body.email) {
      return NextResponse.json({ error: "Email requis" }, { status: 400 });
    }

    const isContact = body.type === "contact";
    const customerName = isContact
      ? (body.nom || "Client")
      : ([body.prenom, body.nom].filter(Boolean).join(" ") || "Client");

    // Send notification to team
    const teamSubject = isContact
      ? `📩 Nouveau message de contact – ${customerName}`
      : `☀️ Nouvelle demande de devis – ${customerName} (${body.ville || "?"})`;

    const teamHtml = isContact
      ? buildContactHtml(body)
      : buildDevisHtml(body);

    await resend.emails.send({
      from: `Meridian Solar <${FROM_EMAIL}>`,
      to: [CONTACT_EMAIL],
      reply_to: body.email,
      subject: teamSubject,
      html: teamHtml,
    });

    // Send confirmation to customer
    await resend.emails.send({
      from: `Meridian Solar <${FROM_EMAIL}>`,
      to: [body.email],
      subject: isContact
        ? "✅ Message reçu – Meridian Solar"
        : "✅ Votre demande de devis a bien été reçue – Meridian Solar",
      html: buildConfirmationHtml(customerName, !isContact),
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Email send error:", err);
    return NextResponse.json(
      { error: "Erreur lors de l'envoi du message" },
      { status: 500 }
    );
  }
}
