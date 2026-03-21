"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  Sun,
  Zap,
  TrendingDown,
  Leaf,
  Calculator,
  ArrowRight,
  Info,
  Home,
  Factory,
  Droplets,
  MapPin,
} from "lucide-react";

/* ─── DATA ──────────────────────────────────────────────────── */

const VILLES = [
  { nom: "Marrakech",    psh: 5.5, region: "Souss-Massa-Drâa" },
  { nom: "Ouarzazate",   psh: 6.2, region: "Drâa-Tafilalet" },
  { nom: "Agadir",       psh: 5.8, region: "Souss-Massa" },
  { nom: "Laâyoune",     psh: 6.5, region: "Laâyoune-Sakia El Hamra" },
  { nom: "Dakhla",       psh: 6.3, region: "Dakhla-Oued Ed-Dahab" },
  { nom: "Errachidia",   psh: 6.0, region: "Drâa-Tafilalet" },
  { nom: "Béni Mellal",  psh: 5.4, region: "Béni Mellal-Khénifra" },
  { nom: "Casablanca",   psh: 5.0, region: "Grand Casablanca" },
  { nom: "Rabat",        psh: 4.9, region: "Rabat-Salé-Kénitra" },
  { nom: "Fès",          psh: 5.2, region: "Fès-Meknès" },
  { nom: "Meknès",       psh: 5.1, region: "Fès-Meknès" },
  { nom: "Oujda",        psh: 5.3, region: "Oriental" },
  { nom: "Tanger",       psh: 4.8, region: "Tanger-Tétouan-Al Hoceïma" },
  { nom: "Tétouan",      psh: 4.7, region: "Tanger-Tétouan-Al Hoceïma" },
  { nom: "Nador",        psh: 5.0, region: "Oriental" },
];

const TYPES_BATIMENT = [
  { id: "villa",       label: "Villa / Maison",         icon: Home,    tarif: 1.15, coutKwc: 13500 },
  { id: "appartement", label: "Appartement",            icon: Home,    tarif: 1.05, coutKwc: 14000 },
  { id: "commercial",  label: "Commerce / Bureau",      icon: Factory, tarif: 1.50, coutKwc: 11500 },
  { id: "hotel",       label: "Hôtel / Riad",           icon: Home,    tarif: 1.55, coutKwc: 11000 },
  { id: "industriel",  label: "Industriel / Usine",     icon: Factory, tarif: 1.65, coutKwc: 10000 },
  { id: "agricole",    label: "Agricole / Pompage",     icon: Droplets,tarif: 1.20, coutKwc: 12000 },
];

const EFFICACITE_SYSTEME = 0.78; // Pertes DC→AC, câblage, température, saleté
const PUISSANCE_PANNEAU_WC = 550; // Panneaux monocristallins 550 Wc
const FACTEUR_CO2 = 0.55;         // kg CO₂/kWh évité (facteur réseau Maroc)

/* ─── CALCULS ───────────────────────────────────────────────── */

