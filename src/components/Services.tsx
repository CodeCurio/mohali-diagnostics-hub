import {
  TestTube2,
  Scan,
  Heart,
  Home,
  Building2,
  FileText,
  Shield,
  Leaf,
} from "lucide-react";

const services = [
  {
    icon: TestTube2,
    title: "Pathology Tests",
    description: "Comprehensive blood tests, urine analysis, and molecular diagnostics",
  },
  {
    icon: Scan,
    title: "Radiology Services",
    description: "Digital X-Ray, ultrasound, and imaging services",
  },
  {
    icon: Heart,
    title: "ECG & TMT",
    description: "Cardiac health monitoring and treadmill stress tests",
  },
  {
    icon: Home,
    title: "Home Sample Collection",
    description: "Free doorstep sample collection at your convenience",
  },
  {
    icon: Building2,
    title: "Corporate Packages",
    description: "Customized health checkup packages for organizations",
  },
  {
    icon: FileText,
    title: "Online Report Access",
    description: "Get reports instantly via email and WhatsApp",
  },
  {
    icon: Shield,
    title: "COVID-19 Testing",
    description: "RT-PCR, Rapid Antigen, and Antibody tests available",
  },
  {
    icon: Leaf,
    title: "Allergy Testing",
    description: "Comprehensive allergy panels and food sensitivity tests",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Complete diagnostic solutions under one roof
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="text-center glass-card rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                <service.icon className="h-8 w-8" />
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
