'use client'

import { useState, useEffect } from 'react'

const CONSENT_KEY = 'autoconcept-cookie-consent'

export function CookieConsent() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem(CONSENT_KEY)
    if (!consent) {
      setVisible(true)
    }
  }, [])

  function accept() {
    localStorage.setItem(CONSENT_KEY, 'accepted')
    setVisible(false)
  }

  function decline() {
    localStorage.setItem(CONSENT_KEY, 'declined')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-label="Consentement aux cookies"
      className="fixed bottom-0 left-0 right-0 z-[60] p-4 md:p-6 animate-slide-up"
    >
      <div className="section-container">
        <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 md:p-8 shadow-2xl flex flex-col md:flex-row md:items-center gap-6">
          <div className="flex-1 min-w-0">
            <p className="text-white font-semibold mb-1">Respect de votre vie privée</p>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Ce site utilise des cookies essentiels pour son bon fonctionnement
              et Google Maps pour la localisation. Aucune donnée personnelle
              n'est collectée à des fins publicitaires.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <button
              onClick={decline}
              className="px-5 py-2.5 border border-neutral-700 hover:border-neutral-600 text-neutral-300 hover:text-white rounded-lg text-sm font-medium transition-all duration-300"
            >
              Refuser
            </button>
            <button
              onClick={accept}
              className="px-5 py-2.5 bg-primary hover:bg-primary-dark text-white rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
            >
              Accepter
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
