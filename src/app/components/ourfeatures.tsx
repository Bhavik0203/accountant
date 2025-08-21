"use client"
import bg2 from '../../../public/images/bg2.png';
export default function OurFeatures() {
  return (
    <div className="bg-cover bg-center bg-no-repeat p-8" style={{ backgroundImage: `url(${bg2.src})` }}>
    
    <div className="max-w-6xl mx-auto px-6 pb-10">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
        Our Features
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Feature 1 */}
        <div className="bg-gray-200 rounded-lg p-8">
          <h3 className="text-xl font-semibold mb-4 text-gray-900">
            Gain complete visibility in an instant
          </h3>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Real-time dashboards turn complex data into actionable insights, providing executive-level visibility 
            into compliance health, upcoming deadlines, and performance metrics
          </p>
          <ul className="space-y-2 mb-6">
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span className="text-gray-700">Real-time insights on a single screen</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span className="text-gray-700">Performance metrics and deadline tracking</span>
            </li>
          </ul>
          <button className="text-blue-600 hover:text-blue-800 font-medium">
            Read More
          </button>
        </div>

        {/* Feature 2 */}
        <div className="bg-gray-200 rounded-lg p-8">
          <h3 className="text-xl font-semibold mb-4 text-gray-900">
            Collaborate effortlessly on every task
          </h3>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Dedicated workspaces are designed for compliance projects, with structured workflows, task assignment, 
            and communication tools all in one place. Improve team productivity by 60% through enhanced collaboration
          </p>
          <ul className="space-y-2 mb-6">
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span className="text-gray-700">Structured workflows and task assignment 14</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span className="text-gray-700">Integrated communication for seamless teamwork 15</span>
            </li>
          </ul>
          <button className="text-blue-600 hover:text-blue-800 font-medium">
            Read More
          </button>
        </div>

        {/* Feature 3 */}
        <div className="bg-gray-200 rounded-lg p-8">
          <h3 className="text-xl font-semibold mb-4 text-gray-900">
            Keep all your documents audit-ready.
          </h3>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Automatically classify, organize, and manage all your compliance evidence in a centralized repository. 
            Advanced search and comprehensive version control ensure your documents are always audit-ready. Reduce 
            audit preparation time by 80%
          </p>
          <ul className="space-y-2 mb-6">
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span className="text-gray-700">Automated document classification and storage</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span className="text-gray-700">Advanced search and version control</span>
            </li>
          </ul>
          <button className="text-blue-600 hover:text-blue-800 font-medium">
            Read More
          </button>
        </div>

        {/* Feature 4 */}
        <div className="bg-gray-200 rounded-lg p-8">
          <h3 className="text-xl font-semibold mb-4 text-gray-900">
            Universal compliance, no manual work
          </h3>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Our ERP-agnostic integration ensures seamless compliance with all regional e-invoicing regulations. 
            Automated submission to government portals means you achieve 100% e-invoicing compliance with zero 
            manual intervention
          </p>
          <ul className="space-y-2 mb-6">
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span className="text-gray-700">Seamless integration with any ERP system</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span className="text-gray-700">Automated submission to government portals</span>
            </li>
          </ul>
          <button className="text-blue-600 hover:text-blue-800 font-medium">
            Read More
          </button>
        </div>
      </div>
    </div>
    </div>
  );
}