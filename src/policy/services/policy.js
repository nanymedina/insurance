import axios from 'axios'
import { addCoverage, addTotalByWorker, addTotalCost } from './actions'
import { getEndpoint } from '../endpoints'

const fetchPolicy = () => {
  const url = getEndpoint()

  return axios.get(url)
  .then((response) => response.data)
  .then(addCoverage)
  .then(addTotalByWorker)
  .then(addTotalCost)
}

export default fetchPolicy
