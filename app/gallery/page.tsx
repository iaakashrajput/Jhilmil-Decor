export default function Gallery() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20 min-h-screen">
      <div className="text-center mb-16">
        <h1 className="font-serif text-4xl md:text-5xl mb-6">Our Gallery</h1>
        <p className="text-charcoal/70 max-w-2xl mx-auto">
          A visual showcase of our bespoke resin art. Each piece is crafted with love and attention to detail.
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { id: 1, src: '/baby_casting.png', alt: 'Baby Hand Casting' },
          { id: 2, src: '/varmala_preservation.png', alt: 'Varmala Preservation' },
          { id: 3, src: '/resin_jewelry.png', alt: 'Resin Jewelry' },
          { id: 4, src: '/floral_clock.png', alt: 'Floral Clock' },
          { id: 5, src: '/resin_coasters.png', alt: 'Resin Coasters' },
          { id: 6, src: '/resin_nameplate.png', alt: 'Resin Nameplate' },
        ].map((img) => (
          <div key={img.id} className="aspect-square bg-pastelPink-200 rounded-xl overflow-hidden group">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src={img.src} 
              alt={img.alt} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
