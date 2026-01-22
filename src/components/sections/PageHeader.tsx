interface PageHeaderProps {
  title: string
  subtitle?: string
}

export function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <div className="page-header bg-neutral-100">
      <div className="section-container">
        <h1 className="text-4xl md:text-5xl font-bold text-neutral-900">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 text-xl text-neutral-600">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  )
}
