import React from "react";
import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/ui/Hero";
import Features from "@/components/ui/Features";
import Benefits from "@/components/ui/Benefits";
import Testimonials from "@/components/ui/Testimonials";
import AboutUs from "@/components/ui/AboutUs";
import Pricing from "@/components/ui/Pricing";
import Contact from "@/components/ui/Contact";
import CallToAction from "@/components/ui/CallToAction";
import Footer from "@/components/ui/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        <Hero />
        <Features />
        <Benefits />
        <AboutUs />
        <Testimonials />
        <Pricing />
        <Contact />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
