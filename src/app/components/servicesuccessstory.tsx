'use client'
import { useState, useEffect, useRef } from 'react';
import { Star } from 'lucide-react';

export default function ServicesSuccessStory() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const testimonials = [
    {
      id: 1,
      profileImage: "/images/profile1.jpg", // You'll need to add these images
      rating: 4.5,
      review: "It has completely transformed how we manage our finances and tech stack. What used to take hours of juggling spreadsheets and tools now happens seamlessly in one place.",
      author: "Sarah L",
      position: "Founder Of BrightPath",
      company: "Emirates Financial Services"
    },
    {
      id: 2,
      profileImage: "/images/profile2.jpg",
      rating: 4.5,
      review: "I finally feel in control of both my books and technology. The clarity and guidance I've gotten here not only saved me money but also gave me the confidence to scale.",
      author: "Sarah Ahmed",
      position: "Managing Partner",
      company: "Gulf Accounting Associates"
    },
    {
      id: 3,
      profileImage: "/images/profile3.jpg",
      rating: 4.5,
      review: "As a CFO, I need precision and speed. Account & Tech Lab delivers both. From smart accounting insights to streamlined tech integrations, it's the most reliable support system we've had in years",
      author: "Emily R",
      position: "CFO At NovaTech",
      company: "International Business Solutions"
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

  return (
    <div 
      ref={sectionRef}
      className="px-4 py-10 relative overflow-hidden  " 
     
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
             <span className="text-gray-500">Customer </span>Success Stories
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div 
          className={`grid md:grid-cols-3 gap-8 transition-all duration-1000 ease-out delay-300 transform ${
            isVisible 
              ? 'translate-y-0 opacity-100' 
              : 'translate-y-16 opacity-0'
          }`}
        >
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              {/* Profile Image and Rating Row */}
             {/* Profile Picture and Rating Row */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-300 rounded-full mr-4 flex items-center justify-center">
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white font-semibold">
                    {testimonial.author.split(' ').map(n => n[0]).join('')}
                  </div>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="text-gray-800 font-semibold mr-2">{testimonial.rating}</span>
                  <Star className="w-5 h-5 fill-blue-500 text-blue-500" />
                </div>
              </div>

              {/* Review */}
              <p className="text-gray-700 mb-6 leading-relaxed text-sm">
                "{testimonial.review}"
              </p>

              {/* Author */}
              <div>
                <div className="font-semibold text-gray-900 mb-1 text-base">
                  {testimonial.author}, {testimonial.position}
                </div>
                <div className="text-gray-500 text-sm">
                  {testimonial.company}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}