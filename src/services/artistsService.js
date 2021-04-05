import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + "/artists";

export function getArtists() {
  return http.get(apiEndpoint);
}

export function getArtworks(id) {
  console.log(id);
  return http.get(apiEndpoint + "/artworks/" + id);
}
