import Link from 'next/link'
import { siteConfig } from '@/data/siteConfig'

export function Footer() {
  const { contact } = siteConfig
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-neutral-900 text-white">
      <div className="section-container py-16">
        {/* Top section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 pb-12 border-b border-neutral-800">
          <div>
            <Link href="/" className="inline-block">
              <img
                src="https://res.cloudinary.com/df5khdkxl/image/upload/v1769087897/AC_bbzf8u.svg"
                alt="Autoconcept"
                width={120}
                height={40}
                className="h-10 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-neutral-500 mt-2 text-sm">Garage automobile à Serrière</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={`tel:${contact.phoneClean}`}
              className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
            >
              {contact.phone}
            </a>
            <a
              href={`mailto:${contact.email}`}
              className="inline-flex items-center justify-center gap-2 border border-neutral-700 hover:border-neutral-600 text-neutral-300 hover:text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105"
            >
              {contact.email}
            </a>
          </div>
        </div>

        {/* Middle section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 py-8">
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {siteConfig.navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-neutral-500 hover:text-white transition-colors text-sm"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="text-neutral-500 text-sm">
            <p>
              {contact.address.street}, {contact.address.postalCode} {contact.address.city}
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-neutral-800 text-center text-neutral-600 text-sm">
          <p>© {currentYear} {siteConfig.name}. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}
