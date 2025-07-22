import { AlertTriangle, DollarSign, MapPin, Clock } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const problems = [
  {
    icon: DollarSign,
    title: "Exploitative Middlemen",
    description: "Multiple intermediaries inflate prices while farmers receive only a fraction of retail value.",
    impact: "Farmers earn 30-50% less"
  },
  {
    icon: AlertTriangle,
    title: "Pricing Opacity",
    description: "Lack of real-time market data makes farmers vulnerable to price manipulation and arbitrary deductions.",
    impact: "Unpredictable income"
  },
  {
    icon: MapPin,
    title: "Limited Market Access",
    description: "Smallholders struggle to reach bulk buyers due to logistical barriers and information gaps.",
    impact: "Reduced sales opportunities"
  },
  {
    icon: Clock,
    title: "Payment Risks",
    description: "Delayed payments and fraud are common in informal trading, leaving farmers financially vulnerable.",
    impact: "Cash flow problems"
  }
];

const Problems = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Traditional Market Challenges
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Small-scale farmers face systematic barriers that limit their economic potential 
            and threaten food security worldwide.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <Card key={index} className="relative overflow-hidden border-2 hover:shadow-lg transition-all duration-300 group">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-destructive to-warning"></div>
                <CardHeader className="space-y-4">
                  <div className="w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center group-hover:bg-destructive/20 transition-colors">
                    <Icon className="w-6 h-6 text-destructive" />
                  </div>
                  <div className="space-y-2">
                    <CardTitle className="text-lg">{problem.title}</CardTitle>
                    <CardDescription className="text-sm leading-relaxed">
                      {problem.description}
                    </CardDescription>
                    <div className="text-sm font-medium text-destructive bg-destructive/10 px-3 py-1 rounded-full inline-block">
                      {problem.impact}
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

export default Problems;