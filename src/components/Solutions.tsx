import { Zap, Eye, Link, CreditCard } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const solutions = [
  {
    icon: Link,
    title: "Direct Marketplace",
    description: "Blockchain-powered platform eliminates middlemen, allowing farmers to connect directly with buyers and negotiate fair prices.",
    benefit: "Higher profits for farmers"
  },
  {
    icon: Eye,
    title: "Transparent Pricing",
    description: "Real-time market data and historical trends empower farmers with information to make informed pricing decisions.",
    benefit: "Fair market value"
  },
  {
    icon: Zap,
    title: "End-to-End Traceability",
    description: "Immutable blockchain records track each product's journey from farm to buyer, building trust and enabling premium pricing.",
    benefit: "Quality assurance"
  },
  {
    icon: CreditCard,
    title: "Secure Transactions",
    description: "Smart contracts automate payments upon delivery confirmation, eliminating payment defaults and reducing transaction costs.",
    benefit: "Guaranteed payments"
  }
];

const Solutions = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            How AgriChainHub Solves This
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our blockchain-powered marketplace addresses every major challenge in traditional 
            agricultural trading through innovative technology solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <Card key={index} className="relative overflow-hidden border-2 hover:shadow-xl transition-all duration-300 group hover:border-primary/50">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent"></div>
                <CardHeader className="space-y-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <CardTitle className="text-lg">{solution.title}</CardTitle>
                    <CardDescription className="text-sm leading-relaxed">
                      {solution.description}
                    </CardDescription>
                    <div className="text-sm font-medium text-success bg-success/10 px-3 py-1 rounded-full inline-block">
                      {solution.benefit}
                    </div>
                  </div>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Solutions;