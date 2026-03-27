"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Send,
  CheckCircle,
  AlertCircle,
  Loader2,
  User,
  Phone,
  Mail,
  MapPin,
  Home,
  Zap,
  MessageSquare,
} from "lucide-react";

type FormData = {
  nom: string;
  prenom: string;
  email: string;
  telephone: string;
  ville: string;
  typeInstallation: string;
  puissanceSouhaitee: string;
  typeBatiment: string;
  factureMensuelle: string;
  message: string;
};

const inputClass =
  "w-full px-4 py-3 border border-gray-200 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-navy-500 focus:border-transparent transition-all bg-white";
const labelClass = "block text-sm font-medium text-gray-700 mb-1.5";
const selectClass =
  "w-full px-4 py-3 border border-gray-200 rounded-xl text-gray-800 focus:outline-none focus:ring-2 focus:ring-navy-500 focus:border-transparent transition-all bg-white appearance-none";

export default function DevisForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    setStatus("loading");
    setErrorMsg("");

    try {
      // Construire le message formaté pour WhatsApp
      const message = `*Demande de Devis - Meridian Solar*

*📋 Coordonnées:*
Prénom: ${data.prenom}
Nom: ${data.nom}
Email: ${data.email}
Téléphone: ${data.telephone}
Ville: ${data.ville}

*🔌 Projet Solaire:*
Type d'installation: ${data.typeInstallation || "Non spécifié"}
Type de bâtiment: ${data.typeBatiment || "Non spécifié"}
Puissance souhaitée: ${data.puissanceSouhaitee || "À déterminer"}
Facture mensuelle: ${data.factureMensuelle || "Non spécifiée"}

${data.message ? `*💬 Précisions:*\n${data.message}` : ""}`;

      // Encoder le message et créer le lien WhatsApp
      const whatsappUrl = `https://wa.me/212755054395?text=${encodeURIComponent(message)}`;

      // Ouvrir WhatsApp dans un nouvel onglet
      window.open(whatsappUrl, "_blank");

      setStatus("success");
      reset();
    } catch (err: unknown) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error
          ? err.message
          : "Une erreur est survenue. Veuillez réessayer."
      );
    }
  };

  if (status === "success") {
    return (
      <div className="text-center py-16 px-8">
        <div className="w-20 h-20 bg-navy-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-navy-600" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-3">
          Demande envoyée avec succès !
        </h3>
        <p className="text-gray-500 mb-8 max-w-md mx-auto">
          Merci pour votre demande. Notre équipe vous contactera dans les{" "}
          <strong className="text-navy-600">24 heures</strong> avec une
          étude personnalisée et un devis gratuit.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="btn-primary inline-flex"
        >
          Soumettre une autre demande
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Error banner */}
      {status === "error" && (
        <div className="flex items-start gap-3 bg-red-50 border border-red-200 rounded-xl p-4">
          <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
          <p className="text-red-700 text-sm">{errorMsg}</p>
        </div>
      )}

      {/* Section: Coordonnées */}
      <div>
        <h3 className="flex items-center gap-2 text-base font-semibold text-gray-900 mb-4">
          <User className="w-5 h-5 text-navy-600" />
          Vos coordonnées
        </h3>
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className={labelClass}>Prénom *</label>
            <input
              {...register("prenom", { required: "Prénom requis" })}
              placeholder="Mohammed"
              className={inputClass}
            />
            {errors.prenom && (
              <p className="text-red-500 text-xs mt-1">{errors.prenom.message}</p>
            )}
          </div>
          <div>
            <label className={labelClass}>Nom *</label>
            <input
              {...register("nom", { required: "Nom requis" })}
              placeholder="Alami"
              className={inputClass}
            />
            {errors.nom && (
              <p className="text-red-500 text-xs mt-1">{errors.nom.message}</p>
            )}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 mt-4">
          <div>
            <label className={labelClass}>
              <span className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5" /> Email *
              </span>
            </label>
            <input
              {...register("email", {
                required: "Email requis",
                pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Email invalide" },
              })}
              type="email"
              placeholder="mohammed@exemple.ma"
              className={inputClass}
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
            )}
          </div>
          <div>
            <label className={labelClass}>
              <span className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5" /> Téléphone *
              </span>
            </label>
            <input
              {...register("telephone", {
                required: "Téléphone requis",
                pattern: {
                  value: /^(\+212|0)[0-9]{9}$/,
                  message: "Numéro invalide (ex: 0612345678)",
                },
              })}
              type="tel"
              placeholder="0612345678"
              className={inputClass}
            />
            {errors.telephone && (
              <p className="text-red-500 text-xs mt-1">{errors.telephone.message}</p>
            )}
          </div>
        </div>

        <div className="mt-4">
          <label className={labelClass}>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5" /> Ville *
            </span>
          </label>
          <input
            {...register("ville", { required: "Ville requise" })}
            placeholder="Marrakech"
            className={inputClass}
          />
          {errors.ville && (
            <p className="text-red-500 text-xs mt-1">{errors.ville.message}</p>
          )}
        </div>
      </div>

      {/* Divider */}
      <hr className="border-gray-100" />

      {/* Section: Projet */}
      <div>
        <h3 className="flex items-center gap-2 text-base font-semibold text-gray-900 mb-4">
          <Zap className="w-5 h-5 text-navy-600" />
          Votre projet solaire
        </h3>

        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className={labelClass}>Type d&apos;installation *</label>
            <div className="relative">
              <select
                {...register("typeInstallation", { required: "Requis" })}
                className={selectClass}
              >
                <option value="">Sélectionner...</option>
                <option value="residentiel">Résidentiel (villa, maison)</option>
                <option value="appartement">Appartement</option>
                <option value="commercial">Commercial (bureau, magasin)</option>
                <option value="hotel">Hôtel / Riad</option>
                <option value="industriel">Industriel</option>
                <option value="agricole">Agricole / Pompage</option>
                <option value="autre">Autre</option>
              </select>
            </div>
            {errors.typeInstallation && (
              <p className="text-red-500 text-xs mt-1">{errors.typeInstallation.message}</p>
            )}
          </div>

          <div>
            <label className={labelClass}>
              <span className="flex items-center gap-1.5">
                <Home className="w-3.5 h-3.5" /> Type de bâtiment
              </span>
            </label>
            <div className="relative">
              <select {...register("typeBatiment")} className={selectClass}>
                <option value="">Sélectionner...</option>
                <option value="villa">Villa</option>
                <option value="maison">Maison traditionnelle</option>
                <option value="immeuble">Immeuble</option>
                <option value="entrepot">Entrepôt</option>
                <option value="hangar">Hangar</option>
                <option value="terrain">Terrain (au sol)</option>
              </select>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 mt-4">
          <div>
            <label className={labelClass}>Puissance souhaitée</label>
            <div className="relative">
              <select {...register("puissanceSouhaitee")} className={selectClass}>
                <option value="">Je ne sais pas</option>
                <option value="3-5">3 à 5 kWc (petit résidentiel)</option>
                <option value="5-10">5 à 10 kWc (grande villa)</option>
                <option value="10-30">10 à 30 kWc (commercial)</option>
                <option value="30-100">30 à 100 kWc (industriel)</option>
                <option value="100+">Plus de 100 kWc</option>
              </select>
            </div>
          </div>

          <div>
            <label className={labelClass}>Facture électrique mensuelle</label>
            <div className="relative">
              <select {...register("factureMensuelle")} className={selectClass}>
                <option value="">Sélectionner...</option>
                <option value="moins200">Moins de 200 DH</option>
                <option value="200-500">200 à 500 DH</option>
                <option value="500-1000">500 à 1 000 DH</option>
                <option value="1000-3000">1 000 à 3 000 DH</option>
                <option value="3000+">Plus de 3 000 DH</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-gray-100" />

      {/* Message */}
      <div>
        <label className={labelClass}>
          <span className="flex items-center gap-1.5">
            <MessageSquare className="w-3.5 h-3.5" /> Message ou précisions
          </span>
        </label>
        <textarea
          {...register("message")}
          rows={4}
          placeholder="Décrivez votre projet, posez vos questions ou précisez vos besoins spécifiques..."
          className={`${inputClass} resize-none`}
        />
      </div>

      {/* Privacy */}
      <p className="text-xs text-gray-400">
        En soumettant ce formulaire, vous acceptez d&apos;être contacté par l&apos;équipe
        Meridian Solar concernant votre demande de devis. Vos données ne seront
        pas partagées avec des tiers.
      </p>

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "loading"}
        className="btn-primary w-full justify-center py-4 text-base disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Envoi en cours...
          </>
        ) : (
          <>
            <Send className="w-5 h-5" />
            Envoyer ma demande de devis
          </>
        )}
      </button>
    </form>
  );
}
