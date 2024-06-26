import axios from "axios";

// instance
const instance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  withCredentials: true,
});

// interceptor
instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 403) {
      handle403Error();
    }
    return Promise.reject(error);
  }
);

const handle403Error = () => {
  instance.post("/authentication/logout");
  window.location.href = '/sign-in';
};

// interface CustomErrorResponse {
//   message: string;
// }

// export interface CustomAxiosError extends Omit<AxiosError, 'response'> {
//   response?: AxiosResponse<CustomErrorResponse>;
// }

export default instance;
