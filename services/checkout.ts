import callAPI from "@/config/api";
import { TransaksiTypes } from "./models";
const ROOT_API = process.env.NEXT_PUBLIC_API;
const API_VERSION = 'api/v1';


export async function setCheckout(data: TransaksiTypes) {
 const url = `${ROOT_API}/${API_VERSION}/transaksi`;

 
  return callAPI({
    url,
    method: 'POST',
    data,
    token: true,
  });
}