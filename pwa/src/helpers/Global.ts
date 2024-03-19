import axios from "axios";

export function getApiClient() {
  return axios.create({
    baseURL: "",
  });
}
