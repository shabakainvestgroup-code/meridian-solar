import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact – Meridian Solar Marrakech",
  description:
    "Contactez Meridian Solar à Marrakech. Téléphone, email, formulaire de contact. Notre équipe répond sous 24h.",
};

export default function ContactPage() {
  return <ContactClient />;
}
