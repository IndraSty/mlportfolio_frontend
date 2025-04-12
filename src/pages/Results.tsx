import { LineChart as RechartsLineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { TrendingUp, Target, AlertTriangle, BarChart } from 'lucide-react';

export function Results() {
  // Sample data for the charts
  const predictionData = [
    { date: '2024-01', predicted: 150, actual: 155 },
    { date: '2024-02', predicted: 165, actual: 162 },
    { date: '2024-03', predicted: 180, actual: 178 },
    { date: '2024-04', predicted: 170, actual: 175 },
    { date: '2024-05', predicted: 190, actual: 188 },
    { date: '2024-06', predicted: 200, actual: 195 },
  ];

  const modelComparison = [
    { name: 'LSTM', accuracy: 62, rmse: 8.95 },
    { name: 'XGBoost', accuracy: 60, rmse: 9.12 },
    { name: 'Random Forest', accuracy: 60, rmse: 9.05 },
    { name: 'LightGBM', accuracy: 59, rmse: 9.27 },
  ];

  return (
    <div className="pt-16">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-white mb-8">Performance Results</h1>
        
        <p className="text-gray-300 text-lg mb-12">
          Model evaluation using various metrics to ensure accurate and reliable predictions.
        </p>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-gray-800 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <Target className="w-8 h-8 text-blue-400 mr-3" />
              <h3 className="text-lg font-semibold text-white">Prediction Accuracy</h3>
            </div>
            <p className="text-4xl font-bold text-blue-400">60%</p>
            <p className="text-gray-400 mt-2">Directional Accuracy</p>
          </div>

          <div className="bg-gray-800 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <AlertTriangle className="w-8 h-8 text-blue-400 mr-3" />
              <h3 className="text-lg font-semibold text-white">RMSE Score</h3>
            </div>
            <p className="text-4xl font-bold text-blue-400">9.12</p>
            <p className="text-gray-400 mt-2">Normalized</p>
          </div>

          <div className="bg-gray-800 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <TrendingUp className="w-8 h-8 text-blue-400 mr-3" />
              <h3 className="text-lg font-semibold text-white">F1 Score</h3>
            </div>
            <p className="text-4xl font-bold text-blue-400">0.60</p>
            <p className="text-gray-400 mt-2">Balance Score</p>
          </div>

          <div className="bg-gray-800 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <BarChart className="w-8 h-8 text-blue-400 mr-3" />
              <h3 className="text-lg font-semibold text-white">MAE</h3>
            </div>
            <p className="text-4xl font-bold text-blue-400">4.25%</p>
            <p className="text-gray-400 mt-2">Price Error</p>
          </div>
        </div>

        {/* Prediction vs Actual Chart */}
        <div className="bg-gray-800 rounded-lg p-6 mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Predictions vs Actual Values</h2>
          <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <RechartsLineChart data={predictionData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="date" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#1F2937',
                    border: 'none',
                    borderRadius: '0.5rem',
                    color: '#F3F4F6'
                  }}
                />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="predicted"
                  stroke="#3B82F6"
                  strokeWidth={2}
                  name="Predicted"
                />
                <Line
                  type="monotone"
                  dataKey="actual"
                  stroke="#10B981"
                  strokeWidth={2}
                  name="Actual"
                />
              </RechartsLineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Model Comparison */}
        <div className="bg-gray-800 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-white mb-6">Model Comparison</h2>
          <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <RechartsLineChart data={modelComparison}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="name" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#1F2937',
                    border: 'none',
                    borderRadius: '0.5rem',
                    color: '#F3F4F6'
                  }}
                />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="accuracy"
                  stroke="#3B82F6"
                  strokeWidth={2}
                  name="Accuracy (%)"
                />
                <Line
                  type="monotone"
                  dataKey="rmse"
                  stroke="#EF4444"
                  strokeWidth={2}
                  name="RMSE"
                />
              </RechartsLineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}