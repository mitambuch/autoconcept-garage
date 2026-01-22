interface CardProps {
  children: React.ReactNode
  className?: string
  padding?: 'none' | 'sm' | 'md' | 'lg'
}

const paddings = {
  none: '',
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
}

export function Card({ 
  children, 
  className = '',
  padding = 'md',
}: CardProps) {
  return (
    <div className={`bg-white rounded-xl shadow-sm border border-neutral-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${paddings[padding]} ${className}`}>
      {children}
    </div>
  )
}

// Sous-composants pour structure flexible
Card.Header = function CardHeader({ 
  children, 
  className = '' 
}: { 
  children: React.ReactNode
  className?: string 
}) {
  return (
    <div className={`mb-4 ${className}`}>
      {children}
    </div>
  )
}

Card.Title = function CardTitle({ 
  children,
  as: Component = 'h3',
  className = '' 
}: { 
  children: React.ReactNode
  as?: 'h2' | 'h3' | 'h4'
  className?: string 
}) {
  return (
    <Component className={`text-xl font-semibold ${className}`}>
      {children}
    </Component>
  )
}

Card.Description = function CardDescription({ 
  children,
  className = '' 
}: { 
  children: React.ReactNode
  className?: string 
}) {
  return (
    <p className={`text-neutral-600 ${className}`}>
      {children}
    </p>
  )
}
