import { useState } from 'react'
import './index.scss'
import { toast } from 'react-toastify'
import ClipLoader from 'react-spinners/ClipLoader'
import { apiSubmitPayForBlob } from '@/apis/celestia-controller'
import { genNameSpaceId, str2hexStr } from '@/utils/helper'
import { TxResult } from '@/constants'

interface PayForBlobFormProps {}

const PayForBlobForm: React.FC<PayForBlobFormProps> = (props) => {
  const [isLoading, setIsLoaing] = useState(false)
  const [gas, setGas] = useState(80000)
  const [fee, setFee] = useState(2000)
  const [msg, setMsg] = useState('')
  const [txResult, setTxResult] = useState<TxResult | null>(null)
  const [nodeId] = useState('http://43.134.230.48:26659/')
  const [namespaceID] = useState(genNameSpaceId())

  const showResult = !!txResult

  const reset = () => {
    setMsg('')
  }

  const onSubmit = async () => {
    if (isLoading) return
    if (!msg) {
      toast.error('msg is required')
      return
    }
    if (!gas) {
      toast.error('gas is required')
      return
    }
    if (!fee) {
      toast.error('fee is required')
      return
    }
    setIsLoaing(true)

    try {
      const result = await apiSubmitPayForBlob({
        gas_limit: gas,
        fee,
        namespace_id: namespaceID,
        data: str2hexStr(msg),
      })
      setTxResult(result)
    } catch (error: any) {
      const errMsg = error?.message || 'Something went wrong, Please try later'
      toast.error(errMsg)
      setTxResult(null)
    }
    setIsLoaing(false)
  }

  return (
    <div className="content">
      <div className="title">Submit PayForBlob</div>
      <div className="form-content">
        <div className="id-and-node">
          <div className="namespace-id">
            <label className="item-title">Namespace ID</label>
            <input
              type="text"
              className="form-control"
              placeholder="Random NamespaceID"
              readOnly
              value={namespaceID}
            />
          </div>
          <div className="node-ip">
            <label className="item-title">Node IP</label>
            <input
              type="text"
              className="form-control"
              placeholder="Random NamespaceID"
              readOnly
              value={nodeId}
            />
          </div>
        </div>
        <div className="fee-and-gas">
          <div className="item-fee">
            <label className="item-title">Fee</label>
            <input
              type="text"
              className="form-control"
              placeholder="Random NamespaceID"
              value={fee}
              onChange={(e) => setFee(+e.target.value)}
            />
          </div>
          <div className="item-gas-limit">
            <label className="item-title">Gas Limit</label>
            <input
              type="text"
              className="form-control"
              placeholder="Random NamespaceID"
              value={gas}
              onChange={(e) => setGas(+e.target.value)}
            />
          </div>
        </div>
        <div className="data">
          <label className="item-title">Message Data</label>
          <textarea
            className="form-control"
            placeholder="Pleas Write your message to sign on blockchain"
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="submit-btn" onClick={onSubmit}>
          <span>submit</span>
          {isLoading && <ClipLoader color="#ccc" size={20} />}
        </div>
      </div>
      {showResult && (
        <div className="tx-result">
          <div className="r-title">Result Info</div>
          <div className="item">
            <label className="item-key">TxHash</label>
            <a
              className="item-value"
              href={`https://testnet.mintscan.io/celestia-incentivized-testnet/txs/${txResult.txhash}`}
            >
              {txResult.txhash}
            </a>
          </div>
          <div className="item">
            <label className="item-key">namespaceID</label>
            <span className="item-value">{namespaceID}</span>
          </div>
          <div className="item">
            <label className="item-key">heigth</label>
            <span className="item-value">{txResult.height}</span>
          </div>
          <div className="item">
            <label className="item-key">gas_wanted</label>
            <span className="item-value">{txResult.gas_wanted}</span>
          </div>
          <div className="item">
            <label className="item-key">gas_used</label>
            <span className="item-value">{txResult.gas_used}</span>
          </div>
          <div className="item">
            <label className="item-key">data</label>
            <span className="item-value">{txResult.data}</span>
          </div>
        </div>
      )}
    </div>
  )
}

export default PayForBlobForm
