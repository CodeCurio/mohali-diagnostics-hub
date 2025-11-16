import { Phone, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const packages = [
  {
    name: "Complete Health Checkup",
    tests: "70+ tests",
    includes: [
      "CBC, Lipid Profile",
      "Liver Function Test",
      "Kidney Function Test",
      "Thyroid Profile",
      "Diabetes Screening",
    ],
    originalPrice: "₹2,499",
    price: "₹1,799",
    ideal: "Annual health screening",
    popular: true,
  },
  {
    name: "Diabetes Screening Package",
    tests: "4 tests",
    includes: [
      "HbA1c",
      "Fasting Blood Sugar",
      "Post-Prandial Sugar",
      "Lipid Profile",
    ],
    originalPrice: "₹999",
    price: "₹699",
    ideal: "Diabetes monitoring",
  },
  {
    name: "Thyroid Profile Complete",
    tests: "4 tests",
    includes: ["T3 Total", "T4 Total", "TSH", "Anti-TPO"],
    originalPrice: "₹799",
    price: "₹499",
    ideal: "Thyroid disorders",
  },
  {
    name: "Women's Health Package",
    tests: "30+ tests",
    includes: [
      "Hormonal Profile",
      "Vitamin D & B12",
      "Iron Studies",
      "Thyroid Profile",
      "Complete Blood Count",
    ],
    originalPrice: "₹3,499",
    price: "₹2,499",
    ideal: "Women's wellness",
    popular: true,
  },
  {
    name: "Senior Citizen Package",
    tests: "90+ tests",
    includes: [
      "Heart Health Panel",
      "Kidney & Liver Tests",
      "Diabetes Screening",
      "Arthritis Markers",
      "Complete Blood Work",
    ],
    originalPrice: "₹3,999",
    price: "₹2,999",
    ideal: "60+ age group",
  },
  {
    name: "Pre-Marriage Package",
    tests: "8 tests",
    includes: [
      "HIV Screening",
      "HBsAg",
      "Blood Group & Rh",
      "Thalassemia",
      "Complete Blood Count",
    ],
    originalPrice: "₹1,499",
    price: "₹999",
    ideal: "Couples planning marriage",
  },
  {
    name: "Fever Panel",
    tests: "8 tests",
    includes: [
      "Dengue NS1 & IgG/IgM",
      "Malaria Parasite",
      "Typhoid Test",
      "CBC",
      "CRP",
    ],
    originalPrice: "₹1,299",
    price: "₹899",
    ideal: "Fever diagnosis",
  },
  {
    name: "Vitamin Profile",
    tests: "4 tests",
    includes: ["Vitamin D", "Vitamin B12", "Calcium", "Complete Blood Count"],
    originalPrice: "₹1,799",
    price: "₹1,299",
    ideal: "Fatigue & weakness",
  },
];

const HealthPackages = () => {
  return (
    <section id="packages" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Popular <span className="text-primary">Health Packages</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive diagnostic packages at affordable prices
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`glass-card rounded-2xl p-6 md:p-8 relative hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 ${
                pkg.popular ? "ring-2 ring-primary" : ""
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-4">
                <h3 className="text-xl md:text-2xl font-bold mb-2">{pkg.name}</h3>
                <p className="text-sm text-muted-foreground">{pkg.tests} included</p>
              </div>

              <div className="mb-6">
                <ul className="space-y-2">
                  {pkg.includes.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-3xl md:text-4xl font-bold text-primary">
                    {pkg.price}
                  </span>
                  <span className="text-lg text-muted-foreground line-through">
                    {pkg.originalPrice}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold">Ideal for:</span> {pkg.ideal}
                </p>
              </div>

              <Button
                asChild
                className="w-full bg-cta hover:bg-cta/90 text-cta-foreground font-semibold"
              >
                <a href="tel:+919876543210" className="flex items-center justify-center gap-2">
                  <Phone className="h-4 w-4" />
                  Book Now — Call +91-98765-43210
                </a>
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center glass-card rounded-2xl p-8 max-w-2xl mx-auto">
          <p className="text-lg md:text-xl mb-4">
            Looking for specific tests or custom packages?
          </p>
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary-light text-primary-foreground font-semibold"
          >
            <a href="tel:+919115459115" className="flex items-center gap-2">
              <Phone className="h-5 w-5" />
              Call us at +91-91154-59115
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HealthPackages;
