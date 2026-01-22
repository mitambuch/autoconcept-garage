import { Card } from '@/components/ui/Card'
import type { ServiceItem } from '@/data/services'
import * as LucideIcons from 'lucide-react'

interface ServicesGridProps {
  services: ServiceItem[]
  variant?: 'compact' | 'detailed'
}

export function ServicesGrid({ services, variant = 'compact' }: ServicesGridProps) {
  return (
    <div className={`grid gap-6 ${
      variant === 'detailed' 
        ? 'md:grid-cols-2 lg:grid-cols-3' 
        : 'md:grid-cols-2 lg:grid-cols-3'
    }`}>
      {services.map((service) => {
        // Récupérer l'icône dynamiquement
        const IconComponent = (LucideIcons as unknown as Record<string, React.ComponentType<{ className?: string }>>)[service.icon] || LucideIcons.Wrench

        return (
          <Card key={service.id} className="group cursor-pointer hover:border-primary/20">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4 transition-all duration-300 group-hover:bg-primary group-hover:scale-110">
                <IconComponent className="w-6 h-6 text-primary transition-colors duration-300 group-hover:text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  {service.title}
                </h3>
                {variant === 'detailed' && (
                  <p className="text-neutral-600 text-sm">
                    {service.description}
                  </p>
                )}
              </div>
            </div>
          </Card>
        )
      })}
    </div>
  )
}
