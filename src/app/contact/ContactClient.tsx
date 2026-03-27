"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  AlertCircle,
  Loader2,
  Sun,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";

type ContactFormData = {
  nom: string;
  email: string;
  sujet: string;
  message: string;
};

const inputClass =
  "w-full px-4 py-3 border border-gray-200 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-navy-500 focus:border-transparent transition-all bg-white";
const labelClass = "block text-sm font-medium text-gray-700 mb-1.5";

const contactInfo = [
  {
    icon: Phone,
    title: "Téléphone",
    lines: ["+212 755 054 395", "Lun–Sam: 9h00–18h00"],
    href: "tel:+212755054395",
    color: "navy",
  },
  {
    icon: Mail,
    title: "Email",
    lines: ["contact@meridiansolar.ma", "Réponse sous 24h"],
    href: "mailto:contact@meridiansolar.ma",
    color: "gold",
  },
  {
    icon: MapPin,
    title: "Adresse",
    lines: ["Bd Moulay Rachid, Business Center Guéliz", "Etage 1, Bureau 8 — Marrakech 40000"],
    href: "#map",
    color: "navy",
  },
  {
    icon: Clock,
    title: "Horaires",
    lines: ["Lundi – Vendredi: 8h–18h", "Samedi: 9h–13h"],
    href: null,
    color: "gold",
  },
];

