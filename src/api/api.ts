import axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios";
import { StatusCodes } from "http-status-codes";
import { toast } from "react-toastify";

const BASE_URL = "http://localhost:3000/api/v1";
const SERVER_TIMEOUT = 5000;

type TDetailMessageType = {
  message: string;
}

const StatusCodeMapping: Record<number, boolean> = {
  [StatusCodes.INTERNAL_SERVER_ERROR]: true,
  [StatusCodes.BAD_REQUEST]: true,
  [StatusCodes.CREATED]: true
};

const shouldDisplayMessage = (response: AxiosResponse) => !!StatusCodeMapping[response.status];

export const createApi = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BASE_URL,
    timeout: SERVER_TIMEOUT,
  });

  api.interceptors.request.use((config) => config);

  api.interceptors.response.use(
    (response: AxiosResponse<TDetailMessageType>) => {
      return response
    },
    (error: AxiosError<TDetailMessageType>) => {  
      if (error.response && shouldDisplayMessage(error.response)) {
        const detailMessage = (error.response.data);   
        toast.error(detailMessage.message)
      }
      throw error
    },
  );
  return api;
};
