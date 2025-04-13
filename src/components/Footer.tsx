import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 pt-16">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* First column */}
          <div>
            <h2 className="text-xl font-bold mb-4">Stock Market Prediction</h2>
            <p className="mb-3 text-gray-300">
              Machine learning project to predict stock market movements using
              various machine learning techniques and data analysis.
            </p>
            <p className="text-gray-300">
              This portfolio was developed as part of studies and research in
              the fields of AI and data science.
            </p>
          </div>

          {/* Second column */}
          <div className="text-center sm:text-left lg:text-center">
            <h2 className="text-xl font-bold mb-4">Links</h2>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="/models" className="text-gray-300 hover:text-white transition-colors">
                  Models
                </a>
              </li>
              <li>
                <a href="/results" className="text-gray-300 hover:text-white transition-colors">
                  Results
                </a>
              </li>
              <li>
                <a href="/demo" className="text-gray-300 hover:text-white transition-colors">
                  Demo
                </a>
              </li>
            </ul>
          </div>

          {/* Third column */}
          <div className="text-center sm:text-right">
            <h2 className="text-xl font-bold mb-4">Contact</h2>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:indrastyawan0925@gmail.com"
                  className="text-gray-300 hover:text-white transition-colors flex items-center justify-center sm:justify-end gap-2"
                >
                  <Mail size={16} />
                  <span>indrastyawan0925@gmail.com</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://www.linkedin.com/in/indrastyawan25/" 
                  className="text-gray-300 hover:text-white transition-colors flex items-center justify-center sm:justify-end gap-2"
                >
                  <Linkedin size={16} />
                  <span>LinkedIn</span>
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-gray-300 hover:text-white transition-colors flex items-center justify-center sm:justify-end gap-2"
                >
                  <Twitter size={16} />
                  <span>Twitter</span>
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-gray-300 hover:text-white transition-colors flex items-center justify-center sm:justify-end gap-2"
                >
                  <Github size={16} />
                  <span>GitHub Repo</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Copyright */}
        <div className="text-center text-gray-400">
          <p>© 2025 Stock Market Prediction Project. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;