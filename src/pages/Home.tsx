import {
  LineChart,
  TrendingUp,
  Brain,
  Database,
  GitBranch,
  Share2,
} from "lucide-react";

export function Home() {
  return (
    <div>
      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80"
            alt="Stock Market Background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-6xl font-bold text-white mb-6">
            Stock Market <span className="text-blue-400">Prediction</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Using machine learning to predict stock market movements with high
            accuracy. This project combines time series data analysis, deep
            learning, and data processing techniques to forecast market trends.
          </p>
          <div className="mt-8">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-14 py-3 rounded-lg font-semibold transition duration-300 mr-4">
              <a href="/demo">View Demo</a>
            </button>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="bg-gray-900 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-16">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <LineChart className="w-12 h-12 text-blue-400" />,
                title: "Real-time Analysis",
                description:
                  "Process and analyze market data in real-time for immediate insights",
              },
              {
                icon: <Brain className="w-12 h-12 text-blue-400" />,
                title: "AI-Powered Predictions",
                description:
                  "Advanced machine learning algorithms for accurate market predictions",
              },
              {
                icon: <Database className="w-12 h-12 text-blue-400" />,
                title: "Historical Data",
                description:
                  "Comprehensive historical data analysis for pattern recognition",
              },
              {
                icon: <TrendingUp className="w-12 h-12 text-blue-400" />,
                title: "Trend Detection",
                description:
                  "Automatic identification of market trends and patterns",
              },
              {
                icon: <Share2 className="w-12 h-12 text-blue-400" />,
                title: "Custom Alerts",
                description:
                  "Personalized notifications for market movements and opportunities",
              },
              {
                icon: <GitBranch className="w-12 h-12 text-blue-400" />,
                title: "Portfolio Integration",
                description:
                  "Seamless integration with existing trading platforms",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-gray-800 p-6 rounded-xl hover:transform hover:-translate-y-2 transition duration-300"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-16">
            Technology Stack
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              "Python",
              "TensorFlow",
              "PyTorch",
              "Scikit-learn",
              "React",
              "Flask",
              "MongoDB",
              "Docker",
            ].map((tech, index) => (
              <div
                key={index}
                className="bg-gray-900 p-4 rounded-lg text-center hover:bg-gray-800 transition duration-300"
              >
                <p className="text-lg font-semibold text-blue-400">{tech}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
