import { client } from "services/http";

export const getWomanProducts = () => {
  // const encodedUrl = encodeURIComponent("women's clothing".replace(/ /g, '%20'));
  // return client.get(`/${encodedUrl}`);
  return client.get(`/women's%20clothing`)
}

export default getWomanProducts;