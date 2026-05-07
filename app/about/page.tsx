export default function About() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-20 min-h-screen flex flex-col md:flex-row gap-12 items-center">
      <div className="w-full md:w-1/2">
        <div className="aspect-[4/5] bg-pastelPink-200 rounded-2xl flex items-center justify-center font-serif italic text-pastelPink-400">
          Artist Portrait Placeholder
        </div>
      </div>
      <div className="w-full md:w-1/2">
        <span className="text-sm tracking-[0.2em] uppercase text-roseGold font-medium mb-4 block">The Artist</span>
        <h1 className="font-serif text-4xl md:text-5xl mb-6">Hello, I'm Jhilmil</h1>
        <div className="space-y-4 text-charcoal/80 font-light leading-relaxed">
          <p>
            Art has always been a way for me to express emotion and preserve the fleeting beauty of life. With resin, I found the perfect medium to encapsulate memories forever.
          </p>
          <p>
            Whether it's the tiny handprint of your newborn, the vibrant petals from your wedding varmala, or a custom piece of jewelry, I pour my heart into every creation.
          </p>
          <p>
            My philosophy is simple: create art that speaks to the soul and lasts a lifetime. I invite you to explore my collection and reach out for custom bespoke pieces.
          </p>
        </div>
      </div>
    </div>
  );
}
