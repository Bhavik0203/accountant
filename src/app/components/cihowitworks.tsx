"use client"
import React from 'react';
import Image from 'next/image';
const HowItWorks = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16 ">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
        How It Works
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative">
        {/* Vertical connecting line */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 border-l-2 border-dotted border-teal-500 transform -translate-x-1/2"></div>
        
        {/* Step 1 */}
        <div className="flex flex-col items-start relative">
          <div className="flex items-start w-full">
            <div className="flex-shrink-0 mr-6">
              <div className="w-8 h-8 bg-teal-500 text-white rounded-full flex items-center justify-center font-semibold text-sm relative z-10">
                1
              </div>
            </div>
            
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Setup & Configuration
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-2">
                Connect your content as a data, timeline and brand. The whole world wants to know about your specific business and services.
              </p>
              <p className="text-gray-500 text-xs leading-relaxed">
                Get up and running in as little as 30 days
              </p>
            </div>
          </div>
          
          <div className="mt-8 w-full flex justify-center">
             <Image src="/images/howitwork2.png" alt="Step 1" width={250} height={250} />
          </div>
        </div>

        {/* Step 2 */}
        <div className="flex flex-col items-start relative">
        <div className=" w-full flex justify-center ">
              <Image src="/images/howitwork1.png" alt="Step 2" width={250} height={250} />
          </div>
          <div className="flex mt-8 items-start w-full">
            <div className="flex-shrink-0 mr-6">
              <div className="w-8 h-8 bg-teal-500 text-white rounded-full flex items-center justify-center font-semibold text-sm relative z-10">
                2
              </div>
            </div>
            
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Automated Compliance Tracking
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-2">
                Compliance laws continuously monitors all your business activities and processes automatically.
              </p>
              <p className="text-gray-500 text-xs leading-relaxed">
                Track all your compliance updates again with one-on-one attention to detail
              </p>
            </div>
          </div>
          
          
        </div>

        {/* Step 3 */}
        <div className="flex flex-col items-start relative">
          <div className="flex items-start w-full">
            <div className="flex-shrink-0 mr-6">
              <div className="w-8 h-8 bg-teal-500 text-white rounded-full flex items-center justify-center font-semibold text-sm relative z-10">
                3
              </div>
            </div>
            
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Streamlined Execution
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-2">
                Your team collaborates to streamline compliance with automated workflow management while tracking multiple business processes.
              </p>
              <p className="text-gray-500 text-xs leading-relaxed">
                All processes flow from central collection and workers comply
              </p>
            </div>
          </div>
          
          <div className="mt-8 w-full flex justify-center">
           <Image src="/images/howitwork4.png" alt="Step 3" width={250} height={250} />
          </div>
        </div>

        {/* Step 4 */}
        <div className="flex flex-col items-start relative">
        <div className=" w-full flex justify-center">
              <Image src="/images/howitwork3.png" alt="Step 4" width={250} height={250}/>
          </div>
          <div className="flex mt-8 items-start w-full">
            <div className="flex-shrink-0 mr-6">
              <div className="w-8 h-8 bg-teal-500 text-white rounded-full flex items-center justify-center font-semibold text-sm relative z-10">
                4
              </div>
            </div>
            
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Reporting & Insights
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-2">
                Get clear performance insights and generate automated reports.
              </p>
              <p className="text-gray-500 text-xs leading-relaxed">
                Real-time management and insights deliver immediate results for your business and operations.
              </p>
            </div>
          </div>
          
          
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;