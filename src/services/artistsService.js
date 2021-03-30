import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + "/artists";

export function getArtists() {
  return http.get(apiEndpoint);
}
