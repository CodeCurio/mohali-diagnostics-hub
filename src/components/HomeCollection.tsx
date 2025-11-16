import { Phone, CheckCircle2, Home as HomeIcon, Clock, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const HomeCollection = () => {
  return (
    <section id="home-collection" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="glass-card rounded-3xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070"
                alt="Professional phlebotomist collecting blood sample at home"
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 glass-card rounded-2xl p-6 shadow-xl hidden md:block">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-1">FREE</div>
                <div className="text-sm text-muted-foreground">Home Collection</div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Free <span className="text-primary">Home Sample Collection</span>
              <br />
              Across Mohali
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Safe, hygienic, and convenient doorstep service
            </p>

            {/* Features */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Shield className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Trained Phlebotomists</h3>
                  <p className="text-sm text-muted-foreground">
                    Experienced professionals ensuring safe and painless sample collection
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <HomeIcon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Sterile Equipment</h3>
                  <p className="text-sm text-muted-foreground">
                    All equipment is single-use and follows strict hygiene protocols
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Timely Collection Slots</h3>
                  <p className="text-sm text-muted-foreground">
                    Flexible morning and evening slots to suit your schedule
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">No Hidden Charges</h3>
                  <p className="text-sm text-muted-foreground">
                    Completely free home collection service across our service areas
                  </p>
                </div>
              </div>
            </div>

            {/* Coverage Areas */}
            <div className="glass-card rounded-2xl p-6 mb-8">
              <h3 className="font-semibold mb-3">Service Areas:</h3>
              <div className="flex flex-wrap gap-2">
                {["Mohali", "Kharar", "Zirakpur", "Chandigarh", "Panchkula"].map((area) => (
                  <span
                    key={area}
                    className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto bg-cta hover:bg-cta/90 text-cta-foreground font-semibold"
            >
              <a href="tel:+919876543210" className="flex items-center justify-center gap-2">
                <Phone className="h-5 w-5" />
                Schedule Home Collection — Call +91-98765-43210
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeCollection;
