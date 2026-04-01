const images = [
  { src: '/images/garage/1.jpg', alt: 'Atelier' },
  { src: '/images/garage/2.jpg', alt: 'Atelier' },
  { src: '/images/garage/5.jpg', alt: 'Atelier' },
  { src: '/images/garage/6.jpg', alt: 'Atelier' },
  { src: '/images/garage/7.jpg', alt: 'Atelier' },
  { src: '/images/garage/8.jpg', alt: 'Atelier' },
  { src: '/images/garage/9.jpg', alt: 'Atelier' },
  { src: '/images/garage/4.jpg', alt: 'Atelier' },
]

export function GarageGallery() {
  return (
    <section className="py-8 bg-neutral-100 overflow-hidden">
      <div className="gallery-marquee">
        {[...Array(2)].map((_, i) => (
          <div key={i} className="gallery-marquee-content">
            {images.map((img) => (
              <div
                key={`${i}-${img.src}`}
                className="flex-shrink-0 w-64 h-44 md:w-80 md:h-52 rounded-xl overflow-hidden"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}
