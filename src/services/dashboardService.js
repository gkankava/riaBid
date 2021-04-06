import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + "/dashboard";

export function getDashboard() {
  return http.get(apiEndpoint);
}

export function getBidHistory() {
  return http.get(apiUrl + "/mybids");
}

export function getFavorites() {
  return http.get(apiUrl + "/favorites");
}

export function getArtworks() {
  return http.get(apiUrl + "/artworks/my-artworks");
}

export function addArtist(data) {
  return http.post(apiUrl + "/add-artist", data);
}

export function addArtwork(data) {
  return http.post(apiUrl + "/add-artwork", data);
}

export function editAddress(data) {
  return http.post(apiUrl + "/update-user", data);
}

export function getAddress() {
  return http.post(apiUrl + "/mydetails");
}

export function subscribe(data) {
  return http.post(apiUrl + "/subscribe", data);
}