function calculer(facture: number, villeNom: string, batimentId: string) {
  const ville = VILLES.find((v) => v.nom === villeNom) ?? VILLES[0];
  const batiment = TYPES_BATIMENT.find((b) => b.id === batimentId) ?? TYPES_BATIMENT[0];

  const { psh } = ville;
  const { tarif, coutKwc } = batiment;

  // Consommation
  const consoMensuelle = facture / tarif;                    // kWh/mois
  const consoJournaliere = consoMensuelle / 30;              // kWh/jour
  const consoAnnuelle = consoMensuelle * 12;                 // kWh/an

  // Dimensionnement
  const puissanceKwc = consoJournaliere / (psh * EFFICACITE_SYSTEME);
  const nbPanneaux = Math.ceil((puissanceKwc * 1000) / PUISSANCE_PANNEAU_WC);
  const puissanceReelle = (nbPanneaux * PUISSANCE_PANNEAU_WC) / 1000;

  // Production & économies
  const productionAnnuelle = puissanceReelle * psh * 365 * EFFICACITE_SYSTEME;
  const economiesAnnuelles = productionAnnuelle * tarif;
  const economiesMensuelles = economiesAnnuelles / 12;
  const tauxCouverture = Math.min((productionAnnuelle / consoAnnuelle) * 100, 95);

  // Environnement
  const co2Evite = productionAnnuelle * FACTEUR_CO2;
  const arbresEquivalents = Math.round(co2Evite / 21); // 1 arbre ≈ 21 kg CO₂/an

  // Finances
  const coutInstallation = puissanceReelle * coutKwc;
  const roi = coutInstallation / economiesAnnuelles;
  const gainSur25ans = economiesAnnuelles * 25 - coutInstallation;

  // Surface toit nécessaire (≈ 2m² par panneau)
  const surfaceToit = nbPanneaux * 2;

  return {
    puissanceKwc: puissanceReelle,
    nbPanneaux,
    productionAnnuelle: Math.round(productionAnnuelle),
    economiesAnnuelles: Math.round(economiesAnnuelles),
    economiesMensuelles: Math.round(economiesMensuelles),
    tauxCouverture: Math.round(tauxCouverture),
    co2Evite: Math.round(co2Evite),
    arbresEquivalents,
    coutInstallation: Math.round(coutInstallation),
    roi: Math.round(roi * 10) / 10,
    gainSur25ans: Math.round(gainSur25ans),
    surfaceToit,
    psh,
    consoMensuelle: Math.round(consoMensuelle),
  };
}

/* ─── COMPOSANTS HELPER ─────────────────────────────────────── */

function ResultCard({
  icon: Icon,
  label,
  value,
  unit,
  sublabel,
  color = "navy",
}: {
  icon: React.ElementType;
  label: string;
  value: string | number;
  unit?: string;
  sublabel?: string;
  color?: "navy" | "gold" | "blue" | "green";
}) {
  const colors = {
    navy: "from-navy-600 to-navy-700 shadow-navy-200",
    gold:    "from-amber-500 to-amber-600 shadow-amber-200",
    blue:    "from-blue-500 to-blue-600 shadow-blue-200",
    green:   "from-green-500 to-green-600 shadow-green-200",
  };
  const iconBg = {
    navy: "bg-navy-100",
    gold:    "bg-amber-100",
    blue:    "bg-blue-100",
    green:   "bg-green-100",
  };
  const iconColor = {
    navy: "text-navy-600",
    gold:    "text-amber-600",
    blue:    "text-blue-600",
    green:   "text-green-600",
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 hover:shadow-md transition-shadow">
      <div className={`w-10 h-10 ${iconBg[color]} rounded-xl flex items-center justify-center mb-3`}>
        <Icon className={`w-5 h-5 ${iconColor[color]}`} />
      </div>
      <p className="text-xs text-gray-500 font-medium mb-1">{label}</p>
      <div className="flex items-baseline gap-1">
        <span className={`text-2xl font-bold bg-gradient-to-r ${colors[color]} bg-clip-text text-transparent`}>
          {typeof value === "number" ? value.toLocaleString("fr-MA") : value}
        </span>
        {unit && <span className="text-sm text-gray-500">{unit}</span>}
      </div>
      {sublabel && <p className="text-xs text-gray-400 mt-1">{sublabel}</p>}
    </div>
  );
}

function GaugeBar({ value, max = 100, color = "navy" }: { value: number; max?: number; color?: string }) {
  const pct = Math.min((value / max) * 100, 100);
  return (
    <div className="w-full bg-gray-100 rounded-full h-3 overflow-hidden">
      <div
        className={`h-full rounded-full transition-all duration-700 ${
          color === "navy" ? "bg-gradient-to-r from-navy-500 to-navy-400" :
          color === "gold"    ? "bg-gradient-to-r from-amber-500 to-amber-400" :
                                "bg-gradient-to-r from-blue-500 to-blue-400"
        }`}
        style={{ width: `${pct}%` }}
      />
    </div>
  );
}

/* ─── COMPOSANT PRINCIPAL ───────────────────────────────────── */

