import axios from 'axios'

interface PayForBlobParams {
  gas_limit: number
  fee: number
  data: string
  namespace_id: string
}

export function apiSubmitPayForBlob(body: PayForBlobParams) {
  return axios.post('/submit_pfb', body).then((res) => res.data)
}
