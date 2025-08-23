import Image from 'next/image';

// Import your logo images - adjust paths according to your project structure
import dubaiLogo from '../../../public/images/reginal.png';
import uaeLogo from '../../../public/images/reginal1.png';
import adgmLogo from '../../../public/images/reginal2.png';
import gaapLogo from '../../../public/images/accounting1.png';
import ifrsLogo from '../../../public/images/accounting2.png';
import aicdaLogo from '../../../public/images/international1.png';
import iso27001Logo from '../../../public/images/international2.png';
import hipaaLogo from '../../../public/images/international3.png';
import gdprLogo from '../../../public/images/international4.png';
import amlLogo from '../../../public/images/banking1.png';
import santanderLogo from '../../../public/images/banking2.png';
import esrLogo from '../../../public/images/banking3.png';
import euAmlLogo from '../../../public/images/banking4.png';

const RegulatoryCompliance = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 pt-12 pb-20">
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
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-100 shadow-[inset_0_4px_8px_rgba(0,0,0,0.1)]">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Regional Compliance</h2>
          <div className="flex items-center justify-center space-x-6">
            <div className="w-20 h-16  rounded-lg flex items-center justify-center  p-2">
              <Image 
                src={dubaiLogo} 
                alt="Dubai International Financial Centre" 
                width={64} 
                height={48}
                className="object-contain"
              />
            </div>
            <div className="w-20 h-16  rounded-lg flex items-center justify-center  p-2">
              <Image 
                src={uaeLogo} 
                alt="UAE Ministry" 
                width={64} 
                height={48}
                className="object-contain"
              />
            </div>
            <div className="w-24 h-16  rounded-lg flex items-center justify-center  p-2">
              <Image 
                src={adgmLogo} 
                alt="ADGM" 
                width={80} 
                height={48}
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* Accounting Standards */}
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-100 shadow-[inset_0_4px_8px_rgba(0,0,0,0.1)]">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Accounting Standards</h2>
          <div className="flex items-center justify-center space-x-6">
            <div className="w-24 h-16  rounded-lg flex items-center justify-center  p-2">
              <Image 
                src={gaapLogo} 
                alt="GAAP" 
                width={80} 
                height={48}
                className="object-contain"
              />
            </div>
            <div className="w-28 h-16 rounded-lg flex items-center justify-center  p-2">
              <Image 
                src="/images/accounting2.png" 
                alt="IFRS" 
                width={96} 
                height={48}
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>

        {/* International Standards */}
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-100 shadow-[inset_0_4px_8px_rgba(0,0,0,0.1)]">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">International Standards</h2>
          <div className="flex gap-4 items-center justify-center">
            <div className="w-20 h-16 rounded-full flex items-center justify-center  p-2">
              <Image 
                src={aicdaLogo} 
                alt="AICDA" 
                width={64} 
                height={48}
                className="object-contain"
              />
            </div>
            <div className="w-20 h-16  rounded-full flex items-center justify-center  p-2">
              <Image 
                src={iso27001Logo} 
                alt="ISO 27001" 
                width={64} 
                height={48}
                className="object-contain"
              />
            </div>
            <div className="w-20 h-16  rounded-lg flex items-center justify-center  p-2">
              <Image 
                src={hipaaLogo} 
                alt="HIPAA" 
                width={64} 
                height={48}
                className="object-contain"
              />
            </div>
            <div className="w-20 h-16  rounded-full flex items-center justify-center  p-2">
              <Image 
                src={gdprLogo} 
                alt="GDPR" 
                width={64} 
                height={48}
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* Financial & Banking Compliance */}
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-100 shadow-[inset_0_4px_8px_rgba(0,0,0,0.1)]">
         <h2 className="text-xl font-semibold text-gray-900 mb-6">Financial & Banking Compliance</h2>
          <div className="flex gap-4 items-center justify-center">
            <div className="w-20 h-16 rounded-full flex items-center justify-center  p-2">
              <Image 
                src={amlLogo} 
                alt="AML" 
                width={64} 
                height={48}
                className="object-contain"
              />
            </div>
            <div className="w-20 h-16  rounded-lg flex items-center justify-center  p-2">
              <Image 
                src={santanderLogo} 
                alt="Santander" 
                width={64} 
                height={48}
                className="object-contain"
              />
            </div>
            <div className="w-20 h-16  rounded-lg flex items-center justify-center  p-2">
              <Image 
                src={esrLogo} 
                alt="ESR" 
                width={64} 
                height={48}
                className="object-contain"
              />
            </div>
            <div className="w-20 h-16  rounded-lg flex items-center justify-center  p-2">
              <Image 
                src={euAmlLogo} 
                alt="EU AML" 
                width={64} 
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