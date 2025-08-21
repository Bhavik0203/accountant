"use client"
import React from 'react';

const HowItWorks = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16 ">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
        How It Works
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative">
        {/* Vertical connecting line */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-teal-500 via-teal-400 to-teal-500 transform -translate-x-1/2"></div>
        
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
            <div className="relative w-32 h-32 mx-auto">
              <div className="absolute top-4 left-8 w-16 h-20 bg-blue-100 rounded-lg border-2 border-blue-200">
                <div className="w-full h-2 bg-blue-300 rounded-t-md"></div>
                <div className="p-2 space-y-1">
                  <div className="w-8 h-1 bg-blue-400 rounded"></div>
                  <div className="w-10 h-1 bg-blue-300 rounded"></div>
                  <div className="w-6 h-1 bg-blue-300 rounded"></div>
                </div>
              </div>
              <div className="absolute bottom-0 right-4">
                <div className="w-8 h-12 bg-gray-800 rounded-t-full"></div>
                <div className="w-6 h-6 bg-pink-300 rounded-full mx-auto -mt-1"></div>
                <div className="w-3 h-8 bg-blue-600 mx-auto"></div>
                <div className="flex space-x-1 mt-1">
                  <div className="w-2 h-4 bg-gray-800 rounded"></div>
                  <div className="w-2 h-4 bg-gray-800 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Step 2 */}
        <div className="flex flex-col items-start relative">
        <div className=" w-full flex justify-center">
            <div className="relative w-32 h-32 mx-auto">
              <div className="absolute top-2 right-8">
                <div className="w-8 h-12 bg-gray-800 rounded-t-full"></div>
                <div className="w-6 h-6 bg-pink-300 rounded-full mx-auto -mt-1"></div>
                <div className="w-3 h-8 bg-blue-600 mx-auto"></div>
                <div className="flex space-x-1 mt-1">
                  <div className="w-2 h-4 bg-gray-800 rounded"></div>
                  <div className="w-2 h-4 bg-gray-800 rounded"></div>
                </div>
              </div>
              <div className="absolute bottom-4 left-4 w-2 h-8 bg-purple-500 rounded"></div>
              <div className="absolute bottom-8 left-8 w-2 h-6 bg-blue-500 rounded"></div>
              <div className="absolute bottom-6 left-12 w-2 h-4 bg-green-500 rounded"></div>
              <div className="absolute bottom-2 left-16 w-2 h-10 bg-orange-500 rounded"></div>
            </div>
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
            <div className="relative w-32 h-32 mx-auto">
              <div className="absolute top-8 left-4">
                <div className="w-8 h-12 bg-gray-800 rounded-t-full"></div>
                <div className="w-6 h-6 bg-pink-300 rounded-full mx-auto -mt-1"></div>
                <div className="w-3 h-8 bg-orange-500 mx-auto"></div>
                <div className="flex space-x-1 mt-1">
                  <div className="w-2 h-4 bg-gray-800 rounded"></div>
                  <div className="w-2 h-4 bg-gray-800 rounded"></div>
                </div>
              </div>
              <div className="absolute top-4 right-8 w-16 h-12 bg-gray-100 rounded-lg border">
                <div className="p-1 space-y-1">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-blue-400 rounded"></div>
                    <div className="w-2 h-2 bg-green-400 rounded"></div>
                  </div>
                  <div className="w-8 h-1 bg-gray-300 rounded"></div>
                  <div className="w-6 h-1 bg-gray-300 rounded"></div>
                </div>
              </div>
              <div className="absolute bottom-8 right-4">
                <svg className="w-8 h-8 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Step 4 */}
        <div className="flex flex-col items-start relative">
        <div className=" w-full flex justify-center">
            <div className="relative w-32 h-32 mx-auto">
              <div className="absolute top-4 left-8">
                <div className="w-8 h-12 bg-gray-800 rounded-t-full"></div>
                <div className="w-6 h-6 bg-pink-300 rounded-full mx-auto -mt-1"></div>
                <div className="w-3 h-8 bg-gray-600 mx-auto"></div>
                <div className="flex space-x-1 mt-1">
                  <div className="w-2 h-4 bg-gray-800 rounded"></div>
                  <div className="w-2 h-4 bg-gray-800 rounded"></div>
                </div>
              </div>
              <div className="absolute bottom-8 right-4">
                <div className="w-8 h-12 bg-indigo-900 rounded-t-full"></div>
                <div className="w-6 h-6 bg-pink-300 rounded-full mx-auto -mt-1"></div>
                <div className="w-3 h-8 bg-purple-600 mx-auto"></div>
                <div className="flex space-x-1 mt-1">
                  <div className="w-2 h-4 bg-indigo-900 rounded"></div>
                  <div className="w-2 h-4 bg-indigo-900 rounded"></div>
                </div>
              </div>
              <div className="absolute top-8 right-8 w-12 h-8 bg-gray-100 rounded border">
                <div className="p-1">
                  <div className="flex items-end space-x-1 h-4">
                    <div className="w-1 h-2 bg-blue-400 rounded-t"></div>
                    <div className="w-1 h-3 bg-green-400 rounded-t"></div>
                    <div className="w-1 h-4 bg-purple-400 rounded-t"></div>
                    <div className="w-1 h-1 bg-orange-400 rounded-t"></div>
                  </div>
                </div>
              </div>
            </div>
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