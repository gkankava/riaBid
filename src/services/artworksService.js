import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + "/artworks";

export function getArtworks() {
  return http.get(apiEndpoint);
}

export function getArtwork(id) {
  return http.get(apiEndpoint + "/" + id);
}
