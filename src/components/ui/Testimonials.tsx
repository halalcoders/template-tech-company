import React from "react";
import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      name: "James Anderson",
      position: "CEO, TechForge",
      quote:
        "NextPage ERP transformed our operations completely. The customization options allowed us to tailor the system exactly to our workflow needs.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=150&h=150&auto=format&fit=crop",
    },
    {
      name: "Michael Chen",
      position: "Operations Director, Global Manufacturing",
      quote:
        "The real-time analytics provided by NextPage give us actionable insights that have improved our decision-making process significantly.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&h=150&auto=format&fit=crop",
    },
    {
      name: "David Martinez",
      position: "CTO, Retail Solutions",
      quote:
        "The implementation process was smooth and the support team is exceptional. NextPage has become an essential part of our technology stack.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=150&h=150&auto=format&fit=crop",
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trusted by industry leaders across the globe
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-white border-none shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden h-full"
            >
              <CardContent className="p-8 flex flex-col h-full">
                <div className="mb-4 text-nextpage-500">
                  <Quote className="h-10 w-10 opacity-50" />
                </div>
                <p className="text-gray-700 italic mb-6 flex-grow">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-nextpage-400 text-nextpage-400"
                    />
                  ))}
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-nextpage-100 flex items-center justify-center">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-500">
                      {testimonial.position}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
