import { Button } from '@/components/ui/Button'
import { Phone, MessageCircle } from 'lucide-react'
import { siteConfig } from '@/data/siteConfig'

export function CTABanner() {
  return (
    <section className="bg-primary py-16">
      <div className="section-container text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Un souci avec votre voiture ?
        </h2>
        <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
          Appelez-nous ou passez directement au garage, on est là pour ça.
          Sans pression, sans surprise.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            href={`tel:${siteConfig.contact.phoneClean}`}
            variant="secondary"
            size="lg"
            className="bg-white text-primary hover:bg-neutral-100"
          >
            <Phone className="w-5 h-5 mr-2" />
            {siteConfig.contact.phone}
          </Button>
          <Button 
            href="/contact"
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white hover:text-primary"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Nous écrire
          </Button>
        </div>
      </div>
    </section>
  )
}
