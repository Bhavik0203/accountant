'use client'
import { useState, useEffect, useRef } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

export default function TestimonialSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const testimonials = [
    {
      id: 1,
      logo: "LOOO",
      rating: 4.5,
      review: "This software saved us 15+ hours per month on audit prep. The insights are invaluable.",
      author: "Sanjay Sharma",
      position: "Chartered Accountant, Mehta & Co"
    },
    {
      id: 2,
      logo: "LOOO", 
      rating: 4.5,
      review: "The most complete platform we've used so far. It replaced 2 separate tools for compliance, audits, and reporting.",
      author: "Ankit Desai",
      position: "Chartered Accountant, Desai & Co."
    },
    {
      id: 3,
      logo: "LOOO",
      rating: 4.5,
      review: "As a Company Secretary, regulatory compliance is everything. This software keeps me updated and audit-ready every day.",
      author: "Meghna Kapoor",
      position: "CS, MK Corporate Services"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div 
    ref={sectionRef}
    className="px-4 py-10 relative overflow-hidden bg-white" 
    style={{ borderRadius: '160px 160px 0 0' }}
  >
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div 
          className={`text-center mb-16 transition-all duration-1000 ease-out transform ${
            isVisible 
              ? 'translate-y-0 opacity-100' 
              : 'translate-y-16 opacity-0'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-[#303030]/50">Trusted by</span>
            <br />
            <span className="text-[#303030]">Professionals Across the Industry</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed text-lg">
            hear from Chartered Accountants, Company Secretaries, and Finance Teams who trust our platform to streamline operations, improve compliance, and boost productivity.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div 
          className={`grid md:grid-cols-3 gap-8 mb-16 transition-all duration-1000 ease-out delay-300 transform ${
            isVisible 
              ? 'translate-y-0 opacity-100' 
              : 'translate-y-16 opacity-0'
          }`}
        >
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 shadow-blue-200 hover:shadow-blue-300"
            >
              {/* Profile Image and Rating Row */}
              <div className="flex justify-between items-start mb-6">
                <div className="text-gray-400 font-semibold text-sm tracking-wider">
                  {testimonial.logo}
                </div>
                <div className="flex items-center">
                  <span className="text-gray-800 font-semibold mr-2">{testimonial.rating}</span>
                  <Star className="w-5 h-5 fill-blue-500 text-blue-500" />
                </div>
              </div>

              {/* Review */}
              <p className="text-gray-700 mb-8 leading-relaxed text-base">
                "{testimonial.review}"
              </p>

              {/* Author */}
              <div>
                <div className="font-semibold text-gray-900 mb-1 text-lg">
                  {testimonial.author}
                </div>
                <div className="text-gray-600 text-sm">
                  {testimonial.position}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center space-x-6">
          {/* Previous Button */}
          <button
            onClick={prevSlide}
            className="w-12 h-12 rounded-xl cursor-pointer bg-blue-100 hover:bg-blue-200 flex items-center justify-center transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-blue-600" />
          </button>

          {/* Dots */}
          <div className="flex space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full cursor-pointer transition-colors ${
                  index === currentSlide ? 'bg-gray-700' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            className="w-12 h-12 rounded-xl cursor-pointer bg-blue-600 hover:bg-blue-700 flex items-center justify-center transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}