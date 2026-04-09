import type { TeamMember } from '@/data/team'
import { User } from 'lucide-react'

interface TeamGridProps {
  members: TeamMember[]
}

export function TeamGrid({ members }: TeamGridProps) {
  return (
    <div className="grid md:grid-cols-3 gap-6 md:gap-8">
      {members.map((member) => (
        <div key={member.id} className="group text-left md:text-center">
          {/* Photo */}
          <div className="relative mb-4 md:mb-6 overflow-hidden rounded-2xl aspect-[3/4] bg-neutral-200">
            {member.image ? (
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url(${member.image})` }}
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <User className="w-16 h-16 text-neutral-400" />
              </div>
            )}
            {/* Subtle overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          {/* Info */}
          <h3 className="text-lg md:text-xl font-bold text-neutral-900 mb-1">{member.name}</h3>
          <p className="text-primary font-medium text-xs md:text-sm mb-2 md:mb-3">{member.role}</p>
          <p className="text-sm md:text-sm text-neutral-600 leading-relaxed max-w-xs mx-0 md:mx-auto">
            {member.description}
          </p>
        </div>
      ))}
    </div>
  )
}