export default function SimulateurClient() {
  const [facture, setFacture]   = useState<number>(800);
  const [ville, setVille]       = useState<string>("Marrakech");
  const [batiment, setBatiment] = useState<string>("villa");

  const res = useMemo(
    () => (facture > 0 ? calculer(facture, ville, batiment) : null),
    [facture, ville, batiment]
  );

  const villeData = VILLES.find((v) => v.nom === ville)!;

  return (
    <>
      {/* HERO */}
      <section className="hero-gradient min-h-[35vh] flex items-center relative overflow-hidden pt-24 pb-8">
        <div className="absolute inset-0 solar-pattern" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <span className="inline-flex items-center gap-2 bg-navy-800/50 border border-navy-600/30 text-white/90 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Calculator className="w-4 h-4 text-amber-400" />
            Simulateur gratuit
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Calculez Votre Installation{" "}
            <span className="text-amber-400">Solaire</span>
          </h1>
          <p className="text-white/80 text-lg max-w-xl mx-auto">
            Entrez votre facture et votre ville — obtenez une estimation
            instantanée et personnalisée.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 40L1440 0V40H0Z" fill="#f9fafb" />
          </svg>
        </div>
      </section>

      {/* SIMULATEUR */}
      <section className="py-12 bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-8 items-start">

            {/* ── FORMULAIRE ── */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6">
                <h2 className="font-bold text-gray-900 text-lg mb-6 flex items-center gap-2">
                  <Sun className="w-5 h-5 text-navy-600" />
                  Votre situation
                </h2>

                {/* Facture */}
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Facture électrique mensuelle
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      min={50}
                      max={50000}
                      value={facture}
                      onChange={(e) => setFacture(Number(e.target.value))}
                      className="w-full pl-4 pr-14 py-4 text-xl font-bold border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-navy-500 transition-colors"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 font-semibold">
                      DH
                    </span>
                  </div>
                  {/* Slider */}
                  <input
                    type="range"
                    min={100}
                    max={10000}
                    step={50}
                    value={facture}
                    onChange={(e) => setFacture(Number(e.target.value))}
                    className="w-full mt-3 accent-navy-600"
                  />
                  <div className="flex justify-between text-xs text-gray-400 mt-1">
                    <span>100 DH</span>
                    <span>2 500 DH</span>
                    <span>5 000 DH</span>
                    <span>10 000 DH</span>
                  </div>
                  {/* Presets */}
                  <div className="flex flex-wrap gap-2 mt-3">
                    {[300, 600, 1200, 2500, 5000].map((v) => (
                      <button
                        key={v}
                        onClick={() => setFacture(v)}
                        className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                          facture === v
                            ? "bg-navy-600 text-white"
                            : "bg-gray-100 text-gray-600 hover:bg-navy-50 hover:text-navy-700"
                        }`}
                      >
                        {v} DH
                      </button>
                    ))}
                  </div>
                </div>

                {/* Ville */}
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 text-navy-600" />
                      Votre ville
                    </span>
                  </label>
                  <select
                    value={ville}
                    onChange={(e) => setVille(e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-navy-500 transition-colors bg-white font-medium appearance-none"
                  >
                    {VILLES.map((v) => (
                      <option key={v.nom} value={v.nom}>
                        {v.nom} — {v.psh} PSH/jour
                      </option>
                    ))}
                  </select>
                  {/* Ensoleillement badge */}
                  <div className="mt-3 flex items-center gap-2 bg-amber-50 border border-amber-100 rounded-xl px-3 py-2">
                    <Sun className="w-4 h-4 text-amber-500" />
                    <span className="text-xs text-amber-700">
                      <strong>{villeData.psh} heures de soleil</strong> efficaces/jour
                      {villeData.psh >= 6 && " ☀️ Excellent !"}
                      {villeData.psh >= 5.5 && villeData.psh < 6 && " ✨ Très bon"}
                      {villeData.psh >= 5 && villeData.psh < 5.5 && " 👍 Bon"}
                      {villeData.psh < 5 && " 📊 Correct"}
                    </span>
                  </div>
                </div>

                {/* Type bâtiment */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Type de bâtiment
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {TYPES_BATIMENT.map(({ id, label, icon: Icon }) => (
                      <button
                        key={id}
                        onClick={() => setBatiment(id)}
                        className={`flex items-center gap-2 px-3 py-2.5 rounded-xl border-2 text-sm font-medium transition-all ${
                          batiment === id
                            ? "border-navy-500 bg-navy-50 text-navy-700"
                            : "border-gray-200 text-gray-600 hover:border-navy-300 hover:bg-navy-50/50"
                        }`}
                      >
                        <Icon className={`w-4 h-4 shrink-0 ${batiment === id ? "text-navy-600" : "text-gray-400"}`} />
                        <span className="leading-tight text-left">{label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Info box */}
              <div className="bg-navy-900 rounded-2xl p-5 text-white">
                <div className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm mb-1">Comment c&apos;est calculé ?</p>
                    <p className="text-white/70 text-xs leading-relaxed">
                      Basé sur les données d&apos;ensoleillement IRESEN pour chaque ville,
                      les tarifs ONEE 2024 et un rendement système réel de 78%.
                      Les résultats sont des estimations — votre devis personnalisé
                      sera plus précis.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* ── RÉSULTATS ── */}
            <div className="lg:col-span-3 space-y-6">
              {!res || facture < 50 ? (
                <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-12 text-center">
                  <div className="w-20 h-20 bg-navy-50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calculator className="w-10 h-10 text-navy-400" />
                  </div>
                  <p className="text-gray-400">
                    Entrez votre facture pour voir les résultats
                  </p>
                </div>
              ) : (
                <>
                  {/* Header résultat */}
                  <div className="bg-gradient-to-r from-navy-700 to-navy-600 rounded-3xl p-6 text-white">
                    <p className="text-white/70 text-sm font-medium mb-1">
                      Pour {facture.toLocaleString("fr-MA")} DH/mois à {ville}
                    </p>
                    <div className="flex items-end gap-3 mb-4">
                      <div className="text-5xl font-bold">
                        {res.puissanceKwc.toFixed(1)}
                      </div>
                      <div>
                        <div className="text-2xl font-semibold text-white/70">kWc</div>
                        <div className="text-sm text-white/90">puissance recommandée</div>
                      </div>
                      <div className="ml-auto text-right">
                        <div className="text-2xl font-bold text-amber-400">{res.nbPanneaux}</div>
                        <div className="text-sm text-white/90">panneaux</div>
                        <div className="text-xs text-white/70">{PUISSANCE_PANNEAU_WC} Wc chacun</div>
                      </div>
                    </div>

                    {/* Taux de couverture */}
                    <div>
                      <div className="flex justify-between text-sm mb-1.5">
                        <span className="text-white/70">Couverture de vos besoins</span>
                        <span className="font-bold text-white">{res.tauxCouverture}%</span>
                      </div>
                      <GaugeBar value={res.tauxCouverture} color="gold" />
                      <p className="text-xs text-white/90 mt-1.5">
                        Consommation estimée : {res.consoMensuelle} kWh/mois
                      </p>
                    </div>
                  </div>

                  {/* Grille résultats */}
                  <div className="grid grid-cols-2 gap-4">
                    <ResultCard
                      icon={Zap}
                      label="Production annuelle"
                      value={res.productionAnnuelle}
                      unit="kWh/an"
                      sublabel={`${Math.round(res.productionAnnuelle / 12)} kWh/mois en moyenne`}
                      color="navy"
                    />
                    <ResultCard
                      icon={TrendingDown}
                      label="Économies annuelles"
                      value={res.economiesAnnuelles}
                      unit="DH/an"
                      sublabel={`≈ ${res.economiesMensuelles} DH/mois économisés`}
                      color="gold"
                    />
                    <ResultCard
                      icon={Leaf}
                      label="CO₂ évité"
                      value={res.co2Evite}
                      unit="kg/an"
                      sublabel={`≡ ${res.arbresEquivalents} arbres plantés`}
                      color="green"
                    />
                    <ResultCard
                      icon={Sun}
                      label="Surface toit requise"
                      value={res.surfaceToit}
                      unit="m²"
                      sublabel={`${res.nbPanneaux} panneaux × 2 m²`}
                      color="blue"
                    />
                  </div>

                  {/* Financier */}
                  <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                    <h3 className="font-bold text-gray-900 mb-5 flex items-center gap-2">
                      <Calculator className="w-5 h-5 text-navy-600" />
                      Analyse financière
                    </h3>

                    <div className="space-y-4">
                      {/* Coût installation */}
                      <div className="flex items-center justify-between py-3 border-b border-gray-50">
                        <div>
                          <p className="font-medium text-gray-800 text-sm">Coût d&apos;installation estimé</p>
                          <p className="text-xs text-gray-400">Équipements + main d&apos;œuvre + démarches</p>
                        </div>
                        <p className="text-xl font-bold text-gray-900">
                          {res.coutInstallation.toLocaleString("fr-MA")}
                          <span className="text-sm font-normal text-gray-500 ml-1">DH</span>
                        </p>
                      </div>

                      {/* Retour investissement */}
                      <div className="flex items-center justify-between py-3 border-b border-gray-50">
                        <div>
                          <p className="font-medium text-gray-800 text-sm">Retour sur investissement</p>
                          <p className="text-xs text-gray-400">Durée pour rentabiliser l&apos;installation</p>
                        </div>
                        <div className="text-right">
                          <p className="text-xl font-bold text-navy-600">
                            {res.roi} ans
                          </p>
                          <div className="mt-1">
                            <GaugeBar
                              value={25 - res.roi}
                              max={25}
                              color={res.roi <= 5 ? "navy" : res.roi <= 8 ? "gold" : "blue"}
                            />
                            <p className="text-xs text-gray-400 mt-1">
                              {res.roi <= 4 && "🟢 Excellent ROI"}
                              {res.roi > 4 && res.roi <= 7 && "🟡 Très bon ROI"}
                              {res.roi > 7 && "🔵 Bon ROI"}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Gain 25 ans */}
                      <div className="flex items-center justify-between py-3 bg-navy-50 rounded-xl px-4 -mx-2">
                        <div>
                          <p className="font-semibold text-navy-800 text-sm">Gain net sur 25 ans</p>
                          <p className="text-xs text-navy-600">Économies totales − coût installation</p>
                        </div>
                        <p className="text-2xl font-bold text-navy-700">
                          +{res.gainSur25ans.toLocaleString("fr-MA")}
                          <span className="text-sm font-normal ml-1">DH</span>
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Ensoleillement ville */}
                  <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-semibold text-gray-800 text-sm flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-navy-600" />
                        Ensoleillement — {ville}
                      </h4>
                      <span className="text-xs bg-amber-100 text-amber-700 px-2 py-1 rounded-full font-medium">
                        {res.psh} PSH/jour
                      </span>
                    </div>
                    <div className="relative">
                      <GaugeBar value={res.psh} max={7} color="gold" />
                      <div className="flex justify-between text-xs text-gray-400 mt-1.5">
                        <span>Faible (4)</span>
                        <span>Moyen (5.5)</span>
                        <span>Excellent (7)</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-3 mt-4">
                      {VILLES.filter((v) => v.psh >= villeData.psh - 0.3 && v.psh <= villeData.psh + 0.3 && v.nom !== ville).slice(0,3).map((v) => (
                        <button
                          key={v.nom}
                          onClick={() => setVille(v.nom)}
                          className="text-xs bg-gray-50 hover:bg-navy-50 hover:text-navy-700 text-gray-500 border border-gray-100 rounded-lg py-2 px-3 transition-colors"
                        >
                          {v.nom} ({v.psh})
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="bg-gradient-to-r from-navy-800 to-navy-700 rounded-3xl p-6 text-white">
                    <p className="text-sm text-white/90 mb-1">Prêt à passer à l&apos;action ?</p>
                    <h3 className="text-xl font-bold mb-2">
                      Obtenez votre devis précis gratuit
                    </h3>
                    <p className="text-white/70 text-sm mb-5">
                      Ces résultats sont des estimations. Notre ingénieur se déplace
                      gratuitement pour une étude sur mesure et un devis définitif.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Link
                        href={`/devis?ville=${encodeURIComponent(ville)}&facture=${facture}&batiment=${batiment}`}
                        className="btn-gold flex-1 justify-center py-3"
                      >
                        Devis personnalisé gratuit
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                      <a
                        href="tel:+212755054395"
                        className="flex-1 flex items-center justify-center gap-2 border-2 border-white/30 text-white font-semibold py-3 px-5 rounded-full hover:bg-white/10 transition-colors text-sm"
                      >
                        Appeler un expert
                      </a>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
