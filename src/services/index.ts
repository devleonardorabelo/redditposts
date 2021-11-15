import axios, {AxiosRequestConfig} from 'axios';

const request = async ({method, data, url}: AxiosRequestConfig) => {
  try {
    const response = await axios({
      method,
      data,
      url,
    });
    return response.data;
  } catch (error: any) {
    return error.response;
  }
};

export default request;
