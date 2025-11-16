import { Award, Users, TestTube2, Clock } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Award, value: "15+", label: "Years of Experience" },
    { icon: Users, value: "50k+", label: "Tests Conducted" },
    { icon: TestTube2, value: "500+", label: "Test Parameters" },
    { icon: Clock, value: "24hrs", label: "Report Turnaround" },
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              About <span className="text-primary">SRL Diagnostics Lab Mohali</span>
            </h2>

            <div className="glass-card rounded-2xl p-8 md:p-10 text-left">
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
                SRL Diagnostics Lab Mohali is a <strong>NABL-accredited diagnostic center</strong>{" "}
                offering comprehensive pathology and radiology services. With state-of-the-art
                equipment and experienced pathologists, we ensure accurate results and timely
                reporting.
              </p>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                We serve patients across <strong>Mohali, Chandigarh, Kharar, and Zirakpur</strong>{" "}
                with convenient home collection services. Our commitment to quality and patient
                care has made us a trusted name in diagnostic services.
              </p>
            </div>
          </div>

          {/* Certifications */}
          <div className="flex flex-wrap justify-center items-center gap-6 mb-12">
            <div className="glass-card rounded-xl px-6 py-4">
              <div className="flex items-center gap-3">
                <Award className="h-8 w-8 text-primary" />
                <div>
                  <div className="font-bold text-sm">NABL</div>
                  <div className="text-xs text-muted-foreground">Accredited</div>
                </div>
              </div>
            </div>
            <div className="glass-card rounded-xl px-6 py-4">
              <div className="flex items-center gap-3">
                <Award className="h-8 w-8 text-secondary" />
                <div>
                  <div className="font-bold text-sm">ISO</div>
                  <div className="text-xs text-muted-foreground">Certified</div>
                </div>
              </div>
            </div>
            <div className="glass-card rounded-xl px-6 py-4">
              <div className="flex items-center gap-3">
                <Award className="h-8 w-8 text-accent" />
                <div>
                  <div className="font-bold text-sm">CAP</div>
                  <div className="text-xs text-muted-foreground">Accredited</div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="glass-card rounded-2xl p-6 text-center hover:shadow-xl transition-all"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-3">
                  <stat.icon className="h-6 w-6" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
