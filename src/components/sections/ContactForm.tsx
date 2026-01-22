'use client'

import { useState } from 'react'
import { Send } from 'lucide-react'

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implémenter l'envoi du formulaire
    console.log('Form submitted:', formData)
    alert('Fonctionnalité à implémenter : envoi du formulaire')
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const inputClasses = "w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white placeholder-neutral-500 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all duration-200"

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-neutral-400 mb-2"
          >
            Prénom
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className={inputClasses}
            placeholder="Votre prénom"
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-neutral-400 mb-2"
          >
            Téléphone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className={inputClasses}
            placeholder="079 123 45 67"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-neutral-400 mb-2"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          required
          className={`${inputClasses} resize-none`}
          placeholder="Décrivez-nous votre besoin..."
        />
      </div>

      <button
        type="submit"
        className="w-full inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white px-6 py-3.5 rounded-lg font-medium transition-all duration-200"
      >
        <Send className="w-4 h-4" />
        Envoyer le message
      </button>
    </form>
  )
}
