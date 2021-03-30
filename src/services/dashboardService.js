import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + "/dashboard";

export function getDashboard() {
  return http.get(apiEndpoint);
}
