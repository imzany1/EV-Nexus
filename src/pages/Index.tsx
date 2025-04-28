
import { Link } from "react-router-dom";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
import HeroSection from "@/components/Landing/HeroSection";
import FeaturesSection from "@/components/Landing/FeaturesSection";
import ResourcesSection from "@/components/Landing/ResourcesSection";
import TestimonialsSection from "@/components/Landing/TestimonialsSection";
import CTASection from "@/components/Landing/CTASection";

const Index = () => {
  // Mock data for featured resources
  const featuredResources = [
    {
      id: "1",
      title: "Introduction to Machine Learning",
      description: "A comprehensive guide to understanding machine learning fundamentals",
      author: "Dr. Sarah Chen",
      type: "PDF",
      rating: 4.8,
    },
    {
      id: "2",
      title: "Web Development Masterclass",
      description: "Learn modern web development with React, Node.js, and MongoDB",
      author: "Alex Johnson",
      type: "Video",
      rating: 4.9,
    },
    {
      id: "3",
      title: "Data Structures and Algorithms",
      description: "Essential concepts for coding interviews and software development",
      author: "Michael Smith",
      type: "Course",
      rating: 4.7,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <ResourcesSection resources={featuredResources} />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
