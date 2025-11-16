import { Phone, Syringe, FileText } from "lucide-react";

const steps = [
  {
    icon: Phone,
    title: "Call or WhatsApp",
    description: "Contact us at +91-91154-59115 to book your test or health package",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Syringe,
    title: "Sample Collection",
    description: "Visit our lab or get free home collection service",
    color: "bg-secondary/10 text-secondary",
  },
  {
    icon: FileText,
    title: "Get Reports",
    description: "Receive accurate reports online via email and WhatsApp",
    color: "bg-accent/10 text-accent",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            How It <span className="text-primary">Works</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Get your diagnostic tests done in 3 simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector Line (hidden on mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-[60%] w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent" />
              )}

              <div className="text-center relative z-10">
                {/* Step Number */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>

                {/* Icon */}
                <div
                  className={`inline-flex items-center justify-center w-24 h-24 md:w-32 md:h-32 rounded-full ${step.color} mb-6 shadow-lg`}
                >
                  <step.icon className="h-12 w-12 md:h-16 md:w-16" />
                </div>

                {/* Content */}
                <h3 className="text-xl md:text-2xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
