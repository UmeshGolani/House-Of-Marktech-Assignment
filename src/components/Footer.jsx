import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Company</h3>
            <ul>
              <li className="mb-2"><a href="#" className="hover:text-blue-400 transition duration-300">About Us</a></li>
              <li className="mb-2"><a href="#" className="hover:text-blue-400 transition duration-300">Careers</a></li>
              <li className="mb-2"><a href="#" className="hover:text-blue-400 transition duration-300">Blog</a></li>
              <li className="mb-2"><a href="#" className="hover:text-blue-400 transition duration-300">Press</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul>
              <li className="mb-2"><a href="#" className="hover:text-blue-400 transition duration-300">Web Development</a></li>
              <li className="mb-2"><a href="#" className="hover:text-blue-400 transition duration-300">Mobile Apps</a></li>
              <li className="mb-2"><a href="#" className="hover:text-blue-400 transition duration-300">UI/UX Design</a></li>
              <li className="mb-2"><a href="#" className="hover:text-blue-400 transition duration-300">Cloud Services</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Resources</h3>
            <ul>
              <li className="mb-2"><a href="#" className="hover:text-blue-400 transition duration-300">Documentation</a></li>
              <li className="mb-2"><a href="#" className="hover:text-blue-400 transition duration-300">Help Center</a></li>
              <li className="mb-2"><a href="#" className="hover:text-blue-400 transition duration-300">API Reference</a></li>
              <li className="mb-2"><a href="#" className="hover:text-blue-400 transition duration-300">Partners</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <p className="mb-2">123 Tech Street</p>
            <p className="mb-2">San Francisco, CA 94107</p>
            <p className="mb-2">contact@example.com</p>
            <p className="mb-2">(123) 456-7890</p>
            <div className="flex mt-4">
              <a href="#" className="mr-4 hover:text-blue-400 transition duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="mr-4 hover:text-blue-400 transition duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
                </svg>
              </a>
              <a href="#" className="mr-4 hover:text-blue-400 transition duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"/>
                </svg>
              </a>
              <a href="#" className="hover:text-blue-400 transition duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.441 16.892c-2.102.144-6.784.144-8.883 0-2.276-.156-2.541-1.27-2.558-4.892.017-3.629.285-4.736 2.558-4.892 2.099-.144 6.782-.144 8.883 0 2.277.156 2.541 1.27 2.559 4.892-.018 3.629-.285 4.736-2.559 4.892zm-6.441-7.234l4.917 2.338-4.917 2.346v-4.684z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;