import { client } from "../components/utils/client"

const getItems = () => {
  return client.get('/clothing-items')
}

export default getItems;