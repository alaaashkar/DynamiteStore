import { client } from "services/http";

export const getItems = () => {
  return client.get('/clothing-items')
}

export default getItems;
