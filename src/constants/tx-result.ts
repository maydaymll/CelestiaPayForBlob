interface TxResultLogVO {
  msg_index: number
  events: Array<{
    type: string
    attributes: Array<{ key: string; value: string }>
  }>
}
export interface TxResult {
  height: number
  txhash: string
  data: string
  raw_log: string
  logs: TxResultLogVO[]
  gas_wanted: number
  gas_used: number
  events: Array<{
    type: string
    attributes: Array<{ key: string; value: string }>
  }>
}
