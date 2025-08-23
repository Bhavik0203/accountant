'use client'
import { useState, useEffect, useRef } from 'react';
import { Star } from 'lucide-react';

export default function SuccessStory() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const testimonials = [
    {
      id: 1,
      profileImage: "/images/profile1.jpg", // You'll need to add these images
      rating: 4.5,
      review: "The automated compliance tracking saved us 50+ hours per week. Our audit preparation time decreased from weeks to days.",
      author: "Mohammed Al-Rashid",
      position: "Compliance Director",
      company: "Devotion Financial Services"
    },
    {
      id: 2,
      profileImage: "/images/profile2.jpg",
      rating: 4.5,
      review: "Compliance Inbox reduced our compliance workload by 60% while improving accuracy. We now focus on strategic advisory as risks instead of administrative tasks.",
      author: "Sarah Ahmed",
      position: "Managing Partner",
      company: "SaaS Consulting Associates"
    },
    {
      id: 3,
      profileImage: "/images/profile3.jpg",
      rating: 4.5,
      review: "Multi-jurisdiction compliance became manageable with centralized workflows. We expanded to new markets with confidence.",
      author: "Priya Sharma",
      position: "Regional Manager",
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
      className="px-4 py-10 relative overflow-hidden shadow-[0_-35px_60px_-12px_rgba(0,0,0,0.20)] bg-white" 
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