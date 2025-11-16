import { Phone, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToPackages = () => {
    const element = document.getElementById("packages");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-primary-light/20" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=2070')] bg-cover bg-center opacity-20" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-20 md:pt-0">
        <div className="max-w-4xl mx-auto text-center">
          {/* Glassmorphism Card */}
          <div className="glass-hero rounded-3xl p-8 md:p-12 lg:p-16">
            {/* Trust Badges */}
            <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
              <div className="flex items-center gap-2 px-4 py-2 bg-background/80 rounded-full">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                <span className="text-xs md:text-sm font-semibold">NABL Accredited</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-background/80 rounded-full">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                <span className="text-xs md:text-sm font-semibold">ISO Certified</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-background/80 rounded-full">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                <span className="text-xs md:text-sm font-semibold">CAP Accredited</span>
              </div>
            </div>

            {/* Headline */}
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
              Trusted Diagnostics in Mohali —{" "}
              <span className="text-primary">Accurate Results</span>,<br />
              Home Collection Available
            </h1>

            {/* Subheadline */}
            <p className="text-base md:text-xl lg:text-2xl mb-8 md:mb-10 text-muted-foreground max-w-3xl mx-auto">
              NABL Accredited Lab | 500+ Tests | Same-Day Reports | Free Home Sample Collection
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto bg-cta hover:bg-cta/90 text-cta-foreground text-base md:text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all"
              >
                <a href="tel:+919876543210" className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Call Now: +91-98765-43210
                </a>
              </Button>
              <Button
                onClick={scrollToPackages}
                variant="outline"
                size="lg"
                className="w-full sm:w-auto border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground text-base md:text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all"
              >
                View Packages
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 md:mt-12">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary">500+</div>
                <div className="text-xs md:text-sm text-muted-foreground">Tests Available</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary">10k+</div>
                <div className="text-xs md:text-sm text-muted-foreground">Happy Patients</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary">24hrs</div>
                <div className="text-xs md:text-sm text-muted-foreground">Report Delivery</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary">100%</div>
                <div className="text-xs md:text-sm text-muted-foreground">Accurate Results</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
