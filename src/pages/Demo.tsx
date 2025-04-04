import React, { useState } from 'react';
import { LineChart, TrendingUp as ArrowTrendingUp } from 'lucide-react';

interface PredictionResult {
  price: number;
  change: number;
}

export function Demo() {
  const [stock, setStock] = useState('AAPL');
  const [period, setPeriod] = useState('1');
  const [model, setModel] = useState('LSTM');
  const [result, setResult] = useState<PredictionResult | null>(null);
  const [loading, setLoading] = useState(false);

  const stocks = [
    { symbol: 'AAPL', name: 'Apple Inc.' },
    { symbol: 'GOOGL', name: 'Alphabet Inc.' },
    { symbol: 'MSFT', name: 'Microsoft Corporation' },
    { symbol: 'AMZN', name: 'Amazon.com Inc.' },
    { symbol: 'META', name: 'Meta Platforms Inc.' }
  ];

  const periods = [
    { value: '1', label: '1 Day' },
    { value: '7', label: '1 Week' },
    { value: '30', label: '1 Month' },
    { value: '90', label: '3 Months' }
  ];

  const models = [
    { value: 'LSTM', label: 'LSTM Network' },
    { value: 'XGBoost', label: 'XGBoost' },
    { value: 'RandomForest', label: 'Random Forest' },
    { value: 'LGB', label: 'LightBoost' }
  ];

  const handlePredict = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      setResult({
        price: 152.78,
        change: 2.4
      });
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="pt-16">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-white mb-8">Prediction Demo</h1>
        
        <p className="text-gray-300 text-lg mb-12">
          Try the prediction system by selecting a stock and parameters you want to analyze.
        </p>

        <div className="bg-gray-800 rounded-lg p-8">
          <form onSubmit={handlePredict} className="space-y-6">
            {/* Stock Selection */}
            <div>
              <label htmlFor="stock" className="block text-lg font-medium text-white mb-2">
                Select Stock
              </label>
              <select
                id="stock"
                value={stock}
                onChange={(e) => setStock(e.target.value)}
                className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {stocks.map((s) => (
                  <option key={s.symbol} value={s.symbol}>
                    {s.name} ({s.symbol})
                  </option>
                ))}
              </select>
            </div>

            {/* Prediction Period */}
            <div>
              <label htmlFor="period" className="block text-lg font-medium text-white mb-2">
                Prediction Period
              </label>
              <select
                id="period"
                value={period}
                onChange={(e) => setPeriod(e.target.value)}
                className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {periods.map((p) => (
                  <option key={p.value} value={p.value}>
                    {p.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Model Selection */}
            <div>
              <label htmlFor="model" className="block text-lg font-medium text-white mb-2">
                Model to Use
              </label>
              <select
                id="model"
                value={model}
                onChange={(e) => setModel(e.target.value)}
                className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {models.map((m) => (
                  <option key={m.value} value={m.value}>
                    {m.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Predict Button */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition duration-300 flex items-center justify-center ${
                loading ? 'opacity-75 cursor-not-allowed' : ''
              }`}
            >
              {loading ? (
                <>
                  <LineChart className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" />
                  Predicting...
                </>
              ) : (
                'Predict Now'
              )}
            </button>
          </form>

          {/* Results Section */}
          {result && (
            <div className="mt-8 bg-gray-700 rounded-lg p-6">
              <h2 className="text-xl font-bold text-white mb-4">Prediction Results</h2>
              <div className="flex items-center">
                <div>
                  <p className="text-gray-300 mb-2">Predicted price:</p>
                  <div className="flex items-center">
                    <span className="text-4xl font-bold text-green-400">${result.price}</span>
                    <div className="ml-4 flex items-center">
                      <ArrowTrendingUp className="w-5 h-5 text-green-400 mr-1" />
                      <span className="text-green-400">↑ {result.change}%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}