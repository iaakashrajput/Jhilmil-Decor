import Link from "next/link";
import { Instagram, Youtube, MapPin } from "lucide-react";
import { SOCIAL_LINKS } from "@/constants";

export default function Footer() {
  return (
    <footer className="bg-pastelPink-100 text-charcoal py-12 px-6 md:px-12 border-t border-pastelPink-200 mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.png" alt="Jhilmil Decor Logo" className="h-14 md:h-20 w-auto max-w-full object-contain mix-blend-multiply" />
          <p className="text-sm opacity-80 max-w-sm">
            Preserving life's beautiful moments in resin. Bespoke, artfully crafted keepsakes for every milestone.
          </p>
        </div>
        <div>
          <h3 className="font-serif text-lg font-medium mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm opacity-80">
            <li><Link href="/" className="hover:text-pastelPink-600 transition-colors">Home</Link></li>
            <li><Link href="/gallery" className="hover:text-pastelPink-600 transition-colors">Gallery</Link></li>
            <li><Link href="/about" className="hover:text-pastelPink-600 transition-colors">About</Link></li>
            <li><Link href="/contact" className="hover:text-pastelPink-600 transition-colors">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-serif text-lg font-medium mb-4">Connect</h3>
          <p className="text-sm opacity-80 mb-4">Follow us for behind the scenes and new artwork drops.</p>
          <div className="flex gap-4">
            <Link href={SOCIAL_LINKS.INSTAGRAM} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-pastelPink-300 flex items-center justify-center text-white hover:bg-pastelPink-400 transition-colors">
              <Instagram size={20} />
            </Link>
            <Link href={SOCIAL_LINKS.YOUTUBE} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-pastelPink-300 flex items-center justify-center text-white hover:bg-pastelPink-400 transition-colors">
              <Youtube size={20} />
            </Link>
            <Link href={SOCIAL_LINKS.GOOGLE_MAPS} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-pastelPink-300 flex items-center justify-center text-white hover:bg-pastelPink-400 transition-colors">
              <MapPin size={20} />
            </Link>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-pastelPink-200 text-center text-xs opacity-60">
        &copy; {new Date().getFullYear()} Jhilmil Decor. All Rights Reserved.
      </div>
    </footer>
  );
}
