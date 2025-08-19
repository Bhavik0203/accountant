import React from 'react';

const Footer = () => {
  return (
    <footer className=" text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* QUICK LINKS Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b border-white pb-2">QUICK LINKS</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-300 transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-gray-300 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-gray-300 transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-gray-300 transition-colors">Products</a></li>
              <li><a href="#" className="hover:text-gray-300 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* PRODUCTS Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b border-white pb-2">PRODUCTS</h3>
            <div className="grid grid-cols-1 gap-2">
              <div className="space-y-2">
                <div>Compliance Inbox</div>
                <div>Audit Flow Inbox</div>
                <div>Financial Statement Inbox</div>
                <div>Analytics Inbox</div>
              </div>
              <div className="space-y-2 mt-4">
                <div>Timesheet & Profitability Tracking Software</div>
                <div>Expense Management Software</div>
                <div>Invoicing Software</div>
              </div>
            </div>
          </div>

          {/* CONTACT US Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b border-white pb-2">CONTACT US</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>(123) 456-7890</span>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>contact@accounttechlab.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>3042 Lisa Ranch</span>
              </div>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="flex flex-col items-end space-y-4">
            <div className="flex space-x-4">
              {/* Twitter/X Icon */}
              <a href="#" className="hover:text-gray-300 transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </a>
              
              {/* Facebook Icon */}
              <a href="#" className="hover:text-gray-300 transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              
              {/* Instagram Icon */}
              <a href="#" className="hover:text-gray-300 transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
