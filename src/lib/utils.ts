import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Combine et merge les classes Tailwind
 * Évite les conflits de classes
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Formate un numéro de téléphone suisse pour affichage
 */
export function formatPhoneDisplay(phone: string): string {
  // Exemple: +41327777777 → 032 777 77 77
  const cleaned = phone.replace(/\D/g, '')
  if (cleaned.startsWith('41') && cleaned.length === 11) {
    const local = cleaned.slice(2)
    return `0${local.slice(0, 2)} ${local.slice(2, 5)} ${local.slice(5, 7)} ${local.slice(7)}`
  }
  return phone
}

/**
 * Génère un lien tel: pour les numéros de téléphone
 */
export function getPhoneLink(phone: string): string {
  const cleaned = phone.replace(/\D/g, '')
  return `tel:+${cleaned.startsWith('41') ? cleaned : '41' + cleaned}`
}

/**
 * Génère un lien mailto:
 */
export function getEmailLink(email: string, subject?: string): string {
  const base = `mailto:${email}`
  if (subject) {
    return `${base}?subject=${encodeURIComponent(subject)}`
  }
  return base
}
