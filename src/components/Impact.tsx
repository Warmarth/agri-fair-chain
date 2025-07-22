import { TrendingUp, Users, ShieldCheck, Leaf } from "lucide-react";

const impactData = [
  {
    category: "Farmers",
    icon: TrendingUp,
    color: "text-success",
    bgColor: "bg-success/10",
    benefits: [
      "20-40% higher income through direct sales",
      "Reduced payment risks with smart contracts",
      "Access to wider domestic/international markets",
      "Real-time market pricing information"
    ]
  },
  {
    category: "Buyers",
    icon: ShieldCheck,
    color: "text-accent",
    bgColor: "bg-accent/10",
    benefits: [
      "Direct sourcing ensures fresher produce",
      "Lower costs by eliminating middlemen",
      "Verified product origins for quality assurance",
      "Transparent supply chain tracking"
    ]
  },
  {
    category: "Consumers",
    icon: Users,
    color: "text-primary",
    bgColor: "bg-primary/10",
    benefits: [
      "Fairer prices through reduced margins",
      "Trust in food safety and ethical sourcing",
      "Support for sustainable farming practices",
      "Traceable product journey information"
    ]
  },
  {
    category: "Ecosystem",
    icon: Leaf,
    color: "text-warning",
    bgColor: "bg-warning/10",
    benefits: [
      "More efficient agricultural supply chains",
      "Encourages sustainable farming practices",
      "Strengthens food security networks",
      "Promotes agricultural innovation"
    ]
  }
];

const Impact = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-secondary/20 to-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Transforming Lives & Markets
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            AgriChainHub creates value for every stakeholder in the agricultural ecosystem, 
            building a more equitable and sustainable future for farming.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {impactData.map((impact, index) => {
            const Icon = impact.icon;
            return (
              <div key={index} className="bg-card rounded-2xl p-8 shadow-lg border border-border/50 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-12 h-12 rounded-full ${impact.bgColor} flex items-center justify-center`}>
                    <Icon className={`w-6 h-6 ${impact.color}`} />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">{impact.category}</h3>
                </div>
                
                <ul className="space-y-3">
                  {impact.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-start gap-3">
                      <div className={`w-2 h-2 rounded-full ${impact.color.replace('text-', 'bg-')} mt-2 flex-shrink-0`}></div>
                      <span className="text-muted-foreground leading-relaxed">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Impact;