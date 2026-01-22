import Link from 'next/link'
import { forwardRef } from 'react'

interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  external?: boolean
  className?: string
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  onClick?: () => void
}

const variants = {
  primary: 'bg-primary text-white hover:bg-primary-dark',
  secondary: 'bg-secondary text-white hover:bg-secondary-dark',
  outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white',
  ghost: 'text-neutral-600 hover:bg-neutral-100',
}

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
}

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  function Button(
    {
      children,
      variant = 'primary',
      size = 'md',
      href,
      external = false,
      className = '',
      type = 'button',
      disabled = false,
      onClick,
    },
    ref
  ) {
    const baseStyles = 'inline-flex items-center justify-center font-medium rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed'
    const combinedStyles = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`

    // Si c'est un lien
    if (href) {
      if (external) {
        return (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={combinedStyles}
            ref={ref as React.Ref<HTMLAnchorElement>}
          >
            {children}
          </a>
        )
      }

      return (
        <Link
          href={href}
          className={combinedStyles}
          ref={ref as React.Ref<HTMLAnchorElement>}
        >
          {children}
        </Link>
      )
    }

    // Sinon c'est un bouton
    return (
      <button
        type={type}
        className={combinedStyles}
        disabled={disabled}
        onClick={onClick}
        ref={ref as React.Ref<HTMLButtonElement>}
      >
        {children}
      </button>
    )
  }
)
