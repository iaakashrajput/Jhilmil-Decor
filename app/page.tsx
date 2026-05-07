import ProductCard from "@/components/ProductCard";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full min-h-[80vh] flex flex-col items-center justify-center text-center px-6 py-20 relative overflow-hidden">
        {/* Background image */}
        <div 
          className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/resin_nameplate.png')" }}
        />
        {/* Dark overlay for text legibility */}
        <div className="absolute inset-0 -z-10 bg-black/50" />

        <span className="text-sm tracking-[0.2em] uppercase text-pastelPink-300 font-medium mb-4 block">Artisan Resin Creations</span>
        <h1 className="font-serif text-5xl md:text-7xl mb-6 text-white drop-shadow-lg">Jhilmil Decor</h1>
        <p className="max-w-2xl text-lg md:text-xl text-white/90 mb-10 leading-relaxed font-light drop-shadow">
          Exquisite handmade decor with shimmering elegance. We preserve your most cherished memories in timeless resin art.
        </p>
        <Link href="/gallery" className="btn-primary inline-block text-lg">
          Explore the Collection
        </Link>
      </section>

      {/* Featured Pieces */}
      <section className="w-full max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl mb-4">Our Exquisite Creations</h2>
          <p className="text-charcoal/70 max-w-xl mx-auto">
            From preserving sacred wedding garlands to crafting beautiful home decor and jewelry.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProductCard 
            title="Baby Hand Casting"
            description="Capture every tiny detail with our signature resin casting service. Perfect for preserving your little one's precious moments."
            imageUrl="/baby_casting.png"
          />
          <ProductCard 
            title="Resin Varmala Preservation"
            description="Cherish Your Wedding Flowers Forever. Transform your sacred wedding garlands into a stunning piece of art."
            imageUrl="/varmala_preservation.png"
          />
          <ProductCard 
            title="Resin Jewelry"
            description="Wearable Nature and Memories. Unique, handmade jewelry pieces featuring tiny petals, gold leaf, and personalization."
            imageUrl="/resin_jewelry.png"
          />
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full bg-pastelPink-200/50 py-24 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="font-serif text-4xl mb-12">Client Voices</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass p-8 rounded-2xl text-left">
              <div className="text-pastelPink-500 text-xl mb-4">★★★★★</div>
              <p className="italic text-charcoal/80 mb-6">"Jhilmil Decor preserved my wedding Varmala beautifully. The attention to detail is remarkable, a stunning keepsake we will treasure!"</p>
              <h4 className="font-medium">- Sarah J.</h4>
            </div>
            <div className="glass p-8 rounded-2xl text-left">
              <div className="text-pastelPink-500 text-xl mb-4">★★★★★</div>
              <p className="italic text-charcoal/80 mb-6">"The Baby Hand Casting is absolute perfection. It captures the tiny folds and details so delicately. The process was wonderful."</p>
              <h4 className="font-medium">- Emily R.</h4>
            </div>
            <div className="glass p-8 rounded-2xl text-left">
              <div className="text-pastelPink-500 text-xl mb-4">★★★★★</div>
              <p className="italic text-charcoal/80 mb-6">"I ordered a resin necklace for my wife. She was speechless. The quality and craftsmanship are truly premium. Highly recommend!"</p>
              <h4 className="font-medium">- David L.</h4>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
