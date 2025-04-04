const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 pt-16">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:justify-between gap-4">
          {/* First column */}
          <div className="flex-1">
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
          <div className="flex-1">
            <h2 className="text-xl font-bold mb-4 text-center">Links</h2>
            <ul className="space-y-2 text-center">
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Model
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Results
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Demo
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Third column */}
          <div className="flex-1 text-right">
            <h2 className="text-xl font-bold mb-4">Contact</h2>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:indrastyawan0925@gmail.com"
                  className="text-gray-300 hover:text-white"
                >
                  indrastyawan0925@gmail.com
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/indrastyawan25/" className="text-gray-300 hover:text-white">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  GitHub Repo
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
