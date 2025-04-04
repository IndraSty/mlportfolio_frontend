import { Brain, LineChart, Target } from 'lucide-react';

export function About() {
  return (
    <div className="pt-16">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-white mb-8">About Project</h1>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gray-800 p-6 rounded-lg">
            <div className="mb-4">
              <Brain className="w-12 h-12 text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Challenge</h3>
            <p className="text-gray-400">
              The stock market is highly volatile and influenced by numerous external factors, making predictions challenging. Our goal is to overcome these complexities using advanced AI.
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg">
            <div className="mb-4">
              <LineChart className="w-12 h-12 text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Approach</h3>
            <p className="text-gray-400">
              We combine historical price data with market sentiment and economic indicators to create a comprehensive prediction model.
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg">
            <div className="mb-4">
              <Target className="w-12 h-12 text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Goal</h3>
            <p className="text-gray-400">
              Develop a system that can provide accurate predictions to assist in making informed investment decisions.
            </p>
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-white mb-4">The Vision</h2>
          <p className="text-gray-400 leading-relaxed">
            We aim to democratize access to advanced market prediction tools, making sophisticated analysis available to both individual and institutional investors. By leveraging cutting-edge machine learning technologies, we're building a future where data-driven investment decisions are accessible to everyone.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-800 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Research Background</h2>
            <p className="text-gray-400 leading-relaxed">
              Our research combines traditional technical analysis with modern machine learning approaches. We've analyzed decades of market data and tested multiple prediction models to develop our current system.
            </p>
          </div>

          <div className="bg-gray-800 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Future Development</h2>
            <p className="text-gray-400 leading-relaxed">
              We're continuously improving our models and expanding our analysis to include more market factors. Future updates will include real-time sentiment analysis and advanced portfolio optimization tools.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}