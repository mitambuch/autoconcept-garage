import { Card } from '@/components/ui/Card'
import type { ServiceItem } from '@/data/services'
import {
  Wrench,
  Settings,
  Snowflake,
  Circle,
  ClipboardCheck,
  Search,
  Car,
  CloudRain,
  Key,
} from 'lucide-react'
import type { ComponentType } from 'react'

const iconMap: Record<string, ComponentType<{ className?: string }>> = {
  Wrench,
  Settings,
  Snowflake,
  Circle,
  ClipboardCheck,
  Search,
  Car,
  CloudRain,
  Key,
}

interface ServicesGridProps {
  services: ServiceItem[]
  variant?: 'compact' | 'detailed'
}

export function ServicesGrid({ services, variant = 'compact' }: ServicesGridProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {services.map((service) => {
        const IconComponent = iconMap[service.icon] ?? Wrench

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
