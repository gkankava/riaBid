import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + "/bag";

export function getBag() {
  return http.get(apiEndpoint);
}

export function addBag(id) {
  return http.post(apiEndpoint + "/add/" + id);
}

export function deleteBag(id) {
  return http.post(apiEndpoint + "/delete/" + id);
}
