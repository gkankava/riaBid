import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + "/bag";

export function getBag() {
  return http.get(apiEndpoint);
}

export function addFavorites(id) {
  return http.post(apiUrl + "/favorites/add/" + id);
}

export function deleteFavorites(id) {
  return http.post(apiUrl + "/favorites/delete/" + id);
}

export function addBag(id) {
  return http.post(apiEndpoint + "/add/" + id);
}

export function deleteBag(id) {
  return http.post(apiEndpoint + "/delete/" + id);
}
