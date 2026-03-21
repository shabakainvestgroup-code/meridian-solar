import type { Metadata } from "next";
import SimulateurClient from "./SimulateurClient";

export const metadata: Metadata = {
  title: "Simulateur Solaire – Estimez votre installation",
  description:
    "Calculez gratuitement la puissance, les économies et le retour sur investissement de votre installation solaire à Marrakech et dans tout le Maroc.",
};

export default function SimulateurPage() {
  return <SimulateurClient />;
}
