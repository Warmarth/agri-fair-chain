import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Zap, Globe } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary via-primary-glow to-accent relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center text-white space-y-8">
          <h2 className="text-4xl lg:text-6xl font-bold leading-tight">
            Ready to Transform
            <br />
            Agricultural Trading?
          </h2>
          <p className="text-xl lg:text-2xl opacity-90 max-w-3xl mx-auto leading-relaxed">
            Join the blockchain revolution that's empowering farmers, 
            connecting markets, and building a sustainable agricultural future.
          </p>

          {/* Next Steps */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto text-left">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <Users className="w-8 h-8 mb-3 text-white" />
              <h3 className="text-lg font-semibold mb-2">Pilot Testing</h3>
              <p className="text-sm opacity-90">Partner with local farming cooperatives for initial implementation</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <Zap className="w-8 h-8 mb-3 text-white" />
              <h3 className="text-lg font-semibold mb-2">Strategic Partnerships</h3>
              <p className="text-sm opacity-90">Collaborate with agribusinesses and fintech providers</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <Globe className="w-8 h-8 mb-3 text-white" />
              <h3 className="text-lg font-semibold mb-2">Scale Impact</h3>
              <p className="text-sm opacity-90">Secure government and NGO support for widespread adoption</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="xl" className="group">
              Join the Platform
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="xl" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
              Partner With Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;