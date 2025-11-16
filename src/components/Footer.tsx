import { Phone, Mail, MapPin, Facebook, Instagram, MessageCircle } from "lucide-react";

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="bg-foreground text-background pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-primary">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { label: "Home", id: "hero" },
                { label: "About Us", id: "about" },
                { label: "Packages", id: "packages" },
                { label: "Services", id: "services" },
                { label: "Contact Us", id: "contact" },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Tests */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-primary">Popular Tests</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-primary transition-colors cursor-pointer">
                Complete Blood Count (CBC)
              </li>
              <li className="hover:text-primary transition-colors cursor-pointer">
                Lipid Profile
              </li>
              <li className="hover:text-primary transition-colors cursor-pointer">
                Thyroid Function Test
              </li>
              <li className="hover:text-primary transition-colors cursor-pointer">HbA1c Test</li>
              <li className="hover:text-primary transition-colors cursor-pointer">
                Vitamin D Test
              </li>
              <li className="hover:text-primary transition-colors cursor-pointer">
                Liver Function Test
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-primary">Service Areas</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-primary transition-colors">Mohali</li>
              <li className="hover:text-primary transition-colors">Chandigarh</li>
              <li className="hover:text-primary transition-colors">Kharar</li>
              <li className="hover:text-primary transition-colors">Zirakpur</li>
              <li className="hover:text-primary transition-colors">Panchkula</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-primary">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0 text-primary" />
                <span>Booth No 12, Sector 69, Sahibzada Ajit Singh Nagar, Punjab 160069</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0 text-primary" />
                <a href="tel:+919115459115" className="hover:text-primary transition-colors">
                  +91-91154-59115
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 flex-shrink-0 text-primary" />
                <a
                  href="mailto:connect@srllabmohali.in"
                  className="hover:text-primary transition-colors"
                >
                  connect@srllabmohali.in
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4 flex-shrink-0 text-[#25D366]" />
                <a
                  href="https://wa.me/919115459115"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  WhatsApp: +91-91154-59115
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-center md:text-left">
              © 2025 SRL Diagnostics Lab Mohali. All rights reserved.
            </p>

            {/* Social Media */}
            <div className="flex items-center gap-4">
              <a
                href="https://www.facebook.com/share/1G4jqnKdoj/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-background/10 hover:bg-primary flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="https://www.instagram.com/srl_lab_mohali_home_collection?igsh=OXo4ZTF3dmdzMHh0"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-background/10 hover:bg-primary flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://wa.me/919115459115"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-background/10 hover:bg-[#25D366] flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