export default function ContactClient() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>();

  const onSubmit = (data: ContactFormData) => {
    setStatus("loading");
    try {
      // Construire le message pour WhatsApp
      const message = `*Formulaire de Contact - Meridian Solar*

Nom: ${data.nom}
Email: ${data.email}

*Sujet:* ${data.sujet}

*Message:*
${data.message}`;

      // Encoder le message et créer le lien WhatsApp
      const whatsappUrl = `https://wa.me/212755054395?text=${encodeURIComponent(message)}`;

      // Ouvrir WhatsApp dans un nouvel onglet
      window.open(whatsappUrl, "_blank");

      setStatus("success");
      reset();
    } catch (err: unknown) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Une erreur est survenue.");
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="hero-gradient pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 solar-pattern" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 bg-navy-800/50 border border-navy-600/30 text-white/90 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sun className="w-4 h-4 text-gold-400" />
            Contactez-nous
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Parlons de Votre{" "}
            <span className="text-gold-400">Projet</span>
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Notre équipe est à votre écoute. Contactez-nous pour toute
            question, demande d&apos;information ou pour planifier une visite.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 60L1440 0V60H0Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Contact cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map(({ icon: Icon, title, lines, href, color }) => {
              const Inner = (
                <div
                  className={`card p-6 h-full hover:-translate-y-1 transition-transform duration-300 group ${
                    href ? "cursor-pointer" : ""
                  }`}
                >
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors ${
                      color === "navy"
                        ? "bg-navy-100 group-hover:bg-navy-600"
                        : "bg-amber-100 group-hover:bg-amber-500"
                    }`}
                  >
                    <Icon
                      className={`w-6 h-6 transition-colors ${
                        color === "navy"
                          ? "text-navy-600 group-hover:text-white"
                          : "text-amber-600 group-hover:text-white"
                      }`}
                    />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
                  {lines.map((line, i) => (
                    <p
                      key={i}
                      className={`text-sm ${i === 0 ? "text-gray-800 font-medium" : "text-gray-500"}`}
                    >
                      {line}
                    </p>
                  ))}
                </div>
              );
              return href ? (
                <a key={title} href={href}>
                  {Inner}
                </a>
              ) : (
                <div key={title}>{Inner}</div>
              );
            })}
          </div>

          {/* Form + Map */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Envoyez-nous un message
              </h2>
              <p className="text-gray-500 text-sm mb-8">
                Nous répondons à toutes les demandes sous 24 heures ouvrées.
              </p>

              {status === "success" ? (
                <div className="text-center py-12 px-6 bg-navy-50 rounded-3xl border border-navy-100">
                  <CheckCircle className="w-12 h-12 text-navy-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Message envoyé !
                  </h3>
                  <p className="text-gray-500 text-sm mb-6">
                    Merci, nous vous répondrons dans les meilleurs délais.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="btn-primary inline-flex"
                  >
                    Envoyer un autre message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  {status === "error" && (
                    <div className="flex items-center gap-3 bg-red-50 border border-red-200 rounded-xl p-4">
                      <AlertCircle className="w-5 h-5 text-red-500 shrink-0" />
                      <p className="text-red-700 text-sm">{errorMsg}</p>
                    </div>
                  )}

                  <div>
                    <label className={labelClass}>Nom complet *</label>
                    <input
                      {...register("nom", { required: "Nom requis" })}
                      placeholder="Votre nom"
                      className={inputClass}
                    />
                    {errors.nom && (
                      <p className="text-red-500 text-xs mt-1">{errors.nom.message}</p>
                    )}
                  </div>

                  <div>
                    <label className={labelClass}>Email *</label>
                    <input
                      {...register("email", {
                        required: "Email requis",
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: "Email invalide",
                        },
                      })}
                      type="email"
                      placeholder="vous@exemple.ma"
                      className={inputClass}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
                    )}
                  </div>

                  <div>
                    <label className={labelClass}>Sujet *</label>
                    <input
                      {...register("sujet", { required: "Sujet requis" })}
                      placeholder="Objet de votre message"
                      className={inputClass}
                    />
                    {errors.sujet && (
                      <p className="text-red-500 text-xs mt-1">{errors.sujet.message}</p>
                    )}
                  </div>

                  <div>
                    <label className={labelClass}>Message *</label>
                    <textarea
                      {...register("message", { required: "Message requis" })}
                      rows={5}
                      placeholder="Écrivez votre message ici..."
                      className={`${inputClass} resize-none`}
                    />
                    {errors.message && (
                      <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="btn-primary w-full justify-center py-4 disabled:opacity-70"
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Envoi...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Envoyer le message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Map + Social */}
            <div className="space-y-6">
              {/* Map placeholder */}
              <div
                id="map"
                className="rounded-3xl overflow-hidden bg-gradient-to-br from-navy-900 to-navy-700 h-80 flex items-center justify-center relative"
              >
                <div className="absolute inset-0 solar-pattern opacity-30" />
                <div className="relative z-10 text-center">
                  <MapPin className="w-12 h-12 text-amber-400 mx-auto mb-3" />
                  <p className="text-white font-semibold">Meridian Solar</p>
                  <p className="text-white/70 text-sm">
                    Bd Moulay Rachid, Business Center Guéliz, Marrakech
                  </p>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-4 bg-white/20 hover:bg-white/30 text-white text-sm px-4 py-2 rounded-full transition-colors"
                  >
                    Voir sur Google Maps
                  </a>
                </div>
              </div>

              {/* Social */}
              <div className="bg-gray-50 rounded-3xl p-6">
                <h3 className="font-bold text-gray-900 mb-4">Suivez-nous</h3>
                <div className="flex gap-4">
                  {[
                    { icon: Facebook, name: "Facebook" },
                    { icon: Instagram, name: "Instagram" },
                    { icon: Linkedin, name: "LinkedIn" },
                  ].map(({ icon: Icon, name }) => (
                    <a
                      key={name}
                      href="#"
                      className="flex-1 flex flex-col items-center gap-2 bg-white rounded-2xl py-4 border border-gray-100 hover:border-navy-300 hover:shadow-md transition-all group"
                    >
                      <Icon className="w-6 h-6 text-gray-500 group-hover:text-navy-600 transition-colors" />
                      <span className="text-xs text-gray-500 group-hover:text-navy-600 transition-colors">
                        {name}
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Emergency */}
              <div className="bg-navy-900 rounded-3xl p-6 text-white">
                <h3 className="font-bold mb-2">Urgence technique ?</h3>
                <p className="text-white/70 text-sm mb-4">
                  Pour toute panne ou problème avec votre installation, notre
                  équipe SAV est disponible 7j/7.
                </p>
                <a
                  href="tel:+212755054395"
                  className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold px-5 py-2.5 rounded-xl transition-colors text-sm"
                >
                  <Phone className="w-4 h-4" />
                  Appeler le SAV
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
