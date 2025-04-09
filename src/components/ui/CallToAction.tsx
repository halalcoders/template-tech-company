import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";

const CallToAction = () => {
  const benefits = [
    "30-day free trial with full access",
    "Dedicated onboarding specialist",
    "Regular product updates and improvements",
    "Migration assistance from existing systems",
  ];

  return (
    <section className="py-24 bg-gradient-to-r from-nextpage-600/10 to-nextpage-500/5 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?q=80&w=2400&auto=format&fit=crop')] opacity-5 bg-no-repeat bg-center bg-cover"></div>
      <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 max-w-3xl mx-auto">
          Ready to Transform Your Business Operations?
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Join hundreds of businesses already using NextPage ERP to streamline
          their operations and boost productivity.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md"
            >
              <Check className="h-4 w-4 text-nextpage-600" />
              <span className="text-gray-700 text-sm font-medium">
                {benefit}
              </span>
            </div>
          ))}
        </div>

        <Button className="bg-nextpage-600 hover:bg-nextpage-700 text-white px-8 py-6 rounded-lg text-lg flex items-center gap-2 mx-auto shadow-lg hover:shadow-xl transition-all duration-300">
          Get Started Today <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </section>
  );
};

export default CallToAction;
