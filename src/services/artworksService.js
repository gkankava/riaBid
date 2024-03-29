import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + "/artworks";

export function getArtworks() {
  return http.get(apiEndpoint);
}

export function getArtworksPride(id = 1) {
  return http.get(apiEndpoint + "?pride=" + id);
}

export function getArtworksNew() {
  return http.get(apiEndpoint + "?sort=new");
}

export function getArtwork(id) {
  return http.get(apiEndpoint + "/" + id);
}
