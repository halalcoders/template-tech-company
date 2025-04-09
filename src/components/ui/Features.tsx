import React from "react";
import {
  CheckCircle,
  BarChart,
  Users,
  Clock,
  Shield,
  Smartphone,
  RefreshCw,
  Star,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Features = () => {
  const featuresList = [
    {
      title: "Complete Business Integration",
      description:
        "Manage & integrate all aspects of your business including order entry, inventory, merchandising, production & finance.",
      icon: <BarChart className="h-10 w-10 text-nextpage-600" />,
    },
    {
      title: "Enhanced Decision Making",
      description:
        "Provides the right information to the right people at the right time, improving productivity and decision-making capabilities.",
      icon: <Users className="h-10 w-10 text-nextpage-600" />,
    },
    {
      title: "Time & Cost Efficiency",
      description:
        "Reduce duplicate work and automate operational tasks to save time & cost across your organization.",
      icon: <Clock className="h-10 w-10 text-nextpage-600" />,
    },
    {
      title: "Secure Information Access",
      description:
        "Turn the way of access information easy with proper confidentiality and security protocols.",
      icon: <Shield className="h-10 w-10 text-nextpage-600" />,
    },
    {
      title: "Process Standardization",
      description:
        "Standardize manufacturing processes and improve quality within multiple business units across your company.",
      icon: <Smartphone className="h-10 w-10 text-nextpage-600" />,
    },
    {
      title: "Improved Partner Confidence",
      description:
        "Achieve lower prices, better quality, and quicker delivery, increasing confidence from business partners and buyers.",
      icon: <CheckCircle className="h-10 w-10 text-nextpage-600" />,
    },
    {
      title: "Real-time Analytics",
      description:
        "Access real-time data analytics and insights to make informed business decisions at every level of your organization.",
      icon: <RefreshCw className="h-10 w-10 text-nextpage-600" />,
    },
    {
      title: "Quality Assurance",
      description:
        "Implement and monitor quality control measures throughout your production and delivery process.",
      icon: <Star className="h-10 w-10 text-nextpage-600" />,
    },
  ];

  return (
    <section
      id="features"
      className="py-24 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Powerful Features for Your Business
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            NextPage ERP delivers comprehensive solutions to streamline your
            operations and boost your business growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuresList.map((feature, index) => (
            <Card
              key={index}
              className="bg-white border-none shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-nextpage-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
