'use client'
import React from 'react';
import { Shield, Lock, Eye, Server, FileCheck, Globe } from 'lucide-react';
import Image from 'next/image';
export default function SecurityReliabilitySection() {
  return (
    <div className=" pt-16 px-8">
      <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
            <span className="text-gray-500">Security </span>and Reliability
          </h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          
          <div className="space-y-8">
            <div>
             
                           
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    Your data is safe with us
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Our enterprise-grade security and robust infrastructure ensures your data is always protected and your business operations are uninterrupted.
                  </p>
                </div>
                
                {/* Security Features */}
               
              </div>
            </div>
            
            
          </div>
          
          {/* Right Illustration */}
         <div>

         </div>
         
        </div>
        <div className="grid lg:grid-cols-2 gap-2 items-center">
          {/* Left Content */}
          
                     <div className="space-y-8 mt-10 flex justify-end items-end">
             <Image src="/images/security.png" alt="Security" width={300} height={300} />
             
             
           </div>
          
          {/* Right Illustration */}
          <div className="space-y-6 mt-10">
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mt-0.5">
                      <FileCheck className="w-3 h-3 text-white" />
                    </div>
                    <p className="text-gray-700 text-sm">
                      <span className="font-semibold">SOC 2 Type II and ISO 27001 certified</span>
                    </p>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mt-0.5">
                      <Lock className="w-3 h-3 text-white" />
                    </div>
                    <p className="text-gray-700 text-sm">
                      <span className="font-semibold">AES-256 Encryption</span> for data at rest and in transit
                    </p>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mt-0.5">
                      <Globe className="w-3 h-3 text-white" />
                    </div>
                    <p className="text-gray-700 text-sm">
                      <span className="font-semibold">GDPR Compliant</span> with comprehensive data privacy protection
                    </p>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mt-0.5">
                      <Server className="w-3 h-3 text-white" />
                    </div>
                    <p className="text-gray-700 text-sm">
                      <span className="font-semibold">99.9% Uptime Guarantee</span> with automated backup and disaster recovery
                    </p>
                  </div>
                </div>
         
        </div>
      </div>
    </div>
  );
}