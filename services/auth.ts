import callAPI from "@/config/api";
import axios from "axios";
import { LoginTypes } from "./models";

const ROOT_API = process.env.NEXT_PUBLIC_API;
const API_VERSION = 'api/v1';

export async function setSignUp(data: any) {
    const url = `register`;
    const response = await axios.post(`${ROOT_API}/${API_VERSION}/${url}`,data);
    const axiosResponse = response.data;

    return axiosResponse.data;
 
}


export async function setLogin(data: LoginTypes) {
  const url = `${ROOT_API}/${API_VERSION}/login`;

  return callAPI({
    url,
    method: 'POST',
    data,
  });
}
