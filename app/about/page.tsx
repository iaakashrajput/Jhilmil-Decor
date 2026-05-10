export default function About() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-20 min-h-screen flex flex-col md:flex-row gap-12 items-start">
      <div className="w-full md:w-1/2 md:sticky md:top-32">
        <div className="aspect-[4/5] bg-pastelPink-200 rounded-2xl flex items-center justify-center font-serif italic text-pastelPink-400">
          <img src="/artist.jpeg" alt="artist" className="w-full h-full object-cover rounded-2xl shadow-lg" />  
        </div>
      </div>
      <div className="w-full md:w-1/2">
        <span className="text-sm tracking-[0.2em] uppercase text-roseGold font-medium mb-4 block">The Artist</span>
        <h1 className="font-serif text-4xl md:text-5xl mb-6">Hi, I’m Ayushi Arora</h1>
        <div className="space-y-4 text-charcoal/80 font-light leading-relaxed">
          <p>
            The artist, educator, and founder behind Jhilmil Decor.
          </p>
          <p>
            Art has always been more than a passion for me; it is a way of preserving emotions, memories, and meaningful moments forever. From realistic artwork and handcrafted resin creations to personalized décor, my journey began with a simple dream — to create art that connects deeply with people.
          </p>
          <p>
            Along with creating custom keepsakes and luxury resin preservation art, I am also passionate about teaching and sharing creativity with others. Through art classes, workshops, and creative events, I love helping students and art lovers explore their artistic side with confidence and imagination.
          </p>
          <p>
            Over the years, I have participated in and organized various art-related activities and creative events that celebrate handmade art, self-expression, and emotional storytelling through design. These experiences continue to inspire my work and strengthen the vision behind Jhilmil Decor.
          </p>
          <p>
            Every creation at Jhilmil Decor is carefully handcrafted with love, patience, and attention to detail — turning wedding flowers, precious gifts, and beautiful memories into timeless treasures.
          </p>
          <p>
            Inspired by elegance, emotions, and meaningful relationships, my vision is to build Jhilmil Decor into a trusted luxury art and memory-preservation brand that people cherish for years to come.
          </p>
          <p>
            Thank you for being a part of this creative journey and supporting handmade art made from the heart.
          </p>
        </div>
      </div>
    </div>
  );
}
