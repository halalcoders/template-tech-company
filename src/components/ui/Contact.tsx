import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Mail, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions about NextPage ERP? Our team is here to help.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-nextpage-500 focus:border-nextpage-500"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-nextpage-500 focus:border-nextpage-500"
                    placeholder="Your email"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-nextpage-500 focus:border-nextpage-500"
                  placeholder="Your company name"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-nextpage-500 focus:border-nextpage-500"
                  placeholder="Tell us about your needs"
                ></textarea>
              </div>
              <Button className="bg-nextpage-600 hover:bg-nextpage-700 text-white w-full py-6">
                Send Message
              </Button>
            </form>
          </div>

          <div className="lg:w-1/2 space-y-8">
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215150902437!2d-73.98568832346177!3d40.75798657138251!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1650000000000!5m2!1sen!2sus"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  title="NextPage Office Location"
                ></iframe>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-nextpage-100 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-nextpage-600" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">
                    Our Office
                  </h3>
                  <p className="text-gray-600">
                    123 Business Avenue, Tech Park, <br />
                    New York, NY 10001
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-nextpage-100 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-nextpage-600" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">
                    Email Us
                  </h3>
                  <p className="text-gray-600">info@nextpage.tech</p>
                  <p className="text-gray-600">support@nextpage.tech</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-nextpage-100 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-nextpage-600" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Call Us</h3>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                  <p className="text-gray-600">+1 (555) 987-6543</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
