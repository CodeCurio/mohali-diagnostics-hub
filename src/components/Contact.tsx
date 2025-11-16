import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Visit Us or <span className="text-primary">Get in Touch</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            We're here to help you with all your diagnostic needs
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Map */}
          <div className="glass-card rounded-2xl overflow-hidden shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3513358.1295466064!2d71.83685302734378!3d30.689887857721207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fef6cb70d2235%3A0x7382d2598198611d!2sSRL%20Lab%20Mohali%20-%20Home%20Collection!5e0!3m2!1sen!2sin!4v1763320933921!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="SRL Diagnostics Lab Mohali Location"
            />
            <div className="p-6 bg-background/95">
              <Button
                asChild
                className="w-full bg-primary hover:bg-primary-light text-primary-foreground"
              >
                <a
                  href="https://www.google.com/maps/place/SRL+Lab+Mohali+-+Home+Collection/@30.6898879,71.8368530,7z/data=!4m6!3m5!1s0x390fef6cb70d2235:0x7382d2598198611d!8m2!3d30.6898879!4d76.6931603!16s%2Fg%2F11y3ndmm3w"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MapPin className="h-4 w-4 mr-2" />
                  Get Directions
                </a>
              </Button>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            {/* Address */}
            <div className="glass-card rounded-2xl p-6 hover:shadow-xl transition-all">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Address</h3>
                  <p className="text-muted-foreground">
                    Booth No 12, Sector 69
                    <br />
                    Sahibzada Ajit Singh Nagar
                    <br />
                    Punjab 160069
                  </p>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="glass-card rounded-2xl p-6 hover:shadow-xl transition-all">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                  <Phone className="h-6 w-6 text-secondary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg mb-2">Phone</h3>
                  <a
                    href="tel:+919115459115"
                    className="text-lg text-primary hover:underline block mb-2"
                  >
                    +91-91154-59115
                  </a>
                  <Button
                    asChild
                    size="sm"
                    className="bg-cta hover:bg-cta/90 text-cta-foreground"
                  >
                    <a href="tel:+919115459115">Call Now</a>
                  </Button>
                </div>
              </div>
            </div>

            {/* Email & WhatsApp */}
            <div className="glass-card rounded-2xl p-6 hover:shadow-xl transition-all">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <Mail className="h-6 w-6 text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg mb-2">Email & WhatsApp</h3>
                  <a
                    href="mailto:info@srlmohali.com"
                    className="text-muted-foreground hover:text-primary block mb-2"
                  >
                    info@srlmohali.com
                  </a>
                  <Button
                    asChild
                    size="sm"
                    variant="outline"
                    className="border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white"
                  >
                    <a
                      href="https://wa.me/919115459115"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      WhatsApp: +91-91154-59115
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            {/* Working Hours */}
            <div className="glass-card rounded-2xl p-6 hover:shadow-xl transition-all">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-cta/10 flex items-center justify-center">
                  <Clock className="h-6 w-6 text-cta" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Working Hours</h3>
                  <div className="space-y-1 text-muted-foreground">
                    <p>Monday - Saturday: 7:00 AM - 9:00 PM</p>
                    <p>Sunday: 7:00 AM - 2:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
