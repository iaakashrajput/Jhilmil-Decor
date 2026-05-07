import { CONTACT_INFO, SERVICES_LIST, SOCIAL_LINKS } from "@/constants";

export default function Contact() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20 min-h-screen">
      <div className="text-center mb-16">
        <h1 className="font-serif text-4xl md:text-5xl mb-6">Get in Touch</h1>
        <p className="text-charcoal/70 max-w-2xl mx-auto">
          Have a custom request or an inquiry about our services? We'd love to
          hear from you.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-12 max-w-5xl mx-auto">
        <div className="w-full md:w-1/2 glass p-8 rounded-2xl">
          <form
            action="https://api.web3forms.com/submit"
            method="POST"
            className="space-y-6"
          >
            <input
              type="hidden"
              name="access_key"
              value={process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY}
            />
            <input
              type="hidden"
              name="subject"
              value="New Inquiry from Jhilmil Decor Website"
            />
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-2 rounded-lg border border-pastelPink-200 bg-white/50 focus:outline-none focus:ring-2 focus:ring-pastelPink-400"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-2 rounded-lg border border-pastelPink-200 bg-white/50 focus:outline-none focus:ring-2 focus:ring-pastelPink-400"
              />
            </div>
            <div>
              <label
                htmlFor="service"
                className="block text-sm font-medium mb-2"
              >
                Service of Interest
              </label>
              <select
                id="service"
                name="service"
                required
                className="w-full px-4 py-2 rounded-lg border border-pastelPink-200 bg-white/50 focus:outline-none focus:ring-2 focus:ring-pastelPink-400"
              >
                {SERVICES_LIST.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                className="w-full px-4 py-2 rounded-lg border border-pastelPink-200 bg-white/50 focus:outline-none focus:ring-2 focus:ring-pastelPink-400"
              ></textarea>
            </div>
            <button type="submit" className="w-full btn-primary">
              Send Inquiry
            </button>
          </form>
        </div>

        <div className="w-full md:w-1/2 flex flex-col justify-between">
          <div className="space-y-8 mb-8">
            <div>
              <h3 className="font-serif text-xl font-medium mb-2">
                Studio Location
              </h3>
              <p className="text-charcoal/80">{CONTACT_INFO.STUDIO_LOCATION}</p>
            </div>
            <div>
              <h3 className="font-serif text-xl font-medium mb-2">Email</h3>
              <p className="text-charcoal/80">{CONTACT_INFO.EMAIL}</p>
            </div>
            <div>
              <h3 className="font-serif text-xl font-medium mb-2">Phone</h3>
              <p className="text-charcoal/80">{CONTACT_INFO.PHONE}</p>
            </div>
          </div>

          <div className="w-full h-64 rounded-2xl overflow-hidden glass p-2 flex-grow min-h-[250px]">
            <iframe 
              src={SOCIAL_LINKS.GOOGLE_MAPS_EMBED} 
              width="100%" 
              height="100%" 
              style={{ border: 0, borderRadius: '0.75rem' }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            
          </div>
        </div>
      </div>
    </div>
  );
}
