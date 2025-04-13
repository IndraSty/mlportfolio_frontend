import React, { useEffect, useState, Fragment } from "react";
import { LineChart, TrendingUp as AlertTriangle } from "lucide-react";
import { Dialog, Transition } from "@headlessui/react";
import { GetStockList } from "../services/get-stock-list";
import {
  PredictionRequest,
  PredictionResult,
  StockList,
} from "../@types/api_response";
import { PredictStock } from "../services/predict-service";
import PredictionResultChart from "../components/PredictionResult";

export function Demo() {
  const [stockList, setStockList] = useState<StockList[]>([]);
  const [stock, setStock] = useState("AMZN");
  const [period, setPeriod] = useState("1 Day");
  const [model, setModel] = useState("xgboost");
  const [result, setResult] = useState<PredictionResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState(false);

  const periods = [
    { value: "1d", label: "1 Day" },
    { value: "5d", label: "5 Days" },
    { value: "1w", label: "1 Week" },
    { value: "1m", label: "1 Month" },
  ];

  const models = [
    { value: "xgboost", label: "XGBoost" },
    { value: "random-forest", label: "Random Forest" },
    { value: "lightgbm", label: "LightGBM" },
    { value: "lstm", label: "LSTM Network" },
  ];

  const fetchStockList = async () => {
    try {
      setServerError(false);
      const response = await GetStockList();

      if (response.status === 200) {
        setStockList(response.data);
      }
    } catch (error) {
      if (process.env.NODE_ENV === "development") {
        console.error("[DEV] Fetch error:", error);
      }
      setServerError(true);
    }
  };

  const handlePrediction = async (data: PredictionRequest) => {
    try {
      setServerError(false);
      const response = await PredictStock(data);
      if (response.status === 200) {
        console.log(
          "Prediction Result:",
          JSON.stringify(response.data, null, 2)
        );
        setResult(response.data);
      }
    } catch (error) {
      if (process.env.NODE_ENV === "development") {
        console.error("[DEV] Prediction error:", error);
      }
      setServerError(true);
      throw error;
    }
  };

  const handlePredict = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await handlePrediction({
        stock: stock,
        model: model,
        period: period,
      });
    } catch (error) {
      // Error already handled in handlePrediction
    } finally {
      setLoading(false);
    }
  };

  const closeAlert = () => {
    setServerError(false);
  };

  useEffect(() => {
    fetchStockList();
  }, []);

  return (
    <div className="pt-16">
      {/* Server Error Modal */}
      <Transition appear show={serverError} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeAlert}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-75" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-gray-800 border border-red-500/50 p-6 text-left align-middle shadow-xl transition-all">
                  <div className="flex items-center justify-center mb-4">
                    <div className="bg-red-500/20 rounded-full p-3">
                      <AlertTriangle className="h-8 w-8 text-red-400" />
                    </div>
                  </div>
                  
                  <Dialog.Title
                    as="h3"
                    className="text-xl font-medium leading-6 text-white text-center"
                  >
                    Server tidak aktif
                  </Dialog.Title>
                  
                  <div className="mt-3">
                    <p className="text-sm text-gray-300 text-center">
                      Server backend saat ini sedang tidak aktif. Silakan coba lagi nanti.
                    </p>
                  </div>

                  <div className="mt-6 flex gap-3">
                    <button
                      type="button"
                      className="flex-1 justify-center rounded-md border border-transparent bg-red-500 px-4 py-2 text-sm font-medium text-white hover:bg-red-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                      onClick={closeAlert}
                    >
                      Tutup
                    </button>
                    <button
                      type="button"
                      className="flex-1 justify-center rounded-md border border-gray-600 bg-gray-700 px-4 py-2 text-sm font-medium text-white hover:bg-gray-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={() => {
                        closeAlert();
                        fetchStockList();
                      }}
                    >
                      Coba Lagi
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>

      <div className="max-w-6xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-white mb-8">Prediction Demo</h1>

        <p className="text-gray-300 text-lg mb-12">
          Try the prediction system by selecting a stock and parameters you want
          to analyze.
        </p>

        <div className="rounded-lg">
          <form onSubmit={handlePredict} className="space-y-6 bg-gray-800 p-8 rounded-xl">
            {/* Stock Selection */}
            <div>
              <label
                htmlFor="stock"
                className="block text-lg font-medium text-white mb-2"
              >
                Select Stock
              </label>
              <select
                id="stock"
                value={stock}
                onChange={(e) => {
                  const selected = stockList.find(
                    (s) => s.symbol === e.target.value
                  );
                  setStock(selected ? selected.symbol : "");
                }}
                disabled={serverError || stockList.length === 0}
                className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {stockList.length > 0 ? (
                  stockList.map((s) => (
                    <option key={s.symbol} value={s.symbol}>
                      {s.name} ({s.symbol})
                    </option>
                  ))
                ) : (
                  <option value="">Loading stocks...</option>
                )}
              </select>
            </div>

            {/* Prediction Period */}
            <div>
              <label
                htmlFor="period"
                className="block text-lg font-medium text-white mb-2"
              >
                Prediction Period
              </label>
              <select
                id="period"
                value={period}
                onChange={(e) => {
                  const selected = periods.find(
                    (s) => s.label === e.target.value
                  );
                  setPeriod(selected ? selected.label : "");
                }}
                disabled={serverError}
                className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {periods.map((p) => (
                  <option key={p.value} value={p.label}>
                    {p.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Model Selection */}
            <div>
              <label
                htmlFor="model"
                className="block text-lg font-medium text-white mb-2"
              >
                Model to Use
              </label>
              <select
                id="model"
                value={model}
                onChange={(e) => {
                  const selected = models.find(
                    (m) => m.value === e.target.value
                  );
                  setModel(selected ? selected.value : "");
                }}
                disabled={serverError}
                className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
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
              disabled={loading || serverError}
              className={`w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition duration-300 flex items-center justify-center ${
                (loading || serverError) ? "opacity-75 cursor-not-allowed" : ""
              }`}
            >
              {loading ? (
                <>
                  <LineChart className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" />
                  Predicting...
                </>
              ) : (
                "Predict Now"
              )}
            </button>
          </form>

          {/* Results Section */}
          {result && <PredictionResultChart result={result} />}
        </div>
      </div>
    </div>
  );
}