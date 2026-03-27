import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, ArrowRight } from "lucide-react";

const services = [
  "Panneaux solaires résidentiels",
  "Installations industrielles",
  "Systèmes hybrides",
  "Pompage solaire",
  "Maintenance & SAV",
];

const links = [
  { href: "/", label: "Accueil" },
  { href: "/a-propos", label: "À propos" },
  { href: "/services", label: "Services" },
  { href: "/realisations", label: "Réalisations" },
  { href: "/phototeque", label: "Photothèque" },
  { href: "/documentation", label: "Documentation" },
  { href: "/devis", label: "Devis gratuit" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Top CTA Banner */}
      <div className="bg-gradient-to-r from-navy-800 to-navy-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold text-white mb-1">
              Passez à l&apos;énergie solaire aujourd&apos;hui
            </h3>
            <p className="text-white/70">
              Obtenez votre devis gratuit en 24h — sans engagement
            </p>
          </div>
          <Link href="/devis" className="btn-gold shrink-0">
            Demander un devis
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex mb-4">
              <Image
                src="/logo.png"
                alt="Meridian Solar"
                width={160}
                height={60}
                className="h-14 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              Votre partenaire de confiance pour l&apos;énergie solaire à Marrakech
              et dans tout le Maroc. Expertise, qualité et service irréprochable.
            </p>
            <div className="flex gap-3">
              {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-navy-600 transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-5">Nos Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="text-sm text-gray-400 hover:text-blue-300 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-navy-600 group-hover:bg-gold-500 transition-colors" />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-5">Navigation</h4>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-blue-300 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-navy-600 group-hover:bg-gold-500 transition-colors" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-5">Contact</h4>
            <div className="space-y-4">
              <a
                href="tel:+212755054395"
                className="flex items-start gap-3 group"
              >
                <div className="w-8 h-8 bg-navy-900 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-navy-600 transition-colors">
                  <Phone className="w-4 h-4 text-blue-300" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-0.5">Téléphone</p>
                  <p className="text-sm text-gray-300 group-hover:text-white transition-colors">
                    +212 755 054 395
                  </p>
                </div>
              </a>
              <a
                href="mailto:contact@meridiansolar.ma"
                className="flex items-start gap-3 group"
              >
                <div className="w-8 h-8 bg-navy-900 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-navy-600 transition-colors">
                  <Mail className="w-4 h-4 text-blue-300" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-0.5">Email</p>
                  <p className="text-sm text-gray-300 group-hover:text-white transition-colors">
                    contact@meridiansolar.ma
                  </p>
                </div>
              </a>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-navy-900 rounded-lg flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-blue-300" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-0.5">Adresse</p>
                  <p className="text-sm text-gray-300">
                    Bd Moulay Rachid, Business Center Guéliz, Et. 1, Bureau 8, Marrakech 40000
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Meridian Solar. Tous droits réservés.
          </p>
          <div className="flex gap-6">
            <Link href="/mentions-legales" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">
              Mentions légales
            </Link>
            <Link href="/conditions-generales" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">
              Conditions générales
            </Link>
            <Link href="/politique-confidentialite" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
