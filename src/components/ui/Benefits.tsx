import React from "react";
import { TrendingUp, Zap, Shield, RefreshCw } from "lucide-react";

const Benefits = () => {
  const benefitsList = [
    {
      title: "Increased Productivity",
      description:
        "NextPage ERP streamlines your workflows and automates routine tasks, allowing your team to focus on high-value activities.",
      icon: <TrendingUp className="h-12 w-12 text-white" />,
      bgColor: "bg-nextpage-700",
    },
    {
      title: "Faster Deployment",
      description:
        "Get up and running quickly with our efficient implementation process and dedicated onboarding specialists.",
      icon: <Zap className="h-12 w-12 text-white" />,
      bgColor: "bg-nextpage-700",
    },
    {
      title: "Secure Platform",
      description:
        "Enterprise-grade security features to protect your sensitive business data and ensure compliance with regulations.",
      icon: <Shield className="h-12 w-12 text-white" />,
      bgColor: "bg-nextpage-700",
    },
    {
      title: "Continuous Innovation",
      description:
        "Regular updates and new features based on customer feedback and industry trends to keep your business ahead.",
      icon: <RefreshCw className="h-12 w-12 text-white" />,
      bgColor: "bg-nextpage-700",
    },
  ];

  return (
    <section id="benefits" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            The NextPage Advantage
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover why businesses choose our ERP solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefitsList.map((benefit, index) => (
            <div key={index} className="relative overflow-hidden group">
              <div
                className={`${benefit.bgColor} w-20 h-20 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600">{benefit.description}</p>
              <div className="absolute -bottom-1 left-0 w-0 h-1 bg-nextpage-500 group-hover:w-full transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
