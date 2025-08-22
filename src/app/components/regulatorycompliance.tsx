import Image from 'next/image';

// Import your logo images - adjust paths according to your project structure
import dubaiLogo from '';
import uaeLogo from '/public/logos/uae-ministry.png';
import adgmLogo from '/public/logos/adgm.png';
import gaapLogo from '/public/logos/gaap.png';
import ifrsLogo from '/public/logos/ifrs.png';
import aicdaLogo from '/public/logos/aicda.png';
import iso27001Logo from '/public/logos/iso27001.png';
import hipaaLogo from '/public/logos/hipaa.png';
import gdprLogo from '/public/logos/gdpr.png';
import amlLogo from '/public/logos/aml.png';
import santanderLogo from '/public/logos/santander.png';
import esrLogo from '/public/logos/esr.png';
import euAmlLogo from '/public/logos/eu-aml.png';

const RegulatoryCompliance = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Your regulatory coverage is our priority
        </h1>
        <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed">
          From regional tax laws to international standards, Compliance Inbox supports over 50 compliance frameworks. Our platform provides 
          automated tracking and reporting, so you're always up-to-date and in compliance.
        </p>
      </div>

      {/* Compliance Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Regional Compliance */}
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-100">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Regional Compliance</h2>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-sm">
                <Image 
                  src={dubaiLogo} 
                  alt="Dubai International Financial Centre" 
                  width={48} 
                  height={48}
                  className="object-contain"
                />
              </div>
              <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-sm">
                <Image 
                  src={uaeLogo} 
                  alt="UAE Ministry" 
                  width={48} 
                  height={48}
                  className="object-contain"
                />
              </div>
            </div>
            <div className="w-20 h-16 bg-white rounded-lg flex items-center justify-center shadow-sm">
              <Image 
                src={adgmLogo} 
                alt="ADGM" 
                width={64} 
                height={48}
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* Accounting Standards */}
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-100">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Accounting Standards</h2>
          <div className="flex items-center justify-between">
            <div className="w-20 h-16 bg-white rounded-lg flex items-center justify-center shadow-sm">
              <Image 
                src={gaapLogo} 
                alt="GAAP" 
                width={64} 
                height={48}
                className="object-contain"
              />
            </div>
            <div className="w-24 h-16 bg-white rounded-lg flex items-center justify-center shadow-sm">
              <Image 
                src={ifrsLogo} 
                alt="IFRS" 
                width={80} 
                height={48}
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* International Standards */}
        <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl p-8 border border-green-100">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">International Standards</h2>
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm">
              <Image 
                src={aicdaLogo} 
                alt="AICDA" 
                width={48} 
                height={48}
                className="object-contain"
              />
            </div>
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm">
              <Image 
                src={iso27001Logo} 
                alt="ISO 27001" 
                width={48} 
                height={48}
                className="object-contain"
              />
            </div>
            <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-sm">
              <Image 
                src={hipaaLogo} 
                alt="HIPAA" 
                width={48} 
                height={48}
                className="object-contain"
              />
            </div>
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm">
              <Image 
                src={gdprLogo} 
                alt="GDPR" 
                width={48} 
                height={48}
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* Financial & Banking Compliance */}
        <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 border border-orange-100">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Financial & Banking Compliance</h2>
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm">
              <Image 
                src={amlLogo} 
                alt="AML" 
                width={48} 
                height={48}
                className="object-contain"
              />
            </div>
            <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-sm">
              <Image 
                src={santanderLogo} 
                alt="Santander" 
                width={48} 
                height={48}
                className="object-contain"
              />
            </div>
            <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-sm">
              <Image 
                src={esrLogo} 
                alt="ESR" 
                width={48} 
                height={48}
                className="object-contain"
              />
            </div>
            <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-sm">
              <Image 
                src={euAmlLogo} 
                alt="EU AML" 
                width={48} 
                height={48}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegulatoryCompliance;