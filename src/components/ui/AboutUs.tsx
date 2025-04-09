import React from "react";
import { CheckCircle2 } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const AboutUs = () => {
  const achievements = [
    "Over 500+ businesses transformed",
    "99.9% uptime guarantee",
    "24/7 dedicated support team",
    "Industry-leading security protocols",
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About NextPage
          </h2>
          <div className="w-20 h-1 bg-nextpage-500 mx-auto mb-8"></div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1497215842964-222b430dc094?q=80&w=2450&h=1400&auto=format&fit=crop"
                alt="NextPage Team"
                className="w-full h-auto rounded-xl shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-nextpage-500 text-white p-6 rounded-lg shadow-lg">
                <p className="text-lg font-bold">Trusted by</p>
                <p className="text-3xl font-bold">500+</p>
                <p className="text-sm">Businesses</p>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 mt-16 md:mt-0">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Your Partner in Digital Transformation
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              NextPage Technology Limited is a leading provider of Enterprise
              Resource Planning (ERP) software solutions designed to transform
              how businesses operate. We specialize in creating customized
              software that fits and matches your desired solutions.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              With years of experience in the industry, we understand that
              different organizations have unique processes. That's why we've
              built a flexible, adaptable ERP system that can be tailored to
              your specific needs.
            </p>
            <Separator className="my-6" />
            <h3 className="text-xl font-semibold mb-4">Why Choose NextPage?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-nextpage-600" />
                  <span className="text-gray-700">{achievement}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
