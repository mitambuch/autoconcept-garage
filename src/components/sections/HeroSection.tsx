import { Button } from '@/components/ui/Button'
import { Phone, ArrowRight } from 'lucide-react'
import { siteConfig } from '@/data/siteConfig'

export function HeroSection() {
  return (
    <section className="relative min-h-[80vh] flex items-center bg-neutral-900">
      {/* Background Image Placeholder */}
      <div 
        className="absolute inset-0 bg-gradient-to-r from-neutral-900/90 to-neutral-900/70"
        style={{
          // backgroundImage: 'url(/images/garage/hero.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Placeholder pour l'image */}
      <div className="absolute inset-0 flex items-center justify-center text-neutral-700 text-sm">
        📷 Photo du garage en arrière-plan
      </div>

      {/* Content */}
      <div className="relative section-container py-32">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            {siteConfig.name}
            <span className="block text-2xl md:text-3xl font-normal text-neutral-300 mt-2">
              {siteConfig.tagline}
            </span>
          </h1>

          <p className="text-lg md:text-xl text-neutral-300 mb-4">
            Nous sommes un garage indépendant situé à Serrière, juste à côté de Neuchâtel.
          </p>

          <p className="text-neutral-400 mb-8">
            Notre équipe entretient, répare et suit votre véhicule avec sérieux, 
            clarté et bon sens. Chez nous, pas de jargon inutile ni de pression : 
            nous prenons le temps d'expliquer ce qu'il faut faire, et pourquoi.
          </p>

          <p className="text-lg text-white font-medium mb-8">
            Vous pouvez passer nous voir en toute confiance.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              href={`tel:${siteConfig.contact.phoneClean}`}
              variant="primary"
              size="lg"
            >
              <Phone className="w-5 h-5 mr-2" />
              Nous appeler
            </Button>
            <Button 
              href="/contact"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-neutral-900"
            >
              Nous contacter
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
