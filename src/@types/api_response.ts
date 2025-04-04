export interface PredictionResult {
  stock: string;
  current_price: number;
  predicted_price: number;
  change: number;
  percent_change: number;
  prediction_date: string;
  model_used: string;
  period: string;
}

export interface StockList {
  symbol: string;
  name: string;
}
