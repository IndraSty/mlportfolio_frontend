import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { PredictionResult } from "../@types/api_response";
import { AlertTriangle } from "lucide-react";

interface PredictionResultChartProps {
    result: PredictionResult
}
export default function PredictionResultChart({result}: PredictionResultChartProps) {
  
  // Ubah data untuk chart
  const chartData = [
    { name: "Current Price", price: result.current_price },
    { name: "Predicted Price", price: result.predicted_price }
  ];
  
  // Menentukan warna berdasarkan perubahan harga
  const priceChangeColor = result.change >= 0 ? "text-green-500" : "text-red-500";
  const cardBorderColor = result.change >= 0 ? "border-green-200" : "border-red-200";
  
  return (
    <div className="flex flex-col items-center gap-8 w-full mt-10">
      <div className="w-full bg-amber-900/30 border border-amber-500/50 rounded-lg p-4 flex gap-3 items-start">
        <AlertTriangle size={24} className="text-amber-500 flex-shrink-0 mt-1" />
        <div>
          <h3 className="font-semibold text-amber-400 mb-1">Investment Warning</h3>
          <p className="text-amber-200/90 text-sm">
            The predictions shown are based on historical data and machine learning models. 
            Financial markets are inherently unpredictable and these forecasts should not be the sole basis for investment decisions. 
            Past performance is not indicative of future results. Always consult with a qualified financial advisor 
            before making investment decisions based on these predictions.
          </p>
        </div>
      </div>
      <div className={`w-full p-8 rounded-xl shadow-lg ${cardBorderColor} bg-gray-800`}>
        <h2 className="text-2xl font-bold mb-4 text-gray-50">
          {result.stock} Prediction Result ({result.period})
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Kanan: Detail Prediksi */}
          <div className="flex flex-col gap-4">
            <div className="bg-gray-700 p-4 rounded-lg">
              <p className="text-sm text-gray-200">Current Price</p>
              <p className="text-2xl font-semibold text-white">${result.current_price.toFixed(2)}</p>
            </div>
            
            <div className="bg-gray-700 p-4 rounded-lg">
              <p className="text-sm text-gray-50">Predicted Price</p>
              <p className="text-2xl font-semibold text-white">${result.predicted_price.toFixed(2)}</p>
            </div>
            
            <div className="bg-gray-700 p-4 rounded-lg">
              <p className="text-sm text-gray-200">Change</p>
              <p className={`text-2xl font-semibold ${priceChangeColor}`}>
                ${result.change.toFixed(2)} ({result.percent_change.toFixed(2)}%)
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-700 p-4 rounded-lg">
                <p className="text-sm text-gray-200">Date</p>
                <p className="text-lg font-medium text-white">{result.prediction_date}</p>
              </div>
              
              <div className="bg-gray-700 p-4 rounded-lg">
                <p className="text-sm text-gray-200">Model</p>
                <p className="text-lg font-medium text-white">{result.model_used}</p>
              </div>
            </div>
          </div>
          
          {/* Kiri: Chart Visualisasi */}
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData} margin={{ top: 10, right: 10, left: 10, bottom: 10 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis domain={[Math.min(result.current_price, result.predicted_price) * 0.9, Math.max(result.current_price, result.predicted_price) * 1.1]} />
                <Tooltip formatter={(value) => (typeof value === 'number' ? [`$${value.toFixed(2)}`, 'Price'] : [value, 'Price'])} />
                <Legend />
                <Bar 
                  dataKey="price" 
                  fill={result.change >= 0 ? "#10B981" : "#EF4444"} 
                  animationDuration={1500} 
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      
      {/* Bagian informasi tambahan */}
      <div className="w-full bg-gray-800 p-8 shadow-md rounded-xl">
        <h3 className="text-xl font-semibold mb-2 text-white">Prediction Details</h3>
        <p className="text-gray-200">
          This prediction was made for {result.stock} with a {result.period} timeframe using the {result.model_used} model.
          The predicted price indicates a {Math.abs(result.percent_change).toFixed(2)}% {result.change >= 0 ? "increase" : "decrease"} 
          from the current price of ${result.current_price.toFixed(2)}.
        </p>
      </div>
    </div>
  );
}