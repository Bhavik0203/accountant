import bgImage from '../../../public/images/aboutus.png'

export default function AboutUsPage() {
  return (
    <div className="bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${bgImage.src})` }}>
      {/* Header */}
      
      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 items-center min-h-[600px] py-12">
          
          {/* Left Content */}
          <div className="lg:col-span-2 space-y-4">
            <div className="space-y-2">
              <h1 className="text-4xl lg:text-5xl font-bold text-[#213AC8] leading-tight drop-shadow-md">
                Complete Software Suite
                <span className="text-[#303030] bg-clip-text text-4xl lg:text-5xl font-bold leading-tight"> for Chartered Accountants</span>
              </h1>
              <h3 className="text-4xl lg:text-5xl font-bold text-[#213AC8] leading-tight drop-shadow-md">
                and Finance Professionals
              </h3>
            </div>
            
            <p className="text-gray-600 text-lg leading-relaxed max-w-lg font-medium">
              All-in-one platform for compliance, audit, financial 
              management, and analytics.
            </p>
            
            <button className="bg-[#213AC8] text-white cursor-pointer px-10 py-4 rounded-xl text-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl border-0">
              Start Free Trial
            </button>
          </div>
          
          {/* Right Content - Hero Image */}
          
        </div>
      </main>
    </div>
  )
}