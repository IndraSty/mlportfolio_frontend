import { StockList } from "../@types/api_response";
import ApiService from "./api-service";

export async function GetStockList() {
    return ApiService.fetchData<StockList[]>({
      url: "/stock_list",
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
    });
  }