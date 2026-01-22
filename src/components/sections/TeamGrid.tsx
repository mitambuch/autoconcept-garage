import { Card } from '@/components/ui/Card'
import type { TeamMember } from '@/data/team'
import { User } from 'lucide-react'

interface TeamGridProps {
  members: TeamMember[]
}

export function TeamGrid({ members }: TeamGridProps) {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      {members.map((member) => (
        <Card key={member.id} padding="lg" className="group">
          <div className="flex flex-col sm:flex-row gap-6">
            {/* Photo ou placeholder */}
            <div className="flex-shrink-0">
              {member.image ? (
                <div
                  className="w-24 h-24 rounded-full bg-neutral-200 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundImage: `url(${member.image})` }}
                />
              ) : (
                <div className="w-24 h-24 rounded-full bg-neutral-200 flex items-center justify-center transition-all duration-300 group-hover:bg-primary group-hover:scale-110">
                  <User className="w-10 h-10 text-neutral-400 transition-colors duration-300 group-hover:text-white" />
                </div>
              )}
            </div>

            {/* Infos */}
            <div>
              <h2 className="text-xl font-semibold mb-1">
                {member.name}
              </h2>
              <p className="text-primary font-medium mb-3">
                {member.role}
              </p>
              <p className="text-neutral-600 text-sm leading-relaxed">
                {member.description}
              </p>
            </div>
          </div>
        </Card>
      ))}
    </div>
  )
}
