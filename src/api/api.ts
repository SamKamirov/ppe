import axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios";
import { toast } from "react-toastify";

const BASE_URL = "http://localhost:3000/api/v1";
const SERVER_TIMEOUT = 5000;

type TDetailMessageType = {
  message: string;
}

export const createApi = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BASE_URL,
    timeout: SERVER_TIMEOUT,
  });

  api.interceptors.request.use((config) => config);

  api.interceptors.response.use(
    (response: AxiosResponse) => {
      const responseMessage = (response.data);
      toast.success(responseMessage.message)
      return response
    },
    (error: AxiosError<TDetailMessageType>) => {
      const detailMessage = (error.response.data);
      toast.error(detailMessage.message);
      throw error;
    },
  );
  return api;
};
