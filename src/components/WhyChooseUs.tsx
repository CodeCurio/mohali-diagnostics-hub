import { Award, Home, Clock, Activity, Users, Percent } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "NABL Accredited Lab",
    description: "Government-certified lab ensuring highest accuracy standards",
    color: "text-primary",
  },
  {
    icon: Home,
    title: "Free Home Collection",
    description: "Convenient doorstep sample collection across Mohali at no extra cost",
    color: "text-secondary",
  },
  {
    icon: Clock,
    title: "Fast Reports",
    description: "Same-day and next-day reports available online and on WhatsApp",
    color: "text-accent",
  },
  {
    icon: Activity,
    title: "500+ Tests Available",
    description: "Comprehensive diagnostics from basic to advanced panels",
    color: "text-primary",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Experienced pathologists and trained phlebotomists",
    color: "text-secondary",
  },
  {
    icon: Percent,
    title: "Affordable Pricing",
    description: "Transparent pricing with regular health checkup packages",
    color: "text-cta",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Why Choose <span className="text-primary">SRL Diagnostics?</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Your trusted partner for accurate and reliable diagnostic services in Mohali
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl p-6 md:p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`${feature.color} mb-4`}>
                <feature.icon className="h-10 w-10 md:h-12 md:w-12" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
