import { Brain, LineChart, Network } from "lucide-react";

export function Models() {
  const models = [
    {
      icon: <Brain className="w-12 h-12 text-blue-400" />,
      name: "LSTM Networks",
      description:
        "Long Short-Term Memory networks excel at analyzing time series data and capturing long-term patterns in stock prices.",
      features: [
        "Sequential data processing",
        "Long-term dependency learning",
        "Robust pattern recognition",
        "Real-time prediction capability",
      ],
    },
    {
      icon: <Network className="w-12 h-12 text-blue-400" />,
      name: "Ensemble Methods",
      description:
        "Combining multiple models like Random Forest and Gradient Boosting to improve prediction accuracy.",
      features: [
        "Multiple model integration",
        "Reduced overfitting",
        "Higher prediction stability",
        "Automated feature selection",
      ],
    },
    {
      icon: <LineChart className="w-12 h-12 text-blue-400" />,
      name: "Transformer Models",
      description:
        "Using Transformer architecture to capture complex relationships in market data and enhance prediction capabilities.",
      features: [
        "Attention mechanism",
        "Parallel processing",
        "Multi-factor analysis",
        "Scalable architecture",
      ],
    },
  ];

  return (
    <div className="pt-16">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-white mb-8">
          Our Prediction Models
        </h1>

        <p className="text-gray-300 text-lg mb-12">
          We employ multiple advanced machine learning models, each optimized
          for specific aspects of market prediction.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {models.map((model, index) => (
            <div key={index} className="bg-gray-800 rounded-lg p-6">
              <div className="mb-4">{model.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {model.name}
              </h3>
              <p className="text-gray-400 mb-4">{model.description}</p>
              <ul className="space-y-2">
                {model.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="text-gray-400 flex items-center"
                  >
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="mt-6 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold transition duration-300">
                Learn More
              </button>
            </div>
          ))}
        </div>

        <div className="bg-gray-800 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-white mb-4">
            Model Performance
          </h2>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-gray-700 p-4 rounded-lg text-center">
              <p className="text-3xl font-bold text-blue-400 mb-2">87%</p>
              <p className="text-gray-300">Prediction Accuracy</p>
            </div>
            <div className="bg-gray-700 p-4 rounded-lg text-center">
              <p className="text-3xl font-bold text-blue-400 mb-2">0.92</p>
              <p className="text-gray-300">RMSE Score</p>
            </div>
            <div className="bg-gray-700 p-4 rounded-lg text-center">
              <p className="text-3xl font-bold text-blue-400 mb-2">0.78</p>
              <p className="text-gray-300">F1 Score</p>
            </div>
            <div className="bg-gray-700 p-4 rounded-lg text-center">
              <p className="text-3xl font-bold text-blue-400 mb-2">1.8%</p>
              <p className="text-gray-300">MAE</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
