import React from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "$499",
      period: "per month",
      description: "Perfect for small businesses just getting started",
      features: [
        "Up to 5 users",
        "Core ERP functionality",
        "Basic reporting",
        "Email support",
        "1 GB storage",
      ],
      highlighted: false,
      buttonText: "Get Started",
    },
    {
      name: "Professional",
      price: "$999",
      period: "per month",
      description: "Ideal for growing businesses with complex needs",
      features: [
        "Up to 20 users",
        "Advanced ERP features",
        "Customizable dashboards",
        "Priority support",
        "10 GB storage",
        "API access",
        "Custom integrations",
      ],
      highlighted: true,
      buttonText: "Try Free for 30 Days",
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "tailored pricing",
      description: "For large organizations requiring full customization",
      features: [
        "Unlimited users",
        "Full feature set",
        "Advanced analytics",
        "24/7 dedicated support",
        "Unlimited storage",
        "On-premise option",
        "Custom development",
        "Personalized training",
      ],
      highlighted: false,
      buttonText: "Contact Sales",
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the plan that's right for your business
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`overflow-hidden transition-all duration-300 ${
                plan.highlighted
                  ? "border-nextpage-500 shadow-xl relative scale-105 z-10"
                  : "hover:shadow-lg border-transparent"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute top-0 left-0 right-0 bg-nextpage-500 text-white text-center py-1 text-sm font-medium">
                  Most Popular
                </div>
              )}
              <CardHeader
                className={`pt-8 ${plan.highlighted ? "pb-4" : "pb-4"}`}
              >
                <CardTitle className="text-2xl font-bold text-center">
                  {plan.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-gray-500 ml-2">{plan.period}</span>
                </div>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                <ul className="space-y-3 text-left mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-nextpage-500 shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="flex justify-center pb-8">
                <Button
                  className={`w-full ${
                    plan.highlighted
                      ? "bg-nextpage-600 hover:bg-nextpage-700"
                      : "bg-white border border-nextpage-600 text-nextpage-600 hover:bg-nextpage-50"
                  }`}
                >
                  {plan.buttonText}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
