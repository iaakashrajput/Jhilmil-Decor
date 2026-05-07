import Link from "next/link";

interface ProductCardProps {
  title: string;
  description: string;
  price?: string;
  imageUrl?: string;
  link?: string;
}

export default function ProductCard({ title, description, price, imageUrl, link = "/contact" }: ProductCardProps) {
  return (
    <div className="glass rounded-2xl overflow-hidden group hover:shadow-lg transition-all duration-300 flex flex-col">
      <div className="h-64 bg-pastelPink-200 relative overflow-hidden">
        {imageUrl ? (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img src={imageUrl} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-pastelPink-400 font-serif text-xl italic">
            Image Placeholder
          </div>
        )}
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="font-serif text-xl font-medium mb-2">{title}</h3>
        <p className="text-sm opacity-80 mb-6 flex-grow">{description}</p>
        <div className="flex items-center justify-between mt-auto">
          {price && <span className="font-semibold text-lg">{price}</span>}
          <Link href={link} className="bg-pastelPink-300 hover:bg-pastelPink-400 text-white px-5 py-2 rounded-full text-sm font-medium transition-colors">
            Inquire
          </Link>
        </div>
      </div>
    </div>
  );
}
