import { PredictionRequest, PredictionResult } from "../@types/api_response";
import ApiService from "./api-service";

export async function PredictStock(data: PredictionRequest) {
    return ApiService.fetchData<PredictionResult>({
      url: "/predictions",
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    });
  }