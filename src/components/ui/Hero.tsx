import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart2, LineChart, PieChart } from "lucide-react";

const Hero = () => {
  return (
    <section className="py-24 hero-gradient relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-nextpage-50/30 to-transparent pointer-events-none"></div>
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0 animate-fade-in z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6 leading-tight">
            Transform Your Business with{" "}
            <span className="text-nextpage-600">NextPage</span> ERP
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-lg">
            Powerful enterprise resource planning software tailored for your
            specific business needs. Integrate, automate, and grow with
            confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-nextpage-600 hover:bg-nextpage-700 text-white px-8 py-6 rounded-lg text-lg flex items-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300">
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              className="px-8 py-6 rounded-lg text-lg border-nextpage-300 hover:border-nextpage-400 hover:bg-nextpage-50 transition-all duration-300"
            >
              Book A Demo
            </Button>
          </div>
        </div>
        <div
          className="md:w-1/2 relative animate-fade-in z-10"
          style={{ animationDelay: "0.2s" }}
        >
          <div className="relative bg-white p-8 rounded-2xl shadow-2xl transform hover:scale-[1.02] transition-all duration-500">
            <div className="absolute -top-4 -left-4 bg-nextpage-500 text-white p-3 rounded-lg shadow-lg">
              <BarChart2 className="h-6 w-6" />
            </div>
            <div className="absolute top-12 -right-6 bg-nextpage-700 text-white p-3 rounded-lg shadow-lg">
              <LineChart className="h-6 w-6" />
            </div>
            <div className="absolute -bottom-6 left-12 bg-nextpage-600 text-white p-3 rounded-lg shadow-lg">
              <PieChart className="h-6 w-6" />
            </div>
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&h=1500&fit=crop&auto=format"
              alt="NextPage ERP Software Interface"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;
