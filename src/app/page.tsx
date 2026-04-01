import { ServicesGrid } from '@/components/sections/ServicesGrid'
import { TeamGrid } from '@/components/sections/TeamGrid'
import { GarageGallery } from '@/components/sections/GarageGallery'
import { servicesData } from '@/data/services'
import { teamData } from '@/data/team'
import { siteConfig } from '@/data/siteConfig'
import { Phone, Mail, MapPin, ExternalLink, ArrowDown, Wrench, Clock, ChevronRight, ThumbsUp } from 'lucide-react'
import ScrollReveal from '@/components/ui/ScrollReveal'

export default function HomePage() {
  const { contact } = siteConfig

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-neutral-900 overflow-hidden">
        {/* Background image with Ken Burns effect */}
        <div
          className="absolute inset-0 bg-cover bg-center animate-ken-burns scale-110"
          style={{ backgroundImage: 'url(/images/facade/garage.jpg)' }}
        />
        {/* Dark overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/70 to-neutral-900/50" />

        {/* Film grain */}
        <div className="absolute inset-0 opacity-[0.04] mix-blend-overlay animate-grain" aria-hidden="true"
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")` }}
        />

        {/* Accent glow */}
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] animate-pulse-slow" aria-hidden="true" />

        {/* Content */}
        <div className="relative z-10 section-container text-center py-20">
          <ScrollReveal>
            <span className="inline-block px-4 py-2 bg-white/5 border border-white/10 text-neutral-300 rounded-lg text-sm font-medium mb-8 backdrop-blur-sm">
              Garage automobile à Serrière, Neuchâtel
            </span>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <img
              src="https://res.cloudinary.com/df5khdkxl/image/upload/v1769087897/AC_bbzf8u.svg"
              alt="Autoconcept — Garage automobile à Serrière, Neuchâtel"
              width={432}
              height={144}
              className="h-20 md:h-28 lg:h-36 w-auto mx-auto mb-6 drop-shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:drop-shadow-[0_0_40px_rgba(45,212,191,0.3)] transition-[filter] duration-700"
            />
          </ScrollReveal>

          <ScrollReveal delay={350}>
            <p className="text-xl md:text-2xl text-neutral-400 max-w-2xl mx-auto mb-12 leading-relaxed">
              Un garage à taille humaine où l'on prend le temps
              de vous écouter et de bien faire les choses.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={550}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
              <a
                href={`tel:${siteConfig.contact.phoneClean}`}
                className="group inline-flex items-center justify-center gap-3 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-lg text-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
              >
                <Phone className="w-5 h-5" />
                Nous appeler
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-3 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 text-white px-8 py-4 rounded-lg text-lg font-medium transition-all duration-300 backdrop-blur-sm hover:scale-105"
              >
                Prendre rendez-vous
                <ChevronRight className="w-5 h-5" />
              </a>
            </div>
          </ScrollReveal>

          {/* Scroll indicator */}
          <ScrollReveal delay={750}>
            <a href="#garage" className="inline-flex flex-col items-center text-neutral-500 hover:text-primary transition-colors group">
              <span className="text-sm mb-2">Découvrir</span>
              <ArrowDown className="w-5 h-5 animate-bounce" />
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* Marquee section */}
      <div className="bg-neutral-900 py-4 overflow-hidden border-y border-neutral-800">
        <div className="marquee">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="marquee-content">
              <span>ENTRETIEN</span>
              <span className="text-primary">•</span>
              <span>RÉPARATION</span>
              <span className="text-primary">•</span>
              <span>DIAGNOSTIC</span>
              <span className="text-primary">•</span>
              <span>PNEUS</span>
              <span className="text-primary">•</span>
              <span>CLIMATISATION</span>
              <span className="text-primary">•</span>
              <span>EXPERTISE</span>
              <span className="text-primary">•</span>
              <span>TOUTES MARQUES</span>
              <span className="text-primary">•</span>
            </div>
          ))}
        </div>
      </div>

      {/* Section Garage */}
      <section id="garage" className="section-padding bg-white overflow-hidden">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Text */}
            <div>
              <ScrollReveal>
                <span className="text-primary font-semibold text-sm tracking-wider uppercase">Qui sommes-nous</span>
                <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-8 text-neutral-900 leading-tight">
                  Plus de 10 ans<br />
                  <span className="text-neutral-400">à votre service</span>
                </h2>
              </ScrollReveal>

              <ScrollReveal delay={100}>
                <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
                  Chez Autoconcept, on ne vous raconte pas d'histoires.
                  Si une réparation ne vaut pas le coup, on vous le dit.
                  Si ce n'est pas notre spécialité, on vous oriente.
                </p>
                <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                  Notre philosophie est simple : du travail bien fait,
                  des explications claires, et zéro mauvaise surprise.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <div className="inline-flex items-center gap-3 bg-positive/10 border border-positive/30 text-positive-dark px-5 py-3 rounded-lg font-medium">
                  <ThumbsUp className="w-5 h-5" />
                  Devis gratuit avant intervention
                </div>
              </ScrollReveal>
            </div>

            {/* Right - Stats/Values */}
            <div className="grid grid-cols-2 gap-4">
              <ScrollReveal delay={0}>
                <div className="bg-neutral-50 p-6 rounded-xl">
                  <div className="text-4xl font-bold text-primary mb-1">10+</div>
                  <div className="text-neutral-600 text-sm">années d'expérience</div>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={100}>
                <div className="bg-neutral-900 text-white p-6 rounded-xl translate-y-4">
                  <Wrench className="w-8 h-8 mb-3 text-primary" />
                  <div className="font-medium">Toutes marques</div>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <div className="bg-primary text-white p-6 rounded-xl">
                  <Clock className="w-8 h-8 mb-3" />
                  <div className="font-medium">Réponse rapide</div>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={300}>
                <div className="bg-neutral-50 p-6 rounded-xl translate-y-4">
                  <div className="text-4xl font-bold text-neutral-900 mb-1">100%</div>
                  <div className="text-neutral-600 text-sm">transparence</div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Divider with quote */}
      <div className="bg-neutral-50 py-16">
        <div className="section-container">
          <ScrollReveal>
            <blockquote className="text-center">
              <p className="text-2xl md:text-3xl font-medium text-neutral-700 max-w-3xl mx-auto leading-relaxed">
                "Si ça ne vaut pas la peine, on vous le dit.<br />
                <span className="text-neutral-400">C'est aussi simple que ça."</span>
              </p>
            </blockquote>
          </ScrollReveal>
        </div>
      </div>

      {/* Section Galerie Garage */}
      <GarageGallery />

      {/* Section Équipe */}
      <section id="equipe" className="section-padding bg-white">
        <div className="section-container">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-primary font-semibold text-sm tracking-wider uppercase">Notre équipe</span>
              <h2 className="text-4xl md:text-5xl font-bold mt-4 text-neutral-900">
                Des passionnés<br />à votre écoute
              </h2>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <TeamGrid members={teamData} />
          </ScrollReveal>
        </div>
      </section>

      {/* Section Services */}
      <section id="services" className="section-padding bg-neutral-50">
        <div className="section-container">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-8">
              <div>
                <span className="text-primary font-semibold text-sm tracking-wider uppercase">Nos services</span>
                <h2 className="text-4xl md:text-5xl font-bold mt-4 text-neutral-900 leading-tight">
                  Ce qu'on fait<br />
                  <span className="text-neutral-400">(et bien)</span>
                </h2>
              </div>
              <p className="text-neutral-600 max-w-md">
                De l'entretien courant aux réparations complexes,
                on s'occupe de votre véhicule comme si c'était le nôtre.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <ServicesGrid services={servicesData} variant="detailed" />
          </ScrollReveal>
        </div>
      </section>

      {/* Section Occasion */}
      <section id="occasion" className="py-20 bg-neutral-900 text-white">
        <div className="section-container">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <ScrollReveal>
              <div>
                <span className="text-primary font-semibold text-sm tracking-wider uppercase">Occasions</span>
                <h2 className="text-4xl md:text-5xl font-bold mt-4 leading-tight">
                  Véhicules<br />d'occasion
                </h2>
                <p className="text-neutral-400 mt-4 max-w-md leading-relaxed">
                  On propose aussi quelques véhicules d'occasion sélectionnés.
                  Chaque voiture est vérifiée et préparée avec soin.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <a
                href={siteConfig.links.autoscout || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-4 bg-white text-neutral-900 px-8 py-4 rounded-lg font-medium hover:bg-primary hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <span>Voir sur AutoScout24</span>
                <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24 md:py-32 bg-primary relative overflow-hidden">
        {/* Subtle pattern */}
        <div className="absolute inset-0 opacity-10" aria-hidden="true" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='1' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='1'/%3E%3C/g%3E%3C/svg%3E")`,
        }} />

        <div className="section-container relative z-10">
          <ScrollReveal>
            <div className="text-center">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Un problème ?<br />On s'en occupe.
              </h2>
              <p className="text-xl text-white/80 mb-10 max-w-xl mx-auto">
                Pas de stress, pas de jargon. Juste un diagnostic clair et une solution adaptée.
              </p>
              <a
                href={`tel:${siteConfig.contact.phoneClean}`}
                className="inline-flex items-center gap-3 bg-white text-primary px-8 py-4 rounded-lg text-lg font-bold hover:bg-neutral-100 transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <Phone className="w-5 h-5" />
                {siteConfig.contact.phone}
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Section Contact */}
      <section id="contact" className="section-padding bg-white">
        <div className="section-container">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-primary font-semibold text-sm tracking-wider uppercase">Contact</span>
              <h2 className="text-4xl md:text-5xl font-bold mt-4 text-neutral-900">
                Passez nous voir
              </h2>
              <p className="text-neutral-600 mt-4">
                On est ouverts du lundi au vendredi. N'hésitez pas à appeler avant de passer.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Informations */}
            <ScrollReveal>
              <div className="bg-neutral-50 rounded-xl p-8 h-full">
                <h3 className="text-2xl font-bold mb-8">Informations</h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-neutral-900 text-lg">{siteConfig.name}</p>
                      <p className="text-neutral-600">
                        {contact.address.street}<br />
                        {contact.address.postalCode} {contact.address.city}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-neutral-500 mb-1">Téléphone</p>
                      <a
                        href={`tel:${contact.phoneClean}`}
                        className="text-xl font-semibold text-neutral-900 hover:text-primary transition-colors"
                      >
                        {contact.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-neutral-500 mb-1">Email</p>
                      <a
                        href={`mailto:${contact.email}`}
                        className="text-lg font-medium text-neutral-900 hover:text-primary transition-colors"
                      >
                        {contact.email}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Horaires */}
            <ScrollReveal delay={150}>
              <div className="bg-neutral-50 rounded-xl p-8 h-full">
                <h3 className="text-2xl font-bold mb-8 text-neutral-900">Horaires</h3>

                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-neutral-200">
                    <span className="text-neutral-600">Lundi - Vendredi</span>
                    <span className="font-semibold text-neutral-900">07h30 - 12h00</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-neutral-200">
                    <span className="text-neutral-600"></span>
                    <span className="font-semibold text-neutral-900">13h30 - 18h00</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-neutral-200">
                    <span className="text-neutral-600">Samedi</span>
                    <span className="font-semibold text-neutral-900">Sur rendez-vous</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="text-neutral-600">Dimanche</span>
                    <span className="text-neutral-400">Fermé</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Section Google Maps */}
      <section className="h-[400px] md:h-[500px] w-full bg-neutral-200 relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2724.0!2d6.9095!3d46.9995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478e0a2e3c7a7a7d%3A0x0!2sQuai%20Philippe-Suchard%2018%2C%202000%20Neuch%C3%A2tel!5e0!3m2!1sfr!2sch!4v1"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Localisation Autoconcept"
          className="grayscale hover:grayscale-0 transition-all duration-500"
        />

        {/* Overlay avec adresse */}
        <div className="absolute bottom-6 left-6 bg-white rounded-lg shadow-lg p-4 max-w-xs">
          <p className="font-bold text-neutral-900">{siteConfig.name}</p>
          <p className="text-sm text-neutral-600">
            {siteConfig.contact.address.street}<br />
            {siteConfig.contact.address.postalCode} {siteConfig.contact.address.city}
          </p>
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
              `${siteConfig.contact.address.street}, ${siteConfig.contact.address.postalCode} ${siteConfig.contact.address.city}, Suisse`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-3 text-sm font-medium text-primary hover:text-primary-dark transition-colors"
          >
            Ouvrir dans Google Maps →
          </a>
        </div>
      </section>
    </>
  )
}
